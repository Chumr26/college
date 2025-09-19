import { Button, ImageWithFallback } from '../../components';
import cao_dang_9_cong from '/imgs/cao_dang_9_cong.png';
import cao_dang from '/imgs/cao_dang.png';
import lien_thong from '/imgs/lien_thong.jpg';

function EducationLevels() {
    const educationLevels = [
        {
            title: 'CAO ĐẲNG 9+',
            bgColor: 'bg-red-500',
            duration: '2,5 NĂM',
            fields: '6 NGÀNH',
            students: '8,000+',
            image: cao_dang_9_cong,
            alt: 'CAO ĐẲNG 9+',
        },
        {
            title: 'CAO ĐẲNG',
            bgColor: 'bg-blue-500',
            duration: '2 NĂM',
            fields: '20 NGÀNH',
            students: '28,500+',
            image: cao_dang,
            alt: 'CAO ĐẲNG',
        },
        {
            title: 'LIÊN THÔNG',
            bgColor: 'bg-yellow-400',
            duration: '1,5 NĂM',
            fields: '9 NGÀNH',
            students: '1,500+',
            image: lien_thong,
            alt: 'LIÊN THÔNG',
        },
    ];

    return (
        <section className="bg-gray-100 border-b-4 border-black py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                    CHƯƠNG TRÌNH
                    <br />
                    <span className="bg-black text-white px-2">ĐÀO TẠO</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {educationLevels.map((level, index) => (
                        <div
                            key={index}
                            className={`${level.bgColor} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 overflow-hidden`}
                        >
                            <div className="relative">
                                <ImageWithFallback
                                    src={level.image}
                                    alt={level.alt}
                                    className="w-full h-64 object-cover filter"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl md:text-4xl mb-4 tracking-tighter uppercase text-white">
                                    {level.title}
                                </h3>
                                <div className="space-y-3 mb-6 text-white uppercase tracking-wide">
                                    <div className="flex justify-between">
                                        <span>THỜI GIAN ĐÀO TẠO:</span>
                                        <span>{level.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>NGÀNH ĐÀO TẠO:</span>
                                        <span>{level.fields}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>SINH VIÊN:</span>
                                        <span>{level.students}</span>
                                    </div>
                                </div>
                                <Button className="w-full bg-white text-black border-4 border-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 uppercase tracking-wide py-4">
                                    THÔNG TIN CHI TIẾT
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EducationLevels;
