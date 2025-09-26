import { Hero } from './Hero';
import { Stats } from './Stats';
import { Departments } from './Departments';
import { Faculties } from './Faculties';
import { Centers } from './Centers';

export function Department() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <Stats />
            <Departments />
            <Faculties />
            <Centers />
        </div>
    );
}
