import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { motion } from 'motion/react';
import { User, Mail, MapPin, Briefcase, Calendar, Award } from 'lucide-react';

export function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Profile</h1>
        <p className="text-gray-600 text-lg">Manage your account information</p>
      </motion.div>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-4xl">A</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Alex Johnson</h2>
              <p className="text-gray-600 mb-4">alex@example.com</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Frontend Developer
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  Intermediate Level
                </span>
              </div>
            </div>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        <Card className="p-6 text-center">
          <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-gray-900">24</h3>
          <p className="text-gray-600 text-sm">Courses Completed</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Briefcase className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-gray-900">8</h3>
          <p className="text-gray-600 text-sm">Assessments Passed</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-gray-900">56</h3>
          <p className="text-gray-600 text-sm">Days Active</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Award className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-gray-900">2</h3>
          <p className="text-gray-600 text-sm">Certificates</p>
        </Card>
      </motion.div>

      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                value="Alex"
                readOnly
              />
              <Input
                label="Last Name"
                value="Johnson"
                readOnly
              />
            </div>
            
            <Input
              label="Email"
              type="email"
              value="alex@example.com"
              readOnly
            />
            
            <Input
              label="Phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
            />
            
            <Input
              label="Location"
              placeholder="San Francisco, CA"
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                rows={4}
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit">Save Changes</Button>
              <Button type="button" variant="outline">Cancel</Button>
            </div>
          </form>
        </Card>
      </motion.div>

      {/* Skills & Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Interests</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Technical Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Git'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
                <button className="px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors">
                  + Add Skill
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Interests
              </label>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Open Source'].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium"
                  >
                    {interest}
                  </span>
                ))}
                <button className="px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-purple-500 hover:text-purple-600 transition-colors">
                  + Add Interest
                </button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
