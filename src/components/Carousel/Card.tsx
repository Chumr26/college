import type { FunctionComponent } from 'react';

interface CardProps {
    name: string;
}

export const Card: FunctionComponent<CardProps> = ({ name }) => {
    return (
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 p-8 text-center min-h-32 flex items-center justify-center">
            <div className="w-full h-full">
                <img
                    src={`/partner_logos/${name}.png`}
                    alt={`${name} logo`}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};
