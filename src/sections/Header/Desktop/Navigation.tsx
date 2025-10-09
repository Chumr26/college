import { useState } from 'react';
import { NavLink } from 'react-router';

import { educationLevels } from '../../../data/educationLevels';

export function Navigation({
    isScrolled,
    navigationItems,
}: {
    isScrolled: boolean;
    navigationItems: { name: string; href: string; hasDropdown?: boolean }[];
}) {
    const [dropDown, setDropDown] = useState('');

    return (
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
                        item.hasDropdown && setDropDown(item.href)
                    }
                    onMouseLeave={() => item.hasDropdown && setDropDown('')}
                >
                    <NavLink
                        to={item.href}
                        onClick={(e) => item.hasDropdown && e.preventDefault()}
                        className={({ isActive }) =>
                            `px-3 py-1 transition-colors border-2 border-transparent hover:bg-black hover:text-white hover:border-black ${
                                isActive && 'bg-black text-white dark:bg-white dark:text-black'
                            } group-hover:bg-black group-hover:text-white
                            dark:hover:bg-white dark:hover:text-black dark:hover:border-white
                            `
                        }
                    >
                        {item.name}
                    </NavLink>
                    {/* Academic Affairs Dropdown */}
                    {item.hasDropdown && dropDown === 'academic-affairs' && (
                        <>
                            <div className="absolute h-2 w-full top-full" />
                            <div className="absolute top-[calc(100%+8px)] left-0 w-80 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-50">
                                <div className="p-6 space-y-3">
                                    {educationLevels.map((submenu, index) => (
                                        <NavLink
                                            to={
                                                'academic-affairs/' +
                                                submenu.href
                                            }
                                            key={index}
                                            className="block w-full text-left group/item text-white text-sm tracking-wide uppercase relative"
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    <div
                                                        className={`${submenu.bgColor} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover/item:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover/item:-translate-y-1 p-4`}
                                                    >
                                                        {submenu.title}
                                                    </div>
                                                    {isActive && (
                                                        <span className="absolute top-0 -left-3 bottom-1 bg-black w-0.5"></span>
                                                    )}
                                                </>
                                            )}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </nav>
    );
}
