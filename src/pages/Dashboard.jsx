import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-3">
        <Link
          to="/game-manager"
          className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total Live Matches
          </h5>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            Here you can see the total live streaming on the God's Reign
            Application
          </p>
          <div className="flex gap-2">
            <button className="text-yellow-800 py-1.5 px-3 text-xs bg-yellow-50 rounded-xl">
              Manage
            </button>
            <button className="text-blue-800 py-1.5 px-3 text-xs bg-blue-50 rounded-xl">
              View
            </button>
          </div>
        </Link>

        <Link
          to="/player-manager"
          className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Players
          </h5>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            Here you can see the total players which are realitime available in
            the Application
          </p>
          <button className="text-yellow-800 py-1.5 px-3 text-xs bg-yellow-50 rounded-xl">
            Manage
          </button>
        </Link>

        <Link
          to="/game-manager"
          className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Game Categories
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here you can see the total live streaming on the God's Reign
            Application
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
