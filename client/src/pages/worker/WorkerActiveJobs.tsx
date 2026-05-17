import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { MapPin, Calendar, DollarSign, QrCode, CheckCircle, Clock, MessageCircle } from 'lucide-react';

export default function WorkerActiveJobs() {
  const activeJobs = [
    {
      id: 1,
      title: 'Warehouse Assistant',
      employer: 'ABC Logistics',
      location: 'Brooklyn, NY',
      startDate: '2025-10-28',
      endDate: '2025-11-05',
      pay: '$20/hr',
      hoursWorked: 24,
      totalHours: 40,
      status: 'In Progress',
      lastScan: '2025-10-30 08:00 AM',
    },
    {
      id: 2,
      title: 'Construction Helper',
      employer: 'BuildRight Corp',
      location: 'Queens, NY',
      startDate: '2025-10-30',
      endDate: '2025-11-10',
      pay: '$25/hr',
      hoursWorked: 8,
      totalHours: 80,
      status: 'In Progress',
      lastScan: '2025-10-30 07:30 AM',
    },
  ];

  const pendingJobs = [
    {
      id: 3,
      title: 'Delivery Driver',
      employer: 'Quick Delivery Inc',
      location: 'Manhattan, NY',
      startDate: '2025-10-31',
      endDate: '2025-11-02',
      pay: '$22/hr',
      status: 'Pending Start',
      estimatedHours: 24,
    },
    {
      id: 4,
      title: 'Factory Worker',
      employer: 'Manufacturing Plus',
      location: 'Bronx, NY',
      startDate: '2025-11-01',
      endDate: '2025-11-15',
      pay: '$21/hr',
      status: 'Pending Start',
      estimatedHours: 120,
    },
  ];

  const completedJobs = [
    {
      id: 5,
      title: 'Moving Helper',
      employer: 'City Movers',
      location: 'Brooklyn, NY',
      completedDate: '2025-10-25',
      pay: '$18/hr',
      hoursWorked: 16,
      earned: '$288',
      rating: 5,
      status: 'Completed',
    },
    {
      id: 6,
      title: 'Warehouse Associate',
      employer: 'Global Logistics',
      location: 'Queens, NY',
      completedDate: '2025-10-20',
      pay: '$20/hr',
      hoursWorked: 40,
      earned: '$800',
      rating: 4.5,
      status: 'Completed',
    },
  ];

  return (
    <DashboardLayout userType="worker" userName="John Smith" notifications={3}>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">My Jobs</h1>
          <p className="text-gray-600">Track and manage your job assignments</p>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="active">
              Active ({activeJobs.length})
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending ({pendingJobs.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedJobs.length})
            </TabsTrigger>
          </TabsList>

          {/* Active Jobs Tab */}
          <TabsContent value="active" className="space-y-4">
            {activeJobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-gray-900">{job.title}</h3>
                        <Badge variant="default">{job.status}</Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{job.employer}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          {job.pay}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(job.startDate).toLocaleDateString()} - {new Date(job.endDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Last scan: {job.lastScan}
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Hours Progress</span>
                          <span className="text-gray-900">{job.hoursWorked}/{job.totalHours} hrs</span>
                        </div>
                        <Progress value={(job.hoursWorked / job.totalHours) * 100} />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="gap-2">
                      <QrCode className="h-4 w-4" />
                      Scan QR to Clock In
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Message Employer
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Pending Jobs Tab */}
          <TabsContent value="pending" className="space-y-4">
            {pendingJobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-gray-900">{job.title}</h3>
                        <Badge variant="secondary">{job.status}</Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{job.employer}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          {job.pay}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Starts: {new Date(job.startDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Est. {job.estimatedHours} hours
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Contact Employer
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Completed Jobs Tab */}
          <TabsContent value="completed" className="space-y-4">
            {completedJobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-gray-900">{job.title}</h3>
                        <Badge variant="default" className="bg-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {job.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{job.employer}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Completed: {new Date(job.completedDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {job.hoursWorked} hours worked
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          Earned: {job.earned}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-600">Your rating:</span>
                        {[...Array(5)].map((_, i) => (
                          <CheckCircle
                            key={i}
                            className={`h-4 w-4 ${
                              i < job.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">View Details</Button>
                    <Button variant="outline">Download Invoice</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
