export function Instructions({ authMode }: { authMode: 'login' | 'forgot' }) {
    return (
        authMode === 'forgot' && (
            <div className="bg-gray-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
                <h4 className="text-sm uppercase tracking-wide mb-3">
                    PASSWORD RESET INSTRUCTIONS
                </h4>
                <div className="space-y-2 text-xs uppercase tracking-wide text-gray-600">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-black border border-black"></div>
                        ENTER YOUR UNIVERSITY EMAIL ADDRESS
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-black border border-black"></div>
                        CHECK YOUR INBOX FOR RESET LINK
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-black border border-black"></div>
                        FOLLOW INSTRUCTIONS TO RESET PASSWORD
                    </div>
                </div>
            </div>
        )
    );
}
