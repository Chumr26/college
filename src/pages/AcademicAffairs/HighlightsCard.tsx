import { BookOpen, Briefcase, Target } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export function HighlightsCard({
    introduction,
    jobOpportunities,
    image,
    name,
}: {
    introduction: string;
    jobOpportunities: string[];
    image: string;
    name: string;
}) {
    return (
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
            <h4 className="text-2xl tracking-tighter uppercase mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                ĐIỂM NỔI BẬT
            </h4>

            {/* Introduction */}
            <div className="mb-6">
                <h5 className="text-lg tracking-wide uppercase mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    GIỚI THIỆU
                </h5>
                <p className="text-sm uppercase tracking-wide text-gray-600 leading-relaxed">
                    {introduction}
                </p>
            </div>

            <div className="relative h-48 mb-4">
                <ImageWithFallback
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover border-2 border-black"
                />
            </div>

            {/* Job Opportunities */}
            <div>
                <h5 className="text-lg tracking-wide uppercase mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    CƠ HỘI NGHỀ NGHIỆP
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
