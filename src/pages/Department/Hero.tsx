import { ImageWithFallback } from '../../components/ImageWithFallback';

export function Hero() {
    return (
        <section className="bg-red-500 border-b-4 border-black py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-6xl md:text-8xl tracking-tighter uppercase mb-6 leading-none text-white">
                            PHÒNG
                            <br />
                            <span className="bg-white text-black px-2">
                                KHOA
                            </span>
                            <br />
                            TRUNG TÂM
                        </h1>
                        <p className="text-xl mb-8 tracking-wide text-white text-justify">
                            Trường Cao đẳng Công nghệ thông tin TP.HCM (ITC) là
                            cơ sở giáo dục đa ngành, cung cấp chương trình đào
                            tạo chất lượng, đáp ứng nhu cầu thị trường lao động
                            trong và ngoài nước. Trường sở hữu đội ngũ giảng
                            viên giàu kinh nghiệm và cơ sở vật chất hiện đại,
                            cam kết mang đến môi trường học tập chuyên nghiệp và
                            hiệu quả cho sinh viên.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="bg-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
                            <ImageWithFallback
                                src="/imgs/department-hero.png"
                                alt="University Academic Buildings"
                                className="w-full h-80 object-cover filter contrast-125"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
