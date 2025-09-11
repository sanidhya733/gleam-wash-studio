import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ServiceCard } from '@/components/ui/service-card';
import { 
  Shirt, 
  Sparkles, 
  Clock, 
  Shield, 
  Star, 
  Zap,
  Package,
  Zap as Lightning,
  Filter
} from 'lucide-react';

const allServices = [
  {
    id: 'wash-fold',
    category: 'Basic',
    title: 'Wash & Fold',
    description: 'Professional washing and folding service with premium detergents',
    price: '₹40',
    duration: '24hrs',
    features: ['Premium detergent', 'Fabric softener', 'Neat folding', 'Stain treatment'],
    icon: Shirt,
  },
  {
    id: 'dry-cleaning',
    category: 'Premium',
    title: 'Dry Cleaning',
    description: 'Expert dry cleaning for delicate and formal wear',
    price: '₹80',
    duration: '48hrs',
    features: ['Stain removal', 'Gentle care', 'Professional press', 'Plastic covering'],
    icon: Sparkles,
    popular: true,
  },
  {
    id: 'express',
    category: 'Express',
    title: 'Express Service',
    description: 'Same-day pickup and delivery for urgent needs',
    price: '₹60',
    duration: '12hrs',
    features: ['Rush processing', 'Priority handling', 'Quick delivery', 'SMS updates'],
    icon: Clock,
  },
  {
    id: 'ironing',
    category: 'Basic',
    title: 'Ironing Only',
    description: 'Professional ironing and pressing service',
    price: '₹25',
    duration: '24hrs',
    features: ['Steam pressing', 'Crease removal', 'Hangers included', 'Shape retention'],
    icon: Lightning,
  },
  {
    id: 'premium-care',
    category: 'Premium',
    title: 'Premium Care',
    description: 'Luxury treatment for expensive and delicate garments',
    price: '₹120',
    duration: '72hrs',
    features: ['Hand washing', 'Luxury detergents', 'Individual care', 'Special packaging'],
    icon: Star,
  },
  {
    id: 'bulk-service',
    category: 'Bulk',
    title: 'Bulk Service',
    description: 'Cost-effective solution for large quantities',
    price: '₹35',
    duration: '48hrs',
    features: ['Volume discount', 'Free pickup', 'Sorted packing', 'Inventory list'],
    icon: Package,
  },
];

const categories = ['All', 'Basic', 'Premium', 'Express', 'Bulk'];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="gradient-primary text-white border-0 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Services
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Laundry
              <span className="block gradient-hero bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              From basic wash and fold to premium dry cleaning, we offer comprehensive 
              laundry solutions to meet all your garment care needs.
            </p>

            {/* Service Categories Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "gradient-primary text-white border-0" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Service Guarantees</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every service comes with our commitment to quality and customer satisfaction
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Guarantee',
                description: '100% satisfaction or full refund'
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                description: 'Punctual service every time'
              },
              {
                icon: Zap,
                title: 'Express Available',
                description: 'Same-day service when needed'
              },
              {
                icon: Star,
                title: 'Premium Care',
                description: 'Special attention to every garment'
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card text-center p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="gradient-secondary w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose your preferred service and schedule a pickup today
            </p>
            <Button size="lg" className="gradient-hero text-white border-0">
              Book Service Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}