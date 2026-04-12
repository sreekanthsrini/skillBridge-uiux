import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { motion } from 'motion/react';
import { GraduationCap, Github } from 'lucide-react';
import axios from 'axios';

export function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = 'Name is required';

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        'http://localhost:8080/api/auth/register',
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      console.log('Signup Success:', response.data);

      // Save JWT token
      localStorage.setItem('token', response.data.token);

      navigate('/app');

    } catch (error: any) {
      console.error(error);

      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Signup failed. Try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Signup with ${provider}`);
    navigate('/app');
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 p-12 items-center justify-center relative overflow-hidden">
        <motion.div className="text-white max-w-lg">
          <GraduationCap className="w-20 h-20 mb-6" />
          <h1 className="text-5xl font-bold mb-6">Start Your Journey</h1>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of learners and land your dream job.
          </p>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <motion.div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Create an account
            </h2>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <Input
              type="text"
              label="Full Name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={errors.name}
            />

            <Input
              type="email"
              label="Email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
            />

            <Input
              type="password"
              label="Password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              error={errors.password}
            />

            <Input
              type="password"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleChange('confirmPassword', e.target.value)
              }
              error={errors.confirmPassword}
            />

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/')}
              className="text-blue-600 font-semibold"
            >
              Sign in
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}