import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router';

import { Button } from '../components/Button';
import { MobileMenu } from '../components/MobileMenu';
import college_logo from '/college_logo.svg';
import { useScroll } from '../hooks/useScroll';
import { useScrollLock } from '../hooks/useScrollLock';
import { educationLevels } from '../data/educationLevels';

const navigationItems = [
    { name: 'ĐÀO TẠO', href: 'academic-affairs', hasDropdown: true },
    { name: 'GIỚI THIỆU', href: 'about' },
    { name: 'PHÒNG BAN', href: 'departments' },
    { name: 'TIN TỨC', href: 'news' },
];

export function Header() {
    const isScrolled = useScroll(100);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useScrollLock(isMobileMenuOpen);
    const [dropDown, setDropDown] = useState('');

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
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() =>
                                        item.hasDropdown &&
                                        setDropDown(item.href)
                                    }
                                    onMouseLeave={() =>
                                        item.hasDropdown && setDropDown('')
                                    }
                                >
                                    <NavLink
                                        to={item.href}
                                        onClick={(e) =>
                                            item.hasDropdown &&
                                            e.preventDefault()
                                        }
                                        className={({ isActive }) =>
                                            `px-3 py-1 transition-colors border-2 border-transparent hover:bg-black hover:text-white hover:border-black ${
                                                isActive &&
                                                'bg-black text-white'
                                            } group-hover:bg-black group-hover:text-white`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                    {/* Academic Affairs Dropdown */}
                                    {item.hasDropdown &&
                                        dropDown === 'academic-affairs' && (
                                            <>
                                                <div className="absolute h-2 w-full top-full" />
                                                <div className="absolute top-[calc(100%+8px)] left-0 w-80 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-50">
                                                    <div className="p-6 space-y-3">
                                                        {educationLevels.map(
                                                            (
                                                                submenu,
                                                                index
                                                            ) => (
                                                                <NavLink
                                                                    to={
                                                                        'academic-affairs/' +
                                                                        submenu.href
                                                                    }
                                                                    key={index}
                                                                    className="block w-full text-left group/item text-white text-sm tracking-wide uppercase relative"
                                                                >
                                                                    {({
                                                                        isActive,
                                                                    }) => (
                                                                        <>
                                                                            <div
                                                                                className={`${submenu.bgColor} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover/item:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover/item:-translate-y-1 p-4`}
                                                                            >
                                                                                {
                                                                                    submenu.title
                                                                                }
                                                                            </div>
                                                                            {isActive && (
                                                                                <span className="absolute top-0 -left-3 bottom-1 bg-black w-0.5"></span>
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </NavLink>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                </div>
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
        </>
    );
}
