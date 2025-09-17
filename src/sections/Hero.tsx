import { ArrowRight } from 'lucide-react';
import { Button, ImageWithFallback } from '../components';
import hero from '/imgs/hero.png';

function Hero() {
    return (
        <section className="bg-blue-500 border-b-4 border-black">
            <div className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-6xl md:text-8xl tracking-tighter uppercase mb-6 leading-none">
                            VỮNG
                            <br />
                            BƯỚC
                            <br />
                            <span className="bg-black text-white px-2">
                                TƯƠNG LAI
                            </span>
                        </h1>
                        <p className="text-xl mb-8 tracking-wide uppercase text-white">
                            Con người thành công, đoàn kết, thân thiện,
                            <br />
                            hợp tác và cùng phát triển
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-white text-black border-4 border-black hover:bg-black hover:text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide">
                                TUYỂN SINH
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                variant="outline"
                                className="border-4 border-white bg-transparent text-white hover:bg-white hover:text-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide"
                            >
                                GIỚI THIỆU
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
                            <ImageWithFallback
                                src={hero}
                                alt="University Campus"
                                className="w-full h-80 object-cover filter contrast-125"
                            />
                        </div>
                        <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
                            THÀNH LẬP NĂM 2001
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
