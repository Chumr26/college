import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Button, MobileMenu } from '../components';
import college_logo from '/college_logo.svg';
import { useScroll, useScrollLock } from '../hooks';
import { NavLink } from 'react-router';

const navigationItems = [
    { name: 'ĐÀO TẠO', href: '/academic-affairs' },
    { name: 'GIỚI THIỆU', href: '/about' },
    { name: 'PHÒNG BAN', href: '/departments' },
    { name: 'TIN TỨC', href: '/news' },
];

function Header() {
    const isScrolled = useScroll(100);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useScrollLock(isMobileMenuOpen);

    const handleToggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="border-b-4 border-black bg-white z-50 sticky top-0">
                {/* Header */}
                <div
                    className={`container mx-auto px-4 transition-all duration-300 py-1 ${
                        isScrolled ? 'md:py-0' : 'md:py-4'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        {/* College Logo and Name - Hidden when scrolled */}
                        <NavLink to="/">
                            <div
                                className={`flex items-center gap-4 ${
                                    isScrolled ? 'md:hidden' : ''
                                }`}
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white p-1 rounded-full">
                                    <img
                                        src={college_logo}
                                        alt="College Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="text-lg md:text-xl lg:text-2xl tracking-tighter uppercase">
                                    CAO ĐẲNG <br /> CÔNG NGHỆ THÔNG TIN
                                </div>
                            </div>
                        </NavLink>

                        {/* Desktop Navigation */}
                        <nav
                            className={`hidden md:flex uppercase tracking-wide transition-all duration-300 flex-1 justify-center ${
                                isScrolled ? 'space-x-12 ' : 'space-x-8'
                            }`}
                        >
                            {navigationItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `px-3 py-1 transition-colors border-2 border-transparent hover:bg-black hover:text-white hover:border-black ${
                                            isActive && 'bg-black text-white'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Desktop Apply Button */}
                        <Button
                            className={`
                            hidden
                            md:flex 
                            bg-black text-white 
                            border-4 border-black 
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                            uppercase tracking-wide
                            
                            hover:bg-white hover:text-black hover:border-black
                            hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                            
                            transition-all duration-300
                            ${isScrolled ? 'hidden!' : ''}
                        `}
                        >
                            ĐĂNG NHẬP
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            onClick={handleToggleMobileMenu}
                            className="md:hidden bg-black text-white border-4 border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 p-2"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </header>
            {/* Mobile Menu Overlay */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                setisOpen={setIsMobileMenuOpen}
                navigationItems={navigationItems}
            />

            {/* Mobile Menu Backdrop */}
            {/* {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )} */}
        </>
    );
}

export default Header;
