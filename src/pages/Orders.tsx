import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Package,
  Clock,
  CheckCircle,
  Truck,
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  Eye,
  Download
} from 'lucide-react';

const mockOrders = [
  {
    id: 'ORD001',
    service: 'Dry Cleaning',
    items: ['2x Shirts', '1x Suit', '1x Dress'],
    status: 'delivered',
    progress: 100,
    pickupDate: '2024-01-15',
    deliveryDate: '2024-01-17',
    amount: '₹450',
    address: 'KIET Group of Institutions, Muradnagar, Ghaziabad - 201206'
  },
  {
    id: 'ORD002',
    service: 'Wash & Fold',
    items: ['5x T-shirts', '3x Jeans', '2x Shirts'],
    status: 'in-process',
    progress: 60,
    pickupDate: '2024-01-18',
    deliveryDate: '2024-01-20',
    amount: '₹320',
    address: 'KIET Group of Institutions, Muradnagar, Ghaziabad - 201206'
  },
  {
    id: 'ORD003',
    service: 'Express Service',
    items: ['1x Shirt', '1x Trouser'],
    status: 'pending',
    progress: 20,
    pickupDate: '2024-01-20',
    deliveryDate: '2024-01-20',
    amount: '₹180',
    address: 'KIET Group of Institutions, Muradnagar, Ghaziabad - 201206'
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-warning text-warning-foreground';
    case 'in-process': return 'bg-primary text-primary-foreground';
    case 'delivered': return 'bg-success text-success-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending': return Clock;
    case 'in-process': return Package;
    case 'delivered': return CheckCircle;
    default: return Package;
  }
};

export default function Orders() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredOrders = activeTab === 'all' 
    ? mockOrders 
    : mockOrders.filter(order => order.status === activeTab);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Your <span className="gradient-hero bg-clip-text text-transparent">Orders</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Track and manage all your laundry orders in one place
          </p>
        </motion.div>

        {/* Order Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-96">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="in-process">Active</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-8">
              <div className="space-y-6">
                {filteredOrders.length === 0 ? (
                  <Card className="p-12 text-center">
                    <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No orders found</h3>
                    <p className="text-muted-foreground mb-6">
                      You don't have any orders in this category yet.
                    </p>
                    <Button className="gradient-hero text-white border-0">
                      Create New Order
                    </Button>
                  </Card>
                ) : (
                  filteredOrders.map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="p-6 hover-lift">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                          {/* Order Info */}
                          <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-lg font-semibold">Order {order.id}</h3>
                                  <Badge className={getStatusColor(order.status)}>
                                    {React.createElement(getStatusIcon(order.status), { 
                                      className: "w-3 h-3 mr-1" 
                                    })}
                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1).replace('-', ' ')}
                                  </Badge>
                                </div>
                                <div className="text-sm text-muted-foreground space-y-1">
                                  <div className="flex items-center">
                                    <Package className="w-4 h-4 mr-2" />
                                    {order.service}
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    {order.address}
                                  </div>
                                  <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Pickup: {order.pickupDate} | Delivery: {order.deliveryDate}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-primary">{order.amount}</div>
                                <div className="text-sm text-muted-foreground">Total Amount</div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium mb-2">Items:</h4>
                              <div className="flex flex-wrap gap-2">
                                {order.items.map((item, itemIndex) => (
                                  <Badge key={itemIndex} variant="secondary">
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Progress */}
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>Progress</span>
                                <span>{order.progress}%</span>
                              </div>
                              <Progress value={order.progress} className="h-2" />
                            </div>
                            
                            <div className="space-y-2 text-sm">
                              <div className={`flex items-center space-x-2 ${
                                order.progress >= 25 ? 'text-primary' : 'text-muted-foreground'
                              }`}>
                                <div className={`w-2 h-2 rounded-full ${
                                  order.progress >= 25 ? 'bg-primary' : 'bg-muted'
                                }`} />
                                <span>Order Confirmed</span>
                              </div>
                              <div className={`flex items-center space-x-2 ${
                                order.progress >= 50 ? 'text-primary' : 'text-muted-foreground'
                              }`}>
                                <div className={`w-2 h-2 rounded-full ${
                                  order.progress >= 50 ? 'bg-primary' : 'bg-muted'
                                }`} />
                                <span>Pickup Completed</span>
                              </div>
                              <div className={`flex items-center space-x-2 ${
                                order.progress >= 75 ? 'text-primary' : 'text-muted-foreground'
                              }`}>
                                <div className={`w-2 h-2 rounded-full ${
                                  order.progress >= 75 ? 'bg-primary' : 'bg-muted'
                                }`} />
                                <span>In Processing</span>
                              </div>
                              <div className={`flex items-center space-x-2 ${
                                order.progress >= 100 ? 'text-primary' : 'text-muted-foreground'
                              }`}>
                                <div className={`w-2 h-2 rounded-full ${
                                  order.progress >= 100 ? 'bg-primary' : 'bg-muted'
                                }`} />
                                <span>Delivered</span>
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col space-y-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            {order.status === 'delivered' && (
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4 mr-2" />
                                Download Receipt
                              </Button>
                            )}
                            {order.status === 'in-process' && (
                              <Button variant="outline" size="sm">
                                <Truck className="w-4 h-4 mr-2" />
                                Track Order
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="p-8 text-center gradient-hero/5">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Contact our support team for any questions about your orders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary text-white border-0">
                <Phone className="mr-2 w-4 h-4" />
                Call Support: +91 6307225600
              </Button>
              <Button variant="outline">
                Create New Order
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}