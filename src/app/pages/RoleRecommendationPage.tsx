import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { motion } from 'motion/react';
import { Sparkles, Code, Briefcase, TrendingUp } from 'lucide-react';

export function RoleRecommendationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    skills: '',
    interests: '',
    experience: 'beginner',
    goals: '',
  });
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock AI recommendations
    const mockRecommendations = [
      {
        role: 'Frontend Developer',
        match: 92,
        reason: 'Your skills in HTML, CSS, and JavaScript align perfectly with this role',
        skills: ['React', 'TypeScript', 'CSS', 'HTML'],
        avgSalary: '$95,000',
      },
      {
        role: 'Full Stack Developer',
        match: 85,
        reason: 'With some backend learning, you can become a versatile full-stack developer',
        skills: ['React', 'Node.js', 'MongoDB', 'APIs'],
        avgSalary: '$110,000',
      },
      {
        role: 'UI/UX Designer',
        match: 78,
        reason: 'Your interest in design and user experience is a great fit',
        skills: ['Figma', 'Design Systems', 'Prototyping'],
        avgSalary: '$85,000',
      },
    ];
    
    setRecommendations(mockRecommendations);
    setShowResults(true);
  };

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">Your AI Recommendations</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Based on your profile, here are the best role matches for you
          </p>
        </motion.div>

        <div className="space-y-6 mb-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{rec.role}</h3>
                      <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                        <span className="font-bold">{rec.match}% Match</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{rec.reason}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {rec.skills.map((skill: string) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        Avg Salary: {rec.avgSalary}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <Button
                    onClick={() => navigate(`/app/assessment/${rec.role.toLowerCase().replace(' ', '-')}`)}
                    className="flex-1"
                  >
                    Start Learning Path
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="outline"
            onClick={() => setShowResults(false)}
            className="w-full"
          >
            Try Different Inputs
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center mb-4">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">AI Role Recommendation</h1>
        <p className="text-gray-600 text-lg">
          Tell us about yourself and let our AI suggest the best career paths for you
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What skills do you have?
              </label>
              <textarea
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                rows={3}
                placeholder="e.g., HTML, CSS, JavaScript, React, Problem Solving..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What are your interests?
              </label>
              <textarea
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                rows={3}
                placeholder="e.g., Building user interfaces, working with data, creating mobile apps..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Level
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['beginner', 'intermediate', 'advanced'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setFormData({ ...formData, experience: level })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.experience === level
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-semibold capitalize text-gray-900">{level}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Career Goals
              </label>
              <textarea
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                rows={3}
                placeholder="e.g., Work at a top tech company, become a team lead, build my own startup..."
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Get AI Recommendations
            </Button>
          </form>
        </Card>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        <Card className="p-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">AI-Powered</h3>
          <p className="text-sm text-gray-600">Advanced algorithms analyze your profile</p>
        </Card>
        
        <Card className="p-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-3">
            <Code className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Personalized</h3>
          <p className="text-sm text-gray-600">Tailored recommendations for you</p>
        </Card>
        
        <Card className="p-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-3">
            <Briefcase className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Career Focused</h3>
          <p className="text-sm text-gray-600">Based on real market demand</p>
        </Card>
      </motion.div>
    </div>
  );
}
