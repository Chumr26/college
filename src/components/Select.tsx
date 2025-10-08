import { Label } from './Label';

export function Select(props: {
    name: string;
    label: string;
    placeholder: string;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    options: { label: string; value: string }[];
    className?: string;
    colSpan?: string;
}) {
    return (
        <div className={props.colSpan}>
            <Label
                htmlFor={props.name}
                className="uppercase tracking-wide mb-3 block"
            >
                {props.label}
            </Label>
            <div className="relative">
                <select
                    {...props}
                    id={props.name}
                    required
                    className={`w-full border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 tracking-wide appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed outline-none ${props.className}`}
                >
                    <option defaultValue={props.placeholder} value="" disabled>
                        {props.placeholder}
                    </option>
                    {props.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div
                    className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${
                        props.disabled ? 'opacity-50' : ''
                    }`}
                >
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black"></div>
                </div>
            </div>
        </div>
    );
}
