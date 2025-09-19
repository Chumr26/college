import Hero from './Hero';
import EducationLevels from './EducationLevels';
import Stats from './Stats';
import Features from './Features';
import Partners from './Partners';
import CTA from './CTA';

export function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <EducationLevels />
            <Features />
            <Partners />
            <CTA />
        </>
    );
}
