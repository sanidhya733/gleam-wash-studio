import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3,
  Users,
  Package,
  TrendingUp,
  IndianRupee,
  Clock,
  CheckCircle,
  AlertCircle,
  UserPlus,
  Settings,
  Download,
  Filter,
  Search,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

const mockStats = [
  {
    title: 'Total Revenue',
    value: '₹2,45,680',
    change: '+12.5%',
    icon: IndianRupee,
    color: 'text-green-600'
  },
  {
    title: 'Active Orders',
    value: '347',
    change: '+5.2%',
    icon: Package,
    color: 'text-blue-600'
  },
  {
    title: 'Total Customers',
    value: '1,234',
    change: '+8.1%',
    icon: Users,
    color: 'text-purple-600'
  },
  {
    title: 'Completed Today',
    value: '89',
    change: '+15.3%',
    icon: CheckCircle,
    color: 'text-green-600'
  }
];

const mockOrders = [
  {
    id: 'ORD001',
    customer: 'Sanidhya Srivastava',
    service: 'Dry Cleaning',
    status: 'in-process',
    amount: '₹450',
    pickup: '2024-01-20',
    delivery: '2024-01-22',
    phone: '6307225600'
  },
  {
    id: 'ORD002',
    customer: 'Priya Sharma',
    service: 'Wash & Fold',
    status: 'pending',
    amount: '₹320',
    pickup: '2024-01-21',
    delivery: '2024-01-23',
    phone: '9876543210'
  },
  {
    id: 'ORD003',
    customer: 'Rahul Kumar',
    service: 'Express Service',
    status: 'delivered',
    amount: '₹180',
    pickup: '2024-01-19',
    delivery: '2024-01-19',
    phone: '8765432109'
  }
];

const mockCustomers = [
  {
    id: 'CUST001',
    name: 'Sanidhya Srivastava',
    email: 'sanidhya733@gmail.com',
    phone: '6307225600',
    address: 'KIET Group of Institutions, Muradnagar, Ghaziabad - 201206',
    orders: 15,
    totalSpent: '₹4,520',
    joinDate: '2023-12-01'
  },
  {
    id: 'CUST002',
    name: 'Priya Sharma',
    email: 'priya.sharma@gmail.com',
    phone: '9876543210',
    address: 'Sector 15, Noida - 201301',
    orders: 8,
    totalSpent: '₹2,340',
    joinDate: '2024-01-05'
  }
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Admin
                <span className="gradient-hero bg-clip-text text-transparent ml-2">
                  Dashboard
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage orders, customers, and business analytics
              </p>
            </div>
            <div className="flex space-x-3 mt-4 sm:mt-0">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button className="gradient-primary text-white border-0">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {mockStats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <Badge className={`${stat.color} bg-transparent`}>
                          {stat.change}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.title}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Quick Actions */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add New Customer
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="w-4 h-4 mr-2" />
                      Create New Order
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Generate Reports
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      System Settings
                    </Button>
                  </div>
                </Card>

                {/* Recent Orders */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                  <div className="space-y-4">
                    {mockOrders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <div className="font-medium">{order.id}</div>
                          <div className="text-sm text-muted-foreground">{order.customer}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{order.amount}</div>
                          <Badge 
                            className={`text-xs ${
                              order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                              order.status === 'in-process' ? 'bg-blue-100 text-blue-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Order Management</h2>
                <div className="flex space-x-3">
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>

              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4">Order ID</th>
                        <th className="text-left p-4">Customer</th>
                        <th className="text-left p-4">Service</th>
                        <th className="text-left p-4">Status</th>
                        <th className="text-left p-4">Amount</th>
                        <th className="text-left p-4">Pickup</th>
                        <th className="text-left p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders.map((order) => (
                        <tr key={order.id} className="border-b">
                          <td className="p-4 font-medium">{order.id}</td>
                          <td className="p-4">
                            <div>
                              <div className="font-medium">{order.customer}</div>
                              <div className="text-sm text-muted-foreground">{order.phone}</div>
                            </div>
                          </td>
                          <td className="p-4">{order.service}</td>
                          <td className="p-4">
                            <Badge 
                              className={`${
                                order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                                order.status === 'in-process' ? 'bg-blue-100 text-blue-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}
                            >
                              {order.status}
                            </Badge>
                          </td>
                          <td className="p-4 font-medium">{order.amount}</td>
                          <td className="p-4">{order.pickup}</td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Customer Management</h2>
                <Button className="gradient-primary text-white border-0">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Customer
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockCustomers.map((customer) => (
                  <Card key={customer.id} className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{customer.name}</h3>
                        <p className="text-sm text-muted-foreground">{customer.id}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div><strong>Email:</strong> {customer.email}</div>
                      <div><strong>Phone:</strong> {customer.phone}</div>
                      <div><strong>Address:</strong> {customer.address}</div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div className="text-sm">
                        <div className="font-medium">{customer.orders} Orders</div>
                        <div className="text-muted-foreground">Total: {customer.totalSpent}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Joined: {customer.joinDate}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Business Analytics</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Revenue Trends</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>This Month</span>
                      <span className="font-bold text-primary">₹45,680</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span>Last Month</span>
                      <span className="font-bold">₹38,240</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Service Distribution</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Wash & Fold</span>
                      <span className="font-bold">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span>Dry Cleaning</span>
                      <span className="font-bold">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span>Express Service</span>
                      <span className="font-bold">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </Card>
              </div>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98.5%</div>
                    <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">2.3 hrs</div>
                    <div className="text-sm text-muted-foreground">Avg. Processing Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">99.2%</div>
                    <div className="text-sm text-muted-foreground">On-time Delivery</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}