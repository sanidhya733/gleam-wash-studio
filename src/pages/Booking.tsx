import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Package,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Shirt,
  User,
  Phone
} from 'lucide-react';
import { format } from 'date-fns';

const services = [
  { id: 'wash-fold', name: 'Wash & Fold', price: 40, icon: Shirt },
  { id: 'dry-cleaning', name: 'Dry Cleaning', price: 80, icon: Shirt },
  { id: 'express', name: 'Express Service', price: 60, icon: Clock },
  { id: 'ironing', name: 'Ironing Only', price: 25, icon: Shirt },
];

const timeSlots = [
  '9:00 AM - 12:00 PM',
  '12:00 PM - 3:00 PM', 
  '3:00 PM - 6:00 PM',
  '6:00 PM - 9:00 PM'
];

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    weight: '',
    pickupDate: undefined as Date | undefined,
    pickupTime: '',
    deliveryDate: undefined as Date | undefined,
    deliveryTime: '',
    address: '',
    phone: '',
    instructions: ''
  });

  const steps = [
    { number: 1, title: 'Service', icon: Package },
    { number: 2, title: 'Schedule', icon: Calendar },
    { number: 3, title: 'Details', icon: User },
    { number: 4, title: 'Confirm', icon: CheckCircle }
  ];

  const selectedService = services.find(s => s.id === formData.service);
  const estimatedPrice = selectedService ? selectedService.price * (parseInt(formData.weight) || 0) : 0;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="gradient-primary text-white border-0 mb-6">
            Book Your Service
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Schedule Your
            <span className="block gradient-hero bg-clip-text text-transparent">
              Laundry Pickup
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Easy 4-step booking process to get your laundry picked up and delivered
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div 
          className="glass-card p-6 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                  currentStep >= step.number 
                    ? 'gradient-primary text-white border-primary' 
                    : 'border-muted bg-muted text-muted-foreground'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    Step {step.number}
                  </div>
                  <div className="text-xs text-muted-foreground">{step.title}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden lg:block w-20 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 glass-card border-0">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Select Your Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.service === service.id
                          ? 'border-primary gradient-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, service: service.id }))}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <service.icon className="w-6 h-6 text-primary" />
                          <div>
                            <div className="font-semibold">{service.name}</div>
                            <div className="text-sm text-muted-foreground">₹{service.price}/kg</div>
                          </div>
                        </div>
                        {formData.service === service.id && (
                          <CheckCircle className="w-6 h-6 text-primary" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="weight">Estimated Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Enter estimated weight"
                    value={formData.weight}
                    onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                  />
                  {estimatedPrice > 0 && (
                    <div className="p-4 gradient-primary/10 rounded-lg">
                      <div className="text-lg font-semibold">
                        Estimated Total: ₹{estimatedPrice}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Final price may vary based on actual weight
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Schedule */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Schedule Pickup & Delivery</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Pickup */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Pickup Details</h3>
                    <div>
                      <Label>Pickup Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.pickupDate ? format(formData.pickupDate, 'PPP') : 'Select date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.pickupDate}
                            onSelect={(date) => setFormData(prev => ({ ...prev, pickupDate: date }))}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label>Pickup Time</Label>
                      <Select value={formData.pickupTime} onValueChange={(value) => 
                        setFormData(prev => ({ ...prev, pickupTime: value }))
                      }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Delivery */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Delivery Details</h3>
                    <div>
                      <Label>Delivery Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.deliveryDate ? format(formData.deliveryDate, 'PPP') : 'Select date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.deliveryDate}
                            onSelect={(date) => setFormData(prev => ({ ...prev, deliveryDate: date }))}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label>Delivery Time</Label>
                      <Select value={formData.deliveryTime} onValueChange={(value) => 
                        setFormData(prev => ({ ...prev, deliveryTime: value }))
                      }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Contact & Address Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Pickup Address</Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete address"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="instructions">Special Instructions (Optional)</Label>
                    <Textarea
                      id="instructions"
                      placeholder="Any special care instructions or notes"
                      value={formData.instructions}
                      onChange={(e) => setFormData(prev => ({ ...prev, instructions: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Confirm Your Booking</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-semibold mb-2">Service Details</h3>
                      <div className="text-sm space-y-1">
                        <div>Service: {selectedService?.name}</div>
                        <div>Weight: {formData.weight} kg</div>
                        <div>Estimated Price: ₹{estimatedPrice}</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-semibold mb-2">Schedule</h3>
                      <div className="text-sm space-y-1">
                        <div>Pickup: {formData.pickupDate ? format(formData.pickupDate, 'PPP') : 'Not set'}</div>
                        <div>Pickup Time: {formData.pickupTime || 'Not set'}</div>
                        <div>Delivery: {formData.deliveryDate ? format(formData.deliveryDate, 'PPP') : 'Not set'}</div>
                        <div>Delivery Time: {formData.deliveryTime || 'Not set'}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-semibold mb-2">Contact Details</h3>
                      <div className="text-sm space-y-1">
                        <div>Phone: {formData.phone || 'Not provided'}</div>
                        <div>Address: {formData.address || 'Not provided'}</div>
                      </div>
                    </div>
                    
                    {formData.instructions && (
                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-semibold mb-2">Special Instructions</h3>
                        <div className="text-sm">{formData.instructions}</div>
                      </div>
                    )}
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full gradient-hero text-white border-0"
                  onClick={() => {
                    // Handle booking confirmation
                    alert('🎉 Booking confirmed! You will receive a confirmation SMS shortly. We will contact you at ' + formData.phone + ' for pickup confirmation.');
                    // Redirect to orders page after confirmation
                    setTimeout(() => {
                      window.location.href = '/orders';
                    }, 2000);
                  }}
                >
                  Confirm Booking & Pay ₹{estimatedPrice}
                </Button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Previous
              </Button>
              
              {currentStep < 4 ? (
                  <Button 
                    onClick={nextStep}
                    className="gradient-hero text-white border-0 flex items-center"
                    disabled={
                      (currentStep === 1 && (!formData.service || !formData.weight)) ||
                      (currentStep === 2 && (!formData.pickupDate || !formData.pickupTime || !formData.deliveryDate || !formData.deliveryTime)) ||
                      (currentStep === 3 && (!formData.phone || !formData.address))
                    }
                  >
                    Next Step
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
              ) : (
                <div /> // Empty div to maintain layout
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}