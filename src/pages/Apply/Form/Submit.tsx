import { ArrowRight } from 'lucide-react';

import { Button } from '../../../components/Button';
import { Label } from '../../../components/Label';

export function Submit() {
    return (
        <div className="bg-yellow-400 border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
            <div className="mb-6">
                <div className="flex items-end gap-3">
                    <input
                        type="checkbox"
                        id="terms"
                        required
                        className="mt-1 w-5 h-5 border-4 border-black accent-black"
                    />
                    <Label
                        htmlFor="terms"
                        className="uppercase tracking-wide cursor-pointer"
                    >
                        TÔI ĐỒNG Ý VỚI CÁC ĐIỀU KHOẢN VÀ XÁC NHẬN RẰNG TẤT CẢ
                        THÔNG TIN CUNG CẤP LÀ CHÍNH XÁC *
                    </Label>
                </div>
            </div>

            <Button
                type="submit"
                className="w-full bg-black text-white border-4 border-black hover:bg-white hover:text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-8 uppercase tracking-wide text-xl"
            >
                NỘP ĐƠN
                <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            <p className="mt-6 text-center uppercase tracking-wide">
                BẠN CẦN TRỢ GIÚP? VUI LÒNG LIÊN HỆ{' '}
                <a href="mailto:admissions@itc.edu.vn" className="underline">
                    ADMISSIONS@ITC.EDU.VN
                </a>
            </p>
        </div>
    );
}
