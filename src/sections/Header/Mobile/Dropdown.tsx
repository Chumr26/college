import { NavLink } from 'react-router';
import { educationLevels } from '../../../data/educationLevels';

export function Dropdown({
    item,
    dropDown,
    setisOpen,
}: {
    item: { name: string; href: string; hasDropdown?: boolean };
    dropDown: string;
    setisOpen: (open: boolean) => void;
}) {
    return (
        item.hasDropdown &&
        dropDown === 'academic-affairs' && (
            <div className="mt-4 space-y-3 pl-4">
                {educationLevels.map((submenu, subIndex) => (
                    <NavLink
                        to={'academic-affairs/' + submenu.href}
                        key={subIndex}
                        className="w-full block relative"
                        onClick={() => setisOpen(false)}
                    >
                        {({ isActive }) => (
                            <>
                                <div
                                    className={`${submenu.bgColor} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover/item:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover/item:-translate-y-1 p-4 text-white`}
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
        )
    );
}
