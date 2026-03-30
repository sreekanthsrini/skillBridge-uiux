import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Play, FileText, Video, Code } from 'lucide-react';

const roadmapData = [
  {
    week: 1,
    title: 'React Fundamentals',
    description: 'Master the core concepts of React',
    tasks: [
      { id: 1, title: 'Components and Props', type: 'video', duration: '45 min', completed: true },
      { id: 2, title: 'State and Lifecycle', type: 'video', duration: '60 min', completed: true },
      { id: 3, title: 'Event Handling', type: 'article', duration: '30 min', completed: true },
      { id: 4, title: 'Build a Todo App', type: 'project', duration: '2 hours', completed: false },
    ],
  },
  {
    week: 2,
    title: 'Advanced React Hooks',
    description: 'Deep dive into React hooks',
    tasks: [
      { id: 5, title: 'useState and useEffect', type: 'video', duration: '50 min', completed: true },
      { id: 6, title: 'useContext and useReducer', type: 'video', duration: '55 min', completed: true },
      { id: 7, title: 'Custom Hooks', type: 'article', duration: '40 min', completed: false },
      { id: 8, title: 'Build a Weather App', type: 'project', duration: '3 hours', completed: false },
    ],
  },
  {
    week: 3,
    title: 'State Management',
    description: 'Learn modern state management solutions',
    tasks: [
      { id: 9, title: 'Redux Fundamentals', type: 'video', duration: '70 min', completed: false },
      { id: 10, title: 'Redux Toolkit', type: 'video', duration: '60 min', completed: false },
      { id: 11, title: 'Zustand Basics', type: 'article', duration: '30 min', completed: false },
      { id: 12, title: 'Build a Shopping Cart', type: 'project', duration: '4 hours', completed: false },
    ],
  },
  {
    week: 4,
    title: 'TypeScript with React',
    description: 'Add type safety to your React applications',
    tasks: [
      { id: 13, title: 'TypeScript Basics', type: 'video', duration: '45 min', completed: false },
      { id: 14, title: 'Typing React Components', type: 'video', duration: '50 min', completed: false },
      { id: 15, title: 'Advanced Types', type: 'article', duration: '35 min', completed: false },
      { id: 16, title: 'Convert App to TypeScript', type: 'project', duration: '3 hours', completed: false },
    ],
  },
  {
    week: 5,
    title: 'Testing React Applications',
    description: 'Write reliable tests for your code',
    tasks: [
      { id: 17, title: 'Jest Fundamentals', type: 'video', duration: '40 min', completed: false },
      { id: 18, title: 'React Testing Library', type: 'video', duration: '55 min', completed: false },
      { id: 19, title: 'E2E Testing with Cypress', type: 'article', duration: '45 min', completed: false },
      { id: 20, title: 'Write Test Suite', type: 'project', duration: '4 hours', completed: false },
    ],
  },
  {
    week: 6,
    title: 'Performance Optimization',
    description: 'Make your React apps lightning fast',
    tasks: [
      { id: 21, title: 'React.memo and useMemo', type: 'video', duration: '40 min', completed: false },
      { id: 22, title: 'Code Splitting', type: 'video', duration: '35 min', completed: false },
      { id: 23, title: 'Performance Profiling', type: 'article', duration: '30 min', completed: false },
      { id: 24, title: 'Optimize Existing App', type: 'project', duration: '3 hours', completed: false },
    ],
  },
  {
    week: 7,
    title: 'API Integration',
    description: 'Connect your app to backend services',
    tasks: [
      { id: 25, title: 'REST API Basics', type: 'video', duration: '45 min', completed: false },
      { id: 26, title: 'Axios and Fetch', type: 'video', duration: '40 min', completed: false },
      { id: 27, title: 'Error Handling', type: 'article', duration: '30 min', completed: false },
      { id: 28, title: 'Build API-Connected App', type: 'project', duration: '4 hours', completed: false },
    ],
  },
  {
    week: 8,
    title: 'Final Project',
    description: 'Build a complete full-stack application',
    tasks: [
      { id: 29, title: 'Project Planning', type: 'article', duration: '1 hour', completed: false },
      { id: 30, title: 'Build Full-Stack App', type: 'project', duration: '10 hours', completed: false },
      { id: 31, title: 'Code Review', type: 'video', duration: '1 hour', completed: false },
      { id: 32, title: 'Deploy to Production', type: 'project', duration: '2 hours', completed: false },
    ],
  },
];

