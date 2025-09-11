import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  icon: LucideIcon;
  popular?: boolean;
  onClick?: () => void;
}

export function ServiceCard({
  title,
  description,
  price,
  duration,
  features,
  icon: Icon,
  popular = false,
  onClick,
}: ServiceCardProps) {
  return (
    <motion.div
      className={`relative glass-card hover-lift cursor-pointer ${
        popular ? 'ring-2 ring-primary' : ''
      }`}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="gradient-primary text-white border-0">Most Popular</Badge>
        </div>
      )}
      
      <div className="text-center">
        <div className="gradient-hero w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{price}</div>
            <div className="text-sm text-muted-foreground">per kg</div>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-center">
            <div className="text-lg font-semibold">{duration}</div>
            <div className="text-sm text-muted-foreground">delivery</div>
          </div>
        </div>
        
        <ul className="text-left space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button className="w-full gradient-primary text-white border-0" asChild>
          <Link to="/booking">
            Select Service
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}