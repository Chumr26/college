import { AccordionTrigger as AT } from '../../components/Accordion';
import type { CollegeMajor } from '../../data/collegeMajors';

export function AccordionTrigger({ program }: { program: CollegeMajor }) {
    return (
        <AT className="px-8 py-6 hover:no-underline group">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6">
                    <div
                        className={`${program.color} border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                    >
                        <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl md:text-3xl tracking-tighter uppercase mb-2">
                            {program.name}
                        </h3>
                        <div className="flex items-center gap-4">
                            <div className="bg-yellow-400 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-sm tracking-wide uppercase">
                                    {program.code}
                                </span>
                            </div>
                            <div className="bg-gray-100 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-sm tracking-wide uppercase">
                                    {program.duration}
                                </span>
                            </div>
                            <div className="bg-red-500 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-sm tracking-wide uppercase text-white">
                                    {program.spots} SPOTS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AT>
    );
}
