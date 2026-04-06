import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import img from '../Images/Logo_.png';

export default function Login() {
  const navigate = useNavigate();

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault(); 

    setIsLoggingIn(true);

    setTimeout(() => {
      console.log("Logged in:", form);

      navigate("/home", { replace: true });
    }, 2000);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 relative">
      
      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-gray-300 bg-green-500 px-4 py-2 rounded-xl hover:text-white transition text-sm"
      >
        ← Back
      </button>

      {/* Card */}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8"
      >
        {/* Logo */}
        <h2 className="text-2xl font-bold text-center flex gap-1 justify-center text-green-400 mb-2">
          <img src={img} alt="logo" className="w-6 h-6" />
          FinanceFlow
        </h2>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center text-white mb-6">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="example@email.com"
            className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="••••••••"
            className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isLoggingIn}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-semibold transition shadow-lg hover:shadow-green-500/30 disabled:opacity-50"
        >
          {isLoggingIn ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-500"></div>
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>

        {/* Register */}
        <p className="text-sm text-center text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-green-400 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}