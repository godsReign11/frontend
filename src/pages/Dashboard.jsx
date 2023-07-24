import { Link } from "react-router-dom";
import DashBanner from "../layouts/BannerDash";

const Dashboard = () => {
  return (
    <div>
      <DashBanner name="Gods Reign Dashboard" />
      <div className="flex gap-4 mt-6">
        <Link
          to="/game-manager"
          className="block w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 duration-300"
        >
          <h5 className="mb-2 text-2xl font-bold text-gray-900">
            Total Live Matches
          </h5>
          <p className="mb-4 text-gray-700">
            Here you can see the total live streaming on the God's Reign
            Application
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs text-yellow-800 bg-yellow-200 rounded-xl hover:bg-yellow-300">
              Manage
            </button>
            <button className="px-3 py-1 text-xs text-blue-800 bg-blue-200 rounded-xl hover:bg-blue-300">
              View
            </button>
          </div>
        </Link>

        <Link
          to="/player-manager"
          className="block w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 duration-300"
        >
          <h5 className="mb-2 text-2xl font-bold text-gray-900">Players</h5>
          <p className="mb-4 text-gray-700">
            Here you can see the total players which are real-time available in
            the Application
          </p>
          <button className="px-3 py-1 text-xs text-yellow-800 bg-yellow-200 rounded-xl hover:bg-yellow-300">
            Manage
          </button>
        </Link>

        <Link
          to="/game-manager"
          className="block w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 duration-300"
        >
          <h5 className="mb-2 text-2xl font-bold text-gray-900">
            Game Categories
          </h5>
          <p className="text-gray-700">
            Here you can see the total live streaming on the God's Reign
            Application
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
