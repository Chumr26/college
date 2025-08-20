import './App.css';
import { Header, Hero, Programs, Stats } from './sections';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Stats />
            <Programs />
        </div>
    );
}

export default App;
