import { Calendar, ChevronLeft } from 'lucide-react';
import { NavLink } from 'react-router';

import { Button } from './Button';
import { collegeInfo } from '../sections/Footer';
import { useState } from 'react';
import type { NavigationItem } from '../sections/Header';
import { educationLevels } from '../data/educationLevels';

type MobileMenuProps = {
    isOpen: boolean;
    setisOpen: (open: boolean) => void;
    navigationItems: NavigationItem[];
    setIsAuthModalOpen: (open: boolean) => void;
};

export function MobileMenu({
    isOpen,
    setisOpen,
    navigationItems,
    setIsAuthModalOpen,
}: MobileMenuProps) {
    const [dropDown, setDropDown] = useState('');

    function handleToggleDropdown(itemHref: string) {
        if (dropDown === itemHref) {
            setDropDown('');
        } else {
            setDropDown(itemHref);
        }
    }

    return (
        <div
            className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-scroll ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex flex-col h-full">
                {/* Mobile Navigation Items */}
                <div className="flex-1 p-6 mt-20">
                    <nav className="space-y-4">
                        {navigationItems.map((item) => (
                            <div key={item.name} className="relative">
                                <NavLink
                                    to={item.href}
                                    onClick={(e) => {
                                        handleToggleDropdown(item.href);
                                        if (item.hasDropdown)
                                            e.preventDefault();
                                        else setisOpen(false);
                                    }}
                                    className="block"
                                >
                                    {({ isActive }) => (
                                        <div
                                            className={`
                                            bg-gray-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                                            ${
                                                isActive &&
                                                'bg-black! text-white '
                                            }
                                            ${
                                                !item.hasDropdown &&
                                                `hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all duration-200 hover:-translate-y-1 `
                                            }
                                        `}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="text-2xl tracking-tighter uppercase">
                                                    {item.name}
                                                </div>
                                                {item.hasDropdown && (
                                                    <div
                                                        className={`transform transition-transform duration-200 ${
                                                            dropDown ===
                                                            item.href
                                                                ? 'rotate-180'
                                                                : ''
                                                        }`}
                                                    >
                                                        <ChevronLeft className="w-6 h-6 -rotate-90" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </NavLink>
                                {/* Academic Affairs Dropdown */}
                                {item.hasDropdown &&
                                    dropDown === 'academic-affairs' && (
                                        <div className="mt-4 space-y-3 pl-4">
                                            {educationLevels.map(
                                                (submenu, subIndex) => (
                                                    <NavLink
                                                        to={
                                                            'academic-affairs/' +
                                                            submenu.href
                                                        }
                                                        key={subIndex}
                                                        className="w-full block relative"
                                                        onClick={() =>
                                                            setisOpen(false)
                                                        }
                                                    >
                                                        {({ isActive }) => (
                                                            <>
                                                                <div
                                                                    className={`${submenu.bgColor} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover/item:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover/item:-translate-y-1 p-4 text-white`}
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
                                    )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu CTA */}
                    <div className="mt-8 space-y-4">
                        <Button
                            onClick={() => setIsAuthModalOpen(true)}
                            className="w-full bg-blue-500 text-white border-4 border-black hover:bg-white hover:text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide"
                        >
                            <Calendar className="w-5 h-5 mr-2" />
                            ĐĂNG NHẬP
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="border-t-4 border-black p-6">
                    <div className="grid grid-cols-2 gap-4">
                        {collegeInfo.socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="border-2 border-black hover:bg-black hover:text-white transition-colors p-3 text-center uppercase tracking-wide"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
