import { HandCoins, Laptop, University } from 'lucide-react';

function Features() {
    const features = [
        {
            icon: HandCoins,
            title: 'HỌC PHÍ PHÙ HỢP',
            description: 'KHÔNG TĂNG TRONG SUỐT KHÓA HỌC',
        },
        {
            icon: Laptop,
            title: 'CHƯƠNG TRÌNH HỌC THỰC TẾ',
            description: 'CHÚ TRỌNG THỰC HÀNH',
        },
        {
            icon: University,
            title: 'CƠ HỘI LIÊN THÔNG',
            description: 'TRƯỜNG ĐẠI HỌC ĐẦU NGÀNH',
        },
    ];
    return (
        <section id="campus" className="bg-white border-b-4 border-black py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl tracking-tighter uppercase mb-12 text-center">
                    VÌ SAO
                    <br />
                    <span className="bg-yellow-400 text-black px-2">
                        CHỌN ITC?
                    </span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1"
                        >
                            <feature.icon className="w-12 h-12 mb-4" />
                            <h3 className="text-xl mb-2 tracking-wide uppercase">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 uppercase tracking-wide">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
