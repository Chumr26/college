export function AdditionalInfo({ authMode }: { authMode: 'login' | 'forgot' }) {
    return (
        <div className="mt-6 bg-gray-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
            <h4 className="text-sm uppercase tracking-wide mb-3">
                {authMode === 'login'
                    ? 'STUDENT PORTAL ACCESS'
                    : 'ACCOUNT SECURITY'}
            </h4>
            <div className="space-y-2 text-xs uppercase tracking-wide text-gray-600">
                {authMode === 'login' ? (
                    <>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            VIEW GRADES & TRANSCRIPTS
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            MANAGE COURSE REGISTRATION
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            ACCESS CAMPUS RESOURCES
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            SECURE PASSWORD RESET PROCESS
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            EMAIL VERIFICATION REQUIRED
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black border border-black"></div>
                            RESET LINK EXPIRES IN 24 HOURS
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
