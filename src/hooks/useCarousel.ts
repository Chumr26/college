import { useState, useEffect } from 'react';

interface UseCarouselProps {
    totalSlides: number;
    autoPlayInterval?: number;
    autoPlayDelay?: number;
}

const getSlidesToShow = () => {
    if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) return 2;
        if (window.innerWidth < 768) return 3;
        if (window.innerWidth < 1024) return 4;
        return 6;
    }
    return 6;
};

export const useCarousel = ({
    totalSlides,
    autoPlayInterval = 3000,
    autoPlayDelay = 5000,
}: UseCarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(getSlidesToShow());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => {
                    const maxSlide = totalSlides - slidesToShow;
                    return prev >= maxSlide ? 0 : prev + 1;
                });
            }, autoPlayInterval);

            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, slidesToShow, totalSlides, autoPlayInterval]);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), autoPlayDelay);
    };

    return {
        currentSlide,
        slidesToShow,
        handleSlideChange,
    };
};
