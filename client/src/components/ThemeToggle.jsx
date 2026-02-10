import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('unbiased-theme') || 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('unbiased-theme', theme);
    }, [theme]);

    const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

    return (
        <button className="theme-toggle" onClick={toggle} title="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
}
