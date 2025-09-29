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
                    className="border-2 border-black"
                />
                <Label
                    htmlFor="rememberMe"
                    className="text-sm uppercase tracking-wide"
                >
                    REMEMBER ME
                </Label>
            </div>
        )
    );
}
