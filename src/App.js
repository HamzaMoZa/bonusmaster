import React from 'react';
import CardSelector from './components/CardSelector';
import CardList from './components/CardList';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <CardSelector />
            <CardList />
        </div>
    );
}

export default App;
