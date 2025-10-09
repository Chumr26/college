export function Help() {
    return (
        <div className="mt-6 text-center dark:text-gray-300">
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                CẦN TRỢ GIÚP?
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button
                    type="button"
                    className="text-xs uppercase tracking-wide hover:underline"
                >
                    LIÊN HỆ HỖ TRỢ IT
                </button>
                <span className="hidden sm:inline">•</span>
                <button
                    type="button"
                    className="text-xs uppercase tracking-wide hover:underline"
                >
                    DỊCH VỤ SINH VIÊN
                </button>
            </div>
        </div>
    );
}
