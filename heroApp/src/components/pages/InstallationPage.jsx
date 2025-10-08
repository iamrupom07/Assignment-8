// src/pages/InstallationPage.jsx
import { useState, useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import LoadingSpinner from '../common/LoadingSpinner';
import { FaDownload, FaStar } from 'react-icons/fa';
import { formatDownloads } from '../../utils/formatters';

const InstallationPage = () => {
    const [allApps, setAllApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [installedAppIds, setInstalledAppIds] = useLocalStorage('installedApps', []);
    const [sortOrder, setSortOrder] = useState('default');

    useEffect(() => {
        fetch('/data/appData.json')
            .then(res => res.json())
            .then(data => {
                setAllApps(data);
                setLoading(false);
            });
    }, []);

    const installedApps = useMemo(() => {
        return allApps.filter(app => installedAppIds.includes(app.id));
    }, [allApps, installedAppIds]);

    const handleUninstall = (appId, appTitle) => {
        setInstalledAppIds(installedAppIds.filter(id => id !== appId));
        toast.error(`${appTitle} has been uninstalled.`);
    };

    const sortedApps = useMemo(() => {
        let sortableApps = [...installedApps];
        if (sortOrder === 'high-low') {
            return sortableApps.sort((a, b) => b.downloads - a.downloads);
        }
        if (sortOrder === 'low-high') {
            return sortableApps.sort((a, b) => a.downloads - b.downloads);
        }
        return sortableApps;
    }, [installedApps, sortOrder]);

    if (loading) return <LoadingSpinner />;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Your Installed Apps</h1>
                <p className="text-gray-600 mt-2">Manage all the applications you have installed.</p>
            </div>
            <div className="flex justify-between items-center mb-6">
                <p className="font-semibold">{sortedApps.length} Apps Found</p>
                <select className="border rounded-md px-4 py-2" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                    <option value="default">Sort By Size</option>
                    <option value="high-low">High-Low</option>
                    <option value="low-high">Low-High</option>
                </select>
            </div>
            <div className="space-y-4">
                {sortedApps.length > 0 ? (
                    sortedApps.map(app => (
                        <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
                            <div className="flex items-center gap-4">
                                <img src={app.image} alt={app.title} className="w-16 h-16 rounded-md object-cover bg-gray-200" />
                                <div>
                                    <h3 className="text-lg font-semibold">{app.title}</h3>
                                         <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                                                <span className="flex items-center gap-1">
                                                  <FaDownload /> {formatDownloads(app.downloads)}
                                                </span>
                                                <span className="flex items-center gap-1 font-bold">
                                                   {app.size} MB
                                                </span>
                                              </div>
                                </div>
                            </div>
                            <button onClick={() => handleUninstall(app.id, app.title)} className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600">
                                Uninstall
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-xl text-gray-500 mt-20">You have no installed apps.</p>
                )}
            </div>
        </div>
    );
};

export default InstallationPage;