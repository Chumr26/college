import './App.css';
import {
    Header,
    Hero,
    Programs,
    EducationLevels,
    Stats,
    Features,
    CTA,
    Footer,
} from './sections';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Stats />
            {/* <Programs /> */}
            <EducationLevels />
            <Features />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
