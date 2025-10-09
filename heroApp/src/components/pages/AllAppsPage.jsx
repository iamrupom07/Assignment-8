import NotFound from "../../photo/App-Error.png";
import { useState, useEffect, useMemo } from "react";

import LoadingSpinner from "../common/LoadingSpinner";
import AppCard from "../common/AppCard";
import { Link } from "react-router-dom";

const AllAppsPage = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/data/appData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      });
  }, []);

  const filteredApps = useMemo(() => {
    if (!searchTerm) return apps;
    return apps.filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [apps, searchTerm]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-gray-600 mt-2">
          Explore All Apps on the Market developed by us.
        </p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <p className="font-semibold">{filteredApps.length} Apps Found</p>
        <input
          type="search"
          placeholder="Search Apps..."
          className="border rounded-md px-4 py-2 w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col">
          <img src={NotFound} alt="" />
          <p className="text-center text-2xl text-gray-500 mt-10">
            App is not found
          </p>
          <Link
            to="/"
            className="mt-8 bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Go Back Home!
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllAppsPage;
