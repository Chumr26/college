import { ImageWithFallback } from '../../components/ImageWithFallback';

export function InfoCard({
    color,
    image,
    name,
    description,
    employmentRate,
    averageSalary,
}: {
    color: string;
    image: string;
    name: string;
    description: string;
    employmentRate: string;
    averageSalary: string;
}) {
    return (
        <div
            className={`${color} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 text-white`}
        >
            <h4 className="text-2xl tracking-tighter uppercase mb-4">
                PROGRAM DETAILS
            </h4>
            <div className="relative h-48 mb-4">
                <ImageWithFallback
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover border-2 border-black"
                />
            </div>
            <p className="text-sm uppercase tracking-wide leading-relaxed opacity-90">
                {description}
            </p>
            <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-white text-black border-2 border-black p-2 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-xs uppercase tracking-wide">
                        EMPLOYMENT
                    </div>
                    <div className="text-lg tracking-tighter uppercase">
                        {employmentRate}
                    </div>
                </div>
                <div className="bg-white text-black border-2 border-black p-2 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-xs uppercase tracking-wide">
                        AVG SALARY
                    </div>
                    <div className="text-lg tracking-tighter uppercase">
                        {averageSalary}
                    </div>
                </div>
            </div>
        </div>
    );
}
