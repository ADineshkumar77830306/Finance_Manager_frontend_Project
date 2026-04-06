import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../Context/TransactionContext";
import Img from '../Images/profile_.jpg';
import { ToastContainer, toast } from 'react-toastify';

export default function Settings() {
  const navigate = useNavigate();
  const { role } = useContext(TransactionContext);

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

    const notify = () => toast("Will be Updated soon! ");

  // Theme toggle
  const handleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Settings
      </h2>

      {/* Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 space-y-6">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center border-b pb-6">
          
          <img
            src={Img} 
            alt="profile"
            className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-md"
          />

          <h3 className="mt-3 text-lg font-semibold text-gray-800 dark:text-white">
            {role.toUpperCase()} ACCOUNT
          </h3>

        </div>

        {/* Role Info */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-700 dark:text-white">
              Current Role
            </p>
            <p className="text-sm text-gray-500">
              You are logged in as {role}
            </p>
          </div>

          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm dark:bg-blue-900 dark:text-blue-300">
            {role.toUpperCase()}
          </span>
        </div>

        {/* Theme */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-700 dark:text-white">
              {darkMode ? "Dark Mode" : "Light Mode"}
            </p>
            <p className="text-sm text-gray-500">
              Toggle application theme
            </p>
          </div>

          <button
            onClick={handleTheme}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              darkMode ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* Notifications */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-700 dark:text-white">
              Notifications
            </p>
            <p className="text-sm text-gray-500">
              {notifications ? "Enabled" : "Disabled"}
            </p>
          </div>

          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              notifications ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                notifications ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* Link Account */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-700 dark:text-white">
              Link Bank Account
            </p>
            <p className="text-sm text-gray-500">
              Connect your bank for auto tracking
            </p>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm transition">
            Link
          </button>
        </div>

        {/* Security */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-700 dark:text-white">
              Change Password
            </p>
            <p className="text-sm text-gray-500">
              Update your account password
            </p>
          </div>

          <button className="border px-4 py-1.5 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Update
          </button>
        </div>

        {/* Logout */}
        <div className="pt-4 border-t">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}