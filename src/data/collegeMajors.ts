import {
    Briefcase,
    Building,
    Code,
    Database,
    Globe,
    Shield,
} from 'lucide-react';

export type CollegeMajor = {
    id: number;
    name: string;
    code: string;
    duration: string;
    credits: string;
    modules: number;
    hoursPerWeek: number;
    theoryPercent: number;
    practicePercent: number;
    description: string;
    introduction: string;
    image: string;
    icon: React.ElementType;
    color: string;
    specializations: string[];
    careerPaths: string[];
    jobOpportunities: string[];
    averageSalary: string;
    employmentRate: string;
    spots: number;
};

export const collegeMajors: CollegeMajor[] = [
    {
        id: 1,
        name: 'COMPUTER SCIENCE',
        code: 'CS-4001',
        duration: '4 YEARS',
        credits: '120 CREDITS',
        modules: 32,
        hoursPerWeek: 25,
        theoryPercent: 60,
        practicePercent: 40,
        description:
            'COMPREHENSIVE PROGRAM COVERING SOFTWARE DEVELOPMENT, ALGORITHMS, DATA STRUCTURES, AND EMERGING TECHNOLOGIES',
        introduction:
            'THE COMPUTER SCIENCE PROGRAM PREPARES STUDENTS FOR THE RAPIDLY EVOLVING WORLD OF TECHNOLOGY. OUR CURRICULUM COMBINES THEORETICAL FOUNDATIONS WITH HANDS-ON EXPERIENCE IN PROGRAMMING, SOFTWARE ENGINEERING, AND EMERGING TECHNOLOGIES LIKE AI AND MACHINE LEARNING.',
        image: 'https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBwcm9ncmFtbWluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc1ODU0OTIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        icon: Code,
        color: 'bg-blue-500',
        specializations: [
            'SOFTWARE ENGINEERING',
            'ARTIFICIAL INTELLIGENCE',
            'MACHINE LEARNING',
            'MOBILE DEVELOPMENT',
        ],
        careerPaths: [
            'SOFTWARE DEVELOPER',
            'SYSTEM ARCHITECT',
            'AI ENGINEER',
            'TECHNICAL LEAD',
        ],
        jobOpportunities: [
            'TECH GIANTS (GOOGLE, MICROSOFT, APPLE)',
            'STARTUPS & SCALE-UPS',
            'FINANCIAL SERVICES & FINTECH',
            'GAMING & ENTERTAINMENT INDUSTRY',
            'RESEARCH & DEVELOPMENT LABS',
        ],
        averageSalary: '$95,000',
        employmentRate: '98%',
        spots: 150,
    },
    {
        id: 2,
        name: 'BUSINESS ADMINISTRATION',
        code: 'BA-4002',
        duration: '4 YEARS',
        credits: '120 CREDITS',
        modules: 28,
        hoursPerWeek: 22,
        theoryPercent: 70,
        practicePercent: 30,
        description:
            'STRATEGIC BUSINESS EDUCATION WITH FOCUS ON LEADERSHIP, MANAGEMENT, AND ENTREPRENEURSHIP',
        introduction:
            'OUR BUSINESS ADMINISTRATION PROGRAM DEVELOPS FUTURE LEADERS WITH COMPREHENSIVE KNOWLEDGE IN FINANCE, MARKETING, OPERATIONS, AND STRATEGIC MANAGEMENT. STUDENTS GAIN PRACTICAL EXPERIENCE THROUGH CASE STUDIES, INTERNSHIPS, AND REAL-WORLD PROJECT COLLABORATIONS.',
        image: 'https://images.unsplash.com/photo-1754531976838-436a70636c96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0dWRlbnRzJTIwY2xhc3Nyb29tJTIwZmluYW5jZXxlbnwxfHx8fDE3NTg1NDkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        icon: Briefcase,
        color: 'bg-green-500',
        specializations: [
            'FINANCE',
            'MARKETING',
            'OPERATIONS',
            'INTERNATIONAL BUSINESS',
        ],
        careerPaths: [
            'BUSINESS ANALYST',
            'PROJECT MANAGER',
            'CONSULTANT',
            'ENTREPRENEUR',
        ],
        jobOpportunities: [
            'MULTINATIONAL CORPORATIONS',
            'CONSULTING FIRMS (BCG, MCKINSEY)',
            'INVESTMENT BANKS & FINANCIAL SERVICES',
            'STARTUP ECOSYSTEM & ENTREPRENEURSHIP',
            'GOVERNMENT & PUBLIC SECTOR',
        ],
        averageSalary: '$85,000',
        employmentRate: '94%',
        spots: 200,
    },
    {
        id: 3,
        name: 'ENGINEERING',
        code: 'ENG-4003',
        duration: '4 YEARS',
        credits: '128 CREDITS',
        modules: 35,
        hoursPerWeek: 28,
        theoryPercent: 45,
        practicePercent: 55,
        description:
            'MULTIDISCIPLINARY ENGINEERING PROGRAM WITH HANDS-ON PROJECT EXPERIENCE AND INDUSTRY PARTNERSHIPS',
        introduction:
            'OUR ENGINEERING PROGRAM COMBINES RIGOROUS THEORETICAL KNOWLEDGE WITH EXTENSIVE PRACTICAL APPLICATION. STUDENTS WORK ON REAL-WORLD PROJECTS, GAIN INDUSTRY EXPERIENCE THROUGH INTERNSHIPS, AND DEVELOP INNOVATIVE SOLUTIONS TO COMPLEX TECHNICAL CHALLENGES.',
        image: 'https://images.unsplash.com/photo-1690356107685-3725367f6f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwbGFib3JhdG9yeSUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzU4NTQ5MjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        icon: Building,
        color: 'bg-orange-500',
        specializations: ['MECHANICAL', 'ELECTRICAL', 'CIVIL', 'AEROSPACE'],
        careerPaths: [
            'DESIGN ENGINEER',
            'PROJECT ENGINEER',
            'R&D SPECIALIST',
            'TECHNICAL CONSULTANT',
        ],
        jobOpportunities: [
            'AEROSPACE & DEFENSE COMPANIES',
            'AUTOMOTIVE INDUSTRY',
            'CONSTRUCTION & INFRASTRUCTURE',
            'RENEWABLE ENERGY SECTOR',
            'RESEARCH & DEVELOPMENT LABS',
        ],
        averageSalary: '$92,000',
        employmentRate: '96%',
        spots: 120,
    },
    {
        id: 4,
        name: 'DATA SCIENCE',
        code: 'DS-4004',
        duration: '4 YEARS',
        credits: '120 CREDITS',
        modules: 30,
        hoursPerWeek: 26,
        theoryPercent: 50,
        practicePercent: 50,
        description:
            'CUTTING-EDGE PROGRAM COMBINING STATISTICS, PROGRAMMING, AND MACHINE LEARNING FOR BIG DATA ANALYSIS',
        introduction:
            'DATA SCIENCE IS THE FUTURE OF DECISION-MAKING. OUR PROGRAM TEACHES STUDENTS TO EXTRACT INSIGHTS FROM COMPLEX DATASETS USING STATISTICAL METHODS, MACHINE LEARNING ALGORITHMS, AND ADVANCED PROGRAMMING TECHNIQUES TO SOLVE REAL-WORLD PROBLEMS.',
        image: 'https://images.unsplash.com/photo-1591062182630-2cae7655ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljcyUyMHN0dWRlbnRzfGVufDF8fHx8MTc1ODU0OTI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        icon: Database,
        color: 'bg-purple-500',
        specializations: [
            'MACHINE LEARNING',
            'BIG DATA ANALYTICS',
            'STATISTICAL MODELING',
            'BUSINESS INTELLIGENCE',
        ],
        careerPaths: [
            'DATA SCIENTIST',
            'ML ENGINEER',
            'BUSINESS ANALYST',
            'RESEARCH SCIENTIST',
        ],
        jobOpportunities: [
            'BIG TECH COMPANIES (META, NETFLIX)',
            'HEALTHCARE & PHARMACEUTICALS',
            'FINANCIAL SERVICES & TRADING',
            'E-COMMERCE & RETAIL ANALYTICS',
            'GOVERNMENT & POLICY RESEARCH',
        ],
        averageSalary: '$105,000',
        employmentRate: '99%',
        spots: 80,
    },
    {
        id: 5,
        name: 'CYBERSECURITY',
        code: 'CYB-4005',
        duration: '4 YEARS',
        credits: '120 CREDITS',
        modules: 33,
        hoursPerWeek: 27,
        theoryPercent: 40,
        practicePercent: 60,
        description:
            'COMPREHENSIVE SECURITY PROGRAM COVERING NETWORK SECURITY, ETHICAL HACKING, AND DIGITAL FORENSICS',
        introduction:
            'IN AN INCREASINGLY DIGITAL WORLD, CYBERSECURITY IS CRITICAL. OUR PROGRAM TRAINS STUDENTS TO PROTECT SYSTEMS, NETWORKS, AND DATA FROM CYBER THREATS THROUGH HANDS-ON LABS, ETHICAL HACKING EXERCISES, AND REAL-WORLD SECURITY SCENARIOS.',
        image: 'https://images.unsplash.com/photo-1719255417989-b6858e87359e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMHNlY3VyaXR5JTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzU4NTQ5MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        icon: Shield,
        color: 'bg-red-600',
        specializations: [
            'NETWORK SECURITY',
            'ETHICAL HACKING',
            'DIGITAL FORENSICS',
            'RISK MANAGEMENT',
        ],
        careerPaths: [
            'SECURITY ANALYST',
            'PENETRATION TESTER',
            'SECURITY CONSULTANT',
            'FORENSICS SPECIALIST',
        ],
        jobOpportunities: [
            'CYBERSECURITY FIRMS',
            'GOVERNMENT & DEFENSE',
            'BANKING & FINANCIAL SERVICES',
            'HEALTHCARE & CRITICAL INFRASTRUCTURE',
            'CONSULTING & AUDIT FIRMS',
        ],
        averageSalary: '$98,000',
        employmentRate: '97%',
        spots: 90,
    },
    {
        id: 6,
        name: 'WEB DEVELOPMENT',
        code: 'WD-4006',
        duration: '4 YEARS',
        credits: '120 CREDITS',
        modules: 29,
        hoursPerWeek: 24,
        theoryPercent: 30,
        practicePercent: 70,
        description:
            'MODERN WEB TECHNOLOGIES PROGRAM COVERING FULL-STACK DEVELOPMENT AND USER EXPERIENCE DESIGN',
        introduction:
            'WEB DEVELOPMENT IS AT THE HEART OF THE DIGITAL ECONOMY. OUR PROGRAM FOCUSES ON MODERN FRAMEWORKS, RESPONSIVE DESIGN, AND USER-CENTERED DEVELOPMENT PRACTICES TO CREATE ENGAGING, FUNCTIONAL, AND SCALABLE WEB APPLICATIONS.',
        image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc1ODUxNTkwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        icon: Globe,
        color: 'bg-teal-500',
        specializations: [
            'FRONTEND DEVELOPMENT',
            'BACKEND SYSTEMS',
            'UI/UX DESIGN',
            'MOBILE WEB',
        ],
        careerPaths: [
            'WEB DEVELOPER',
            'FULL-STACK ENGINEER',
            'UX/UI DESIGNER',
            'FRONTEND ARCHITECT',
        ],
        jobOpportunities: [
            'WEB AGENCIES & DESIGN STUDIOS',
            'E-COMMERCE & DIGITAL PLATFORMS',
            'MEDIA & CONTENT COMPANIES',
            'TECH STARTUPS & SCALE-UPS',
            'FREELANCE & REMOTE OPPORTUNITIES',
        ],
        averageSalary: '$88,000',
        employmentRate: '95%',
        spots: 110,
    },
];
