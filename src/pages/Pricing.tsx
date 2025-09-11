import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Check,
  Star,
  Calculator,
  Package,
  Clock,
  Shirt,
  Sparkles,
  Zap
} from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic Plan',
    subtitle: 'Perfect for individuals',
    price: '₹299',
    period: 'per month',
    description: 'Ideal for single person or small families with regular laundry needs',
    features: [
      '20 kg monthly quota',
      'Basic wash & fold service',
      'Standard delivery (48hrs)',
      'Free pickup & delivery',
      'Basic stain removal',
      'Email notifications'
    ],
    icon: Package,
    popular: false
  },
  {
    name: 'Premium Plan',
    subtitle: 'Most popular choice',
    price: '₹499',
    period: 'per month',
    description: 'Best value for families with comprehensive laundry care needs',
    features: [
      '40 kg monthly quota',
      'All wash & fold services',
      'Dry cleaning included (2 items)',
      'Express delivery (24hrs)',
      'Advanced stain treatment',
      'SMS & email notifications',
      'Priority customer support',
      'Eco-friendly products'
    ],
    icon: Star,
    popular: true
  },
  {
    name: 'Enterprise Plan',
    subtitle: 'For bulk requirements',
    price: '₹899',
    period: 'per month',
    description: 'Perfect for hostels, PGs, or businesses with high volume needs',
    features: [
      '100 kg monthly quota',
      'All premium services',
      'Unlimited dry cleaning',
      'Same-day delivery available',
      'Dedicated account manager',
      'Custom pickup schedules',
      'Bulk discounts',
      'Priority processing',
      'Detailed reporting'
    ],
    icon: Zap,
    popular: false
  }
];

const serviceRates = [
  {
    category: 'Basic Services',
    services: [
      { name: 'Wash & Fold', price: '₹40/kg', description: 'Standard washing and folding' },
      { name: 'Wash & Iron', price: '₹50/kg', description: 'Washing with professional ironing' },
      { name: 'Ironing Only', price: '₹25/kg', description: 'Professional pressing service' }
    ]
  },
  {
    category: 'Premium Services',
    services: [
      { name: 'Dry Cleaning', price: '₹80/kg', description: 'Professional dry cleaning' },
      { name: 'Premium Care', price: '₹120/kg', description: 'Luxury garment treatment' },
      { name: 'Stain Removal', price: '₹30/item', description: 'Specialized stain treatment' }
    ]
  },
  {
    category: 'Express Services',
    services: [
      { name: 'Same Day Service', price: '₹60/kg', description: '12-hour turnaround' },
      { name: 'Emergency Service', price: '₹100/kg', description: '6-hour express service' },
      { name: 'Weekend Pickup', price: '₹20 extra', description: 'Weekend & holiday service' }
    ]
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="gradient-primary text-white border-0 mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Simple, Fair
              <span className="block gradient-hero bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our flexible plans or pay per service. No hidden fees, 
              no surprises - just honest pricing for quality laundry care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <Tabs value={billingCycle} onValueChange={setBillingCycle} className="mb-12">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="monthly">Monthly Plans</TabsTrigger>
                <TabsTrigger value="payperuse">Pay Per Use</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className={`relative p-8 hover-lift ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="gradient-primary text-white border-0">Most Popular</Badge>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <div className="gradient-hero w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <plan.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                        <div className="mb-2">
                          <span className="text-4xl font-bold text-primary">{plan.price}</span>
                          <span className="text-muted-foreground">/{plan.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'gradient-hero text-white border-0' 
                            : 'gradient-primary text-white border-0'
                        }`}
                      >
                        Choose {plan.name}
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="payperuse">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {serviceRates.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="text-center mb-6">
                        <div className="gradient-secondary w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                          {category.category === 'Basic Services' && <Shirt className="w-6 h-6 text-white" />}
                          {category.category === 'Premium Services' && <Sparkles className="w-6 h-6 text-white" />}
                          {category.category === 'Express Services' && <Clock className="w-6 h-6 text-white" />}
                        </div>
                        <h3 className="text-xl font-bold">{category.category}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex justify-between items-start p-3 rounded-lg bg-muted/50">
                            <div className="flex-1">
                              <div className="font-semibold text-sm">{service.name}</div>
                              <div className="text-xs text-muted-foreground">{service.description}</div>
                            </div>
                            <div className="text-primary font-bold text-sm">{service.price}</div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Every plan includes our core quality guarantees and premium features
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Package,
                  title: 'Free Pickup & Delivery',
                  description: 'Doorstep service included in all plans'
                },
                {
                  icon: Star,
                  title: 'Quality Guarantee',
                  description: '100% satisfaction or money back'
                },
                {
                  icon: Clock,
                  title: 'Flexible Scheduling',
                  description: 'Book pickups at your convenience'
                },
                {
                  icon: Sparkles,
                  title: 'Premium Care',
                  description: 'Professional treatment for all garments'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="gradient-accent w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers about our pricing and services.
            </p>
          </motion.div>
          
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                question: 'Can I switch plans anytime?',
                answer: 'Yes! You can upgrade, downgrade, or cancel your plan anytime. Changes take effect from the next billing cycle.'
              },
              {
                question: 'What happens if I exceed my monthly quota?',
                answer: 'Any excess usage will be charged at our standard pay-per-use rates. We\'ll notify you when you\'re approaching your limit.'
              },
              {
                question: 'Are there any hidden charges?',
                answer: 'No hidden fees! Our pricing is completely transparent. The only additional charges may apply for special services or express deliveries.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with our service, we\'ll refund your money or redo the service for free.'
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="glass-card p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose your plan or start with pay-per-use. No commitment required.
            </p>
            <Button size="lg" className="gradient-hero text-white border-0">
              Start Your First Order
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}