// src/pages/ErrorPage.jsx
import { Link } from 'react-router-dom';

const ErrorPage = () => (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        {/* You can find and add a suitable SVG in /src/assets */}
        <h1 className="text-5xl font-bold text-gray-800">Oops, page not found!</h1>
        <p className="text-gray-600 mt-4">The page you are looking for is not available.</p>
        <Link to="/" className="mt-8 bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
            Go Back!
        </Link>
    </div>
);

export default ErrorPage;