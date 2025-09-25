import type { Major } from '../../data/collegeMajors';
// import { InfoCard } from './InfoCard';
import { HighlightsCard } from './HighlightsCard';
import { MetricsCard } from './MetricsCard';

export function DetailsPanel({ major }: { major: Major }) {
    return (
        <div className="grid lg:grid-cols-2 gap-8">
            {/* <InfoCard
                color={major.color}
                image={major.image}
                name={major.name}
                description={major.description}
                employmentRate={major.employmentRate}
                averageSalary={major.averageSalary}
            /> */}

            {/* Highlights Card */}
            <HighlightsCard
                introduction={major.introduction}
                jobOpportunities={major.jobOpportunities}
                image={major.image}
                name={major.name}
            />

            {/* Metrics Card */}
            <MetricsCard
                modules={major.modules}
                credits={major.credits}
                generalHours={major.generalHours}
                specialHours={major.specialHours}
                internHours={major.internHours}
                assignmentHours={major.assignmentHours}
                examHours={major.examHours}
            />
        </div>
    );
}
