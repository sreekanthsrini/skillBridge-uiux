import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import API from "../../api/axios";
import { getCurrentUser } from "../../services/authService";

export function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", form);

      localStorage.setItem("token", res.data.token);

      const user = await getCurrentUser();
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/app");
    } catch (err: any) {
      alert(err.response?.data?.message || "Signup failed");
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
          <p className="opacity-90">Start your AI journey</p>
        </motion.div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center">

        <motion.form
          onSubmit={handleSignup}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-3xl shadow-xl w-[350px] space-y-5"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create Account
          </h2>

          {/* NAME */}
          <input
            placeholder="Name"
            className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          {/* EMAIL */}
          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl"
          >
            Signup
          </motion.button>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </motion.form>

      </div>
    </div>
  );
}