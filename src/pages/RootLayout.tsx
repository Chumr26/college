import { Outlet, ScrollRestoration } from 'react-router';

import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';

export function RootLayout() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    );
}
