import { ArrowLeft, Key } from 'lucide-react';
import { Button } from '../Button';

export function ModeSwitcher({
    authMode,
    setAuthMode,
    setShowPassword,
    setFormData,
}: {
    authMode: 'login' | 'forgot';
    setAuthMode: (mode: 'login' | 'forgot') => void;
    setShowPassword: (show: boolean) => void;
    setFormData: (data: {
        email: string;
        password: string;
        rememberMe: boolean;
    }) => void;
}) {
    const switchToForgot = () => {
        setAuthMode('forgot');
        setShowPassword(false);
    };

    const switchToLogin = () => {
        setAuthMode('login');
        setFormData({
            email: '',
            password: '',
            rememberMe: false,
        });
        setShowPassword(false);
    };
    return (
        <div className="mt-8 pt-8 border-t-4 border-black text-center">
            {authMode === 'login' ? (
                <div>
                    <p className="text-sm uppercase tracking-wide mb-4">
                        QUÊN MẬT KHẨU?
                    </p>
                    <Button
                        type="button"
                        onClick={switchToForgot}
                        variant="outline"
                        className="border-4 border-black bg-white text-black hover:bg-black 
                        hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                        transition-all duration-200 px-6 py-3 uppercase tracking-wide dark:hover:text-black"
                    >
                        ĐẶT LẠI MẬT KHẨU
                        <Key className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            ) : (
                <div>
                    <p className="text-sm uppercase tracking-wide mb-4">
                        NHỚ MẬT KHẨU?
                    </p>
                    <Button
                        type="button"
                        onClick={switchToLogin}
                        variant="outline"
                        className="border-4 border-black bg-white text-black hover:bg-black hover:text-white 
                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                        transition-all duration-200 px-6 py-3 uppercase tracking-wide dark:hover:text-black"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        TRỞ VỀ ĐĂNG NHẬP
                    </Button>
                </div>
            )}
        </div>
    );
}
