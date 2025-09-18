import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

// Combine all event types from different DOM interfaces into one type
type EventMap = WindowEventMap & HTMLElementEventMap & DocumentEventMap;

// Define the shape of options object that can be passed to addEventListener
interface UseEventListenerOptions {
    capture?: boolean; // Whether events should be captured in bubbling phase
    passive?: boolean; // Indicates listener won't call preventDefault()
    once?: boolean; // Whether listener should be removed after first invoke
}

// Generic function declaration with two type parameters
// EventType must be a valid event name (like 'click', 'scroll', etc.)
// Element specifies what type of DOM element we're attaching to
export function useEventListener<
    EventType extends keyof EventMap,
    Element extends Window | Document | HTMLElement | null = Window
>(
    // Function parameters with their types
    eventName: EventType, // The name of the event to listen for
    handler: (event: EventMap[EventType]) => void, // Function to handle the event
    element?: RefObject<Element> | null, // Optional reference to target element
    options?: UseEventListenerOptions // Optional configuration object
) {
    // Store the handler in a ref to prevent unnecessary re-renders
    // useRef creates a mutable object that persists for component lifetime
    const savedHandler = useRef(handler);

    // Update ref.current whenever handler changes
    // This ensures we always have the latest handler function
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    // Setup and cleanup event listener
    useEffect(() => {
        // Get the actual DOM element, fallback to window if no element provided
        const targetElement = element?.current || window;

        // Type guard: check if element exists and has addEventListener method
        // This satisfies TypeScript and prevents runtime errors
        if (!targetElement || !('addEventListener' in targetElement)) {
            return;
        }

        // Create event listener that calls our saved handler
        // typeof handler ensures listener has same type signature as original handler
        const listener: typeof handler = (event) => savedHandler.current(event);

        // Add event listener with provided options
        // as EventListener is a type assertion to satisfy TypeScript
        targetElement.addEventListener(eventName, listener as EventListener, {
            capture: options?.capture,
            passive: options?.passive,
            once: options?.once,
        });

        // Cleanup function that runs before component unmounts
        // or when dependencies change
        return () => {
            targetElement.removeEventListener(
                eventName,
                listener as EventListener,
                {
                    capture: options?.capture,
                }
            );
        };
    }, [eventName, element, options]); // Dependencies array
}
