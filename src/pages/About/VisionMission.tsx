import { Eye, Target } from "lucide-react";

export function VisionMission() {
    return (
        <section className="bg-white dark:bg-gray-800 border-b-4 border-black py-20 text-justify">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center dark:text-gray-100">
                    TẦM NHÌN
                    <br />
                    <span className="bg-black text-white px-2 dark:bg-gray-100 dark:text-gray-900">SỨ MỆNH</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-8 text-white">
                    {/* Vision */}
                    <div className="bg-green-500 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 p-10">
                        <div className="flex items-center mb-6">
                            <Eye className="w-16 h-16 mr-4 " />
                            <h3 className="text-4xl tracking-tighter uppercase ">
                                TẦM NHÌN
                            </h3>
                        </div>
                        <p className=" mb-6 uppercase tracking-wide leading-relaxed text-lg">
                            ĐẾN NĂM 2045, TRỞ THÀNH MỘT TRƯỜNG CAO ĐẲNG CÓ UY
                            TÍN ĐÀO TẠO VỀ NĂNG LỰC THỰC HÀNH, CÓ NHIỀU CHƯƠNG
                            TRÌNH ĐẠT CHUẨN KIỂM ĐỊNH QUỐC TẾ, ĐƯỢC NHÌN NHẬN VÀ
                            ĐÁNH GIÁ TỐT BỞI HIỆP HỘI DOANH NGHIỆP TRONG VÀ
                            NGOÀI NƯỚC.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-red-500 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 p-10">
                        <div className="flex items-center mb-6">
                            <Target className="w-16 h-16 mr-4 " />
                            <h3 className="text-4xl tracking-tighter uppercase ">
                                SỨ MỆNH
                            </h3>
                        </div>
                        <div className="flex items-center h-[calc(100%-88px)]">
                            <p className=" uppercase tracking-wide leading-relaxed text-lg">
                                NÂNG TẦM NĂNG LỰC LAO ĐỘNG VIỆT NAM PHÙ HỢP VỚI
                                XU HƯỚNG THỜI ĐẠI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
