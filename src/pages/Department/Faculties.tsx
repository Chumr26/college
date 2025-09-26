const faculties = [
    {
        name: 'KHOA CÔNG NGHỆ THÔNG TIN - ĐIỆN TỬ',
        dean: 'THS NGUYỄN TRUNG KIÊN',
        email: 'kiennt@itc.edu.vn',
        phone: '02838605003',
        color: 'bg-blue-600',
    },
    {
        name: 'KHOA KINH TẾ',
        dean: 'THS TRẦN NGỌC CHIÊU ĐĂNG',
        email: 'dangtnc@itc.edu.vn',
        phone: '02838605003',
        color: 'bg-green-600',
    },
    {
        name: 'KHOA ĐẠI CƯƠNG',
        dean: 'THS LƯ QUỐC TUẤN',
        email: 'tuanlq@itc.edu.vn',
        phone: '02838605003',
        color: 'bg-purple-600',
    },
];

export function Faculties() {
    return (
        <section className="bg-black border-b-4 border-black py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                    {/* ACADEMIC
                        <br /> */}
                    <span className="text-white px-2">KHOA</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {faculties.map((faculty, index) => (
                        <div
                            key={index}
                            className={`${faculty.color} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 p-8 text-white`}
                        >
                            <h3 className="text-xl md:text-2xl mb-4 tracking-tighter uppercase h-14">
                                {faculty.name}
                            </h3>
                            <div className="border-t-2 border-white pt-4">
                                <div className="text-sm uppercase tracking-wide opacity-90 mb-1">
                                    TRƯỞNG KHOA
                                </div>
                                <div className="text-lg tracking-tighter uppercase">
                                    {faculty.dean}
                                </div>
                                <div>Email: {faculty.email}</div>
                                <div>SĐT: {faculty.phone}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
