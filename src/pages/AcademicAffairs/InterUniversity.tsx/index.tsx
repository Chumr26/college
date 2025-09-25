import { AcademicAffairs } from '..';
import { educationLevels } from '../../../data/educationLevels';
import { interUniversityMajors } from '../../../data/interUniversityMajors';

const interUniversityLevel = educationLevels.find(
    (level) => level.href === 'inter-university'
);

export function InterUniversity() {
    return (
        <AcademicAffairs
            level={interUniversityLevel!}
            majors={interUniversityMajors}
        />
    );
}
