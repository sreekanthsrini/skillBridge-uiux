import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import API from "../../api/axios";
import { getCurrentUser } from "../../services/authService";

export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);

      const user = await getCurrentUser();
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/app");
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-indigo-50 via-white to-purple-100">

      {/* LEFT PANEL */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative text-white text-center px-10"
        >
          <h1 className="text-5xl font-bold mb-4">SkillBridge 🚀</h1>
          <p className="opacity-90">AI-powered career growth</p>
        </motion.div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center">

        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-3xl shadow-xl w-[350px] space-y-5"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back 👋
          </h2>

          {/* EMAIL */}
          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl"
          >
            Login
          </motion.button>

          <p className="text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            >
              Signup
            </span>
          </p>
        </motion.form>

      </div>
    </div>
  );
}