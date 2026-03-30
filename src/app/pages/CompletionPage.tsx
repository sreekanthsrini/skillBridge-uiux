import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { Trophy, Star, Download, Share2, TrendingUp, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export function CompletionPage() {
  const navigate = useNavigate();
  const { roleId } = useParams();
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    // Trigger confetti animation
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#3b82f6', '#8b5cf6', '#06b6d4'],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#3b82f6', '#8b5cf6', '#06b6d4'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  const handleDownloadCertificate = () => {
    setShowCertificate(true);
  };

  const handleShare = () => {
    alert('Certificate shared on social media!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Congratulations Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="inline-flex w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center mb-6">
          <Trophy className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Congratulations! 🎉
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          You've completed your Frontend Developer learning path
        </p>
        <p className="text-lg text-gray-500">
          Your dedication and hard work have paid off!
        </p>
      </motion.div>

      {/* Achievement Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Achievement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">92%</h3>
              <p className="text-gray-600">Final Score</p>
              <p className="text-sm text-green-600 font-semibold mt-1">+22% Improvement</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">32/32</h3>
              <p className="text-gray-600">Tasks Completed</p>
              <p className="text-sm text-green-600 font-semibold mt-1">100% Complete</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">8 weeks</h3>
              <p className="text-gray-600">Time Invested</p>
              <p className="text-sm text-orange-600 font-semibold mt-1">56 hours</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Certificate */}
      {!showCertificate ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-8 text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              You've Earned a Certificate!
            </h3>
            <p className="text-gray-600 mb-6">
              Download your certificate of completion and share your achievement
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={handleDownloadCertificate}
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Certificate
              </Button>
              <Button
                variant="outline"
                onClick={handleShare}
                className="flex items-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share
              </Button>
            </div>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-12 mb-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="border-8 border-double border-gray-300 p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">S</span>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SkillBridge
                </h2>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Certificate of Completion
              </h3>
              
              <p className="text-gray-600 mb-2">This certifies that</p>
              <p className="text-4xl font-bold text-gray-900 mb-6">Alex Johnson</p>
              
              <p className="text-gray-600 mb-2">has successfully completed the</p>
              <p className="text-2xl font-bold text-gray-900 mb-6">Frontend Developer Program</p>
              
              <p className="text-gray-600 mb-6">
                Demonstrating proficiency in React, JavaScript, TypeScript, and modern web development practices
              </p>
              
              <div className="flex justify-center gap-12 mb-6">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Score</p>
                  <p className="text-xl font-bold text-gray-900">92%</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Date</p>
                  <p className="text-xl font-bold text-gray-900">March 29, 2026</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Certificate ID</p>
                  <p className="text-xl font-bold text-gray-900">SB-FE-2026-1234</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm">Verified by SkillBridge AI Platform</p>
              </div>
            </div>
          </Card>
          
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => alert('Certificate downloaded!')}
              className="flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </Button>
            <Button
              variant="outline"
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share on LinkedIn
            </Button>
          </div>
        </motion.div>
      )}

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h3>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/app/role-selection')}
              className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <p className="font-medium text-gray-900">Explore Another Role</p>
              <p className="text-sm text-gray-600">Continue learning with a new role path</p>
            </button>
            <button
              onClick={() => navigate('/app/company-selection')}
              className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all"
            >
              <p className="font-medium text-gray-900">Prepare for Companies</p>
              <p className="text-sm text-gray-600">Get ready for specific company interviews</p>
            </button>
            <button
              onClick={() => navigate('/app')}
              className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all"
            >
              <p className="font-medium text-gray-900">Back to Dashboard</p>
              <p className="text-sm text-gray-600">View your overall progress and stats</p>
            </button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
