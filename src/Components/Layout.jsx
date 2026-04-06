import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import { FaUser, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TransactionContext } from "../Context/TransactionContext";
import { MdDarkMode } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { ThemeContext } from "../Context/ThemeContext";
import img from "../Images/Logo_.png";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role, setRole } = useContext(TransactionContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 🔥 mobile menu

  // Role change
  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setRole(newRole);

    if (newRole === "admin") navigate("/admin");
    else navigate("/home");
  };

  // Logout
  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      localStorage.clear();
      navigate("/", { replace: true });
    }, 2000);
  };

  // Active link
  const navLink = (path) =>
    `cursor-pointer font-medium transition ${
      location.pathname === path
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black transition">
      
      {/* Navbar */}
      <nav className="bg-white dark:bg-purple-400 shadow-md px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1
          className="text-xl flex items-center gap-2 font-bold cursor-pointer text-blue-900 dark:text-black"
          onClick={() => navigate("/home")}
        >
          <img src={img} alt="logo" className="w-6 h-6" />
          FinanceFlow
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <span onClick={() => navigate("/home")} className={navLink("/home")}>
            Home
          </span>
          <span onClick={() => navigate("/transactions")} className={navLink("/transactions")}>
            Transactions
          </span>
          <span onClick={() => navigate("/reports")} className={navLink("/reports")}>
            Insights
          </span>
          <span onClick={() => navigate("/settings")} className={navLink("/settings")}>
            Settings
          </span>
        </div>
        
        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Theme */}
          <button onClick={toggleTheme} className="text-xl">
            {darkMode ? <IoIosSunny /> : <MdDarkMode />}
          </button>

          {/* Role */}
          <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-sm dark:bg-blue-900">
            <FaUser />
            <select
              value={role}
              onChange={handleRoleChange}
              className="bg-transparent outline-none"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1.5 rounded-lg text-sm"
          >
            {isLoggingOut ? "Logging..." : "Logout"}
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-4 shadow-md">
          
          <div onClick={() => {navigate("/home"); setMenuOpen(false);}} className={navLink("/home")}>
            Home
          </div>

          <div onClick={() => {navigate("/transactions"); setMenuOpen(false);}} className={navLink("/transactions")}>
            Transactions
          </div>

          <div onClick={() => {navigate("/reports"); setMenuOpen(false);}} className={navLink("/reports")}>
            Insights
          </div>

          <div onClick={() => {navigate("/settings"); setMenuOpen(false);}} className={navLink("/settings")}>
            Settings
          </div>

          {/* Divider */}
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Theme */}
          <button onClick={toggleTheme} className="flex items-center gap-2">
            {darkMode ? <IoIosSunny /> : <MdDarkMode />}
            Toggle Theme
          </button>

          {/* Role */}
          <div className="flex items-center gap-2">
            <FaUser />
            <select value={role} onChange={handleRoleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      )}

      {/* Page Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;