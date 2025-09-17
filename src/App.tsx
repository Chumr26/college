import './App.css';
import {
    Header,
    Hero,
    Programs,
    EducationLevels,
    Stats,
    Features,
    Partners,
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
            <Partners />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
