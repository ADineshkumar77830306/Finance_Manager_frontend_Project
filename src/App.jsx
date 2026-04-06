import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";

import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Transactions from "./Pages/Transactions";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import Admin from "./Pages/Admin";
// import Footer from "./Components/Footer";

function App() {
  return (
    <div>
    <Routes>
      {/* Public Pages */}

      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Layout (NO AUTH CHECK) */}

      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      </Routes>
 
      </div>
  );
}

export default App;
