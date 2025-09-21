import { ImageWithFallback } from "../../components";

export function Hero() {
    return (
        <section className="bg-blue-950 border-b-4 border-black py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="bg-white text-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 uppercase tracking-wide">
                            GIỚI THIỆU VỀ ITC
                        </div>
                        <p className="text-xl mb-8 tracking-wide text-white text-justify">
                            Ngày 27/04/2001, Trường Công nghệ thông tin đầu tiên
                            tại Việt Nam được Hội Vô tuyến Điện tử Tp.HCM thành
                            lập theo Quyết định số 2054/QĐ-BGD&ĐT-TCCB của Bộ
                            Giáo dục & Đào tạo.
                        </p>
                        <p className="text-xl mb-8 tracking-wide text-white text-justify">
                            Trải qua 24 năm đào tạo, đã có hơn 23 khóa sinh viên
                            tốt nghiệp ra trường. Hiện nay, trường Cao đẳng Công
                            nghệ thông tin TP.HCM (ITC) đang đào tạo 18 ngành,
                            nghề cao đẳng và 7 ngành, nghề trung cấp bao gồm
                            nhiều lĩnh vực như sau: Công nghệ thông tin; Thiết
                            kế đồ họa; Truyền thông và mạng máy tính; Hệ thống
                            thông tin; Thương mại điện tử; Lập trình máy tính;
                            Công nghệ kỹ thuật điện tử, truyền thông; Công nghệ
                            kỹ thuật điều khiển và tự động hóa; Quản trị kinh
                            doanh (Quản trị Digital Marketing); Kỹ thuật sửa
                            chữa, lắp ráp máy tính; Kế toán, Tài chính - Ngân
                            hàng, Logistics,... Hàng năm, số lượng cử nhân, kỹ
                            sư tốt nghiệp ra trường có việc làm đạt tỷ lệ lên
                            đến 95%.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="bg-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
                            <ImageWithFallback
                                src="/imgs/timeline/27-04-2001.png"
                                alt="ITC Building"
                                className="w-full h-80 object-cover filter contrast-125"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
                            24 NĂM PHÁT TRIỂN
                        </div>
                    </div>
                </div>
                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between gap-6 text-black text-center">
                        <div>
                            <div className="text-3xl tracking-tighter uppercase mb-2">
                                7
                            </div>
                            <div className="text-sm tracking-wide uppercase">
                                NGÀNH, NGHỀ TRUNG CẤP
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl tracking-tighter uppercase mb-2">
                                18
                            </div>
                            <div className="text-sm tracking-wide uppercase">
                                ngành, nghề cao đẳng
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl tracking-tighter uppercase mb-2">
                                725
                            </div>
                            <div className="text-sm tracking-wide uppercase">
                                GIẢNG VIÊN ĐÃ VÀ ĐANG LÀM VIỆC
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl tracking-tighter uppercase mb-2">
                                14.000
                                <span className="lowercase">
                                    m<sup>2</sup>
                                </span>
                            </div>
                            <div className="text-sm tracking-wide uppercase">
                                DIỆN TÍCH PHÒNG HỌC
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
