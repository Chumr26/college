import { Building, GraduationCap, Handshake, Users } from 'lucide-react';

function Stats() {
    const stats = [
        {
            icon: Users,
            number: '38,000+',
            label: 'HỌC SINH, SINH VIÊN ĐÃ VÀ ĐANG HỌC TẠI TRƯỜNG',
        },
        {
            icon: GraduationCap,
            number: '100%',
            label: 'CAM KẾT HỖ TRỢ TÌM VIỆC LÀM KHI TỐT NGHIỆP',
        },
        {
            icon: Handshake,
            number: '500',
            label: 'DOANH NGHIỆP ĐỐI TÁC',
        },
        {
            icon: Building,
            number: '24 NĂM',
            label: 'HÌNH THÀNH VÀ PHÁT TRIỂN',
        },
    ];
    return (
        <section className="bg-white border-b-4 border-black py-16 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 dark:bg-gray-900 border-4 border-black dark:border-gray-500 dark:text-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-500 transition-all duration-200 hover:-translate-y-1 text-center"
                        >
                            <stat.icon className="w-12 h-12 mb-4 mx-auto" />
                            <div className="text-4xl mb-2 tracking-tighter uppercase">
                                {stat.number}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;
