import { useState } from "react";
import API from "../../api/axios";

export function ProfilePage() {

  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await API.post("/resume/upload", formData);

      // ✅ IMPORTANT (backend returns directly)
      setResult(res.data);

    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 LEVEL COLOR FUNCTION
  const getLevelColor = (level: string) => {
    if (level === "Beginner") return "bg-red-500";
    if (level === "Intermediate") return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-bold">Profile</h2>
        <p className="text-gray-500 text-sm">
          Upload your resume and get AI feedback 🚀
        </p>
      </div>

      {/* UPLOAD CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">

        <h3 className="text-xl font-semibold">
          Resume Analyzer 🤖
        </h3>

        {/* FILE INPUT */}
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="border p-2 rounded w-full"
        />

        {/* BUTTON */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>

      </div>

      {/* RESULT */}
      {result && (
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-5">

          <h3 className="text-xl font-semibold">Analysis Result</h3>

          {/* SCORE */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Score</span>
            <span className="text-2xl font-bold text-indigo-600">
              {result.score}/100
            </span>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div
              className="bg-indigo-600 h-3 rounded-full"
              style={{ width: `${result.score}%` }}
            ></div>
          </div>

          {/* 🔥 LEVEL BADGE */}
          <div>
            <span
              className={`inline-block px-4 py-1 text-white rounded-full text-sm ${getLevelColor(result.level)}`}
            >
              {result.level}
            </span>
          </div>

          {/* SUGGESTIONS */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">
              Suggestions
            </h4>
            <p className="text-sm text-gray-600 whitespace-pre-line">
              {result.suggestions}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}