import { CalendarArrowDown, CalendarArrowUp, Search } from 'lucide-react';

import { news } from '../../data/news';
import { Button } from '../../components/Button';
import { List } from './List';
import { Input } from '../../components/Input';
import { useState } from 'react';

export function News() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSorting, setIsSorting] = useState(false);
    const SortIcon = isSorting ? CalendarArrowUp : CalendarArrowDown;

    const processedNews = news.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (isSorting) {
        processedNews.reverse();
    }

    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
        if (showSearch) {
            setSearchQuery(''); // Clear search when closing
        }
    };

    const handleBlur = () => {
        setShowSearch(false);
        setSearchQuery('');
    };

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
            <section className="bg-gray-100 dark:bg-gray-900 border-b-4 border-black py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <h2 className="text-3xl md:text-4xl tracking-tighter uppercase dark:text-white">
                            TẤT CẢ{' '}
                            <span className="bg-black text-white px-2 dark:bg-white dark:text-black">
                                BÀI VIẾT
                            </span>
                        </h2>
                        <div className="flex gap-4">
                            <Button
                                onClick={() => {
                                    setIsSorting(!isSorting);
                                }}
                                className="bg-white text-black border-4 border-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-3 uppercase tracking-wide
                                dark:bg-gray-800 dark:text-white dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
                                "
                            >
                                <SortIcon className="w-4 h-4 mr-2" />
                                XẮP XẾP
                            </Button>
                            {showSearch ? (
                                <Input
                                    type="text"
                                    placeholder="Nhập từ khóa..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    onBlur={handleBlur}
                                    className="border-4 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-3
                                    dark:bg-gray-800 dark:text-white dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                                    autoFocus
                                />
                            ) : (
                                <Button
                                    variant="outline"
                                    onClick={handleSearchToggle}
                                    className="border-4 border-black bg-white text-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-3 uppercase tracking-wide
                                    dark:bg-gray-800 dark:text-white dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
                                    "
                                >
                                    <Search className="w-4 h-4 mr-2" />
                                    TÌM KIẾM
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <List news={processedNews} />
        </div>
    );
}
