import { Hero } from './Hero';
import { VisionMission } from './VisionMission';
import { Timeline } from './Timeline';
import { Leadership } from './Leadership';

export function About() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <VisionMission />
            <Timeline />
            <Leadership />
        </div>
    );
}
