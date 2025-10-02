import cao_dang_9_cong from '/imgs/cao_dang_9_cong.png';
import cao_dang from '/imgs/cao_dang.png';
import lien_thong from '/imgs/lien_thong.jpg';
import { collegeMajors, type Major } from './collegeMajors';
import { intermediateMajors } from './intermediateMajors';
import { interUniversityMajors } from './interUniversityMajors';

export type EducationLevel = {
    title: string;
    bgColor: string;
    duration: string;
    fields: string;
    students: string;
    target: string;
    image: string;
    alt: string;
    href: string;
    majors: Major[];
};

export const educationLevels: EducationLevel[] = [
    {
        title: 'CAO ĐẲNG 9+',
        bgColor: 'bg-red-500',
        duration: '2,5 NĂM',
        fields: '6 NGÀNH',
        students: '8,000+',
        target: 'học sinh tốt nghiệp thcs.',
        image: cao_dang_9_cong,
        alt: 'CAO ĐẲNG 9+',
        href: 'intermediate',
        majors: intermediateMajors,
    },
    {
        title: 'CAO ĐẲNG',
        bgColor: 'bg-blue-500',
        duration: '2 NĂM',
        fields: '20 NGÀNH',
        students: '28,500+',
        target: 'học sinh tốt nghiệp thpt.',
        image: cao_dang,
        alt: 'CAO ĐẲNG',
        href: 'college',
        majors: collegeMajors,
    },
    {
        title: 'LIÊN THÔNG',
        bgColor: 'bg-yellow-400',
        duration: '1,5 NĂM',
        fields: '9 NGÀNH',
        students: '1,500+',
        target: 'sinh viên tốt nghiệp cao đẳng.',
        image: lien_thong,
        alt: 'LIÊN THÔNG',
        href: 'inter-university',
        majors: interUniversityMajors,
    },
];
