import { BookOpen, Building, Users } from 'lucide-react';

function Features() {
    const features = [
        {
            icon: BookOpen,
            title: 'WORLD-CLASS EDUCATION',
            description: 'TOP-TIER FACULTY & CURRICULUM',
        },
        {
            icon: Users,
            title: 'VIBRANT COMMUNITY',
            description: 'DIVERSE STUDENT BODY',
        },
        {
            icon: Building,
            title: 'MODERN FACILITIES',
            description: 'STATE-OF-THE-ART CAMPUS',
        },
    ];
    return (
        <section id="campus" className="bg-white border-b-4 border-black py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl tracking-tighter uppercase mb-12 text-center">
                    WHY CHOOSE
                    <br />
                    <span className="bg-yellow-400 text-black px-2">
                        BRUTALIST UNIVERSITY?
                    </span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1"
                        >
                            <feature.icon className="w-12 h-12 mb-4" />
                            <h3 className="text-xl mb-2 tracking-wide uppercase">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 uppercase tracking-wide">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
