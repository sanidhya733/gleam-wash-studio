import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Headphones,
  Users
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us for immediate assistance',
    value: '+91 6307225600',
    action: 'tel:+916307225600'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us your queries anytime',
    value: 'sanidhya733@gmail.com',
    action: 'mailto:sanidhya733@gmail.com'
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    description: 'Meet us at our headquarters',
    value: 'KIET Group of Institutions, Muradnagar, Ghaziabad - 201206',
    action: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'We\'re here to help',
    value: 'Mon-Sun: 6:00 AM - 10:00 PM',
    action: '#'
  }
];

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    available: true
  },
  {
    icon: Headphones,
    title: '24/7 Helpline',
    description: 'Round-the-clock customer support',
    available: true
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other customers',
    available: false
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="gradient-primary text-white border-0 mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              We're Here to
              <span className="block gradient-hero bg-clip-text text-transparent">
                Help You
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our services? Need support with your order? 
              Or just want to say hello? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover-lift h-full">
                  <div className="gradient-primary w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{info.description}</p>
                  {info.action !== '#' ? (
                    <a 
                      href={info.action}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{info.value}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Sanidhya" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Srivastava" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="sanidhya733@gmail.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 6307225600" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    className="w-full gradient-hero text-white border-0" 
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Message sent successfully! We will get back to you within 24 hours.');
                    }}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Support Channels & FAQ */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Support Channels */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
                <div className="space-y-4">
                  {supportChannels.map((channel, index) => (
                    <div key={channel.title} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                      <div className="gradient-secondary w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <channel.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{channel.title}</h3>
                          {channel.available ? (
                            <Badge className="bg-green-100 text-green-700">Available</Badge>
                          ) : (
                            <Badge variant="secondary">Coming Soon</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{channel.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick FAQ */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Quick Answers</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: 'What are your pickup hours?',
                      answer: 'We offer flexible pickup slots from 9 AM to 9 PM, 7 days a week.'
                    },
                    {
                      question: 'How long does processing take?',
                      answer: 'Standard service is 24-48 hours. Express service available for same-day delivery.'
                    },
                    {
                      question: 'Do you handle delicate items?',
                      answer: 'Yes! We have specialized care for silk, wool, and other delicate fabrics.'
                    },
                    {
                      question: 'Is there a minimum order?',
                      answer: 'No minimum order required. We accept orders of any size.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="pb-4 border-b border-border last:border-0">
                      <h4 className="font-medium mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-6"
                  onClick={() => alert('FAQ section will be available soon with detailed answers to all common questions!')}
                >
                  View All FAQs
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Visit Our Location</h2>
              <p className="text-muted-foreground mb-6">
                KIET Group of Institutions, Muradnagar, Ghaziabad - 201206
              </p>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map will be integrated here
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => window.open('https://maps.google.com/search/KIET Group of Institutions, Muradnagar, Ghaziabad', '_blank')}
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="glass-card p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Experience LaundryPro?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't wait! Book your first pickup and see why thousands trust us with their laundry
            </p>
            <Button 
              size="lg" 
              className="gradient-hero text-white border-0"
              onClick={() => window.location.href = '/booking'}
            >
              Book Your First Order
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}