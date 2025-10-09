import { useState } from 'react';

import { Hero } from './Hero';
import { LevelProgram } from './LevelProgram';
import { Personal } from './Personal';
import { Background } from './Background';
import { Submit } from './Submit';

export type FormData = {
    lastMiddleName: string;
    firstName: string;
    gender: string;
    dateOfBirth: string;
    placeOfBirth: string;
    ethnicGroup: string;
    identityCardNumber?: number;
    identityCardIssueDate: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    zipCode: string;
    previousEducation: string;
    gpa: string;
    personalStatement: string;
};

export function Form({ onSubmit }: { onSubmit: (value: boolean) => void }) {
    const [formData, setFormData] = useState<FormData>({
        lastMiddleName: '',
        firstName: '',
        gender: '',
        dateOfBirth: '',
        placeOfBirth: '',
        ethnicGroup: '',
        identityCardNumber: undefined,
        identityCardIssueDate: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        previousEducation: '',
        gpa: '',
        personalStatement: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            // Reset major when level changes
            ...(name === 'level' ? { major: '' } : {}),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(true);
        window.scrollTo(0, 0);
    };
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
            {/* Hero Section */}
            <Hero />

            {/* Application Form */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <form id="application-form" onSubmit={handleSubmit}>
                            {/* Education Level & Program */}
                            <LevelProgram />

                            {/* Personal Information */}
                            <Personal
                                formData={formData}
                                handleInputChange={handleInputChange}
                                handleSelectChange={handleSelectChange}
                            />
                            {/* Academic Background */}
                            <Background
                                formData={formData}
                                handleInputChange={handleInputChange}
                            />

                            {/* Submit Section */}
                            <Submit />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
