import './App.css';
import { Button } from './components/button';

function App() {
    const navigationItems = [
        { name: 'PROGRAMS', href: '#programs' },
        { name: 'CAMPUS', href: '#campus' },
        { name: 'ADMISSIONS', href: '#admissions' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b-4 border-black bg-white relative z-50">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl md:text-3xl tracking-tighter uppercase">
                            BRUTALIST UNIVERSITY
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
                            <Calendar className="w-4 h-4 mr-2" />
                            APPLY NOW
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            onClick={toggleMobileMenu}
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
        </div>
    );
}

export default App;
