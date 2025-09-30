import { Mail } from 'lucide-react';

import { Input } from '../Input';
import { Label } from '../Label';

export function Email({
    formData,
    handleInputChange,
}: {
    formData: { email: string };
    handleInputChange: (field: string, value: string) => void;
}) {
    return (
        <div>
            <Label className="text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                ĐỊA CHỈ EMAIL *
            </Label>
            <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 tracking-wide"
                placeholder="sinhvien@itc.edu.vn"
                required
            />
        </div>
    );
}
