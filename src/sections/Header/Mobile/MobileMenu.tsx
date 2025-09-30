import type { NavigationItem } from '../Desktop';
import { collegeInfo } from '../../Footer';
import { Navigation } from './Navigation';

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
    return (
        <div
            className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-scroll ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex flex-col h-full">
                {/* Mobile Navigation Items */}
                <Navigation
                    setIsAuthModalOpen={setIsAuthModalOpen}
                    navigationItems={navigationItems}
                    setisOpen={setisOpen}
                />

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
