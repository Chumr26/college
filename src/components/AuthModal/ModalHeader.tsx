import { Key, LogIn, X } from 'lucide-react';

import { DialogTitle } from '../Dialog';

export function ModalHeader({
    authMode,
    resetAndClose,
}: {
    authMode: 'login' | 'forgot';
    resetAndClose: () => void;
}) {
    return (
        <div
            className={`${
                authMode === 'login' ? 'bg-blue-500' : 'bg-red-500'
            } border-b-4 border-black p-6 relative`}
        >
            <button
                onClick={resetAndClose}
                className="absolute top-4 right-4 bg-white border-2 border-black 
                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] 
                transition-all duration-200 p-2"
            >
                <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 text-white">
                <div className="bg-white text-black border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {authMode === 'login' ? (
                        <LogIn className="w-6 h-6" />
                    ) : (
                        <Key className="w-6 h-6" />
                    )}
                </div>
                <div>
                    <DialogTitle className="text-3xl md:text-4xl tracking-tighter uppercase text-white">
                        {authMode === 'login'
                            ? 'ĐĂNG NHẬP'
                            : 'ĐẶT LẠI MẬT KHẨU'}
                    </DialogTitle>
                    <p className="text-sm uppercase tracking-wide text-white opacity-90 mt-1">
                        {authMode === 'login'
                            ? 'TRUY CẬP CỔNG THÔNG TIN SINH VIÊN'
                            : 'KHÔI PHỤC TRUY CẬP TÀI KHOẢN CỦA BẠN'}
                    </p>
                </div>
            </div>
        </div>
    );
}
