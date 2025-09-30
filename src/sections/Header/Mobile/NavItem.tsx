import { ChevronLeft } from 'lucide-react';
import { NavLink } from 'react-router';

export function NavItem({
    item,
    dropDown,
    setisOpen,
    handleToggleDropdown,
}: {
    item: { name: string; href: string; hasDropdown?: boolean };
    dropDown: string;
    setisOpen: (open: boolean) => void;
    handleToggleDropdown: (itemHref: string) => void;
}) {
    return (
        <NavLink
            to={item.href}
            onClick={(e) => {
                handleToggleDropdown(item.href);
                if (item.hasDropdown) e.preventDefault();
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
                                    dropDown === item.href ? 'rotate-180' : ''
                                }`}
                            >
                                <ChevronLeft className="w-6 h-6 -rotate-90" />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </NavLink>
    );
}
