import { AcademicAffairs } from '..';
import { educationLevels } from '../../../data/educationLevels';
import { intermediateMajors } from '../../../data/intermediateMajors';

const intermediateLevel = educationLevels.find(
    (level) => level.href === 'intermediate'
);

export function Intermediate() {
    return (
        <AcademicAffairs level={intermediateLevel!} majors={intermediateMajors} />
    );
}
