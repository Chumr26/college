import { Filter, Search } from 'lucide-react';

import { news } from '../../data/news';
import { Button } from '../../components/Button';
import { List } from './List';

export function News() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-orange-500 border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="bg-white text-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 uppercase tracking-wide">
                            TIN TỨC NHÀ TRƯỜNG
                        </div>
                        <p className="text-xl mb-8 tracking-wide uppercase text-white">
                            Cập nhật những thông tin mới nhất từ nhà trường
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Filter Bar */}
            <section className="bg-gray-100 border-b-4 border-black py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <h2 className="text-3xl md:text-4xl tracking-tighter uppercase">
                            TẤT CẢ{' '}
                            <span className="bg-black text-white px-2">
                                BÀI VIẾT
                            </span>
                        </h2>
                        <div className="flex gap-4">
                            <Button className="bg-white text-black border-4 border-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-3 uppercase tracking-wide">
                                <Filter className="w-4 h-4 mr-2" />
                                LỌC
                            </Button>
                            <Button
                                variant="outline"
                                className="border-4 border-black bg-white text-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-3 uppercase tracking-wide"
                            >
                                <Search className="w-4 h-4 mr-2" />
                                TÌM KIẾM
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <List news={news} />
        </div>
    );
}
