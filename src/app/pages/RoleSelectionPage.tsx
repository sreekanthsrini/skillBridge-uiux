import { useNavigate } from 'react-router';
import { Card } from '../components/Card';
import { motion } from 'motion/react';
import { 
  Code, 
  Server, 
  Database, 
  Smartphone,
  BarChart3,
  Brain,
  Palette,
  Shield,
  Cloud,
  Cpu,
  FileCode,
  Network
} from 'lucide-react';

const roles = [
  {
    id: 'frontend',
    name: 'Frontend Developer',
    icon: Code,
    description: 'Build beautiful, responsive user interfaces',
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'TypeScript', 'CSS', 'HTML'],
    level: 'Intermediate',
  },
  {
    id: 'backend',
    name: 'Backend Developer',
    icon: Server,
    description: 'Design and build scalable server-side applications',
    color: 'from-green-500 to-emerald-500',
    skills: ['Node.js', 'Python', 'APIs', 'Databases'],
    level: 'Beginner',
  },
  {
    id: 'fullstack',
    name: 'Full Stack Developer',
    icon: FileCode,
    description: 'Master both frontend and backend development',
    color: 'from-purple-500 to-pink-500',
    skills: ['React', 'Node.js', 'MongoDB', 'REST'],
    level: 'Advanced',
  },
  {
    id: 'mobile',
    name: 'Mobile Developer',
    icon: Smartphone,
    description: 'Create native and cross-platform mobile apps',
    color: 'from-orange-500 to-red-500',
    skills: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
    level: 'Beginner',
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    icon: BarChart3,
    description: 'Analyze data and provide actionable insights',
    color: 'from-indigo-500 to-blue-500',
    skills: ['SQL', 'Python', 'Excel', 'Tableau'],
    level: 'Intermediate',
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    icon: Brain,
    description: 'Build ML models and predict outcomes',
    color: 'from-violet-500 to-purple-500',
    skills: ['Python', 'ML', 'Statistics', 'TensorFlow'],
    level: 'Advanced',
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Designer',
    icon: Palette,
    description: 'Design intuitive and engaging user experiences',
    color: 'from-pink-500 to-rose-500',
    skills: ['Figma', 'Sketch', 'Prototyping', 'Research'],
    level: 'Intermediate',
  },
  {
    id: 'devops',
    name: 'DevOps Engineer',
    icon: Cloud,
    description: 'Automate and optimize development workflows',
    color: 'from-cyan-500 to-teal-500',
    skills: ['Docker', 'K8s', 'CI/CD', 'AWS'],
    level: 'Advanced',
  },
  {
    id: 'security',
    name: 'Security Engineer',
    icon: Shield,
    description: 'Protect systems and data from threats',
    color: 'from-red-500 to-orange-500',
    skills: ['Penetration Testing', 'Encryption', 'Compliance'],
    level: 'Advanced',
  },
  {
    id: 'ml-engineer',
    name: 'ML Engineer',
    icon: Cpu,
    description: 'Deploy and maintain machine learning systems',
    color: 'from-emerald-500 to-green-500',
    skills: ['PyTorch', 'MLOps', 'Deep Learning', 'Cloud'],
    level: 'Advanced',
  },
  {
    id: 'blockchain',
    name: 'Blockchain Developer',
    icon: Network,
    description: 'Build decentralized applications and smart contracts',
    color: 'from-amber-500 to-yellow-500',
    skills: ['Solidity', 'Web3', 'Ethereum', 'Smart Contracts'],
    level: 'Advanced',
  },
  {
    id: 'database',
    name: 'Database Administrator',
    icon: Database,
    description: 'Manage and optimize database systems',
    color: 'from-slate-500 to-gray-500',
    skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Performance'],
    level: 'Intermediate',
  },
];

const levelColors = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-blue-100 text-blue-700',
  Advanced: 'bg-purple-100 text-purple-700',
};

export function RoleSelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Choose Your Role</h1>
        <p className="text-gray-600 text-lg">
          Select a role to start your personalized learning journey with assessments, roadmaps, and progress tracking.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role, index) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card 
              className="p-6 cursor-pointer h-full" 
              hoverable
              onClick={() => navigate(`/app/assessment/${role.id}`)}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-4`}>
                <role.icon className="w-7 h-7 text-white" />
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{role.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${levelColors[role.level]}`}>
                  {role.level}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{role.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
