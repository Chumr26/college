import { Award, Building, GraduationCap, Users } from 'lucide-react';

function Stats() {
    const stats = [
        {
            icon: Users,
            number: '25,000+',
            label: 'STUDENTS ENROLLED',
        },
        {
            icon: GraduationCap,
            number: '95%',
            label: 'GRADUATION RATE',
        },
        {
            icon: Award,
            number: '#3',
            label: 'NATIONAL RANKING',
        },
        {
            icon: Building,
            number: '12',
            label: 'CAMPUS BUILDINGS',
        },
    ];
    return (
        <section className="bg-white border-b-4 border-black py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 text-center"
                        >
                            <stat.icon className="w-12 h-12 mb-4 mx-auto" />
                            <div className="text-4xl mb-2 tracking-tighter uppercase">
                                {stat.number}
                            </div>
                            <p className="text-gray-600 uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;
