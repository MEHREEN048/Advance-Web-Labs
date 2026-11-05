
import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import './App.css';

function App() {
    return (
        <div className="app">
            <header>
                <h1>Mehreen's React Studio</h1>
                <p>Learning React Through Components & State</p>
            </header>

            <Welcome />

            <div className="sections">
                <Counter initialCount={5} />
                <Toggle />
            </div>

            <footer>
                Designed with React | Lab Assessment
            </footer>
        </div>
    );
}

export default App;
