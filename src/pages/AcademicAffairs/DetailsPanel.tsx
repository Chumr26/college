import type { CollegeMajor } from '../../data/collegeMajors';
import { InfoCard } from './InfoCard';
import { HighlightsCard } from './HighlightsCard';
import { MetricsCard } from './MetricsCard';

export function DetailsPanel({ program }: { program: CollegeMajor }) {
    return (
        <div className="grid lg:grid-cols-3 gap-8">
            <InfoCard
                color={program.color}
                image={program.image}
                name={program.name}
                description={program.description}
                employmentRate={program.employmentRate}
                averageSalary={program.averageSalary}
            />

            {/* Highlights Card */}
            <HighlightsCard
                introduction={program.introduction}
                specializations={program.specializations}
                jobOpportunities={program.jobOpportunities}
            />

            {/* Metrics Card */}
            <MetricsCard
                modules={program.modules}
                credits={program.credits}
                hoursPerWeek={program.hoursPerWeek}
                duration={program.duration}
                theoryPercent={program.theoryPercent}
                practicePercent={program.practicePercent}
                careerPaths={program.careerPaths}
            />
        </div>
    );
}
