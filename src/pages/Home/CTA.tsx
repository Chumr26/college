import { Button } from '../../components';

function CTA() {
    return (
        <section
            id="admissions"
            className="bg-blue-500 border-b-4 border-black py-20"
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-8 text-white">
                    ĐĂNG KÝ 
                    <br />
                    <span className="bg-white text-black px-2">
                        XÉT TUYỂN ONLINE
                    </span>
                </h2>
                <p className="text-xl mb-8 text-white uppercase tracking-wide">
                    ĐỢT XÉT TUYỂN TIẾP THEO: 15 THÁNG 3, 2026
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        className="bg-white text-black border-4 border-black hover:bg-black hover:text-white 
                    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide"
                    >
                        NỘP HỒ SƠ
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default CTA;
