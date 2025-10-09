import { Eye, EyeOff, Lock } from 'lucide-react';

import { Input } from '../Input';
import { Label } from '../Label';

export function Password({
    authMode,
    formData,
    handleInputChange,
    showPassword,
    setShowPassword,
}: {
    authMode: 'login' | 'forgot';
    formData: { password: string };
    handleInputChange: (field: string, value: string) => void;
    showPassword: boolean;
    setShowPassword: (value: boolean) => void;
}) {
    return (
        authMode === 'login' && (
            <div>
                <Label className="text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    MẬT KHẨU *
                </Label>
                <div className="relative">
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) =>
                            handleInputChange('password', e.target.value)
                        }
                        className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 pr-12"
                        placeholder="••••••••"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 dark:text-black"
                    >
                        {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                        ) : (
                            <Eye className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>
        )
    );
}
