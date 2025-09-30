export function Help() {
    return (
        <div className="mt-6 text-center">
            <p className="text-xs uppercase tracking-wide text-gray-600 mb-2">
                CẦN TRỢ GIÚP?
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button
                    type="button"
                    className="text-xs uppercase tracking-wide hover:underline text-gray-600"
                >
                    LIÊN HỆ HỖ TRỢ IT
                </button>
                <span className="hidden sm:inline text-gray-600">•</span>
                <button
                    type="button"
                    className="text-xs uppercase tracking-wide hover:underline text-gray-600"
                >
                    DỊCH VỤ SINH VIÊN
                </button>
            </div>
        </div>
    );
}
