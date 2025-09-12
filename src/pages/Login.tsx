import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Shirt, 
  ArrowRight,
  Chrome,
  Facebook
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

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
              Welcome
              <div>
                Back
              </div>
            </h1>
            <p className="text-xl text-muted-foreground">
              Sign in to manage your laundry orders, track deliveries, and access premium features.
            </p>
          </div>
          
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

        {/* Right Side - Login Form */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="w-full max-w-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Sign In</h2>
              <p className="text-muted-foreground">Enter your credentials to access your account</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="sanidhya733@gmail.com"
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
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button className="w-full gradient-hero text-white border-0" size="lg">
                Sign In
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
                <Button variant="outline" className="w-full">
                  <Chrome className="mr-2 w-4 h-4" />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <Facebook className="mr-2 w-4 h-4" />
                  Facebook
                </Button>
              </div>
            </div>

            <div className="text-center mt-6 text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link to="/signup" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}