import { useNavigate, useParams } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { Trophy, Target, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const skillData = [
  { skill: 'React', score: 85 },
  { skill: 'JavaScript', score: 75 },
  { skill: 'CSS', score: 70 },
  { skill: 'TypeScript', score: 60 },
  { skill: 'APIs', score: 55 },
  { skill: 'Testing', score: 45 },
];

const radarData = [
  { subject: 'React', A: 85, fullMark: 100 },
  { subject: 'JavaScript', A: 75, fullMark: 100 },
  { subject: 'CSS', A: 70, fullMark: 100 },
  { subject: 'TypeScript', A: 60, fullMark: 100 },
  { subject: 'APIs', A: 55, fullMark: 100 },
  { subject: 'Testing', A: 45, fullMark: 100 },
];

const categoryScores = [
  { name: 'Fundamentals', score: 85 },
  { name: 'Advanced', score: 65 },
  { name: 'Best Practices', score: 70 },
  { name: 'Performance', score: 60 },
];

export function PerformanceAnalysisPage() {
  const navigate = useNavigate();
  const { roleId } = useParams();
  const overallScore = 70;
  const level = overallScore >= 75 ? 'Advanced' : overallScore >= 50 ? 'Intermediate' : 'Beginner';

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Assessment Results</h1>
        <p className="text-gray-600 text-lg">Here's your detailed performance analysis</p>
      </motion.div>

      {/* Overall Score Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-8 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-2">{overallScore}%</h2>
                <p className="text-blue-100 text-lg">Overall Score</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {level}
                  </span>
                  <span className="text-blue-100">Level</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-100 mb-2">Questions Answered</p>
              <p className="text-3xl font-bold">10 / 10</p>
              <p className="text-blue-100 mt-4">Time Taken</p>
              <p className="text-2xl font-bold">18:34</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">7</h3>
            <p className="text-gray-600">Correct Answers</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Top 25%</h3>
            <p className="text-gray-600">Percentile Rank</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">8 weeks</h3>
            <p className="text-gray-600">Estimated Learning Time</p>
          </Card>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Skill Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" stroke="#6b7280" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6b7280" />
                <Radar name="Your Score" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Category Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryScores}>
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
                <Bar dataKey="score" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Detailed Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Skills Breakdown</h3>
          <div className="space-y-4">
            {skillData.map((skill) => (
              <div key={skill.skill}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{skill.skill}</span>
                  <span className="text-gray-600">{skill.score}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.score}%` }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recommendations</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Focus on Testing</p>
                <p className="text-gray-600 text-sm">Your testing skills need improvement. We recommend spending extra time on this in your roadmap.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Strengthen TypeScript</p>
                <p className="text-gray-600 text-sm">Good foundation, but more practice with advanced TypeScript concepts will help.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Practice API Integration</p>
                <p className="text-gray-600 text-sm">Build projects that consume REST APIs to solidify your understanding.</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex justify-center"
      >
        <Button
          size="lg"
          onClick={() => navigate(`/app/learning-roadmap/${roleId}`)}
          className="flex items-center gap-2"
        >
          View Your Personalized Roadmap
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
}
