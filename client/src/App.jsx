import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import VotePage from './components/VotePage';
import ThemeToggle from './components/ThemeToggle';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Background />
            <Header />
            <ThemeToggle />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/vote/:pollId" element={<VotePage />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
