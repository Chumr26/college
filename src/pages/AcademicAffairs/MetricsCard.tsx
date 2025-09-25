import {
    Award,
    BarChart3,
    BookMarked,
    BookOpenCheck,
    Building,
    GraduationCap,
    Settings,
    Shapes,
} from 'lucide-react';

export function MetricsCard({
    modules,
    credits,
    generalHours,
    specialHours,
    internHours,
    assignmentHours,
    examHours,
}: {
    modules: number;
    credits: number;
    generalHours: number;
    specialHours: number;
    internHours: number;
    assignmentHours: number;
    examHours: number;
}) {
    return (
        <div className="bg-black text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col justify-between">
            <h4 className="text-2xl tracking-tighter uppercase mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                TỔNG QUAN
            </h4>

            <div className="space-y-4">
                {/* Academic Metrics */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <BookMarked className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-wide">
                                MÔN
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
                                TÍN CHỈ
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
                            <GraduationCap className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-wide">
                                MÔN HỌC CHUNG
                            </span>
                        </div>
                        <div className="text-2xl tracking-tighter uppercase">
                            {generalHours} GIỜ
                        </div>
                    </div>
                    <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <Settings className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-wide">
                                MÔN HỌC CHUYÊN MÔN
                            </span>
                        </div>
                        <div className="text-2xl tracking-tighter uppercase">
                            {specialHours} GIỜ
                        </div>
                    </div>
                </div>

                {/* Theory vs Practice Split */}
                <div className="bg-white text-black border-2 border-white p-4 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    <h5 className="text-sm uppercase tracking-wide mb-3 text-center">
                        LÝ THUYẾT VÀ THỰC HÀNH
                    </h5>
                    <div className="flex">
                        <div className="bg-blue-500 w-[30%] h-6 border-r border-black flex items-center justify-center text-xs text-white uppercase tracking-wide">
                            30%
                        </div>
                        <div className="bg-green-500 w-[70%] h-6 flex items-center justify-center text-xs text-white uppercase tracking-wide">
                            70%
                        </div>
                    </div>
                    <div className="flex justify-between text-xs uppercase tracking-wide mt-2">
                        <span>LÝ THUYẾT</span>
                        <span>THỰC HÀNH</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <Shapes className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-wide">
                                BÀI TẬP
                            </span>
                        </div>
                        <div className="text-2xl tracking-tighter uppercase">
                            {assignmentHours} GIỜ
                        </div>
                    </div>
                    <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <BookOpenCheck className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-wide">
                                KIỂM TRA
                            </span>
                        </div>
                        <div className="text-2xl tracking-tighter uppercase">
                            {examHours} GIỜ
                        </div>
                    </div>
                </div>

                <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    <div className="flex items-center justify-center gap-1 mb-1">
                        <Building className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">
                            THỰC TẬP
                        </span>
                    </div>
                    <div className="text-2xl tracking-tighter uppercase">
                        {internHours} GIỜ
                    </div>
                </div>
            </div>
        </div>
    );
}
