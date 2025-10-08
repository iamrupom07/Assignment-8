// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import './index.css';


// --- CORRECTED IMPORTS ---
import HomePage from './components/pages/HomePage.jsx';
import AllAppsPage from './components/pages/AllAppsPage.jsx';
import AppDetailsPage from './components/pages/AppDetailsPage.jsx';
import InstallationPage from './components/pages/InstallationPage.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import AppNotFoundError from './components/pages/AppNotFoundError.jsx';

function App() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    // Loading animation on page navigation
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500); // Simulate loading
        return () => clearTimeout(timer);
    }, [location.pathname]);


    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Toaster position="top-center" reverseOrder={false} />
            <Header />
            <main className="flex-grow">
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/apps" element={<AllAppsPage />} />
                        <Route path="/installation" element={<InstallationPage />} />
                        <Route path="/app/:id" element={<AppDetailsPage />} />
                        <Route path="/app-not-found" element={<AppNotFoundError />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default App;