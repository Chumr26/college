export function Help() {
    return (
        <div className="mt-6 text-center">
            <p className="text-xs uppercase tracking-wide text-gray-600 mb-2">
                NEED ADDITIONAL HELP?
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button
                    type="button"
                    className="text-xs uppercase tracking-wide hover:underline text-gray-600"
                >
                    CONTACT IT SUPPORT
                </button>
                <span className="hidden sm:inline text-gray-600">•</span>
                <button
                    type="button"
                    className="text-xs uppercase tracking-wide hover:underline text-gray-600"
                >
                    STUDENT SERVICES
                </button>
            </div>
        </div>
    );
}
