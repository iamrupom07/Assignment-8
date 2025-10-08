// src/components/common/AppCard.jsx
import { Link } from 'react-router-dom';
import { FaDownload, FaStar } from 'react-icons/fa';
import { formatDownloads } from '../../utils/formatters';

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="block p-4 border rounded-lg shadow-sm hover:shadow-xl transition-shadow bg-white flex flex-col">
      <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded-md mb-4 bg-gray-200" />
      <h3 className="text-lg font-semibold truncate flex-grow">{app.title}</h3>
      <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
        <span className="flex items-center gap-1">
          <FaDownload /> {formatDownloads(app.downloads)}
        </span>
        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-500" /> {app.ratingAvg}
        </span>
      </div>
    </Link>
  );
};

export default AppCard;