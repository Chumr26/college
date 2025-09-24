import { Award, BarChart3, BookMarked, Clock, Timer } from 'lucide-react';

export function MetricsCard({
    modules,
    credits,
    hoursPerWeek,
    duration,
    theoryPercent,
    practicePercent,
    careerPaths,
}: {
    modules: number;
    credits: string;
    hoursPerWeek: number;
    duration: string;
    theoryPercent: number;
    practicePercent: number;
    careerPaths: string[];
}) {
    return (
        <div className="bg-black text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
            <h4 className="text-2xl tracking-tighter uppercase mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                METRICS
            </h4>

            <div className="space-y-4">
                {/* Academic Metrics */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <BookMarked className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-wide">
                                MODULES
                            </span>
                        </div>
                        <div className="text-2xl tracking-tighter uppercase">
                            {modules}
                        </div>
                    </div>
                    <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <Award className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-wide">
                                CREDITS
                            </span>
                        </div>
                        <div className="text-2xl tracking-tighter uppercase">
                            {credits}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <Timer className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-wide">
                                HRS/WEEK
                            </span>
                        </div>
                        <div className="text-2xl tracking-tighter uppercase">
                            {hoursPerWeek}
                        </div>
                    </div>
                    <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-wide">
                                DURATION
                            </span>
                        </div>
                        <div className="text-2xl tracking-tighter uppercase">
                            {duration}
                        </div>
                    </div>
                </div>

                {/* Theory vs Practice Split */}
                <div className="bg-white text-black border-2 border-white p-4 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    <h5 className="text-sm uppercase tracking-wide mb-3 text-center">
                        THEORY VS PRACTICE
                    </h5>
                    <div className="flex">
                        <div
                            className="bg-blue-500 h-6 border-r border-black flex items-center justify-center text-xs text-white uppercase tracking-wide"
                            style={{
                                width: `${theoryPercent}%`,
                            }}
                        >
                            {theoryPercent}%
                        </div>
                        <div
                            className="bg-green-500 h-6 flex items-center justify-center text-xs text-white uppercase tracking-wide"
                            style={{
                                width: `${practicePercent}%`,
                            }}
                        >
                            {practicePercent}%
                        </div>
                    </div>
                    <div className="flex justify-between text-xs uppercase tracking-wide mt-2">
                        <span>THEORY</span>
                        <span>PRACTICE</span>
                    </div>
                </div>

                {/* Career Outcomes */}
                <div>
                    <h5 className="text-sm uppercase tracking-wide mb-3">
                        CAREER PATHS
                    </h5>
                    <div className="space-y-2">
                        {careerPaths.map((career, index) => (
                            <div
                                key={index}
                                className="text-xs uppercase tracking-wide text-gray-300 flex items-center gap-2"
                            >
                                <div className="w-2 h-2 bg-white border border-white"></div>
                                {career}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