const typeIcons = {
  video: Video,
  article: FileText,
  project: Code,
};

const typeColors = {
  video: 'bg-blue-100 text-blue-600',
  article: 'bg-green-100 text-green-600',
  project: 'bg-purple-100 text-purple-600',
};

export function LearningRoadmapPage() {
  const navigate = useNavigate();
  const { roleId } = useParams();
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([0, 1]);
  const [tasks, setTasks] = useState(roadmapData);

  const toggleWeek = (weekIndex: number) => {
    setExpandedWeeks((prev) =>
      prev.includes(weekIndex)
        ? prev.filter((i) => i !== weekIndex)
        : [...prev, weekIndex]
    );
  };

  const toggleTask = (weekIndex: number, taskId: number) => {
    const newTasks = [...tasks];
    const task = newTasks[weekIndex].tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      setTasks(newTasks);
    }
  };

  const totalTasks = tasks.reduce((acc, week) => acc + week.tasks.length, 0);
  const completedTasks = tasks.reduce(
    (acc, week) => acc + week.tasks.filter((t) => t.completed).length,
    0
  );
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Your Learning Roadmap</h1>
        <p className="text-gray-600 text-lg">
          Personalized 8-week plan for Frontend Developer
        </p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{progressPercentage}% Complete</h3>
              <p className="text-gray-600">
                {completedTasks} of {totalTasks} tasks completed
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => navigate(`/app/progress-tracking/${roleId}`)}
              >
                Track Progress
              </Button>
              <Button onClick={() => navigate(`/app/re-assessment/${roleId}`)}>
                Take Re-Assessment
              </Button>
            </div>
          </div>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </Card>
      </motion.div>

      {/* Roadmap Timeline */}
      <div className="space-y-4">
        {tasks.map((week, weekIndex) => {
          const weekCompleted = week.tasks.filter((t) => t.completed).length;
          const weekTotal = week.tasks.length;
          const isExpanded = expandedWeeks.includes(weekIndex);

          return (
            <motion.div
              key={weekIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: weekIndex * 0.05 }}
            >
              <Card className="overflow-hidden">
                <button
                  onClick={() => toggleWeek(weekIndex)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        weekCompleted === weekTotal
                          ? 'bg-green-100'
                          : 'bg-gradient-to-br from-blue-600 to-purple-600'
                      }`}>
                        {weekCompleted === weekTotal ? (
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        ) : (
                          <span className="text-white font-bold">{week.week}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Week {week.week}: {week.title}
                        </h3>
                        <p className="text-gray-600">{week.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <p className="text-sm text-gray-600">Progress</p>
                        <p className="font-semibold text-gray-900">
                          {weekCompleted}/{weekTotal}
                        </p>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-6 space-y-3">
                        {week.tasks.map((task) => {
                          const Icon = typeIcons[task.type];
                          return (
                            <div
                              key={task.id}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <button
                                onClick={() => toggleTask(weekIndex, task.id)}
                                className="flex-shrink-0"
                              >
                                {task.completed ? (
                                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                                ) : (
                                  <Circle className="w-6 h-6 text-gray-300" />
                                )}
                              </button>
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${typeColors[task.type]}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <p className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                                  {task.title}
                                </p>
                                <p className="text-sm text-gray-500">{task.duration}</p>
                              </div>
                              {!task.completed && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="flex items-center gap-2"
                                >
                                  <Play className="w-4 h-4" />
                                  Start
                                </Button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
