import { Users, Building, Mail, BookOpen, Phone } from 'lucide-react';

import { ImageWithFallback } from '../../components/ImageWithFallback';
import { Card } from '../../components/Card';

import { departments } from '../../data/departments';

export function Departments() {
    return (
        <section className="bg-gray-100 border-b-4 border-black py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                    {/* ACADEMIC
                        <br /> */}
                    <span className="bg-black text-white px-2">PHÒNG</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-8">
                    {departments.map((department) => (
                        <Card
                            key={department.id}
                            className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Department Image - Horizontal Layout */}
                            <div className="relative">
                                <ImageWithFallback
                                    src={department.image}
                                    alt={department.name}
                                    className="w-full h-64 object-cover"
                                />
                            </div>

                            {/* Department Content */}
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl md:text-2xl mb-4 tracking-tighter uppercase">
                                    {department.name}
                                </h3>

                                {/* Introduction */}
                                <div className="mb-6">
                                    <h4 className="text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                                        <BookOpen className="w-4 h-4" />
                                        GIỚI THIỆU
                                    </h4>
                                    <p className="text-sm tracking-wide text-gray-600 leading-relaxed">
                                        {department.introduction}
                                    </p>
                                </div>

                                {/* Functionalities */}
                                <div className="mb-6">
                                    <h4 className="text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                                        <Building className="w-4 h-4" />
                                        CHỨC NĂNG
                                    </h4>
                                    <div className="space-y-2">
                                        {department.functionalities.map(
                                            (functionality, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-600"
                                                >
                                                    <div className="min-w-2 min-h-2 bg-black border border-black"></div>
                                                    {functionality}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col flex-1 justify-end">
                                    {/* Dean Section */}
                                    <div className="mb-6">
                                        <h4 className="text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            TRƯỞNG PHÒNG
                                        </h4>
                                        <div className="text-lg tracking-tighter uppercase">
                                            {department.head}
                                        </div>
                                    </div>

                                    {/* Contact Section */}
                                    <div className="border-t-2 border-black pt-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-600">
                                                <Mail className="w-3 h-3" />
                                                {department.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-600">
                                                <Phone className="w-3 h-3" />
                                                {department.phone}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
