import { useEffect } from 'react';

export function useScrollLock(lock: boolean) {
    useEffect(() => {
        if (lock) {
            // Save current scroll position
            const scrollPosition = window.scrollY;
            // Add styles to prevent scrolling
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
        } else {
            // Get the scroll position from the body's top property
            const scrollPosition = document.body.style.top;
            // Remove styles that prevent scrolling
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('position');
            document.body.style.removeProperty('top');
            document.body.style.removeProperty('width');
            // Restore scroll position
            if (scrollPosition) {
                window.scrollTo(0, parseInt(scrollPosition.slice(1)) || 0);
            }
        }
    }, [lock]);
}
