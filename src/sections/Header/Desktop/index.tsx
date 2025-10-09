import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router';

import { Button } from '../../../components/Button';
import college_logo from '/college_logo.svg';
import { useScroll } from '../../../hooks/useScroll';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { Navigation } from './Navigation';
import { MobileMenu } from '../Mobile/MobileMenu';

export type NavigationItem = {
    name: string;
    href: string;
    hasDropdown?: boolean;
};

const navigationItems: NavigationItem[] = [
    { name: 'ĐÀO TẠO', href: 'academic-affairs', hasDropdown: true },
    { name: 'GIỚI THIỆU', href: 'about' },
    { name: 'PHÒNG BAN', href: 'departments' },
    { name: 'TIN TỨC', href: 'news' },
];

export function Header({
    setIsAuthModalOpen,
}: {
    setIsAuthModalOpen: (isOpen: boolean) => void;
}) {
    const isScrolled = useScroll(100);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useScrollLock(isMobileMenuOpen);

    const handleToggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="border-b-4 border-black bg-white dark:bg-gray-900 dark:border-gray-50 dark:text-white z-50 sticky top-0">
                {/* Header */}
                <div
                    className={`container mx-auto px-4 transition-all duration-300 py-1 ${
                        isScrolled ? 'md:py-0' : 'md:py-4'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        {/* College Logo and Name - Hidden when scrolled */}
                        <NavLink
                            to="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div
                                className={`flex items-center gap-4 ${
                                    isScrolled ? 'md:hidden' : ''
                                }`}
                            >
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 border-4 dark:border-2 border-black dark:border-gray-400 
                                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] bg-white p-1 rounded-full"
                                >
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
                        <Navigation
                            isScrolled={isScrolled}
                            navigationItems={navigationItems}
                        />

                        {/* Desktop Login Button */}
                        <Button
                            className={`
                                hidden md:flex border-4 border-black bg-white text-black hover:bg-black hover:text-white 
                                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                                transition-all duration-200 uppercase tracking-wide dark:border-white 
                                dark:shadow-gray-200
                                ${isScrolled ? 'hidden!' : ''}
                            `}
                            onClick={() => setIsAuthModalOpen(true)}
                        >
                            ĐĂNG NHẬP
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            onClick={handleToggleMobileMenu}
                            className="md:hidden bg-black text-white border-4 border-black hover:bg-white hover:text-black 
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 p-2"
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
                setIsAuthModalOpen={setIsAuthModalOpen}
            />
        </>
    );
}
