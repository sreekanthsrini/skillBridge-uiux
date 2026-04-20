import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import API from "../../api/axios";

export function DashboardPage() {

  const [user, setUser] = useState<any>(null);
  const [analysis, setAnalysis] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));

    fetchAnalysis();
  }, []);

  // 🔥 FETCH AI RESULT
  const fetchAnalysis = async () => {
    try {
      const res = await API.get("/resume");
      setAnalysis(res.data);
    } catch (err) {
      console.error("No resume analysis yet");
    }
  };

  // 🔥 LEVEL COLOR
  const getLevelColor = (level: string) => {
    if (level === "Beginner") return "bg-red-500";
    if (level === "Intermediate") return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">

      {/* 🔥 Welcome */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold">
          Welcome back, {user?.name || "User"} 👋
        </h2>
        <p className="mt-2 text-sm opacity-90">
          Your AI-powered career journey starts here 🚀
        </p>
      </div>

      {/* 🔥 AI PERFORMANCE */}
      {analysis && (
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">

          <h3 className="text-lg font-semibold">
            Your AI Performance
          </h3>

          {/* SCORE */}
          <div className="flex justify-between">
            <span>Score</span>
            <span className="text-xl font-bold text-indigo-600">
              {analysis.score}/100
            </span>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div
              className="bg-indigo-600 h-3 rounded-full"
              style={{ width: `${analysis.score}%` }}
            ></div>
          </div>

          {/* LEVEL */}
          <span className={`inline-block px-4 py-1 text-white rounded-full text-sm ${getLevelColor(analysis.level)}`}>
            {analysis.level}
          </span>

        </div>
      )}

      {/* 🚀 MAIN FEATURES */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Start Your Preparation
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Role */}
          <div
            onClick={() => navigate("/app/role-selection")}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white cursor-pointer shadow-lg hover:scale-105 transition"
          >
            <h4 className="text-xl font-bold">
              Role-Based Preparation
            </h4>
            <p className="mt-2 text-sm opacity-90">
              AI roadmap based on your level
            </p>
          </div>

          {/* Company */}
          <div
            onClick={() => navigate("/app/company-selection")}
            className="p-6 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 text-white cursor-pointer shadow-lg hover:scale-105 transition"
          >
            <h4 className="text-xl font-bold">
              Company Preparation
            </h4>
            <p className="mt-2 text-sm opacity-90">
              Mock tests & real interview patterns
            </p>
          </div>

        </div>
      </div>

      {/* ⚡ QUICK ACTIONS */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Quick Actions
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <QuickCard title="Assessment" onClick={() => navigate("/app/role-selection")} />
          <QuickCard title="Roadmap" onClick={() => navigate("/app/learning-roadmap/1")} />
          <QuickCard title="Mock Test" onClick={() => navigate("/app/company-selection")} />
          <QuickCard title="Analytics" onClick={() => navigate("/app/performance-analysis/1")} />

        </div>
      </div>

    </div>
  );
}

/* 🔥 Quick Card */
function QuickCard({ title, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer text-center transition"
    >
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}