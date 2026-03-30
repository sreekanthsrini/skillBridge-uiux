import { useNavigate } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Building2, 
  TrendingUp, 
  Target,
  BookOpen,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const progressData = [
  { week: 'Week 1', score: 45 },
  { week: 'Week 2', score: 52 },
  { week: 'Week 3', score: 68 },
  { week: 'Week 4', score: 75 },
  { week: 'Week 5', score: 82 },
  { week: 'Week 6', score: 88 },
];

const recentActivities = [
  { id: 1, title: 'Completed React Fundamentals', type: 'lesson', time: '2 hours ago' },
  { id: 2, title: 'JavaScript Assessment', type: 'assessment', time: '1 day ago', score: 85 },
  { id: 3, title: 'CSS Grid Module', type: 'lesson', time: '2 days ago' },
];

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to level up, Alex? 🚀</h2>
              <p className="text-blue-100 text-lg">
                You're making great progress! Keep up the momentum.
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={() => navigate('/app/role-recommendation')}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Get AI Recommendations
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 font-semibold">+12%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">68%</h3>
            <p className="text-gray-600 text-sm">Overall Progress</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">24</h3>
            <p className="text-gray-600 text-sm">Lessons Completed</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">8/12</h3>
            <p className="text-gray-600 text-sm">Assessments Passed</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">42h</h3>
            <p className="text-gray-600 text-sm">Time Invested</p>
          </Card>
        </motion.div>
      </div>

      {/* Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card 
            className="p-8 cursor-pointer" 
            hoverable 
            onClick={() => navigate('/app/role-selection')}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Job Role-Based Preparation</h3>
            <p className="text-gray-600 mb-6">
              Choose your target role and get a personalized learning roadmap with assessments, 
              resources, and progress tracking.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Frontend</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Backend</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Data Science</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">+8 more</span>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card 
            className="p-8 cursor-pointer" 
            hoverable 
            onClick={() => navigate('/app/company-selection')}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Company-Specific Preparation</h3>
            <p className="text-gray-600 mb-6">
              Prepare for your dream company with curated resources, mock tests, 
              and interview questions from real candidates.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Google</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Amazon</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Microsoft</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">+20 more</span>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Progress Chart and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="lg:col-span-2"
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Your Progress</h3>
                <p className="text-gray-600 text-sm">Weekly performance overview</p>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">+15% this week</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="url(#colorGradient)" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', r: 4 }}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'lesson' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {activity.type === 'lesson' ? (
                      <BookOpen className={`w-5 h-5 ${activity.type === 'lesson' ? 'text-blue-600' : 'text-green-600'}`} />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm truncate">{activity.title}</p>
                    <p className="text-gray-500 text-xs">{activity.time}</p>
                    {activity.score && (
                      <span className="inline-block mt-1 px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-semibold">
                        Score: {activity.score}%
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button 
              variant="ghost" 
              className="w-full mt-4"
              onClick={() => navigate('/app/notifications')}
            >
              View All Activity
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
