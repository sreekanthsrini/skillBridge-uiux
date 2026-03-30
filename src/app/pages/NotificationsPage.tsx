import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { Bell, CheckCircle2, Clock, AlertCircle, Trophy, BookOpen } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'success',
    icon: Trophy,
    title: 'Congratulations! Week 2 Complete',
    message: 'You\'ve completed all tasks for Week 2. Keep up the great work!',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    type: 'reminder',
    icon: Clock,
    title: 'Assessment Reminder',
    message: 'Your re-assessment for Frontend Developer is due in 3 days.',
    time: '5 hours ago',
    unread: true,
  },
  {
    id: 3,
    type: 'info',
    icon: BookOpen,
    title: 'New Resource Available',
    message: 'Check out the new React Performance Optimization guide.',
    time: '1 day ago',
    unread: true,
  },
  {
    id: 4,
    type: 'success',
    icon: CheckCircle2,
    title: 'Task Completed',
    message: 'You\'ve completed "Build a Weather App" project.',
    time: '2 days ago',
    unread: false,
  },
  {
    id: 5,
    type: 'warning',
    icon: AlertCircle,
    title: 'Behind Schedule',
    message: 'You\'re behind on your learning roadmap. Try to catch up this week.',
    time: '3 days ago',
    unread: false,
  },
  {
    id: 6,
    type: 'info',
    icon: Bell,
    title: 'Google Mock Test',
    message: 'New mock test available for Google interview preparation.',
    time: '4 days ago',
    unread: false,
  },
  {
    id: 7,
    type: 'success',
    icon: Trophy,
    title: 'Achievement Unlocked',
    message: 'You\'ve earned the "Fast Learner" badge!',
    time: '5 days ago',
    unread: false,
  },
  {
    id: 8,
    type: 'info',
    icon: BookOpen,
    title: 'Weekly Progress Report',
    message: 'Your weekly progress report is ready to view.',
    time: '6 days ago',
    unread: false,
  },
];

const typeStyles = {
  success: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-200',
  },
  reminder: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-200',
  },
  info: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  warning: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-600',
    border: 'border-yellow-200',
  },
};

export function NotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-4xl font-bold text-gray-900">Notifications</h1>
          <Button variant="ghost">Mark all as read</Button>
        </div>
        <p className="text-gray-600 text-lg">Stay updated with your learning progress</p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6"
      >
        <Card className="p-2">
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">
              All
            </button>
            <button className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              Unread
            </button>
            <button className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              Tasks
            </button>
            <button className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              Achievements
            </button>
          </div>
        </Card>
      </motion.div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          const styles = typeStyles[notification.type];
          
          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card 
                className={`p-6 ${notification.unread ? 'border-l-4 border-blue-500' : ''}`}
                hoverable
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${styles.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${styles.text}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-gray-900">{notification.title}</h3>
                      {notification.unread && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{notification.message}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{notification.time}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Load More */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 text-center"
      >
        <Button variant="outline">Load More Notifications</Button>
      </motion.div>
    </div>
  );
}
