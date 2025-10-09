// import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { RootLayout } from './pages/RootLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { College } from './pages/AcademicAffairs/College';
import { Intermediate } from './pages/AcademicAffairs/Intermediate';
import { InterUniversity } from './pages/AcademicAffairs/InterUniversity.tsx';
import { Department } from './pages/Department/index.tsx';
import { News } from './pages/News/index.tsx';
import { Apply } from './pages/Apply/index.tsx';
import { ThemeProvider } from './contextProvider/ThemeProvider.tsx';

const router = createBrowserRouter([
    {
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            {
                path: 'academic-affairs',
                children: [
                    { path: 'college', Component: College },
                    { path: 'intermediate', Component: Intermediate },
                    { path: 'inter-university', Component: InterUniversity },
                ],
            },
            { path: 'about', Component: About },
            { path: 'departments', Component: Department },
            { path: 'news', Component: News },
            { path: 'apply', Component: Apply },
        ],
    },
]);

function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
