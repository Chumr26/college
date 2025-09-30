import { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';

import { Header } from '../sections/Header/Desktop';
import { Footer } from '../sections/Footer';
import { AuthModal } from '../components/AuthModal';

export function RootLayout() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <Header setIsAuthModalOpen={setIsAuthModalOpen} />
            <main>
                <Outlet />
            </main>
            <Footer />
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
            <ScrollRestoration />
        </div>
    );
}
