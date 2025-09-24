import { collegeMajors } from '../../data/collegeMajors';

import { Accordion as A, AccordionItem } from '../../components/Accordion';
import { AccordionContent } from './AccordionContent';
import { AccordionTrigger } from './AccordionTrigger';

export function Accordion() {
    return (
        <A type="single" collapsible className="space-y-8">
            {collegeMajors.map((program) => (
                <AccordionItem
                    key={program.id}
                    value={`program-${program.id}`}
                    className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                    {/* AccordionTrigger */}
                    <AccordionTrigger program={program} />

                    {/* AccordionContent */}
                    <AccordionContent program={program} />
                </AccordionItem>
            ))}
        </A>
    );
}
