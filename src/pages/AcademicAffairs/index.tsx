import { Hero } from './Hero';
import { Accordion } from './Accordion';
import type { Major } from '../../data/collegeMajors';
import type { EducationLevel } from '../../data/educationLevels';

export function AcademicAffairs({
    level,
    majors,
}: {
    level: EducationLevel;
    majors: Major[];
}) {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <Hero level={level} />

            {/* Available Majors Accordion */}
            <section className="bg-gray-50 border-b-4 border-black py-20 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        NGÀNH
                        <br />
                        <span className="bg-red-500 text-white px-2">
                            ĐÀO TẠO
                        </span>
                    </h2>
                    <Accordion majors={majors} />
                </div>
            </section>
        </div>
    );
}
