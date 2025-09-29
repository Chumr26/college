import { ArrowRight, LogIn } from 'lucide-react';
import { Button } from '../Button';

export function Submit({ authMode }: { authMode: 'login' | 'forgot' }) {
    return (
        <Button
            type="submit"
            className={`w-full ${
                authMode === 'login' ? 'bg-blue-500' : 'bg-red-500'
            } text-white border-4 border-black hover:bg-black hover:text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide`}
        >
            {authMode === 'login' ? (
                <>
                    LOGIN TO PORTAL
                    <LogIn className="w-5 h-5 ml-2" />
                </>
            ) : (
                <>
                    SEND RESET LINK
                    <ArrowRight className="w-5 h-5 ml-2" />
                </>
            )}
        </Button>
    );
}
