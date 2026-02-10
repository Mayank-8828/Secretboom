import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import VotePage from './components/VotePage';
import ThemeToggle from './components/ThemeToggle';
import Background from './components/Background';

function App() {
    return (
        <BrowserRouter>
            <Background />
            <ThemeToggle />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/vote/:pollId" element={<VotePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
