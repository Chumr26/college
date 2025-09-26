import { Handshake, Mail, Phone } from 'lucide-react';

export function Centers() {
    return (
        <section className="bg-white text-white border-b-4 border-black py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl text-black tracking-tighter uppercase mb-16 text-center">
                    TRUNG
                    <br />
                    <span className="bg-black text-white px-2">TÂM</span>
                </h2>

                <div className="bg-blue-600 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-8">
                    <Handshake className="w-12 h-12 mb-4 text-white" />
                    <h3 className="text-2xl mb-3 tracking-tighter uppercase">
                        TRUNG TÂM QUAN HỆ DOANH NGHIỆP VÀ HỖ TRỢ SINH VIÊN
                    </h3>
                    <p className="tracking-wide opacity-90 mb-4">
                        Tại Trường Cao đẳng Công nghệ Thông tin TP. HCM, chúng
                        tôi tin rằng việc kết hợp chặt chẽ với doanh nghiệp là
                        yếu tố then chốt trong việc mang đến một chương trình
                        đào tạo hiệu quả. Chúng tôi hợp tác với các doanh nghiệp
                        chất lượng và có uy tín trong lĩnh vực ngành nghề để
                        thiết kế các khóa học phù hợp với nhu cầu thị trường lao
                        động, đồng thời cung cấp cho sinh viên các cơ hội thực
                        tập và dự án thực tế.
                    </p>
                    <div className="uppercase tracking-wide">
                        THS. LƯ QUỐC TUẤN
                    </div>
                    <div className="flex items-center gap-2 uppercase text-sm">
                        <Mail className="w-3 h-3" />
                        tuanlq@itc.edu.vn
                    </div>
                    <div className="flex items-center gap-2 uppercase text-sm">
                        <Phone className="w-3 h-3" />
                        02838605003
                    </div>
                </div>
            </div>
        </section>
    );
}
