import { useNavigate, useParams } from 'react-router';
import { useState } from "react"; // ✅ ADDED
import API from "../../api/axios"; // ✅ ADDED

import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { Target, TrendingUp, TrendingDown, Lightbulb, ArrowRight } from 'lucide-react';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Radar, ResponsiveContainer, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const skillData = [
  { subject: 'Aptitude', score: 75, fullMark: 100 },
  { subject: 'Problem Solving', score: 68, fullMark: 100 },
  { subject: 'Data Structures', score: 82, fullMark: 100 },
  { subject: 'Algorithms', score: 70, fullMark: 100 },
  { subject: 'System Design', score: 60, fullMark: 100 },
  { subject: 'Communication', score: 85, fullMark: 100 },
];

const sectionScores = [
  { name: 'Aptitude', score: 75, avg: 65 },
  { name: 'Coding', score: 80, avg: 70 },
  { name: 'Technical', score: 70, avg: 68 },
];

const strengths = [
  'Strong understanding of data structures',
  'Excellent communication skills',
  'Good problem-solving approach',
];

const weaknesses = [
  'System design concepts need improvement',
  'Time management during coding section',
  'Advanced algorithm optimization',
];

const recommendations = [
  {
    title: 'Study System Design',
    description: 'Focus on scalability, microservices, and distributed systems',
    priority: 'High',
  },
  {
    title: 'Practice Timed Coding',
    description: 'Work on completing medium-hard problems within 20-30 minutes',
    priority: 'Medium',
  },
  {
    title: 'Advanced Algorithms',
    description: 'Deep dive into graph algorithms and dynamic programming',
    priority: 'Medium',
  },
];

export function CompanyAnalysisPage() {
  const navigate = useNavigate();
  const { companyId } = useParams();

  const companyName = companyId
    ? companyId.charAt(0).toUpperCase() + companyId.slice(1)
    : "Company";

  const overallScore = 75;

  // ✅ AI STATE ADDED
  const [aiData, setAiData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // ✅ API CALL ADDED
  const fetchAI = async () => {
    try {
      setLoading(true);

      const res = await API.post("/company/resources", {
        company: companyId,
      });

      setAiData(res.data);

    } catch (err) {
      console.error(err);
      alert("Failed to fetch AI data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* HEADER (UNCHANGED) */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Mock Test Analysis</h1>
        <p className="text-gray-600 text-lg">{companyName} Interview Preparation</p>
      </motion.div>

      {/* 🔥 NEW AI BUTTON */}
      <div className="flex justify-center my-6">
        <Button onClick={fetchAI}>
          {loading ? "Generating..." : "Get AI Preparation 🚀"}
        </Button>
      </div>

      {/* 🔥 AI OUTPUT */}
      {aiData && (
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <AISection title="HR Round" data={aiData.round1} />
          <AISection title="Coding" data={aiData.coding} />
          <AISection title="Technical" data={aiData.technical} />
        </div>
      )}

      {/* REST OF YOUR UI (UNCHANGED BELOW) */}

      {/* ... KEEP EVERYTHING SAME ... */}

      <motion.div className="flex justify-center gap-4">
        <Button
          size="lg"
          onClick={() => navigate(`/app/resources/${companyId}`)}
          variant="outline"
        >
          View Resources
        </Button>
        <Button
          size="lg"
          onClick={() => navigate(`/app/mock-test/${companyId}`)}
        >
          Retake Mock Test
        </Button>
      </motion.div>

    </div>
  );
}

// ✅ NEW COMPONENT (ADDED ONLY)
function AISection({ title, data }: any) {
  return (
    <Card className="p-5">
      <h3 className="text-lg font-bold mb-3">{title}</h3>

      <ul className="space-y-2 text-sm text-gray-700">
        {data.map((item: string, index: number) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}