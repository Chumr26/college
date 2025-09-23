import { Calendar } from 'lucide-react';
import { NavLink } from 'react-router';

import { Button } from './Button';
import { collegeInfo } from '../sections/Footer';

type MobileMenuProps = {
    isOpen: boolean;
    setisOpen: (open: boolean) => void;
    navigationItems: { name: string; href: string }[];
};

export function MobileMenu({
    isOpen,
    setisOpen,
    navigationItems,
}: MobileMenuProps) {
    return (
        <div
            className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex flex-col h-full">
                {/* Mobile Navigation Items */}
                <div className="flex-1 p-6 mt-20">
                    <nav className="space-y-4">
                        {navigationItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                onClick={() => setisOpen(false)}
                                className="block"
                            >
                                <div className="bg-gray-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all duration-200 hover:-translate-y-1">
                                    <div className="text-2xl tracking-tighter uppercase">
                                        {item.name}
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Mobile Menu CTA */}
                    <div className="mt-8 space-y-4">
                        <Button
                            onClick={() => setisOpen(false)}
                            className="w-full bg-blue-500 text-white border-4 border-black hover:bg-white hover:text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide"
                        >
                            <Calendar className="w-5 h-5 mr-2" />
                            APPLY NOW
                        </Button>

                        <Button
                            onClick={() => setisOpen(false)}
                            variant="outline"
                            className="w-full border-4 border-black bg-white text-black hover:bg-black hover:text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide"
                        >
                            CAMPUS TOUR
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
