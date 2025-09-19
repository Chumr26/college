import {
    Award,
    ArrowRight,
    Target,
    Eye,
    Heart,
    Trophy,
    Lightbulb,
    Globe,
} from 'lucide-react';

import { ImageWithFallback, Card, Button } from '../../components';

export function About() {
    const leadership = [
        {
            name: 'DR. SARAH MARTINEZ',
            position: 'DEAN OF ITC',
            image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwd29tYW58ZW58MXx8fHwxNzU1Mzk4ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            education: 'PHD COMPUTER SCIENCE - MIT',
            experience: '15+ YEARS INDUSTRY EXPERIENCE',
        },
        {
            name: 'PROF. JAMES CHEN',
            position: 'HEAD OF RESEARCH',
            image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwbWFufGVufDF8fHx8MTc1NTM5ODg4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            education: 'PHD ARTIFICIAL INTELLIGENCE - STANFORD',
            experience: 'PUBLISHED 200+ RESEARCH PAPERS',
        },
        {
            name: 'DR. AMIRA HASSAN',
            position: 'ACADEMIC DIRECTOR',
            image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwd29tYW4lMjBhcmFifGVufDF8fHx8MTc1NTM5ODg4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            education: 'PHD CYBERSECURITY - OXFORD',
            experience: 'FORMER TECH INDUSTRY EXECUTIVE',
        },
    ];

    const achievements = [
        {
            icon: Trophy,
            title: 'TOP 5 ITC GLOBALLY',
            description: 'RECOGNIZED BY INTERNATIONAL RANKINGS',
            color: 'bg-yellow-400',
        },
        {
            icon: Lightbulb,
            title: '500+ PATENTS FILED',
            description: 'LEADING INNOVATION IN TECHNOLOGY',
            color: 'bg-blue-500',
        },
        {
            icon: Globe,
            title: '50+ COUNTRY PARTNERSHIPS',
            description: 'GLOBAL RESEARCH COLLABORATIONS',
            color: 'bg-green-500',
        },
        {
            icon: Award,
            title: '95% EMPLOYMENT RATE',
            description: 'GRADUATES HIRED WITHIN 6 MONTHS',
            color: 'bg-red-500',
        },
    ];

    const timeline = [
        {
            year: '1962',
            title: 'UNIVERSITY FOUNDED',
            description: 'ESTABLISHED AS A COMPREHENSIVE RESEARCH INSTITUTION',
        },
        {
            year: '1975',
            title: 'ITC DEPARTMENT CREATED',
            description:
                'LAUNCHED WITH COMPUTER SCIENCE & ENGINEERING PROGRAMS',
        },
        {
            year: '1998',
            title: 'DIGITAL TRANSFORMATION',
            description: 'PIONEERED ONLINE LEARNING & DIGITAL RESOURCES',
        },
        {
            year: '2010',
            title: 'AI RESEARCH CENTER',
            description: 'ESTABLISHED LEADING ARTIFICIAL INTELLIGENCE LAB',
        },
        {
            year: '2020',
            title: 'INDUSTRY 4.0 INITIATIVE',
            description: 'LAUNCHED SMART MANUFACTURING & IOT PROGRAMS',
        },
        {
            year: '2025',
            title: 'QUANTUM COMPUTING HUB',
            description: 'OPENED STATE-OF-THE-ART QUANTUM RESEARCH FACILITY',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-purple-600 border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-white text-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 uppercase tracking-wide">
                                GIỚI THIỆU VỀ ITC
                            </div>
                            {/* <h1 className="text-6xl md:text-8xl tracking-tighter uppercase mb-6 leading-none text-white">
                                INSTITUTE OF
                                <br />
                                <span className="bg-white text-black px-2">
                                    TECHNOLOGY
                                </span>
                                <br />& COMPUTING
                            </h1> */}
                            {/* <p className="text-xl mb-8 tracking-wide uppercase text-white">
                                Pioneering the future of technology
                                <br />
                                education since 1962
                            </p> */}
                            <p className="text-xl mb-8 tracking-wide text-white text-justify">
                                Ngày 27/04/2001, Trường Công
                                nghệ thông tin đầu tiên tại Việt Nam được Hội Vô
                                tuyến Điện tử Tp.HCM thành lập theo Quyết định
                                số 2054/QĐ-BGD&ĐT-TCCB của Bộ Giáo dục & Đào
                                tạo.
                            </p>
                            <p className="text-xl mb-8 tracking-wide text-white text-justify">
                                Trải qua 24 năm đào tạo, đã có hơn 23 khóa sinh
                                viên tốt nghiệp ra trường. Hiện nay, trường Cao
                                đẳng Công nghệ thông tin TP.HCM (ITC) đang đào
                                tạo 18 ngành, nghề cao đẳng và 7 ngành, nghề
                                trung cấp bao gồm nhiều lĩnh vực như sau: Công
                                nghệ thông tin; Thiết kế đồ họa; Truyền thông và
                                mạng máy tính; Hệ thống thông tin; Thương mại
                                điện tử; Lập trình máy tính; Công nghệ kỹ thuật
                                điện tử, truyền thông; Công nghệ kỹ thuật điều
                                khiển và tự động hóa; Quản trị kinh doanh (Quản
                                trị Digital Marketing); Kỹ thuật sửa chữa, lắp
                                ráp máy tính; Kế toán, Tài chính - Ngân hàng,
                                Logistics,... Hàng năm, số lượng cử nhân, kỹ sư
                                tốt nghiệp ra trường có việc làm đạt tỷ lệ lên
                                đến 95%.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU1Mzk4ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="ITC Building"
                                    className="w-full h-80 object-cover filter contrast-125"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
                                24 NĂM PHÁT TRIỂN
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="bg-white border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        OUR
                        <br />
                        <span className="bg-black text-white px-2">
                            FOUNDATION
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="bg-blue-500 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 p-8">
                            <Target className="w-16 h-16 mb-6 text-white" />
                            <h3 className="text-3xl md:text-4xl mb-6 tracking-tighter uppercase text-white">
                                MISSION
                            </h3>
                            <p className="text-white mb-6 uppercase tracking-wide leading-relaxed">
                                TO EDUCATE FUTURE TECHNOLOGY LEADERS THROUGH
                                INNOVATIVE RESEARCH, CUTTING-EDGE CURRICULUM,
                                AND INDUSTRY PARTNERSHIPS THAT DRIVE
                                TECHNOLOGICAL ADVANCEMENT AND SOCIETAL PROGRESS.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-green-500 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 p-8">
                            <Eye className="w-16 h-16 mb-6 text-white" />
                            <h3 className="text-3xl md:text-4xl mb-6 tracking-tighter uppercase text-white">
                                VISION
                            </h3>
                            <p className="text-white mb-6 uppercase tracking-wide leading-relaxed">
                                TO BE THE WORLD'S PREMIER INSTITUTE FOR
                                TECHNOLOGY AND COMPUTING EDUCATION, RECOGNIZED
                                FOR BREAKTHROUGH RESEARCH AND GRADUATES WHO
                                SHAPE THE DIGITAL FUTURE.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="bg-red-500 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 p-8">
                            <Heart className="w-16 h-16 mb-6 text-white" />
                            <h3 className="text-3xl md:text-4xl mb-6 tracking-tighter uppercase text-white">
                                VALUES
                            </h3>
                            <div className="text-white uppercase tracking-wide space-y-2">
                                <div>• INNOVATION & CREATIVITY</div>
                                <div>• ACADEMIC EXCELLENCE</div>
                                <div>• ETHICAL RESPONSIBILITY</div>
                                <div>• GLOBAL COLLABORATION</div>
                                <div>• INCLUSIVE DIVERSITY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <section className="bg-gray-100 border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        OUR
                        <br />
                        <span className="bg-black text-white px-2">
                            JOURNEY
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 p-8"
                            >
                                <div className="bg-yellow-400 text-black px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 uppercase tracking-wide text-2xl">
                                    {item.year}
                                </div>
                                <h3 className="text-xl mb-3 tracking-wide uppercase">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 uppercase tracking-wide text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="bg-white border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        LEADERSHIP
                        <br />
                        <span className="bg-black text-white px-2">TEAM</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {leadership.map((leader, index) => (
                            <Card
                                key={index}
                                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="relative">
                                    <ImageWithFallback
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        <span className="text-sm tracking-wide uppercase">
                                            LEADERSHIP
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg mb-2 tracking-wide uppercase">
                                        {leader.name}
                                    </h3>
                                    <div className="bg-blue-500 text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 uppercase tracking-wide text-sm">
                                        {leader.position}
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="uppercase tracking-wide text-gray-600">
                                            {leader.education}
                                        </div>
                                        <div className="uppercase tracking-wide text-gray-600">
                                            {leader.experience}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="bg-gray-900 text-white border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        KEY
                        <br />
                        <span className="bg-white text-black px-2">
                            ACHIEVEMENTS
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className={`${achievement.color} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 p-8 text-center`}
                            >
                                <achievement.icon className="w-16 h-16 mb-4 mx-auto text-white" />
                                <h3 className="text-xl mb-3 tracking-wide uppercase text-white">
                                    {achievement.title}
                                </h3>
                                <p className="text-white uppercase tracking-wide text-sm">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="bg-yellow-400 border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        WORLD-CLASS
                        <br />
                        <span className="bg-black text-white px-2">
                            FACILITIES
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 overflow-hidden">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzU1Mzk4ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Computer Labs"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl mb-3 tracking-wide uppercase">
                                    ADVANCED COMPUTER LABS
                                </h3>
                                <p className="text-gray-600 uppercase tracking-wide text-sm">
                                    STATE-OF-THE-ART COMPUTING FACILITIES WITH
                                    LATEST HARDWARE
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 overflow-hidden">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc1NTM5ODg4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Research Labs"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl mb-3 tracking-wide uppercase">
                                    RESEARCH LABORATORIES
                                </h3>
                                <p className="text-gray-600 uppercase tracking-wide text-sm">
                                    CUTTING-EDGE RESEARCH FACILITIES FOR
                                    INNOVATION
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 overflow-hidden">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwdW5pdmVyc2l0eSUyMG1vZGVybnxlbnwxfHx8fDE3NTUzOTg4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Digital Library"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl mb-3 tracking-wide uppercase">
                                    DIGITAL LIBRARY
                                </h3>
                                <p className="text-gray-600 uppercase tracking-wide text-sm">
                                    COMPREHENSIVE DIGITAL RESOURCES & STUDY
                                    SPACES
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 border-b-4 border-black py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-8 text-white">
                        JOIN OUR
                        <br />
                        <span className="bg-white text-black px-2">
                            COMMUNITY
                        </span>
                    </h2>
                    <p className="text-xl mb-8 text-white uppercase tracking-wide">
                        BECOME PART OF THE FUTURE OF TECHNOLOGY
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-black border-4 border-black hover:bg-black hover:text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide">
                            EXPLORE PROGRAMS
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-transparent text-white border-4 border-white hover:bg-white hover:text-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide"
                        >
                            SCHEDULE VISIT
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
