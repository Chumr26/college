import { useState } from 'react';
import { Calendar } from 'lucide-react';

import { Button } from '../../../components/Button';
import { NavItem } from './NavItem';
import { Dropdown } from './Dropdown';

export function Navigation({
    setIsAuthModalOpen,
    navigationItems,
    setisOpen,
}: {
    setIsAuthModalOpen: (open: boolean) => void;
    navigationItems: { name: string; href: string; hasDropdown?: boolean }[];
    setisOpen: (open: boolean) => void;
}) {
    const [dropDown, setDropDown] = useState('');

    function handleToggleDropdown(itemHref: string) {
        if (dropDown === itemHref) {
            setDropDown('');
        } else {
            setDropDown(itemHref);
        }
    }
    return (
        <div className="flex-1 p-6 mt-20">
            <nav className="space-y-4">
                {navigationItems.map((item) => (
                    <div key={item.name} className="relative">
                        <NavItem
                            item={item}
                            dropDown={dropDown}
                            setisOpen={setisOpen}
                            handleToggleDropdown={handleToggleDropdown}
                        />
                        {/* Academic Affairs Dropdown */}
                        <Dropdown
                            item={item}
                            dropDown={dropDown}
                            setisOpen={setisOpen}
                        />
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
    );
}
