import { useNavigate } from 'react-router';
import { Card } from '../components/Card';
import { motion } from 'motion/react';
import { Building2, TrendingUp, Users, MapPin } from 'lucide-react';

const companies = [
  {
    id: 'google',
    name: 'Google',
    logo: '🔍',
    difficulty: 'Hard',
    applications: '12.5K',
    location: 'Mountain View, CA',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'amazon',
    name: 'Amazon',
    logo: '📦',
    difficulty: 'Hard',
    applications: '15K',
    location: 'Seattle, WA',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: '🪟',
    difficulty: 'Medium',
    applications: '10K',
    location: 'Redmond, WA',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'meta',
    name: 'Meta',
    logo: '👤',
    difficulty: 'Hard',
    applications: '9K',
    location: 'Menlo Park, CA',
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 'apple',
    name: 'Apple',
    logo: '🍎',
    difficulty: 'Hard',
    applications: '8K',
    location: 'Cupertino, CA',
    color: 'from-gray-700 to-gray-900',
  },
  {
    id: 'netflix',
    name: 'Netflix',
    logo: '🎬',
    difficulty: 'Hard',
    applications: '5K',
    location: 'Los Gatos, CA',
    color: 'from-red-600 to-red-700',
  },
  {
    id: 'tesla',
    name: 'Tesla',
    logo: '⚡',
    difficulty: 'Medium',
    applications: '7K',
    location: 'Palo Alto, CA',
    color: 'from-red-500 to-gray-700',
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    logo: '☁️',
    difficulty: 'Medium',
    applications: '6K',
    location: 'San Francisco, CA',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'uber',
    name: 'Uber',
    logo: '🚗',
    difficulty: 'Medium',
    applications: '5.5K',
    location: 'San Francisco, CA',
    color: 'from-black to-gray-800',
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    logo: '🏠',
    difficulty: 'Hard',
    applications: '4K',
    location: 'San Francisco, CA',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    logo: '💼',
    difficulty: 'Medium',
    applications: '6.5K',
    location: 'Sunnyvale, CA',
    color: 'from-blue-600 to-blue-700',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    logo: '🎵',
    difficulty: 'Medium',
    applications: '3.5K',
    location: 'Stockholm, Sweden',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'adobe',
    name: 'Adobe',
    logo: '🎨',
    difficulty: 'Medium',
    applications: '4.5K',
    location: 'San Jose, CA',
    color: 'from-red-600 to-pink-600',
  },
  {
    id: 'oracle',
    name: 'Oracle',
    logo: '🔮',
    difficulty: 'Medium',
    applications: '7K',
    location: 'Austin, TX',
    color: 'from-red-500 to-orange-600',
  },
  {
    id: 'ibm',
    name: 'IBM',
    logo: '💡',
    difficulty: 'Easy',
    applications: '8K',
    location: 'Armonk, NY',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 'intel',
    name: 'Intel',
    logo: '💻',
    difficulty: 'Medium',
    applications: '5K',
    location: 'Santa Clara, CA',
    color: 'from-blue-500 to-cyan-600',
  },
];

const difficultyColors = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-blue-100 text-blue-700',
  Hard: 'bg-red-100 text-red-700',
};

export function CompanySelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Company-Specific Preparation</h1>
        <p className="text-gray-600 text-lg">
          Choose a company to access curated resources, mock tests, and interview questions from real candidates.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
          >
            <Card 
              className="p-6 cursor-pointer h-full" 
              hoverable
              onClick={() => navigate(`/app/resources/${company.id}`)}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center mb-4 text-3xl`}>
                {company.logo}
              </div>
              
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${difficultyColors[company.difficulty]}`}>
                  {company.difficulty}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {company.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  {company.applications} applicants
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium">View Resources</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12"
      >
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Platform Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">50+</p>
              <p className="text-gray-600 text-sm">Companies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600 text-sm">Interview Questions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">10K+</p>
              <p className="text-gray-600 text-sm">Success Stories</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">85%</p>
              <p className="text-gray-600 text-sm">Success Rate</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
