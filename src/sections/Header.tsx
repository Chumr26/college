import { Button } from '../components';
import college_logo from '/college_logo.svg';

function Header() {
    const navigationItems = [
        { name: 'ĐÀO TẠO', href: '#programs' },
        { name: 'GIỚI THIỆU', href: '#campus' },
        { name: 'PHÒNG BAN', href: '#admissions' },
        { name: 'TIN TỨC', href: '#contact' },
    ];
    return (
        <header className="border-b-4 border-black bg-white relative z-50">
            {/* Header */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    {/* College Logo and Name */}
                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 md:w-16 md:h-16 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                        bg-white p-1 rounded-full"
                        >
                            <img
                                src={college_logo}
                                alt="College Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="text-2xl md:text-2xl tracking-tighter uppercase">
                            CAO ĐẲNG <br /> CÔNG NGHỆ THÔNG TIN
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 uppercase tracking-wide">
                        {navigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="hover:bg-black hover:text-white px-3 py-1 transition-colors border-2 border-transparent hover:border-black"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Apply Button */}
                    <Button className="hidden md:flex bg-black text-white border-4 border-black hover:bg-white hover:text-black hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 uppercase tracking-wide">
                        ĐĂNG NHẬP
                    </Button>

                    {/* Mobile Menu Button */}
                    {/* <Button
                 onClick={toggleMobileMenu}
                 className="md:hidden bg-black text-white border-4 border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 p-2"
             >
                 {isMobileMenuOpen ? (
                     <X className="w-6 h-6" />
                 ) : (
                     <Menu className="w-6 h-6" />
                 )}
             </Button> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
