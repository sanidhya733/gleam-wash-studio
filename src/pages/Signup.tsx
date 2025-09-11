import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/sonner';
import { signInWithGoogle, signUp } from '@/lib/supabase';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Shirt, 
  ArrowRight,
  Chrome,
  Facebook,
  User
} from 'lucide-react';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
      toast.success('Redirecting to Google...');
    } catch (error) {
      toast.error('Failed to sign in with Google');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    try {
      setIsLoading(true);
      await signUp(formData.email, formData.password);
      toast.success('Account created successfully! Please check your email for verification.');
      navigate('/login');
    } catch (error) {
      toast.error('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Left Side - Branding */}
        <motion.div
          className="flex flex-col justify-center space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="gradient-hero w-12 h-12 rounded-2xl flex items-center justify-center">
                <Shirt className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">LaundryPro</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Join
              <span className="block gradient-hero bg-clip-text text-transparent">
                LaundryPro
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Create your account and start enjoying premium laundry services with free pickup and delivery.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">What you'll get:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Free doorstep pickup & delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Professional cleaning with premium care</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>24/7 order tracking and support</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Signup Form */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="w-full max-w-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Create Account</h2>
              <p className="text-muted-foreground">Sign up to get started with LaundryPro</p>
            </div>

            <form className="space-y-6" onSubmit={handleSignUp}>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="pl-10"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  />
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                By creating an account, you agree to our Terms of Service and Privacy Policy.
              </div>

              <Button 
                type="submit"
                className="w-full gradient-hero text-white border-0" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  type="button"
                >
                  <Chrome className="mr-2 w-4 h-4" />
                  Google
                </Button>
                <Button variant="outline" className="w-full" disabled>
                  <Facebook className="mr-2 w-4 h-4" />
                  Facebook
                </Button>
              </div>
            </div>

            <div className="text-center mt-6 text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}