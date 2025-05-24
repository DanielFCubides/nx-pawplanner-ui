import React, {useState} from 'react';
import {LandingPage} from "./components/pages/LandingPage";
import {LoginPage} from "./components/pages/LoginPage";
import {UserDashboard} from "./components/pages/UserDashboard";

// Main App Component
const App = () => {
    const [currentPage, setCurrentPage] = useState('landing');
    const [user, setUser] = useState(null);

    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    const handleLogin = (userData) => {
        setUser(userData);
        setCurrentPage('dashboard');
    };

    const handleLogout = () => {
        setUser(null);
        setCurrentPage('landing');
    };

    return (
        <div className="min-h-screen">
            {currentPage === 'landing' && (
                <LandingPage onNavigate={handleNavigation} />
            )}

            {currentPage === 'login' && (
                <LoginPage onNavigate={handleNavigation} onLogin={handleLogin} />
            )}

            {currentPage === 'dashboard' && user && (
                <UserDashboard user={user} onLogout={handleLogout} />
            )}
        </div>
    );
};

export default App;