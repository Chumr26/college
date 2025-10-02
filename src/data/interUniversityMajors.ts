import { Computer } from 'lucide-react';
import type { Major } from './collegeMajors';

export const interUniversityMajors: Major[] = [
    {
        id: 1,
        name: 'CÔNG NGHỆ THÔNG TIN',
        code: '6480201',
        credits: 92,
        modules: 29,
        generalHours: 435,
        specialHours: 1865,
        internHours: 270,
        assignmentHours: 470,
        examHours: 97,
        introduction:
            'CHƯƠNG TRÌNH ĐÀO TẠO NGÀNH CÔNG NGHỆ THÔNG TIN TẠI ITC HƯỚNG ĐẾN PHÁT TRIỂN ĐỘI NGŨ KỸ SƯ THỰC HÀNH CÓ KIẾN THỨC CHUYÊN SÂU, KỸ NĂNG THỰC TIỄN VỮNG VÀNG, ĐẠO ĐỨC NGHỀ NGHIỆP TỐT VÀ KHẢ NĂNG THÍCH ỨNG LINH HOẠT VỚI MÔI TRƯỜNG CÔNG NGHỆ HIỆN ĐẠI.',
        image: '/imgs/majors/img-1.jpg',
        icon: Computer,
        color: 'bg-blue-500',
        jobOpportunities: [
            'PHÁT TRIỂN PHẦN MỀM & ỨNG DỤNG',
            'QUẢN TRỊ HỆ THỐNG CNTT',
            'LẬP TRÌNH WEBSITE & DI ĐỘNG',
            'PHÂN TÍCH DỮ LIỆU & HỆ THỐNG',
            'TƯ VẤN GIẢI PHÁP CÔNG NGHỆ',
            'GIẢNG DẠY CÔNG NGHỆ THÔNG TIN',
        ],
        spots: 150,
    },
];
