import { Link } from "react-router-dom";

const AppNotFoundError = () => (
  <div className="flex flex-col items-center justify-center text-center py-20 px-4">
    <h1 className="text-5xl font-bold text-gray-800">OPPS!! APP NOT FOUND</h1>
    <p className="text-gray-600 mt-4">
      The App you are requesting is not found on our system, please try another
      apps
    </p>
    <Link
      to="/apps"
      className="mt-8 bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
    >
      Go Back!
    </Link>
  </div>
);

export default AppNotFoundError;
