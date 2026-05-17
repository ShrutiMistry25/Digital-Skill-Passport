import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import {
  Briefcase,
  Star,
  DollarSign,
  TrendingUp,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WorkerDashboard() {
  const stats = [
    { label: 'Active Jobs', value: '3', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Completed Jobs', value: '24', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Avg Rating', value: '4.8', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'This Month', value: '$3,200', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const activeJobs = [
    {
      id: 1,
      title: 'Warehouse Assistant',
      employer: 'ABC Logistics',
      location: 'Brooklyn, NY',
      startDate: '2025-10-28',
      endDate: '2025-11-05',
      status: 'In Progress',
      progress: 60,
    },
    {
      id: 2,
      title: 'Construction Helper',
      employer: 'BuildRight Corp',
      location: 'Queens, NY',
      startDate: '2025-10-30',
      endDate: '2025-11-10',
      status: 'In Progress',
      progress: 20,
    },
    {
      id: 3,
      title: 'Delivery Driver',
      employer: 'Quick Delivery Inc',
      location: 'Manhattan, NY',
      startDate: '2025-10-29',
      endDate: '2025-10-31',
      status: 'Pending Start',
      progress: 0,
    },
  ];

  const recentNotifications = [
    {
      id: 1,
      type: 'job_request',
      message: 'New job request from XYZ Manufacturing',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'feedback',
      message: 'ABC Logistics rated you 5 stars!',
      time: '5 hours ago',
    },
    {
      id: 3,
      type: 'message',
      message: 'New message from BuildRight Corp',
      time: '1 day ago',
    },
  ];

  return (
    <DashboardLayout userType="worker" userName="John Smith" notifications={3}>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's an overview of your work activity</p>
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
          {/* Active Jobs */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Active Jobs</CardTitle>
                  <Link to="/worker/active-jobs">
                    <Button variant="ghost" size="sm">View All</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeJobs.map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg hover:border-blue-200 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-gray-900 mb-1">{job.title}</h3>
                        <p className="text-gray-600">{job.employer}</p>
                      </div>
                      <Badge variant={job.status === 'In Progress' ? 'default' : 'secondary'}>
                        {job.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(job.startDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-900">{job.progress}%</span>
                      </div>
                      <Progress value={job.progress} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Notifications & Quick Actions */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentNotifications.map((notification) => (
                  <div key={notification.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-lg ${
                      notification.type === 'job_request' ? 'bg-blue-100' :
                      notification.type === 'feedback' ? 'bg-green-100' : 'bg-purple-100'
                    }`}>
                      {notification.type === 'job_request' && <Briefcase className="h-4 w-4 text-blue-600" />}
                      {notification.type === 'feedback' && <Star className="h-4 w-4 text-green-600" />}
                      {notification.type === 'message' && <AlertCircle className="h-4 w-4 text-purple-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
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
                <Link to="/worker/job-search">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Briefcase className="h-4 w-4" />
                    Search Jobs
                  </Button>
                </Link>
                <Link to="/worker/skill-passport">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <CheckCircle className="h-4 w-4" />
                    View Skill Passport
                  </Button>
                </Link>
                <Link to="/worker/chat">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <AlertCircle className="h-4 w-4" />
                    Messages
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                
                  <Link to="/worker/profile">
                    <Button size="sm" variant="outline" className="w-full">
                      Complete Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
