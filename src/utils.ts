export function debounce<T extends (...args: unknown[]) => void>(
    func: T,
    wait: number
) {
    let timeout: NodeJS.Timeout;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function throttle<T extends (...args: unknown[]) => void>(
    func: T,
    limit: number
) {
    let inThrottle: boolean = false;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (!inThrottle) {
            func.apply(this, args);

            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}
