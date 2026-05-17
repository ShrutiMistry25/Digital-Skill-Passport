import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { MapPin, Calendar, DollarSign, QrCode, CheckCircle, Users, MessageCircle, Clock } from 'lucide-react';

export default function EmployerActiveJobs() {
  const activeJobs = [
    {
      id: 1,
      title: 'Warehouse Assistant',
      workers: [
        { name: 'John Smith', status: 'Working', hours: 24 },
        { name: 'Maria Garcia', status: 'Working', hours: 28 },
      ],
      location: 'Brooklyn, NY',
      startDate: '2025-10-28',
      endDate: '2025-11-05',
      pay: '$20/hr',
      filled: 2,
      total: 3,
    },
    {
      id: 2,
      title: 'Delivery Driver',
      workers: [
        { name: 'Sarah Johnson', status: 'On Break', hours: 16 },
      ],
      location: 'Manhattan, NY',
      startDate: '2025-10-30',
      endDate: '2025-11-02',
      pay: '$22/hr',
      filled: 1,
      total: 2,
    },
  ];

  const pendingJobs = [
    {
      id: 3,
      title: 'Construction Helper',
      applicants: 15,
      location: 'Queens, NY',
      startDate: '2025-11-01',
      pay: '$25/hr',
      positions: 5,
    },
  ];

  const completedJobs = [
    {
      id: 4,
      title: 'Factory Worker',
      workers: 3,
      completedDate: '2025-10-25',
      totalHours: 120,
      totalCost: '$2,520',
      rating: 4.8,
    },
  ];

  return (
    <DashboardLayout userType="employer" userName="ABC Logistics" notifications={5}>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">Manage Jobs</h1>
          <p className="text-gray-600">Track and manage your job postings and workers</p>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="active">Active ({activeJobs.length})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({pendingJobs.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedJobs.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeJobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-gray-900">{job.title}</h3>
                        <Badge variant="default">Active</Badge>
                        <Badge variant="outline">{job.filled}/{job.total} Filled</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600 mb-4">
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
                          {new Date(job.startDate).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="border-t pt-4 mt-4">
                        <h4 className="text-gray-900 mb-3">Active Workers</h4>
                        <div className="space-y-3">
                          {job.workers.map((worker, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarFallback>
                                    {worker.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-gray-900">{worker.name}</p>
                                  <Badge variant={worker.status === 'Working' ? 'default' : 'secondary'} className="mt-1">
                                    {worker.status}
                                  </Badge>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-600">{worker.hours} hours</p>
                                <div className="flex gap-1 mt-1">
                                  <Button size="sm" variant="outline">
                                    <MessageCircle className="h-3 w-3" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    View
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4 border-t">
                    <Button className="gap-2">
                      <QrCode className="h-4 w-4" />
                      Generate QR Code
                    </Button>
                    <Button variant="outline">View Applicants</Button>
                    <Button variant="outline">Edit Job</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {pendingJobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-gray-900">{job.title}</h3>
                        <Badge variant="secondary">Pending Start</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {job.applicants} applicants
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Starts {new Date(job.startDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button>Review Applicants</Button>
                    <Button variant="outline">Edit Job</Button>
                    <Button variant="outline">Delete</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedJobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-gray-900">{job.title}</h3>
                        <Badge className="bg-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm text-gray-600 mt-4">
                        <div>
                          <span className="text-gray-500">Completed</span>
                          <p className="text-gray-900">{new Date(job.completedDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Workers</span>
                          <p className="text-gray-900">{job.workers}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Total Hours</span>
                          <p className="text-gray-900">{job.totalHours}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Total Cost</span>
                          <p className="text-gray-900">{job.totalCost}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">View Details</Button>
                    <Button variant="outline">Download Report</Button>
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
