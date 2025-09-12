import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Award, 
  Shield, 
  Heart, 
  Shirt,
  Target,
  Eye,
  Zap,
  CheckCircle
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Sanidhya Srivastava',
    role: 'Founder & CEO',
    bio: 'Passionate about revolutionizing the laundry industry with technology and quality service.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    email: 'sanidhya733@gmail.com'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Operations',
    bio: 'Ensures smooth operations and maintains our high quality standards across all services.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    email: 'priya@laundrypro.com'
  },
  {
    name: 'Rahul Kumar',
    role: 'Quality Manager',
    bio: 'Expert in fabric care with over 10 years of experience in premium laundry services.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    email: 'rahul@laundrypro.com'
  },
  {
    name: 'Sneha Patel',
    role: 'Customer Success',
    bio: 'Dedicated to ensuring every customer has an exceptional experience with LaundryPro.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    email: 'sneha@laundrypro.com'
  }
];

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on the quality of our services. Every garment receives professional care and attention.'
  },
  {
    icon: Heart,
    title: 'Customer Centric',
    description: 'Our customers are at the heart of everything we do. Their satisfaction is our ultimate goal.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously innovate to provide faster, better, and more convenient laundry solutions.'
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'Count on us for consistent, dependable service that you can trust time and time again.'
  }
];

const milestones = [
  { year: '2023', title: 'Company Founded', description: 'LaundryPro started with a vision to revolutionize laundry services' },
  { year: '2023', title: '1000+ Customers', description: 'Reached our first major milestone of serving 1000 happy customers' },
  { year: '2024', title: 'Premium Services', description: 'Launched premium dry cleaning and specialized garment care services' },
  { year: '2024', title: 'Express Delivery', description: 'Introduced same-day and express delivery options for urgent needs' }
];

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="gradient-primary text-white border-0 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Passionate About
              <div>
                Laundry Excellence
              </div>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Founded with a mission to provide premium laundry services that combine 
              traditional care with modern convenience. We're here to make laundry 
              the least of your worries.
            </p>
          </motion.div>
          
          <motion.div
            className="glass-card p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-secondary mb-2">50,000+</div>
                <div className="text-muted-foreground">Orders Completed</div>
              </div>
              <div className="text-center">
                <Shirt className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-accent mb-2">99.8%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To revolutionize the laundry industry by providing convenient, 
                  high-quality, and eco-friendly laundry services that save our 
                  customers time while exceeding their expectations. We believe 
                  everyone deserves fresh, clean clothes without the hassle.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <div className="gradient-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become India's most trusted and innovative laundry service 
                  provider, setting new standards in garment care, customer service, 
                  and environmental responsibility. We envision a future where 
                  laundry is completely hassle-free for everyone.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional laundry services every day
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover-lift h-full">
                  <div className="gradient-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind LaundryPro's success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover-lift">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to transform laundry services
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="gradient-hero w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <Card className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
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
            className="glass-card p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Join the LaundryPro Family</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the difference that professional care and genuine passion make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-hero text-white border-0"
                onClick={() => window.location.href = '/booking'}
              >
                Book Your First Order
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}