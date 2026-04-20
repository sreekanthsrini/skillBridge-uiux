import { useState } from "react";
import API from "../../api/axios";
import { motion } from "framer-motion";

export function LearningRoadmapPage() {

  const [role, setRole] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!role) {
      alert("Please select a role");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/roadmap", { role });
      setRoadmap(res.data.roadmap);
    } catch (err: any) {
      console.error(err);
      alert("Failed to generate roadmap");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 p-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          AI Learning Roadmap 🚀
        </h1>
        <p className="text-gray-500 mt-2">
          Personalized weekly plan powered by AI
        </p>
      </motion.div>

      {/* ROLE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-200 max-w-xl mx-auto"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          🎯 Choose Your Career Path
        </h3>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="
            w-full p-3 rounded-xl border bg-white text-gray-800
            focus:ring-2 focus:ring-indigo-500 outline-none transition
          "
        >
          <option value="">Select Role</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>Mobile Developer</option>
          <option>Data Analyst</option>
          <option>Data Scientist</option>
          <option>UI/UX Designer</option>
          <option>DevOps Engineer</option>
          <option>Security Engineer</option>
          <option>ML Engineer</option>
          <option>Blockchain Developer</option>
          <option>Database Administrator</option>
        </select>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGenerate}
          disabled={loading}
          className="
            mt-6 w-full 
            bg-gradient-to-r from-indigo-600 to-purple-600 
            text-white py-3 rounded-xl font-semibold 
            shadow-md hover:shadow-xl transition
            disabled:opacity-50
          "
        >
          {loading ? "Generating AI Roadmap..." : "Generate Roadmap"}
        </motion.button>
      </motion.div>

      {/* LOADING STATE */}
      {loading && (
        <div className="text-center mt-10 text-indigo-600 font-semibold animate-pulse">
          🤖 AI is preparing your roadmap...
        </div>
      )}

      {/* ROADMAP */}
      {roadmap && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 max-w-3xl mx-auto space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800 text-center">
            📅 Your Personalized Roadmap
          </h3>

          {formatRoadmap(roadmap)}
        </motion.div>
      )}
    </div>
  );
}


/* 🔥 IMPROVED CARD UI */
function formatRoadmap(text: string) {

  const weeks = text.split("Week");

  return weeks
    .filter((w) => w.trim() !== "")
    .map((week, index) => {

      const lines = week.split("\n").filter(l => l.trim() !== "");

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="
            p-6 rounded-2xl 
            bg-white shadow-md 
            border border-gray-200
            hover:shadow-xl hover:-translate-y-1
            transition
          "
        >
          <h4 className="font-bold text-indigo-600 text-lg mb-3">
            📘 Week {lines[0].trim()}
          </h4>

          <ul className="space-y-2 text-sm text-gray-700">
            {lines.slice(1).map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-2"
              >
                <span className="text-indigo-500">✔</span>
                <span>{line.replace("-", "").trim()}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      );
    });
}