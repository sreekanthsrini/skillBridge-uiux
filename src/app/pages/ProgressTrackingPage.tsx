import { useParams } from 'react-router';
import { Card } from '../components/Card';
import { motion } from 'motion/react';
import { Calendar, TrendingUp, Clock, Target, AlertCircle, CheckCircle2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const weeklyProgress = [
  { week: 'Week 1', completed: 4, planned: 4, hours: 8 },
  { week: 'Week 2', completed: 4, planned: 4, hours: 9 },
  { week: 'Week 3', completed: 2, planned: 4, hours: 4 },
  { week: 'Week 4', completed: 0, planned: 4, hours: 0 },
  { week: 'Week 5', completed: 0, planned: 4, hours: 0 },
  { week: 'Week 6', completed: 0, planned: 4, hours: 0 },
];

const timeData = [
  { date: 'Mon', hours: 2 },
  { date: 'Tue', hours: 1.5 },
  { date: 'Wed', hours: 3 },
  { date: 'Thu', hours: 2.5 },
  { date: 'Fri', hours: 1 },
  { date: 'Sat', hours: 4 },
  { date: 'Sun', hours: 3 },
];

export function ProgressTrackingPage() {
  const { roleId } = useParams();

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Progress Tracking</h1>
        <p className="text-gray-600 text-lg">Monitor your learning journey</p>
      </motion.div>

      {/* Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-6 mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-500">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">You're Behind Schedule</h3>
              <p className="text-gray-700">
                You've completed 10 out of 16 planned tasks. Try to catch up this week to stay on track.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">31%</h3>
            <p className="text-gray-600">Overall Progress</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">10 / 32</h3>
            <p className="text-gray-600">Tasks Completed</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">17h</h3>
            <p className="text-gray-600">This Week</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="p-6">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">5 weeks</h3>
            <p className="text-gray-600">Remaining</p>
          </Card>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Task Completion</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyProgress}>
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
                <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} name="Completed" />
                <Line type="monotone" dataKey="planned" stroke="#6b7280" strokeWidth={2} strokeDasharray="5 5" name="Planned" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Time Invested (This Week)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={timeData}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Area type="monotone" dataKey="hours" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorHours)" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Milestones</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Complete Week 1 & 2</p>
                <p className="text-sm text-gray-600">All tasks completed ✓</p>
              </div>
              <span className="text-sm text-gray-500">Completed</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Complete Week 3</p>
                <p className="text-sm text-gray-600">2 of 4 tasks remaining</p>
              </div>
              <span className="text-sm text-gray-500">In Progress</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Mid-Point Assessment</p>
                <p className="text-sm text-gray-600">Scheduled for Week 4</p>
              </div>
              <span className="text-sm text-gray-500">Upcoming</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
