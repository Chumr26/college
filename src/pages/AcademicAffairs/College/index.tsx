import { AcademicAffairs } from '..';
import { collegeMajors } from '../../../data/collegeMajors';
import { educationLevels } from '../../../data/educationLevels';

const collegeLevel = educationLevels.find((level) => level.href === 'college');

export function College() {
    return <AcademicAffairs level={collegeLevel!} majors={collegeMajors} />;
}
