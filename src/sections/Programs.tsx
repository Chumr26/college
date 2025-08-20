import { Button, Card, ImageWithFallback } from '../components';

function Programs() {
    const programs = [
        {
            id: 1,
            name: 'COMPUTER SCIENCE',
            duration: '4 YEARS',
            degree: 'BACHELOR',
            image: 'https://images.unsplash.com/photo-1582273953509-3972288b909e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTUzOTQyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            spots: '150 SPOTS',
        },
        {
            id: 2,
            name: 'BUSINESS ADMIN',
            duration: '4 YEARS',
            degree: 'BACHELOR',
            image: 'https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NTU0MjgzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            spots: '200 SPOTS',
        },
        {
            id: 3,
            name: 'ENGINEERING',
            duration: '4 YEARS',
            degree: 'BACHELOR',
            image: 'https://images.unsplash.com/photo-1685456891912-c09f9cd252eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJufGVufDF8fHx8MTc1NTM2NjY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            spots: '120 SPOTS',
        },
        {
            id: 4,
            name: 'MEDICINE',
            duration: '6 YEARS',
            degree: 'DOCTORATE',
            image: 'https://images.unsplash.com/photo-1686213011698-8e70cb7ed011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTUzOTg4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            spots: '80 SPOTS',
        },
    ];
    return (
        <section
            id="programs"
            className="bg-gray-50 border-b-4 border-black py-20"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                    ACADEMIC
                    <br />
                    <span className="bg-black text-white px-2">PROGRAMS</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program) => (
                        <Card
                            key={program.id}
                            className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="relative">
                                <ImageWithFallback
                                    src={program.image}
                                    alt={program.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-yellow-400 border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    <span className="text-sm tracking-wide uppercase">
                                        {program.degree}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 bg-red-500 border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    <span className="text-sm tracking-wide uppercase text-white">
                                        {program.spots}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg mb-2 tracking-wide uppercase">
                                    {program.name}
                                </h3>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm tracking-wide uppercase text-gray-600">
                                        {program.duration}
                                    </span>
                                </div>
                                <Button className="w-full bg-black text-white border-2 border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 uppercase tracking-wide">
                                    LEARN MORE
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Programs;
