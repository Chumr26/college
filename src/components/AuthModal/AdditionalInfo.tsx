export function AdditionalInfo({ authMode }: { authMode: 'login' | 'forgot' }) {
    return (
        <div className="mt-6 bg-gray-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
            <h4 className="text-sm uppercase tracking-wide mb-3 dark:text-black">
                {authMode === 'login'
                    ? 'CỔNG THÔNG TIN SINH VIÊN'
                    : 'BẢO MẬT TÀI KHOẢN'}
            </h4>
            <div className="space-y-2 text-xs uppercase tracking-wide text-gray-600">
                {authMode === 'login' ? (
                    <>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            XEM ĐIỂM SỐ VÀ KẾT QUẢ HỌC TẬP
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            QUẢN LÝ ĐĂNG KÝ MÔN
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            TRUY CẬP TÀI LIỆU HỌC TẬP VÀ THÔNG BÁO
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            QUY TRÌNH ĐẶT LẠI MẬT KHẨU BẢO MẬT
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            CẦN XÁC MINH EMAIL
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            LIÊN KẾT ĐẶT LẠI HẾT HẠN SAU 24 GIỜ
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
