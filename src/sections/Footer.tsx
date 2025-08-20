import { MapPin } from "lucide-react";

function Footer() {
    return (
        <footer id="contact" className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-2xl mb-6 tracking-tighter uppercase">
                            BRUTALIST
                            <br />
                            UNIVERSITY
                        </h3>
                        <p className="mb-4 uppercase tracking-wide">
                            EXCELLENCE IN EDUCATION
                            <br />
                            SINCE 1962
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="uppercase tracking-wide">
                                123 UNIVERSITY AVE
                            </span>
                        </div>
                        <div className="uppercase tracking-wide">
                            EDUCATION CITY, EC 12345
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg mb-4 tracking-wide uppercase">
                            ACADEMICS
                        </h4>
                        <ul className="space-y-2 uppercase tracking-wide">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    UNDERGRADUATE
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    GRADUATE
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    RESEARCH
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    ONLINE PROGRAMS
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg mb-4 tracking-wide uppercase">
                            STUDENT LIFE
                        </h4>
                        <ul className="space-y-2 uppercase tracking-wide">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    HOUSING
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    DINING
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    ACTIVITIES
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    ATHLETICS
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg mb-4 tracking-wide uppercase">
                            CONNECT
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="#"
                                className="border-2 border-white hover:bg-white hover:text-black transition-colors p-3 text-center uppercase tracking-wide"
                            >
                                FACEBOOK
                            </a>
                            <a
                                href="#"
                                className="border-2 border-white hover:bg-white hover:text-black transition-colors p-3 text-center uppercase tracking-wide"
                            >
                                TWITTER
                            </a>
                            <a
                                href="#"
                                className="border-2 border-white hover:bg-white hover:text-black transition-colors p-3 text-center uppercase tracking-wide"
                            >
                                LINKEDIN
                            </a>
                            <a
                                href="#"
                                className="border-2 border-white hover:bg-white hover:text-black transition-colors p-3 text-center uppercase tracking-wide"
                            >
                                YOUTUBE
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t-4 border-white mt-12 pt-8 text-center uppercase tracking-wide">
                    <p>
                        &copy; 2025 BRUTALIST UNIVERSITY. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
