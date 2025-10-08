import { GraduationCap } from 'lucide-react';
import { educationLevels } from '../../../data/educationLevels';
import { Select } from '../../../components/Select';
import { useSearchParams } from 'react-router';

export function LevelProgram() {
    const [searchParams, setSearchParams] = useSearchParams();
    const levelHref = searchParams.get('level') || '';
    const majorId = searchParams.get('major') || '';

    const level = educationLevels.find(
        (educationLevel) => educationLevel.href === levelHref
    );

    const handleSelectChange = (name: string, value: string) => {
        setSearchParams(
            (prev) => {
                const params = new URLSearchParams(prev);
                params.set(name, value);
                if (name === 'level') {
                    params.delete('major');
                }
                return params;
            },
            { preventScrollReset: true }
        );
    };

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
                    value={levelHref}
                    onChange={(e) =>
                        handleSelectChange('level', e.target.value)
                    }
                    options={educationLevels.map((level) => ({
                        label: level.title,
                        value: level.href,
                    }))}
                />
                {/* NGÀNH */}
                <Select
                    name="major"
                    label="NGÀNH *"
                    placeholder="Chọn ngành"
                    value={majorId}
                    onChange={(e) =>
                        handleSelectChange('major', e.target.value)
                    }
                    options={
                        level
                            ? level.majors.map((major) => ({
                                  label: major.name,
                                  value: String(major.id),
                              }))
                            : []
                    }
                    disabled={!level}
                    colSpan="md:col-span-2"
                />
            </div>
        </div>
    );
}
