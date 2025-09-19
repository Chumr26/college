import { Carousel } from '../../components';
import { partners } from '../../data';
import { useCarousel } from '../../hooks';

function Partners() {
    const totalSlides = partners.length;
    const { currentSlide, slidesToShow, handleSlideChange } = useCarousel({
        totalSlides: totalSlides,
    });
    const maxSlide = totalSlides - slidesToShow;

    function handlePrevClick() {
        const prevSlide = currentSlide <= 0 ? maxSlide : currentSlide - 1;
        handleSlideChange(prevSlide);
    }

    function handleNextClick() {
        const nextSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
        handleSlideChange(nextSlide);
    }

    return (
        <section className="bg-yellow-400 border-b-4 border-black py-20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-4xl md:text-6xl tracking-tighter uppercase">
                        DOANG NGHIỆP
                        <br />
                        <span className="bg-black text-white px-2">
                            ĐỐI TÁC
                        </span>
                    </h2>

                    <Carousel.Controls
                        onPrevClick={handlePrevClick}
                        onNextClick={handleNextClick}
                    />
                </div>

                <Carousel.Slider
                    partners={partners}
                    currentSlide={currentSlide}
                    slidesToShow={slidesToShow}
                />

                <Carousel.Indicators
                    total={partners.length}
                    current={currentSlide}
                    slidesToShow={slidesToShow}
                    onClick={handleSlideChange}
                />
            </div>
        </section>
    );
}

export default Partners;
