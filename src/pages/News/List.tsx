import { Calendar, Clock, Eye, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import type { NewsItem } from '../../data/news';

export function List({ news }: { news: NewsItem[] }) {
    return (
        <section className="bg-white py-20 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="space-y-8">
                    {news.map((article) => (
                        <Card
                            key={article.id}
                            className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 overflow-hidden
                            dark:bg-gray-900 dark:border-white dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] 
                            dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] 
                            "
                        >
                            <div className="grid md:grid-cols-4 gap-6">
                                {/* Article Image */}
                                <ImageWithFallback
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 md:h-full object-cover"
                                />
                                {/* Article Content */}
                                <div className="md:col-span-3 p-6">
                                    <div className="flex items-center gap-6 mb-4 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-300">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {article.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {article.readTime}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {article.views} LƯỢT XEM
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl mb-4 tracking-tighter uppercase">
                                        {article.title}
                                    </h3>
                                    <Button
                                        className="bg-black text-white border-4 border-black hover:bg-white hover:text-black 
                                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                                    transition-all duration-200 uppercase tracking-wide px-6 py-3
                                    dark:bg-white dark:text-black dark:border-white dark:shadow-gray-200
                                    "
                                    >
                                        ĐỌC THÊM
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-16">
                    <Button
                        className="bg-black text-white border-4 border-black hover:bg-white hover:text-black 
                    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                    transition-all duration-200 px-8 py-6 uppercase tracking-wide
                    dark:bg-white dark:text-black dark:border-white dark:shadow-gray-200"
                    >
                        XEM THÊM BÀI VIẾT
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
