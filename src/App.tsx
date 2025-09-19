import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';

import { RootLayout } from './pages/RootLayout';
import { Home, About } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/academic-affairs"
                        element={<div>ACADEMIC AFFAIRS</div>}
                    />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/departments"
                        element={<div>DEPARTMENTS</div>}
                    />
                    <Route path="/news" element={<div>NEWS</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
