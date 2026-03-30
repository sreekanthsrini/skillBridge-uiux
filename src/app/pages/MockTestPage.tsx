import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, Code, FileText, Brain } from 'lucide-react';

const sections = [
  { id: 'aptitude', name: 'Aptitude', icon: Brain, questions: 20, time: 20 },
  { id: 'coding', name: 'Coding', icon: Code, questions: 2, time: 30 },
  { id: 'technical', name: 'Technical', icon: FileText, questions: 10, time: 15 },
];

export function MockTestPage() {
  const navigate = useNavigate();
  const { companyId } = useParams();
  const [started, setStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [timeLeft, setTimeLeft] = useState(sections[0].time * 60);
  const companyName = companyId?.charAt(0).toUpperCase() + companyId?.slice(1);

  useEffect(() => {
    if (started) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleNextSection();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [started, currentSection]);

  const handleStart = () => {
    setStarted(true);
  };

  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      const nextSection = currentSection + 1;
      setCurrentSection(nextSection);
      setTimeLeft(sections[nextSection].time * 60);
    } else {
      navigate(`/app/company-analysis/${companyId}`);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!started) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {companyName} Mock Test
            </h1>
            <p className="text-gray-600 mb-8">
              This test simulates the actual interview process. Complete all sections within the time limit.
            </p>

            <div className="space-y-4 mb-8">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.id}
                    className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{section.name}</h3>
                        <p className="text-sm text-gray-600">
                          {section.questions} questions • {section.time} minutes
                        </p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-gray-300" />
                  </div>
                );
              })}
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• You must complete all sections in one sitting</li>
                <li>• Each section is timed individually</li>
                <li>• You cannot go back to previous sections</li>
                <li>• Make sure you have a stable internet connection</li>
              </ul>
            </div>

            <Button size="lg" onClick={handleStart} className="w-full">
              Start Mock Test
            </Button>
          </Card>
        </motion.div>
      </div>
    );
  }

  const section = sections[currentSection];
  const Icon = section.icon;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <Card className="p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Section {currentSection + 1}: {section.name}
            </h1>
            <p className="text-gray-600">
              {section.questions} questions remaining
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className={`w-5 h-5 ${timeLeft < 300 ? 'text-red-500' : 'text-gray-600'}`} />
            <span className={`text-2xl font-bold ${timeLeft < 300 ? 'text-red-500' : 'text-gray-900'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        
        <div className="mt-4 flex gap-2">
          {sections.map((s, index) => (
            <div
              key={s.id}
              className={`flex-1 h-2 rounded-full ${
                index < currentSection
                  ? 'bg-green-500'
                  : index === currentSection
                  ? 'bg-blue-500'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </Card>

      {/* Question Area */}
      <motion.div
        key={currentSection}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Sample {section.name} Question
              </h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 mb-4">
                  {section.id === 'coding'
                    ? 'Given an array of integers, find the maximum sum of a contiguous subarray. Implement an optimal solution with O(n) time complexity.'
                    : section.id === 'aptitude'
                    ? 'If a train travels 120 km in 2 hours, and then travels 180 km in 3 hours, what is the average speed of the train?'
                    : 'Explain the difference between HTTP and HTTPS protocols. What security mechanisms does HTTPS implement?'}
                </p>
                {section.id === 'coding' && (
                  <div className="bg-white p-4 rounded-lg border border-gray-200 font-mono text-sm">
                    <p>Example:</p>
                    <p>Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]</p>
                    <p>Output: 6</p>
                    <p>Explanation: [4, -1, 2, 1] has the largest sum = 6</p>
                  </div>
                )}
              </div>
              
              {section.id === 'coding' ? (
                <textarea
                  className="w-full h-64 p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none font-mono text-sm"
                  placeholder="Write your code here..."
                />
              ) : (
                <div className="space-y-3">
                  {['Option A', 'Option B', 'Option C', 'Option D'].map((option, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="flex justify-end">
        <Button onClick={handleNextSection} size="lg">
          {currentSection === sections.length - 1 ? 'Finish Test' : 'Next Section'}
        </Button>
      </div>
    </div>
  );
}
