import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Download, TrendingUp, Users, Briefcase, DollarSign } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminReports() {
  const monthlyStats = [
    { month: 'Jan', workers: 1200, employers: 250, jobs: 800 },
    { month: 'Feb', workers: 1800, employers: 320, jobs: 1200 },
    { month: 'Mar', workers: 2400, employers: 450, jobs: 1600 },
    { month: 'Apr', workers: 3200, employers: 580, jobs: 2100 },
    { month: 'May', workers: 4100, employers: 720, jobs: 2600 },
    { month: 'Jun', workers: 5200, employers: 890, jobs: 3200 },
  ];

  const skillsData = [
    { name: 'Warehouse', value: 2840 },
    { name: 'Construction', value: 1920 },
    { name: 'Delivery', value: 1560 },
    { name: 'Manufacturing', value: 1240 },
    { name: 'Maintenance', value: 980 },
  ];

  const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];

  return (
    <DashboardLayout userType="admin" userName="Admin" notifications={8}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">Reports & Analytics</h1>
            <p className="text-gray-600">Platform statistics and insights</p>
          </div>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-8 w-8 text-blue-600" />
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
              <div className="text-gray-900 mb-1">5,200</div>
              <p className="text-sm text-gray-600">Total Workers</p>
              <p className="text-xs text-green-600 mt-1">+27% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Briefcase className="h-8 w-8 text-green-600" />
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
              <div className="text-gray-900 mb-1">890</div>
              <p className="text-sm text-gray-600">Total Employers</p>
              <p className="text-xs text-green-600 mt-1">+23% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Briefcase className="h-8 w-8 text-purple-600" />
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
              <div className="text-gray-900 mb-1">3,200</div>
              <p className="text-sm text-gray-600">Jobs This Month</p>
              <p className="text-xs text-green-600 mt-1">+23% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="h-8 w-8 text-orange-600" />
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
              <div className="text-gray-900 mb-1">$156K</div>
              <p className="text-sm text-gray-600">Platform Revenue</p>
              <p className="text-xs text-green-600 mt-1">+31% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Growth Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Platform Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="workers" stroke="#2563eb" strokeWidth={2} name="Workers" />
                  <Line type="monotone" dataKey="employers" stroke="#10b981" strokeWidth={2} name="Employers" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={skillsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {skillsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Job Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Job Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jobs" fill="#2563eb" name="Jobs Posted" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
