import { useNavigate, useParams } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { Target, TrendingUp, TrendingDown, Lightbulb, ArrowRight } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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
  const companyName = companyId?.charAt(0).toUpperCase() + companyId?.slice(1);
  const overallScore = 75;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Mock Test Analysis</h1>
        <p className="text-gray-600 text-lg">{companyName} Interview Preparation</p>
      </motion.div>

      {/* Overall Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-8 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                <Target className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-5xl font-bold mb-2">{overallScore}%</h2>
                <p className="text-blue-100 text-lg">Overall Performance</p>
                <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  Above Average
                </span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-100 mb-2">Company Average</p>
              <p className="text-4xl font-bold">68%</p>
              <p className="text-green-300 mt-2 flex items-center gap-1 justify-center md:justify-end">
                <TrendingUp className="w-5 h-5" />
                +7% above average
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Section Scores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Skill Assessment</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" stroke="#6b7280" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6b7280" />
                <Radar name="Your Score" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Section Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sectionScores}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis domain={[0, 100]} stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Bar dataKey="score" fill="#3b82f6" name="Your Score" radius={[8, 8, 0, 0]} />
                <Bar dataKey="avg" fill="#9ca3af" name="Average" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Strengths and Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Strengths</h3>
            </div>
            <div className="space-y-3">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">{strength}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">Areas to Improve</h3>
            </div>
            <div className="space-y-3">
              {weaknesses.map((weakness, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <p className="text-gray-700">{weakness}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-600" />
            <h3 className="text-xl font-bold text-gray-900">Personalized Recommendations</h3>
          </div>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="flex items-start justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      rec.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {rec.priority} Priority
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{rec.description}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex justify-center gap-4"
      >
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
