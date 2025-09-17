interface IndicatorsProps {
    total: number;
    current: number;
    slidesToShow: number;
    onClick: (index: number) => void;
}

export function Indicators({
    total,
    current,
    slidesToShow,
    onClick,
}: IndicatorsProps) {
    return (
        <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: total - slidesToShow + 1 }).map(
                (_, index) => (
                    <button
                        key={index}
                        onClick={() => onClick(index)}
                        className={`w-3 h-3 border-2 border-black transition-all duration-200 ${
                            current === index ? 'bg-black' : 'bg-white'
                        } shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                    />
                )
            )}
        </div>
    );
}
