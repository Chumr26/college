import { CheckCircle } from "lucide-react";
import { NavLink } from "react-router";
import { Button } from "../../components/Button";

export function Message() {
    return (
        <div className="min-h-screen bg-green-500 flex items-center justify-center p-4">
            <div className="container max-w-2xl">
                <div className="bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-12 text-center">
                    <div className="bg-green-500 border-4 border-black w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <CheckCircle className="w-12 h-12 text-white" />
                    </div>

                    <h1 className="text-5xl md:text-6xl tracking-tighter uppercase mb-6">
                        ĐĂNG KÝ
                        <br />
                        <span className="bg-black text-white px-2">
                            THÀNH CÔNG!
                        </span>
                    </h1>

                    <div className="bg-yellow-400 border-4 border-black p-6 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <p className="text-lg tracking-wide mb-2">Mã Đơn</p>
                        <p className="text-3xl tracking-tighter uppercase">
                            BU-2025-
                            {Math.floor(Math.random() * 10000)
                                .toString()
                                .padStart(5, '0')}
                        </p>
                    </div>

                    <p className="text-lg tracking-wide mb-8 text-gray-700">
                        Cảm ơn bạn đã nộp đơn vào trường ITC!
                        <br />
                        Chúng tôi sẽ xem xét đơn của bạn và liên hệ trong vòng
                        2-4 tuần.
                    </p>

                    <div className="space-y-4">
                        <div className="bg-gray-100 border-4 border-black p-6 text-left">
                            <h3 className="text-xl tracking-wide uppercase mb-4">
                                CÁC BƯỚC TIẾP THEO:
                            </h3>
                            <ul className="space-y-3 tracking-wide">
                                <li className="flex items-start gap-3">
                                    <span className="bg-black text-white w-8 h-8 flex items-center justify-center border-2 border-black flex-shrink-0">
                                        1
                                    </span>
                                    <span>
                                        Kiểm tra email của bạn để xác nhận
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-black text-white w-8 h-8 flex items-center justify-center border-2 border-black flex-shrink-0">
                                        2
                                    </span>
                                    <span>Chuẩn bị hồ sơ cần thiết</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-black text-white w-8 h-8 flex items-center justify-center border-2 border-black flex-shrink-0">
                                        3
                                    </span>
                                    <span>
                                        Lên lịch phỏng vấn (nếu cần thiết)
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <NavLink to="/">
                            <Button className="w-full bg-black text-white border-4 border-black hover:bg-white hover:text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide">
                                QUAY LẠI TRANG CHỦ
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
