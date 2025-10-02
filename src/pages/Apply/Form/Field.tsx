import { Input } from '../../../components/Input';
import { Label } from '../../../components/Label';

export function Field({
    label,
    icon,
    id,
    value,
    type,
    placeholder,
    onChange,
    colSpan,
}: {
    label: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    id: string;
    value: string | number | undefined;
    type?: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    colSpan?: string;
}) {
    const Icon = icon;
    return (
        <div className={colSpan}>
            <Label htmlFor={id} className="uppercase tracking-wide mb-3 block">
                {label}
            </Label>
            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                )}
                <Input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required
                    className={`
                        border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 tracking-wide 
                        ${type === 'date' || icon ? 'pl-12' : ''}
                    `}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}
