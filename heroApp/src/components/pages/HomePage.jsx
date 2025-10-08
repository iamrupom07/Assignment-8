// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppCard from '../common/AppCard';
import LoadingSpinner from '../common/LoadingSpinner';


const HomePage = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/appData.json')
            .then(res => res.json())
            .then(data => {
                setApps(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <LoadingSpinner />;

    return (
        <div>
            {/* Banner Section */}
            <section className="text-center py-20 px-4 bg-white">
                <h1 className="text-5xl md:text-6xl font-extrabold text-purple-600">We Build Productive Apps</h1>
                <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                    At AppVerse, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold">Google Play</button>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">App Store</button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-purple-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Trusted By Millions, Built For You</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-5xl font-bold">29.6M</p>
                            <p className="text-purple-200">Total Downloads</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">906K</p>
                            <p className="text-purple-200">Total Reviews</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">132+</p>
                            <p className="text-purple-200">Active Apps</p>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Trending Apps</h2>
                    <p className="text-gray-600 mt-2">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {apps.slice(0, 8).map(app => <AppCard key={app.id} app={app} />)}
                </div>
                <div className="text-center mt-12">
                    <Link to="/apps" className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700">
                        Show All
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;