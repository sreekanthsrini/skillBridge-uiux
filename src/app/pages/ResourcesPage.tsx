import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { FileText, Code, MessageSquare, ExternalLink, Play, BookOpen, Video, Download } from 'lucide-react';

const tabs = ['Aptitude', 'Coding', 'Interview Questions', 'Resources'];

const resourceData = {
  Aptitude: [
    { id: 1, title: 'Logical Reasoning - Patterns', type: 'PDF', downloads: '2.5K' },
    { id: 2, title: 'Quantitative Aptitude Guide', type: 'PDF', downloads: '3.2K' },
    { id: 3, title: 'Verbal Ability Practice Sets', type: 'PDF', downloads: '1.8K' },
    { id: 4, title: 'Data Interpretation Questions', type: 'PDF', downloads: '2.1K' },
  ],
  Coding: [
    { id: 5, title: 'Array and String Problems', type: 'Article', difficulty: 'Medium' },
    { id: 6, title: 'Dynamic Programming Patterns', type: 'Video', difficulty: 'Hard' },
    { id: 7, title: 'Tree and Graph Algorithms', type: 'Article', difficulty: 'Hard' },
    { id: 8, title: 'System Design Basics', type: 'Video', difficulty: 'Medium' },
  ],
  'Interview Questions': [
    { id: 9, title: 'Tell me about yourself', category: 'Behavioral', answers: 15 },
    { id: 10, title: 'Why do you want to work at Google?', category: 'Behavioral', answers: 23 },
    { id: 11, title: 'Explain a complex project you worked on', category: 'Technical', answers: 18 },
    { id: 12, title: 'How do you handle tight deadlines?', category: 'Behavioral', answers: 12 },
    { id: 13, title: 'Describe your experience with React', category: 'Technical', answers: 31 },
  ],
  Resources: [
    { id: 14, title: 'Google Interview Process Guide', type: 'Article', url: '#' },
    { id: 15, title: 'Salary Expectations & Negotiation', type: 'Video', url: '#' },
    { id: 16, title: 'Company Culture & Values', type: 'Article', url: '#' },
    { id: 17, title: 'Former Employee Insights', type: 'Video', url: '#' },
  ],
};

export function ResourcesPage() {
  const navigate = useNavigate();
  const { companyId } = useParams();
  const [activeTab, setActiveTab] = useState('Aptitude');
  
  const companyName = companyId?.charAt(0).toUpperCase() + companyId?.slice(1);
  const companyLogo = companyId === 'google' ? '🔍' : '📦';

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl">
            {companyLogo}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{companyName} Preparation</h1>
            <p className="text-gray-600 text-lg">Curated resources from real candidates</p>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <Card className="p-6">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">150+</h3>
          <p className="text-gray-600 text-sm">Practice Questions</p>
        </Card>
        
        <Card className="p-6">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">75+</h3>
          <p className="text-gray-600 text-sm">Coding Problems</p>
        </Card>
        
        <Card className="p-6">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">200+</h3>
          <p className="text-gray-600 text-sm">Interview Experiences</p>
        </Card>
      </motion.div>

      {/* Take Mock Test CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-6 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to test your skills?</h3>
              <p className="text-blue-100">Take a full-length mock test with aptitude, coding, and technical sections</p>
            </div>
            <Button
              variant="secondary"
              onClick={() => navigate(`/app/mock-test/${companyId}`)}
              className="flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Start Mock Test
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="mb-6">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Aptitude Tab */}
            {activeTab === 'Aptitude' && (
              <div className="space-y-3">
                {resourceData.Aptitude.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{resource.title}</p>
                        <p className="text-sm text-gray-500">{resource.type} • {resource.downloads} downloads</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* Coding Tab */}
            {activeTab === 'Coding' && (
              <div className="space-y-3">
                {resourceData.Coding.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        {resource.type === 'Video' ? (
                          <Video className="w-5 h-5 text-purple-600" />
                        ) : (
                          <Code className="w-5 h-5 text-purple-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{resource.title}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-gray-500">{resource.type}</p>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                            resource.difficulty === 'Hard' ? 'bg-red-100 text-red-700' :
                            resource.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {resource.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Start
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* Interview Questions Tab */}
            {activeTab === 'Interview Questions' && (
              <div className="space-y-3">
                {resourceData['Interview Questions'].map((resource) => (
                  <div
                    key={resource.id}
                    className="p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 mb-1">{resource.title}</p>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                            resource.category === 'Technical' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                          }`}>
                            {resource.category}
                          </span>
                          <span className="text-sm text-gray-500">{resource.answers} answers from candidates</span>
                        </div>
                      </div>
                      <MessageSquare className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'Resources' && (
              <div className="space-y-3">
                {resourceData.Resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        {resource.type === 'Video' ? (
                          <Video className="w-5 h-5 text-blue-600" />
                        ) : (
                          <BookOpen className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{resource.title}</p>
                        <p className="text-sm text-gray-500">{resource.type}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
