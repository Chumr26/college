import { useState } from 'react';

import { Dialog, DialogContent, DialogHeader } from '../Dialog';
import { ModalHeader } from './ModalHeader';
import { Email } from './Email';
import { Password } from './Password';
import { RememberMe } from './RememberMe';
import { Instructions } from './Instructions';
import { Submit } from './Submit';
import { ModeSwitcher } from './ModeSwitcher';
import { AdditionalInfo } from './AdditionalInfo';
import { Help } from './Help';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [authMode, setAuthMode] = useState<'login' | 'forgot'>('login');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (authMode === 'login') {
            console.log('Login attempt:', {
                email: formData.email,
                password: formData.password,
            });
            // Handle login logic here
        } else {
            console.log('Password reset request:', { email: formData.email });
            // Handle password reset logic here
        }
        // Close modal after successful submission
        onClose();
    };

    const resetAndClose = () => {
        setAuthMode('login');
        setFormData({
            email: '',
            password: '',
            rememberMe: false,
        });
        setShowPassword(false);
        onClose();
    };

    return (
        <Dialog
            open={isOpen}
            onOpenChange={resetAndClose}
        >
            <DialogContent className="max-w-lg p-0 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] gap-0">
                <DialogHeader className="p-0">
                    {/* Modal Header */}
                    <ModalHeader
                        authMode={authMode}
                        resetAndClose={resetAndClose}
                    />
                </DialogHeader>

                {/* Modal Content */}
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field */}
                        <Email
                            formData={formData}
                            handleInputChange={handleInputChange}
                        />

                        {/* Password Field - Login Only */}
                        <Password
                            authMode={authMode}
                            formData={formData}
                            handleInputChange={handleInputChange}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                        />

                        {/* Remember Me - Login Only */}
                        <RememberMe
                            authMode={authMode}
                            formData={formData}
                            handleInputChange={handleInputChange}
                        />

                        {/* Instructions for Password Reset */}
                        <Instructions authMode={authMode} />

                        {/* Submit Button */}
                        <Submit authMode={authMode} />
                    </form>

                    {/* Mode Switcher */}
                    <ModeSwitcher
                        authMode={authMode}
                        setAuthMode={setAuthMode}
                        setShowPassword={setShowPassword}
                        setFormData={setFormData}
                    />

                    {/* Additional Info */}
                    <AdditionalInfo authMode={authMode} />

                    {/* Help Section */}
                    <Help />
                </div>
            </DialogContent>
        </Dialog>
    );
}
