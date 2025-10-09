import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import toast from "react-hot-toast";

import LoadingSpinner from "../common/LoadingSpinner";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const AppDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installedApps, setInstalledApps] = useLocalStorage(
    "installedApps",
    []
  );

  const isInstalled = installedApps.includes(parseInt(id));

  useEffect(() => {
    fetch("/data/appData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((a) => a.id === parseInt(id));
        if (foundApp) {
          setApp(foundApp);
        } else {
          navigate("/app-not-found");
        }
        setLoading(false);
      });
  }, [id, navigate]);

  const handleInstall = () => {
    if (!isInstalled) {
      setInstalledApps([...installedApps, app.id]);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (!app) return null;
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src={app.image}
          alt={app.title}
          className="w-48 h-48 rounded-lg shadow-lg object-cover bg-gray-200"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{app.title}</h1>
          <p className="text-gray-500">by {app.companyName}</p>
          <div className="flex items-center gap-6 my-4 text-center">
            <div>
              <p className="font-bold text-lg">{app.ratingAvg} ★</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="font-bold text-lg">
                {app.reviews.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Total Reviews</p>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-green-600 transition-colors"
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart
                data={app.ratings}
                layout="vertical"
                margin={{ left: 20 }}
              >
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={60}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip cursor={{ fill: "#f3f4f6" }} />
                <Bar
                  dataKey="count"
                  fill="#8B5CF6"
                  barSize={25}
                  radius={[0, 10, 10, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
