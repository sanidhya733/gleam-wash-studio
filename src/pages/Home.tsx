import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ServiceCard } from '@/components/ui/service-card';
import { 
  Shirt, 
  Sparkles, 
  Clock, 
  Shield, 
  Star, 
  ArrowRight,
  CheckCircle,
  Truck,
  Phone,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Wash & Fold',
    description: 'Professional washing and folding service',
    price: '₹40',
    duration: '24hrs',
    features: ['Premium detergent', 'Fabric softener', 'Neat folding'],
    icon: Shirt,
  },
  {
    title: 'Dry Cleaning',
    description: 'Expert dry cleaning for delicate items',
    price: '₹80',
    duration: '48hrs',
    features: ['Stain removal', 'Gentle care', 'Professional press'],
    icon: Sparkles,
    popular: true,
  },
  {
    title: 'Express Service',
    description: 'Same-day pickup and delivery',
    price: '₹60',
    duration: '12hrs',
    features: ['Rush processing', 'Priority handling', 'Quick delivery'],
    icon: Clock,
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Delhi NCR',
    rating: 5,
    comment: 'Amazing service! My clothes come back perfectly clean and folded.',
  },
  {
    name: 'Rahul Kumar',
    location: 'Delhi NCR',
    rating: 5,
    comment: 'Super convenient pickup and delivery. Highly recommended!',
  },
  {
    name: 'Sneha Patel',
    location: 'Delhi NCR',
    rating: 5,
    comment: 'Professional service with great attention to detail.',
  },
];

const features = [
  {
    icon: Truck,
    title: 'Free Pickup & Delivery',
    description: 'Convenient doorstep service at no extra cost'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% satisfaction guaranteed or your money back'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service for your needs'
  },
  {
    icon: CheckCircle,
    title: 'Eco-Friendly',
    description: 'Environment-safe cleaning products and processes'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="gradient-primary text-white border-0 mb-6">
              Premium Laundry Service ✨
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Professional
              <span className="block gradient-hero bg-clip-text text-transparent">
                Laundry Care
              </span>
              at Your Doorstep
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the convenience of professional laundry service with free pickup 
              and delivery. Your clothes deserve the best care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-hero text-white border-0" asChild>
                <Link to="/booking">
                  Book Pickup Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
                  <div className="text-muted-foreground">Average Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of professional laundry services designed to meet all your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="gradient-hero text-white border-0" asChild>
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose LaundryPro?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best laundry experience with modern technology and care
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover-lift">
                  <div className="gradient-secondary w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-12">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book your first laundry pickup today and experience the convenience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-hero text-white border-0" asChild>
                  <Link to="/booking">Book Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Us
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}