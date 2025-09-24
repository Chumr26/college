import { ArrowRight } from 'lucide-react';

import { AccordionContent as AC } from '../../components/Accordion';
import { Button } from '../../components/Button';
import { DetailsPanel } from './DetailsPanel';

import type { CollegeMajor } from '../../data/collegeMajors';

export function AccordionContent({ program }: { program: CollegeMajor }) {
    return (
        <AC className="px-8 pb-8">
            <div className="space-y-8">
                {/* Program Details Panel */}
                <DetailsPanel program={program} />
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-4 border-black">
                    <Button className="bg-black text-white border-4 border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-4 uppercase tracking-wide">
                        APPLY FOR {program.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                        variant="outline"
                        className="border-4 border-black bg-white text-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-4 uppercase tracking-wide"
                    >
                        DOWNLOAD CURRICULUM
                    </Button>
                    <Button
                        variant="outline"
                        className="border-4 border-black bg-white text-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-4 uppercase tracking-wide"
                    >
                        SCHEDULE MEETING
                    </Button>
                </div>
            </div>
        </AC>
    );
}
