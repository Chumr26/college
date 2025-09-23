import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../../../components/Accordion';
import {
    ArrowRight,
    Award,
    BarChart3,
    BookMarked,
    BookOpen,
    Briefcase,
    Building,
    Clock,
    Code,
    Database,
    Globe,
    Shield,
    Star,
    Target,
    Timer,
    TrendingUp,
    Users,
} from 'lucide-react';
import { Button } from '../../../components/Button';
import { ImageWithFallback } from '../../../components/ImageWithFallback';

export function College() {
    const undergraduatePrograms = [
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

    const admissionRequirements = [
        {
            title: 'HIGH SCHOOL DIPLOMA',
            description:
                'COMPLETION OF SECONDARY EDUCATION WITH MINIMUM 85% AVERAGE',
        },
        {
            title: 'STANDARDIZED TESTS',
            description: 'SAT (1350+) OR ACT (28+) SCORES REQUIRED',
        },
        {
            title: 'ENGLISH PROFICIENCY',
            description:
                'TOEFL (90+) OR IELTS (7.0+) FOR INTERNATIONAL STUDENTS',
        },
        {
            title: 'PREREQUISITE COURSES',
            description: 'MATHEMATICS, SCIENCE, AND ENGLISH AT ADVANCED LEVEL',
        },
    ];

    const programHighlights = [
        {
            icon: Users,
            title: 'SMALL CLASS SIZES',
            description: '15:1 STUDENT-FACULTY RATIO',
            color: 'bg-blue-400',
        },
        {
            icon: Award,
            title: 'INDUSTRY PARTNERSHIPS',
            description: 'INTERNSHIPS WITH TOP COMPANIES',
            color: 'bg-green-500',
        },
        {
            icon: Star,
            title: 'RESEARCH OPPORTUNITIES',
            description: 'UNDERGRADUATE RESEARCH PROGRAMS',
            color: 'bg-yellow-400',
        },
        {
            icon: TrendingUp,
            title: 'HIGH EMPLOYMENT RATE',
            description: '96% GRADUATES EMPLOYED',
            color: 'bg-purple-500',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-blue-400 border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-white text-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 uppercase tracking-wide">
                                UNDERGRADUATE PROGRAMS
                            </div>
                            <h1 className="text-6xl md:text-8xl tracking-tighter uppercase mb-6 leading-none text-white">
                                BACHELOR'S
                                <br />
                                <span className="bg-black text-white px-2">
                                    DEGREE
                                </span>
                                <br />
                                PROGRAMS
                            </h1>
                            <p className="text-xl mb-8 tracking-wide uppercase text-white">
                                Build your foundation for a<br />
                                successful technology career
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-white text-black border-4 border-black hover:bg-black hover:text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide">
                                    APPLY NOW
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-4 border-white bg-transparent text-white hover:bg-white hover:text-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide"
                                >
                                    PROGRAM GUIDE
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1686213011376-d20df949af59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaXZlcnNpdHklMjBncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTUyOTg0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="Undergraduate Students"
                                    className="w-full h-80 object-cover filter contrast-125"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
                                750+ SPOTS
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Highlights */}
            <section className="bg-white border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        PROGRAM
                        <br />
                        <span className="bg-black text-white px-2">
                            HIGHLIGHTS
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {programHighlights.map((highlight, index) => (
                            <div
                                key={index}
                                className={`${highlight.color} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 p-8 text-center`}
                            >
                                <highlight.icon className="w-16 h-16 mb-4 mx-auto text-white" />
                                <h3 className="text-xl mb-3 tracking-wide uppercase text-white">
                                    {highlight.title}
                                </h3>
                                <p className="text-white uppercase tracking-wide text-sm">
                                    {highlight.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Programs Accordion */}
            <section className="bg-gray-50 border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        AVAILABLE
                        <br />
                        <span className="bg-red-500 text-white px-2">
                            PROGRAMS
                        </span>
                    </h2>

                    <Accordion type="single" collapsible className="space-y-8">
                        {undergraduatePrograms.map((program) => (
                            <AccordionItem
                                key={program.id}
                                value={`program-${program.id}`}
                                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                            >
                                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-6">
                                            <div
                                                className={`${program.color} border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                                            >
                                                <program.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="text-left">
                                                <h3 className="text-2xl md:text-3xl tracking-tighter uppercase mb-2">
                                                    {program.name}
                                                </h3>
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-yellow-400 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                        <span className="text-sm tracking-wide uppercase">
                                                            {program.code}
                                                        </span>
                                                    </div>
                                                    <div className="bg-gray-100 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                        <span className="text-sm tracking-wide uppercase">
                                                            {program.duration}
                                                        </span>
                                                    </div>
                                                    <div className="bg-red-500 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                        <span className="text-sm tracking-wide uppercase text-white">
                                                            {program.spots}{' '}
                                                            SPOTS
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionTrigger>

                                <AccordionContent className="px-8 pb-8">
                                    <div className="space-y-8">
                                        {/* Program Details Panel */}
                                        <div className="grid lg:grid-cols-3 gap-8">
                                            {/* Program Info Card */}
                                            <div
                                                className={`${program.color} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 text-white`}
                                            >
                                                <h4 className="text-2xl tracking-tighter uppercase mb-4">
                                                    PROGRAM DETAILS
                                                </h4>
                                                <div className="relative h-48 mb-4">
                                                    <ImageWithFallback
                                                        src={program.image}
                                                        alt={program.name}
                                                        className="w-full h-full object-cover border-2 border-black"
                                                    />
                                                </div>
                                                <p className="text-sm uppercase tracking-wide leading-relaxed opacity-90">
                                                    {program.description}
                                                </p>
                                                <div className="grid grid-cols-2 gap-2 mt-4">
                                                    <div className="bg-white text-black border-2 border-black p-2 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                        <div className="text-xs uppercase tracking-wide">
                                                            EMPLOYMENT
                                                        </div>
                                                        <div className="text-lg tracking-tighter uppercase">
                                                            {
                                                                program.employmentRate
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="bg-white text-black border-2 border-black p-2 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                        <div className="text-xs uppercase tracking-wide">
                                                            AVG SALARY
                                                        </div>
                                                        <div className="text-lg tracking-tighter uppercase">
                                                            {
                                                                program.averageSalary
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Highlights Panel */}
                                            <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
                                                <h4 className="text-2xl tracking-tighter uppercase mb-6 flex items-center gap-2">
                                                    <BookOpen className="w-6 h-6" />
                                                    HIGHLIGHTS
                                                </h4>

                                                {/* Introduction */}
                                                <div className="mb-6">
                                                    <h5 className="text-lg tracking-wide uppercase mb-3 flex items-center gap-2">
                                                        <Target className="w-4 h-4" />
                                                        INTRODUCTION
                                                    </h5>
                                                    <p className="text-sm uppercase tracking-wide text-gray-600 leading-relaxed">
                                                        {program.introduction}
                                                    </p>
                                                </div>

                                                {/* Specializations */}
                                                <div className="mb-6">
                                                    <h5 className="text-lg tracking-wide uppercase mb-3">
                                                        SPECIALIZATIONS
                                                    </h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {program.specializations.map(
                                                            (spec, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="bg-gray-100 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs uppercase tracking-wide"
                                                                >
                                                                    {spec}
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Job Opportunities */}
                                                <div>
                                                    <h5 className="text-lg tracking-wide uppercase mb-3 flex items-center gap-2">
                                                        <Briefcase className="w-4 h-4" />
                                                        JOB OPPORTUNITIES
                                                    </h5>
                                                    <ul className="space-y-2">
                                                        {program.jobOpportunities.map(
                                                            (
                                                                opportunity,
                                                                index
                                                            ) => (
                                                                <li
                                                                    key={index}
                                                                    className="text-sm uppercase tracking-wide text-gray-600 flex items-center gap-2"
                                                                >
                                                                    <div className="w-2 h-2 bg-black border border-black"></div>
                                                                    {
                                                                        opportunity
                                                                    }
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Metrics Panel */}
                                            <div className="bg-black text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
                                                <h4 className="text-2xl tracking-tighter uppercase mb-6 flex items-center gap-2">
                                                    <BarChart3 className="w-6 h-6" />
                                                    METRICS
                                                </h4>

                                                <div className="space-y-4">
                                                    {/* Academic Metrics */}
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                                <BookMarked className="w-4 h-4" />
                                                                <span className="text-xs uppercase tracking-wide">
                                                                    MODULES
                                                                </span>
                                                            </div>
                                                            <div className="text-2xl tracking-tighter uppercase">
                                                                {
                                                                    program.modules
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                                <Award className="w-4 h-4" />
                                                                <span className="text-xs uppercase tracking-wide">
                                                                    CREDITS
                                                                </span>
                                                            </div>
                                                            <div className="text-2xl tracking-tighter uppercase">
                                                                {
                                                                    program.credits
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                                <Timer className="w-4 h-4" />
                                                                <span className="text-xs uppercase tracking-wide">
                                                                    HRS/WEEK
                                                                </span>
                                                            </div>
                                                            <div className="text-2xl tracking-tighter uppercase">
                                                                {
                                                                    program.hoursPerWeek
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="bg-white text-black border-2 border-white p-3 text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                                <Clock className="w-4 h-4" />
                                                                <span className="text-xs uppercase tracking-wide">
                                                                    DURATION
                                                                </span>
                                                            </div>
                                                            <div className="text-2xl tracking-tighter uppercase">
                                                                {
                                                                    program.duration
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Theory vs Practice Split */}
                                                    <div className="bg-white text-black border-2 border-white p-4 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                                        <h5 className="text-sm uppercase tracking-wide mb-3 text-center">
                                                            THEORY VS PRACTICE
                                                        </h5>
                                                        <div className="flex">
                                                            <div
                                                                className="bg-blue-500 h-6 border-r border-black flex items-center justify-center text-xs text-white uppercase tracking-wide"
                                                                style={{
                                                                    width: `${program.theoryPercent}%`,
                                                                }}
                                                            >
                                                                {
                                                                    program.theoryPercent
                                                                }
                                                                %
                                                            </div>
                                                            <div
                                                                className="bg-green-500 h-6 flex items-center justify-center text-xs text-white uppercase tracking-wide"
                                                                style={{
                                                                    width: `${program.practicePercent}%`,
                                                                }}
                                                            >
                                                                {
                                                                    program.practicePercent
                                                                }
                                                                %
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between text-xs uppercase tracking-wide mt-2">
                                                            <span>THEORY</span>
                                                            <span>
                                                                PRACTICE
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Career Outcomes */}
                                                    <div>
                                                        <h5 className="text-sm uppercase tracking-wide mb-3">
                                                            CAREER PATHS
                                                        </h5>
                                                        <div className="space-y-2">
                                                            {program.careerPaths.map(
                                                                (
                                                                    career,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="text-xs uppercase tracking-wide text-gray-300 flex items-center gap-2"
                                                                    >
                                                                        <div className="w-2 h-2 bg-white border border-white"></div>
                                                                        {career}
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-4 border-black">
                                            <Button className="bg-black text-white border-4 border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-4 uppercase tracking-wide">
                                                APPLY FOR {program.name}
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="border-4 border-black bg-white text-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-4 uppercase tracking-wide"
                                            >
                                                DOWNLOAD CURRICULUM
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="border-4 border-black bg-white text-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-6 py-4 uppercase tracking-wide"
                                            >
                                                SCHEDULE MEETING
                                            </Button>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Admission Requirements */}
            <section className="bg-yellow-400 border-b-4 border-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center">
                        ADMISSION
                        <br />
                        <span className="bg-black text-white px-2">
                            REQUIREMENTS
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {admissionRequirements.map((requirement, index) => (
                            <div
                                key={index}
                                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 p-6 text-center"
                            >
                                <div className="bg-black text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 uppercase tracking-wide">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <h3 className="text-lg mb-3 tracking-wide uppercase">
                                    {requirement.title}
                                </h3>
                                <p className="text-gray-600 uppercase tracking-wide text-sm">
                                    {requirement.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Application Timeline */}
                    <div className="mt-16 bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
                        <h3 className="text-3xl md:text-4xl mb-8 tracking-tighter uppercase text-center">
                            APPLICATION TIMELINE
                        </h3>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-2xl md:text-3xl tracking-tighter uppercase mb-2">
                                    OCT 1
                                </div>
                                <p className="uppercase tracking-wide">
                                    APPLICATIONS OPEN
                                </p>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl tracking-tighter uppercase mb-2">
                                    JAN 15
                                </div>
                                <p className="uppercase tracking-wide">
                                    EARLY DECISION DEADLINE
                                </p>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl tracking-tighter uppercase mb-2">
                                    MAR 15
                                </div>
                                <p className="uppercase tracking-wide">
                                    REGULAR DECISION DEADLINE
                                </p>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl tracking-tighter uppercase mb-2">
                                    APR 1
                                </div>
                                <p className="uppercase tracking-wide">
                                    ADMISSION DECISIONS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-green-500 border-b-4 border-black py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-8 text-white">
                        START YOUR
                        <br />
                        <span className="bg-white text-black px-2">
                            JOURNEY TODAY
                        </span>
                    </h2>
                    <p className="text-xl mb-8 text-white uppercase tracking-wide">
                        JOIN THE NEXT GENERATION OF TECHNOLOGY LEADERS
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-black border-4 border-black hover:bg-black hover:text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide">
                            APPLY NOW
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-transparent text-white border-4 border-white hover:bg-white hover:text-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide"
                        >
                            SCHEDULE CAMPUS TOUR
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-transparent text-white border-4 border-white hover:bg-white hover:text-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 px-8 py-6 uppercase tracking-wide"
                        >
                            DOWNLOAD BROCHURE
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
