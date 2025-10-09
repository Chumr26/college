import { Card } from '../../components/Card';
import { ImageWithFallback } from '../../components/ImageWithFallback';

const leadership = [
    {
        name: 'ÔNG NGUYỄN TRUNG DŨNG',
        position: 'CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ',
    },
    {
        name: 'TS. Dương Tấn Diệp',
        position: 'Phó Chủ tịch Hội đồng Quản trị',
    },
    {
        name: 'TS. Nguyễn Gia Tuấn Anh',
        position: 'Thành viên Hội đồng Quản trị',
    },
    {
        name: 'ThS. Lê Vũ Hùng',
        position: 'Thành viên Hội đồng Quản trị',
    },
    {
        name: 'TS. Bùi Phúc Trung',
        position: 'Thành viên Hội đồng Quản trị',
    },
    {
        name: 'Ông Nguyễn Hữu Tài',
        position: 'Thành viên Hội đồng Quản trị',
    },
    {
        name: 'Bà Phạm Thị Bích Chi',
        position: 'Thư ký Hội đồng Quản trị',
    },
];

export function Leadership() {
    return (
        <section className="bg-white dark:bg-gray-800 border-b-4 border-black py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center dark:text-gray-100">
                    BAN
                    <br />
                    <span className="bg-black text-white px-2 dark:bg-gray-100 dark:text-gray-900">QUẢN TRỊ</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leadership.map((leader, index) => (
                        <Card
                            key={index}
                            className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-500 dark:shadow-gray-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 overflow-hidden gap-0"
                        >
                            <div className="relative">
                                <ImageWithFallback
                                    src={`/imgs/leadership/${index + 1}.png`}
                                    alt={leader.name}
                                    className="w-full h-64 object-contain"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-lg mb-2 tracking-wide uppercase">
                                    {leader.name}
                                </h3>
                                <div className="bg-blue-500 text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 uppercase tracking-wide text-sm">
                                    {leader.position}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
