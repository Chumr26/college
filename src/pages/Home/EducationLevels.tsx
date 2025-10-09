import { NavLink } from 'react-router';

import { Button } from '../../components/Button';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import { educationLevels } from '../../data/educationLevels';

function EducationLevels() {
    return (
        <section className="bg-gray-100 border-b-4 border-black py-20 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center dark:text-gray-100 text-black">
                    CHƯƠNG TRÌNH
                    <br />
                    <span className="bg-black text-white dark:bg-gray-100 dark:text-black px-2">
                        ĐÀO TẠO
                    </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {educationLevels.map((level, index) => (
                        <div
                            key={index}
                            className={`${level.bgColor} border-4 border-black dark:border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 overflow-hidden dark:shadow-gray-200`}
                        >
                            <div className="relative">
                                <ImageWithFallback
                                    src={level.image}
                                    alt={level.alt}
                                    className="w-full h-64 object-cover filter"
                                />
                            </div>
                            <div className="p-8 text-white">
                                <h3 className="text-3xl md:text-4xl mb-4 tracking-tighter uppercase">
                                    {level.title}
                                </h3>
                                <div className="space-y-3 mb-6 uppercase tracking-wide">
                                    <div className="flex justify-between">
                                        <span>THỜI GIAN ĐÀO TẠO:</span>
                                        <span>{level.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>NGÀNH ĐÀO TẠO:</span>
                                        <span>{level.fields}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>SINH VIÊN:</span>
                                        <span>{level.students}</span>
                                    </div>
                                </div>
                                <NavLink to={'academic-affairs/' + level.href}>
                                    <Button className="w-full bg-white dark:bg-gray-100 text-black border-4 border-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 uppercase tracking-wide py-4">
                                        THÔNG TIN CHI TIẾT
                                    </Button>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EducationLevels;
