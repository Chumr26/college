/* eslint-disable react-refresh/only-export-components */
import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

import college_logo from '/college_logo.svg';
import { faculties } from '../pages/Department/Faculties';
import { departments } from '../data/departments';
import { useTheme } from '../hooks/useThemeContext';

export const collegeInfo = {
    contacts: [
        {
            icon: MapPin,
            label: '12 TRỊNH ĐÌNH THẢO, PHƯỜNG TÂN PHÚ,<br />THÀNH PHỐ HỒ CHÍ MINH',
        },
        {
            icon: Phone,
            label: '(028) 397 349 83 <br />(028) 386 050 03',
        },
        {
            icon: Mail,
            label: 'INFO@ITC.EDU.VN <br />TUYENSINH@ITC.EDU.VN',
        },
    ],
    programs: ['Cao đẳng 9+', 'Cao đẳng', 'Liên thông'],
    departments: [
        'PHÒNG ĐÀO TẠO',
        'PHÒNG CÔNG TÁC SINH VIÊN',
        'PHÒNG KHẢO THÍ - ĐẢM BẢO CHẤT LƯỢNG',
        'KHOA CÔNG NGHỆ THÔNG TIN - ĐIỆN TỬ',
        'KHOA KINH TẾ',
        'KHOA ĐẠI CƯƠNG',
    ],
    socialLinks: [
        { name: 'FACEBOOK', href: 'https://www.facebook.com/itc.edu.vn' },
        { name: 'TIKTOK', href: 'https://www.tiktok.com/@caodangcntt' },
        {
            name: 'YOUTUBE',
            href: 'https://www.youtube.com/@ITC-CaodangCNTTTpHCM',
        },
        { name: 'ZALO', href: 'https://zalo.me/0938861080' },
    ],
};

export function Footer() {
    const [theme, toggleTheme] = useTheme();
    return (
        <footer id="contact" className="bg-black dark:bg-gray-900 text-white dark:text-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-[2fr_0.7fr_1.3fr_1.3fr_0.7fr] gap-12 w-fit mx-auto md:mx-0 ">
                    <div>
                        {/* Footer Logo and University Name */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white p-1 rounded-full">
                                <img
                                    src={college_logo}
                                    alt="University Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl tracking-tighter uppercase">
                                CAO ĐẲNG <br /> CÔNG NGHỆ THÔNG TIN
                            </h3>
                        </div>
                        {collegeInfo.contacts.map((contact, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 mb-2"
                            >
                                <contact.icon className="w-4 h-4" />
                                <span className="uppercase tracking-wide">
                                    {contact.label
                                        .split('<br />')
                                        .map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i <
                                                    contact.label.split(
                                                        '<br />'
                                                    ).length -
                                                        1 && <br />}
                                            </React.Fragment>
                                        ))}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h4 className="text-lg mb-4 tracking-wide uppercase">
                            ĐÀO TẠO
                        </h4>
                        <ul className="space-y-2 uppercase tracking-wide">
                            {collegeInfo.programs.map((program, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {program}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg mb-4 tracking-wide uppercase">
                            KHOA
                        </h4>
                        <ul className="space-y-2 uppercase tracking-wide">
                            {faculties.map((faculty) => (
                                <li key={faculty.name}>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {faculty.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg mb-4 tracking-wide uppercase">
                            PHÒNG
                        </h4>
                        <ul className="space-y-2 uppercase tracking-wide">
                            {departments.map((department, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {department.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg mb-4 tracking-wide uppercase">
                            MẠNG XÃ HỘI
                        </h4>
                        <div className="flex flex-col gap-3">
                            {collegeInfo.socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    className="border-2 border-white hover:bg-white hover:text-black transition-colors p-3 text-center uppercase tracking-wide"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t-4 border-white mt-12 pt-8 text-center uppercase tracking-wide">
                    <label className="flex items-center justify-center gap-2">
                        <input
                            type="checkbox"
                            onChange={toggleTheme}
                            checked={theme === 'dark'}
                        />
                        Toggle Theme (T)
                    </label>
                    <p>
                        &copy; 2025 ITC. XÂY DỰNG BỞI{' '}
                        <span className="text-blue-500">CHỦM</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
}
