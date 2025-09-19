import { Outlet } from 'react-router';

import { Header, Footer } from '../sections';

export function RootLayout() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
