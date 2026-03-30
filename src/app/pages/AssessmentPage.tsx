import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: 'What is the virtual DOM in React?',
    options: [
      'A copy of the real DOM stored in memory',
      'A programming language for React',
      'A database for storing components',
      'A styling framework',
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: 'Which hook is used for side effects in React?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: 'What is JSX?',
    options: [
      'A JavaScript library',
      'A syntax extension for JavaScript',
      'A CSS preprocessor',
      'A backend framework',
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Creative Style Sheets',
      'Colorful Style Sheets',
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: 'Which method is used to add an element at the end of an array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: 'What is TypeScript?',
    options: [
      'A JavaScript runtime',
      'A superset of JavaScript with static typing',
      'A CSS framework',
      'A database',
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: 'What is the purpose of props in React?',
    options: [
      'To style components',
      'To pass data between components',
      'To manage state',
      'To handle events',
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: 'Which of these is NOT a valid HTTP method?',
    options: ['GET', 'POST', 'FETCH', 'DELETE'],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: 'What does API stand for?',
    options: [
      'Application Programming Interface',
      'Advanced Programming Integration',
      'Automated Program Interaction',
      'Application Process Integration',
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: 'Which CSS property is used to change text color?',
    options: ['font-color', 'text-color', 'color', 'foreground-color'],
    correctAnswer: 2,
  },
];

export function AssessmentPage() {
  const navigate = useNavigate();
  const { roleId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      navigate(`/app/performance-analysis/${roleId}`);
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = answers.filter((a) => a !== null).length;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Frontend Developer Assessment</h1>
            <p className="text-gray-600">Answer all questions to get your personalized roadmap</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className={`w-5 h-5 ${timeLeft < 300 ? 'text-red-500' : 'text-gray-600'}`} />
              <span className={`text-lg font-semibold ${timeLeft < 300 ? 'text-red-500' : 'text-gray-900'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Progress</p>
              <p className="text-lg font-semibold text-gray-900">
                {answeredCount} / {questions.length}
              </p>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${(answeredCount / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </Card>

      {/* Question Card */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">{currentQuestion + 1}</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {questions[currentQuestion].question}
              </h2>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      answers[currentQuestion] === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        answers[currentQuestion] === index
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {answers[currentQuestion] === index && (
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className="text-gray-900">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </Button>

        <div className="flex gap-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                answers[index] !== null
                  ? 'bg-green-500'
                  : index === currentQuestion
                  ? 'bg-blue-500 w-6'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {currentQuestion === questions.length - 1 ? (
          <Button
            onClick={handleSubmit}
            isLoading={isSubmitting}
            className="flex items-center gap-2"
          >
            Submit Assessment
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
