import cao_dang_9_cong from '/imgs/cao_dang_9_cong.png';
import cao_dang from '/imgs/cao_dang.png';
import lien_thong from '/imgs/lien_thong.jpg';

export const educationLevels = [
    {
        title: 'CAO ĐẲNG 9+',
        bgColor: 'bg-red-500',
        duration: '2,5 NĂM',
        fields: '6 NGÀNH',
        students: '8,000+',
        image: cao_dang_9_cong,
        alt: 'CAO ĐẲNG 9+',
        href: 'intermediate',
    },
    {
        title: 'CAO ĐẲNG',
        bgColor: 'bg-blue-500',
        duration: '2 NĂM',
        fields: '20 NGÀNH',
        students: '28,500+',
        image: cao_dang,
        alt: 'CAO ĐẲNG',
        href: 'college',
    },
    {
        title: 'LIÊN THÔNG',
        bgColor: 'bg-yellow-400',
        duration: '1,5 NĂM',
        fields: '9 NGÀNH',
        students: '1,500+',
        image: lien_thong,
        alt: 'LIÊN THÔNG',
        href: 'inter-university',
    },
];
