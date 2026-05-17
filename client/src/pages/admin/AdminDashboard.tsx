import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Users, Briefcase, CheckCircle, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '12,543', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Active Jobs', value: '1,847', change: '+8%', icon: Briefcase, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Completed Jobs', value: '8,921', change: '+15%', icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Pending Verifications', value: '143', change: '-5%', icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const userGrowthData = [
    { month: 'Jan', workers: 1200, employers: 250 },
    { month: 'Feb', workers: 1800, employers: 320 },
    { month: 'Mar', workers: 2400, employers: 450 },
    { month: 'Apr', workers: 3200, employers: 580 },
    { month: 'May', workers: 4100, employers: 720 },
    { month: 'Jun', workers: 5200, employers: 890 },
  ];

  const jobsData = [
    { month: 'Jan', completed: 1200, active: 300 },
    { month: 'Feb', completed: 1500, active: 350 },
    { month: 'Mar', completed: 1800, active: 420 },
    { month: 'Apr', completed: 2100, active: 480 },
    { month: 'May', completed: 2400, active: 520 },
    { month: 'Jun', completed: 2800, active: 580 },
  ];

  const recentActivity = [
    { type: 'user', message: 'New employer registered: BuildCo Inc', time: '5 min ago' },
    { type: 'verification', message: 'Worker ID verification completed: John Smith', time: '12 min ago' },
    { type: 'job', message: 'Job posted: Warehouse Manager - ABC Logistics', time: '23 min ago' },
    { type: 'alert', message: 'Suspicious activity detected on account #4521', time: '1 hour ago' },
  ];

  return (
    <DashboardLayout userType="admin" userName="Admin" notifications={8}>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Platform overview and system analytics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`${stat.bg} p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">{stat.label}</p>
                  <div className="text-gray-900">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Growth Chart */}
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="workers" stroke="#2563eb" strokeWidth={2} />
                  <Line type="monotone" dataKey="employers" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">Workers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">Employers</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jobs Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Jobs Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={jobsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="completed" fill="#10b981" />
                  <Bar dataKey="active" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'user' ? 'bg-blue-100' :
                    activity.type === 'verification' ? 'bg-green-100' :
                    activity.type === 'job' ? 'bg-purple-100' : 'bg-orange-100'
                  }`}>
                    {activity.type === 'user' && <Users className="h-4 w-4 text-blue-600" />}
                    {activity.type === 'verification' && <CheckCircle className="h-4 w-4 text-green-600" />}
                    {activity.type === 'job' && <Briefcase className="h-4 w-4 text-purple-600" />}
                    {activity.type === 'alert' && <AlertTriangle className="h-4 w-4 text-orange-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
