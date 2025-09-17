import { useState, useEffect, useCallback } from 'react';

export function useScroll(threshold: number = 100, delay: number = 100) {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        // Add a small buffer zone to prevent jitter
        if (!isScrolled && scrollTop > threshold + 10) {
            setIsScrolled(true);
        } else if (isScrolled && scrollTop < threshold - 10) {
            setIsScrolled(false);
        }
    }, [isScrolled, threshold]);

    useEffect(() => {
        let timeoutId: number;

        const debouncedScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => handleScroll(), delay);
        };

        window.addEventListener('scroll', debouncedScroll);
        return () => {
            window.removeEventListener('scroll', debouncedScroll);
            clearTimeout(timeoutId);
        };
    }, [handleScroll, delay]);

    return isScrolled;
}
