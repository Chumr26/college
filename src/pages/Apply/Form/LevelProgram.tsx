import { GraduationCap } from 'lucide-react';
import { educationLevels } from '../../../data/educationLevels';
import { Select } from '../../../components/Select';

export function LevelProgram({
    level,
    major,
    handleSelectChange,
}: {
    level: string;
    major: string;
    handleSelectChange: (name: string, value: string) => void;
}) {
    return (
        <div className="bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 mb-8">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-4 border-black">
                <div className="bg-blue-500 border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl tracking-tighter uppercase">
                    HỆ ĐÀO TẠO
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* HỆ ĐÀO TẠO */}
                <Select
                    name="level"
                    label="HỆ ĐÀO TẠO *"
                    placeholder="Chọn hệ đào tạo"
                    value={level}
                    onChange={(e) =>
                        handleSelectChange('level', e.target.value)
                    }
                    options={educationLevels.map((level) => level.title)}
                />
                {/* NGÀNH */}
                <Select
                    name="major"
                    label="NGÀNH *"
                    placeholder="Chọn ngành"
                    value={major}
                    onChange={(e) =>
                        handleSelectChange('major', e.target.value)
                    }
                    options={
                        level
                            ? educationLevels
                                  .find(
                                      (educationLevel) =>
                                          educationLevel.title === level
                                  )
                                  ?.majors.map((major) => major.name) || []
                            : []
                    }
                    disabled={!level}
                    colSpan="md:col-span-2"
                />
            </div>
        </div>
    );
}
