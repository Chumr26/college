import { BookOpen, Briefcase, Target } from 'lucide-react';

export function HighlightsCard({
    introduction,
    specializations,
    jobOpportunities,
}: {
    introduction: string;
    specializations: string[];
    jobOpportunities: string[];
}) {
    return (
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
            <h4 className="text-2xl tracking-tighter uppercase mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                HIGHLIGHTS
            </h4>

            {/* Introduction */}
            <div className="mb-6">
                <h5 className="text-lg tracking-wide uppercase mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    INTRODUCTION
                </h5>
                <p className="text-sm uppercase tracking-wide text-gray-600 leading-relaxed">
                    {introduction}
                </p>
            </div>

            {/* Specializations */}
            <div className="mb-6">
                <h5 className="text-lg tracking-wide uppercase mb-3">
                    SPECIALIZATIONS
                </h5>
                <div className="flex flex-wrap gap-2">
                    {specializations.map((spec, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs uppercase tracking-wide"
                        >
                            {spec}
                        </div>
                    ))}
                </div>
            </div>

            {/* Job Opportunities */}
            <div>
                <h5 className="text-lg tracking-wide uppercase mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    JOB OPPORTUNITIES
                </h5>
                <ul className="space-y-2">
                    {jobOpportunities.map((opportunity, index) => (
                        <li
                            key={index}
                            className="text-sm uppercase tracking-wide text-gray-600 flex items-center gap-2"
                        >
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            {opportunity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
