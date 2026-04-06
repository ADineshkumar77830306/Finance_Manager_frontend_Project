import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Threads from "../Components/Threads";
import ShinyText from '../Components/ShinyText';
import img from '../Images/Logo_.png';


const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <h1 className="text-xl flex gap-2 font-bold tracking-wide">
            <img src={img} alt="logo" className="w-6 h-6" />
          FinanceFlow
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-1.5 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-32">
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        <ShinyText
  text="✨Take Control of Your Financial Future"
  speed={3}
  delay={2}
  color="#b5b5b5"
  shineColor="#bff3f2"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
/>
</h1>
        <p className="mt-4 text-gray-300 max-w-xl text-lg italic">
          “Do not save what is left after spending , but spend what is left after saving.”
        </p>

        <span className="text-gray-400 text-sm mt-2">
          — Warren Buffett
        </span>

        <button
          className="mt-8 px-6 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-lg hover:shadow-blue-500/30"
          onClick={() => navigate("/register")}
        >
          Get Started
        </button>
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
        
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold">₹1M+</h2>
          <p className="text-gray-300 mt-2">Transactions Tracked</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold">10K+</h2>
          <p className="text-gray-300 mt-2">Active Users</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold">99%</h2>
          <p className="text-gray-300 mt-2">User Satisfaction</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20 px-8">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Choose FinanceFlow?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-lg font-semibold">📊 Smart Analytics</h3>
            <p className="text-gray-300 mt-2">
              Visualize your spending and income with powerful charts.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-lg font-semibold">🔐 Secure Data</h3>
            <p className="text-gray-300 mt-2">
              Your financial data is safe and encrypted.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-lg font-semibold">⚡ Fast & Simple</h3>
            <p className="text-gray-300 mt-2">
              Clean interface designed for speed and ease of use.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[50px]">

      </div>
    </div>
  );
};

export default Dashboard;