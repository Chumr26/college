import { FileText } from 'lucide-react';
import { Label } from '../../../components/Label';
import { Textarea } from '../../../components/Textarea';
import { Field } from './Field';

export function Background({
    formData,
    handleInputChange,
}: {
    formData: {
        previousEducation: string;
        gpa: string;
        personalStatement: string;
    };
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}) {
    return (
        <div className="bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 mb-8">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-4 border-black">
                <div className="bg-purple-600 border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl tracking-tighter uppercase">
                    HỌC VẤN
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Field
                    label="HỌC VẤN TRƯỚC ĐÂY *"
                    id="previousEducation"
                    value={formData.previousEducation}
                    onChange={handleInputChange}
                    placeholder="Ví dụ: Trường THPT ABC, Tốt nghiệp năm 2025"
                    colSpan="md:col-span-2"
                />
                <Field
                    label="ĐIỂM TRUNG BÌNH TÍCH LŨY (GPA) *"
                    id="gpa"
                    type="number"
                    value={formData.gpa}
                    onChange={handleInputChange}
                    placeholder="3.8 / 4.0"
                />
            </div>

            <div>
                <Label
                    htmlFor="personalStatement"
                    className="uppercase tracking-wide mb-3 block"
                >
                    GHI CHÚ
                </Label>
                <Textarea
                    id="personalStatement"
                    name="personalStatement"
                    value={formData.personalStatement}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 tracking-wide resize-none"
                    placeholder="Nhập ghi chú (nếu có)"
                />
            </div>
        </div>
    );
}
