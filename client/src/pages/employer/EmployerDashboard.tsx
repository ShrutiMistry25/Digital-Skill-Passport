import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Users, Briefcase, CheckCircle, Clock, TrendingUp, Star, MessageCircle, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmployerDashboard() {
  const stats = [
    { label: 'Active Jobs', value: '5', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Workers Hired', value: '12', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Completed Jobs', value: '28', icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Pending Requests', value: '7', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const activeWorkers = [
    {
      id: 1,
      name: 'John Smith',
      job: 'Warehouse Assistant',
      status: 'Working',
      rating: 4.8,
      hoursWorked: 24,
      avatar: '',
    },
    {
      id: 2,
      name: 'Maria Garcia',
      job: 'Forklift Operator',
      status: 'Working',
      rating: 5.0,
      hoursWorked: 32,
      avatar: '',
    },
    {
      id: 3,
      name: 'David Chen',
      job: 'Inventory Manager',
      status: 'Break',
      rating: 4.5,
      hoursWorked: 16,
      avatar: '',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'application',
      message: 'New application from Sarah Johnson for Delivery Driver',
      time: '1 hour ago',
    },
    {
      id: 2,
      type: 'completion',
      message: 'John Smith completed Warehouse Assistant shift',
      time: '2 hours ago',
    },
    {
      id: 3,
      type: 'message',
      message: 'New message from Maria Garcia',
      time: '3 hours ago',
    },
    {
      id: 4,
      type: 'verification',
      message: 'David Chen clock-in verified via QR code',
      time: '4 hours ago',
    },
  ];

  const openJobs = [
    {
      id: 1,
      title: 'Warehouse Associate',
      applicants: 12,
      filled: 2,
      total: 3,
      status: 'Active',
    },
    {
      id: 2,
      title: 'Delivery Driver',
      applicants: 8,
      filled: 1,
      total: 2,
      status: 'Active',
    },
    {
      id: 3,
      title: 'Construction Helper',
      applicants: 15,
      filled: 3,
      total: 5,
      status: 'Active',
    },
  ];

  return (
    <DashboardLayout userType="employer" userName="ABC Logistics" notifications={5}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">Welcome back, ABC Logistics!</h1>
            <p className="text-gray-600">Here's what's happening with your workforce today</p>
          </div>
          <Link to="/employer/post-job">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Post New Job
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 mb-1">{stat.label}</p>
                      <div className="text-gray-900">{stat.value}</div>
                    </div>
                    <div className={`${stat.bg} p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Workers */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Active Workers</CardTitle>
                  <Link to="/employer/active-jobs">
                    <Button variant="ghost" size="sm">View All</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeWorkers.map((worker) => (
                  <div key={worker.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {worker.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-gray-900">{worker.name}</h4>
                        <p className="text-sm text-gray-600">{worker.job}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={worker.status === 'Working' ? 'default' : 'secondary'}>
                        {worker.status}
                      </Badge>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm text-gray-600">{worker.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Open Jobs */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Open Job Postings</CardTitle>
                  <Link to="/employer/post-job">
                    <Button variant="ghost" size="sm">Post New</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {openJobs.map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-gray-900">{job.title}</h4>
                      <Badge variant="default">{job.status}</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="text-gray-500">Applicants</span>
                        <p className="text-gray-900">{job.applicants}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Filled</span>
                        <p className="text-gray-900">{job.filled}/{job.total}</p>
                      </div>
                      <div>
                        <Link to="/employer/worker-search">
                          <Button size="sm" variant="outline">View</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'application' ? 'bg-blue-100' :
                      activity.type === 'completion' ? 'bg-green-100' :
                      activity.type === 'message' ? 'bg-purple-100' : 'bg-orange-100'
                    }`}>
                      {activity.type === 'application' && <Users className="h-4 w-4 text-blue-600" />}
                      {activity.type === 'completion' && <CheckCircle className="h-4 w-4 text-green-600" />}
                      {activity.type === 'message' && <MessageCircle className="h-4 w-4 text-purple-600" />}
                      {activity.type === 'verification' && <Clock className="h-4 w-4 text-orange-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/employer/post-job">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Plus className="h-4 w-4" />
                    Post a New Job
                  </Button>
                </Link>
                <Link to="/employer/worker-search">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Users className="h-4 w-4" />
                    Find Workers
                  </Button>
                </Link>
                <Link to="/employer/qr-management">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Manage QR Codes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
