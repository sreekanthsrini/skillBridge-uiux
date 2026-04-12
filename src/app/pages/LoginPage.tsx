import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { motion } from 'motion/react';
import { GraduationCap, Github } from 'lucide-react';
import axios from 'axios';

export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        'http://localhost:8080/api/auth/login',
        {
          email,
          password,
        }
      );

      console.log('Login Success:', response.data);

      // Save JWT token
      localStorage.setItem('token', response.data.token);

      navigate('/app');

    } catch (error: any) {
      console.error(error);

      if (error.response?.status === 401) {
        alert('Invalid email or password');
      } else if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Login failed. Try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    navigate('/app');
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-12 items-center justify-center relative overflow-hidden">
        <motion.div className="text-white max-w-lg">
          <GraduationCap className="w-20 h-20 mb-6" />
          <h1 className="text-5xl font-bold mb-6">Welcome to SkillBridge</h1>
          <p className="text-xl text-blue-100 mb-8">
            Continue your learning journey with AI-powered guidance.
          </p>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
        <motion.div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back!
            </h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <Input
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-blue-600 font-semibold"
            >
              Sign up
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}