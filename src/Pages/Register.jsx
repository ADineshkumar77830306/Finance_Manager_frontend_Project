import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import img from '../Images/Logo_.png';

export default function Register() {
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 

    setIsRegistering(true);

    setTimeout(() => {
      console.log("Registered:", form);
      navigate("/home", { replace: true });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 relative">
      
      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-gray-300 bg-blue-500 px-4 py-2 rounded-xl hover:text-white transition text-sm"
      >
        ← Back
      </button>

      {/* Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8"
      >
        {/* Logo */}
        <h2 className="text-2xl font-bold text-center flex justify-center gap-1 text-blue-400 mb-2">
          <img src={img} alt="logo" className="w-6 h-6" />
          FinanceFlow
        </h2>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center text-white mb-6">
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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
            placeholder="••••••••"
            className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isRegistering}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg font-semibold transition shadow-lg hover:shadow-blue-500/30 disabled:opacity-50"
        >
          {isRegistering ? "Registering..." : "Register"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-500"></div>
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>

        {/* Login */}
        <p className="text-sm text-center text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}