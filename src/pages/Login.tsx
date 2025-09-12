import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/sonner';
import { signInWithGoogle, signUp, signIn } from '@/lib/supabase';
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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === '/signup';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await signInWithGoogle();
      if (error) throw error;
      toast.success('Signed in with Google successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to sign in with Google');
      console.error('Google sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (isSignup) {
      if (!formData.name) {
        toast.error('Please enter your name');
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
    }

    try {
      setIsLoading(true);
      
      if (isSignup) {
        const { data, error } = await signUp(formData.email, formData.password);
        if (error) throw error;
        toast.success('Account created successfully! Please check your email for verification.');
        navigate('/login');
      } else {
        const { data, error } = await signIn(formData.email, formData.password);
        if (error) throw error;
        toast.success('Signed in successfully!');
        navigate('/');
      }
    } catch (error: any) {
      toast.error(error.message || `Failed to ${isSignup ? 'sign up' : 'sign in'}`);
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    toast.info('Password reset functionality will be available soon. Please contact support at sanidhya733@gmail.com');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Welcome Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {isSignup ? (
                <>
                  Join
                  <div className="gradient-hero bg-clip-text text-transparent">
                    LaundryPro
                  </div>
                </>
              ) : (
                <>
                  Welcome
                  <div className="gradient-hero bg-clip-text text-transparent">
                    Back
                  </div>
                </>
              )}
            </h1>
            <p className="text-xl text-muted-foreground">
              {isSignup 
                ? 'Create your account and start enjoying premium laundry services with free pickup and delivery.'
                : 'Sign in to manage your laundry orders, track deliveries, and access premium features.'
              }
            </p>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Why choose LaundryPro?</h3>
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

          {/* Right Side - Login/Signup Form */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="w-full max-w-md p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="gradient-hero w-10 h-10 rounded-xl flex items-center justify-center">
                    <Shirt className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">LaundryPro</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  {isSignup ? 'Create Account' : 'Sign In'}
                </h2>
                <p className="text-muted-foreground">
                  {isSignup 
                    ? 'Sign up to get started with LaundryPro'
                    : 'Enter your credentials to access your account'
                  }
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {isSignup && (
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
                        required={isSignup}
                      />
                    </div>
                  </div>
                )}

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
                      required
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
                      placeholder={isSignup ? 'Create a password' : 'Enter your password'}
                      className="pl-10 pr-10"
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      required
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

                {isSignup && (
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
                        required={isSignup}
                      />
                    </div>
                  </div>
                )}

                {!isSignup && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))}
                      />
                      <span>Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-primary hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                {isSignup && (
                  <div className="text-xs text-muted-foreground">
                    By creating an account, you agree to our Terms of Service and Privacy Policy.
                  </div>
                )}

                <Button 
                  type="submit"
                  className="w-full gradient-hero text-white border-0" 
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (isSignup ? 'Creating Account...' : 'Signing In...') : (isSignup ? 'Create Account' : 'Sign In')}
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
                    type="button"
                    variant="outline" 
                    className="w-full"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                  >
                    <Chrome className="mr-2 w-4 h-4" />
                    Google
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="w-full" 
                    disabled
                    onClick={() => toast.info('Facebook login will be available soon!')}
                  >
                    <Facebook className="mr-2 w-4 h-4" />
                    Facebook
                  </Button>
                </div>
              </div>

              <div className="text-center mt-6 text-sm">
                <span className="text-muted-foreground">
                  {isSignup ? 'Already have an account? ' : "Don't have an account? "}
                </span>
                <Link 
                  to={isSignup ? '/login' : '/signup'} 
                  className="text-primary hover:underline font-medium"
                >
                  {isSignup ? 'Sign in' : 'Sign up'}
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}