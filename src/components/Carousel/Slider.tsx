import { Card } from './Card';

interface SliderProps {
    partners: Array<string>;
    currentSlide: number;
    slidesToShow: number;
}

export function Slider({ partners, currentSlide, slidesToShow }: SliderProps) {
    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${
                        currentSlide * (100 / partners.length)
                    }%)`,
                    width: `${(partners.length * 100) / slidesToShow}%`,
                }}
            >
                {partners.map((brand, index) => (
                    <div
                        key={index}
                        className="px-4"
                        style={{
                            width: `${100 / partners.length}%`,
                        }}
                    >
                        <Card name={brand} />
                    </div>
                ))}
            </div>
        </div>
    );
}
