import { useState, useEffect, useCallback } from 'react';

export function useScroll(threshold: number = 100, delay: number = 100) {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        // Add a small buffer zone to prevent jitter
        if (scrollTop > threshold) {
            setIsScrolled(true);
        } else if (scrollTop < threshold) {
            setIsScrolled(false);
        }
    }, [threshold]);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const debouncedScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => handleScroll(), delay);
        };

        window.addEventListener('wheel', debouncedScroll);
        window.addEventListener('touchmove', debouncedScroll);

        return () => {
            window.removeEventListener('wheel', debouncedScroll);
            window.removeEventListener('touchmove', debouncedScroll);
            clearTimeout(timeoutId);
        };
    }, [handleScroll, delay]);

    return isScrolled;
}
