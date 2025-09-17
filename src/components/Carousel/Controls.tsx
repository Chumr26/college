import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../';

interface ControlsProps {
    onPrevClick: () => void;
    onNextClick: () => void;
}

export function Controls({ onPrevClick, onNextClick }: ControlsProps) {
    return (
        <div className="hidden md:flex gap-4">
            <Button
                onClick={onPrevClick}
                className="bg-black text-white border-4 border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 p-4"
            >
                <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
                onClick={onNextClick}
                className="bg-black text-white border-4 border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 p-4"
            >
                <ChevronRight className="w-6 h-6" />
            </Button>
        </div>
    );
}