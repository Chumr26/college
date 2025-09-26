import {
    Users,
    Award,
    ArrowRight,
    Building,
    MapPin,
    Database,
    Shield,
    Globe,
    Microscope,
    Cpu,
    Brain,
    Mail,
    Clock,
    Building2,
    University,
    Handshake,
    BookOpen,
    Phone,
} from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import { Card } from '../../components/Card';
import { Hero } from './Hero';
import { departments } from '../../data/departments';

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

const departmentStats = [
    {
        icon: Building2,
        number: 7,
        label: 'PHÒNG CHỨC NĂNG',
    },
    {
        icon: University,
        number: 3,
        label: 'KHOA',
    },
    {
        icon: Handshake,
        number: 1,
        label: 'TRUNG TÂM',
    },
];

export function Department() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />

            {/* Department Stats */}
            <section className="bg-white border-b-4 border-black py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {departmentStats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 text-center"
                            >
                                <stat.icon className="w-12 h-12 mb-4 mx-auto" />
                                <div className="text-4xl mb-2 tracking-tighter uppercase">
                                    {stat.number}
                                </div>
                                <p className="text-gray-600 uppercase tracking-wide">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departments Overview */}
            <section className="bg-gray-100 border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        {/* ACADEMIC
                        <br /> */}
                        <span className="bg-black text-white px-2">PHÒNG</span>
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {departments.map((department) => (
                            <Card
                                key={department.id}
                                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Department Image - Horizontal Layout */}
                                <div className="relative">
                                    <ImageWithFallback
                                        src={department.image}
                                        alt={department.name}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>

                                {/* Department Content */}
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-xl md:text-2xl mb-4 tracking-tighter uppercase">
                                        {department.name}
                                    </h3>

                                    {/* Introduction */}
                                    <div className="mb-6">
                                        <h4 className="text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                                            <BookOpen className="w-4 h-4" />
                                            GIỚI THIỆU
                                        </h4>
                                        <p className="text-sm tracking-wide text-gray-600 leading-relaxed">
                                            {department.introduction}
                                        </p>
                                    </div>

                                    {/* Functionalities */}
                                    <div className="mb-6">
                                        <h4 className="text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                                            <Building className="w-4 h-4" />
                                            CHỨC NĂNG
                                        </h4>
                                        <div className="space-y-2">
                                            {department.functionalities.map(
                                                (functionality, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-600"
                                                    >
                                                        <div className="min-w-2 min-h-2 bg-black border border-black"></div>
                                                        {functionality}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-1 justify-end">
                                        {/* Dean Section */}
                                        <div className="mb-6">
                                            <h4 className="text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                TRƯỞNG PHÒNG
                                            </h4>
                                            <div className="text-lg tracking-tighter uppercase">
                                                {department.head}
                                            </div>
                                        </div>

                                        {/* Contact Section */}
                                        <div className="border-t-2 border-black pt-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-600">
                                                    <Mail className="w-3 h-3" />
                                                    {department.email}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-600">
                                                    <Phone className="w-3 h-3" />
                                                    {department.phone}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faculties Overview */}
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

            {/* Research Centers */}
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
                            Tại Trường Cao đẳng Công nghệ Thông tin TP. HCM,
                            chúng tôi tin rằng việc kết hợp chặt chẽ với doanh
                            nghiệp là yếu tố then chốt trong việc mang đến một
                            chương trình đào tạo hiệu quả. Chúng tôi hợp tác với
                            các doanh nghiệp chất lượng và có uy tín trong lĩnh
                            vực ngành nghề để thiết kế các khóa học phù hợp với
                            nhu cầu thị trường lao động, đồng thời cung cấp cho
                            sinh viên các cơ hội thực tập và dự án thực tế.
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
        </div>
    );
}
