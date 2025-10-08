import { ArrowRight } from 'lucide-react';

import { AccordionContent as AC } from '../../components/Accordion';
import { Button } from '../../components/Button';
import { DetailsPanel } from './DetailsPanel';

import type { Major } from '../../data/collegeMajors';
import { NavLink, useLocation } from 'react-router';

export function AccordionContent({ major }: { major: Major }) {
    // useLocation to get the last segment of the URL
    const location = useLocation();
    const lastSegment = location.pathname.split('/').pop();

    return (
        <AC className="px-8 pb-8">
            <div className="space-y-8">
                {/* Major Details Panel */}
                <DetailsPanel major={major} />
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-4 border-black">
                    <NavLink
                        to={`/apply?level=${lastSegment}&major=${major.id}`}
                    >
                        <Button className="bg-black text-white border-4 border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-4 uppercase tracking-wide">
                            NỘP HỒ SƠ NGÀNH {major.name}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </NavLink>
                    <Button
                        variant="outline"
                        className="border-4 border-black bg-white text-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-4 uppercase tracking-wide"
                    >
                        TẢI GIÁO TRÌNH
                    </Button>
                </div>
            </div>
        </AC>
    );
}
