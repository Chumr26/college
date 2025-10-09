import { Building2, Handshake, University } from 'lucide-react';

const departmentStats = [
    {
        icon: Building2,
        number: 7,
        label: 'PHÒNG CHỨC NĂNG',
    },
    {
        icon: University,
        number: 3,
        label: 'KHOA',
    },
    {
        icon: Handshake,
        number: 1,
        label: 'TRUNG TÂM',
    },
];

export function Stats() {
    return (
        <section className="bg-white border-b-4 border-black py-16 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {departmentStats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 text-center dark:bg-gray-800 dark:border-gray-500 dark:text-gray-100 dark:shadow-gray-500"
                        >
                            <stat.icon className="w-12 h-12 mb-4 mx-auto" />
                            <div className="text-4xl mb-2 tracking-tighter uppercase">
                                {stat.number}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
