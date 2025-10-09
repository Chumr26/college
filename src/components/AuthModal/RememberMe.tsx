import { Checkbox } from '../Checkbox';
import { Label } from '../Label';

export function RememberMe({
    authMode,
    formData,
    handleInputChange,
}: {
    authMode: 'login' | 'forgot';
    formData: { rememberMe: boolean };
    handleInputChange: (field: string, value: boolean | string) => void;
}) {
    return (
        authMode === 'login' && (
            <div className="flex items-center space-x-3">
                <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) =>
                        handleInputChange('rememberMe', checked)
                    }
                    className="border-2 border-black dark:border-gray-100 dark:bg-gray-500"
                />
                <Label
                    htmlFor="rememberMe"
                    className="text-sm uppercase tracking-wide"
                >
                    GHI NHỚ ĐĂNG NHẬP
                </Label>
            </div>
        )
    );
}
