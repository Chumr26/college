import { Accordion } from '../Accordion';
import { Hero } from './Hero';

export function College() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <Hero />

            {/* Available Programs Accordion */}
            <section className="bg-gray-50 border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        NGÀNH
                        <br />
                        <span className="bg-red-500 text-white px-2">
                            ĐÀO TẠO
                        </span>
                    </h2>
                    <Accordion />
                </div>
            </section>
        </div>
    );
}
