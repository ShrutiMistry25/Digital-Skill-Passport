import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Search, CheckCircle, XCircle, Shield, MoreVertical } from 'lucide-react';

export default function AdminUserManagement() {
  const workers = [
    { id: 1, name: 'John Smith', email: 'john.smith@email.com', verified: true, jobs: 24, rating: 4.8, status: 'Active' },
    { id: 2, name: 'Maria Garcia', email: 'maria.g@email.com', verified: true, jobs: 42, rating: 5.0, status: 'Active' },
    { id: 3, name: 'David Chen', email: 'david.chen@email.com', verified: false, jobs: 0, rating: 0, status: 'Pending' },
  ];

  const employers = [
    { id: 1, name: 'ABC Logistics', email: 'hr@abclogistics.com', verified: true, jobs: 12, workers: 28, status: 'Active' },
    { id: 2, name: 'BuildRight Corp', email: 'contact@buildright.com', verified: true, jobs: 8, workers: 15, status: 'Active' },
    { id: 3, name: 'XYZ Manufacturing', email: 'info@xyz.com', verified: false, jobs: 0, workers: 0, status: 'Pending' },
  ];

  return (
    <DashboardLayout userType="admin" userName="Admin" notifications={8}>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">User Management</h1>
          <p className="text-gray-600">Manage and verify platform users</p>
        </div>

        <Tabs defaultValue="workers" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="workers">Workers ({workers.length})</TabsTrigger>
              <TabsTrigger value="employers">Employers ({employers.length})</TabsTrigger>
            </TabsList>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search users..." className="pl-9" />
            </div>
          </div>

          <TabsContent value="workers">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 text-sm text-gray-600">User</th>
                        <th className="text-left p-4 text-sm text-gray-600">Email</th>
                        <th className="text-left p-4 text-sm text-gray-600">Status</th>
                        <th className="text-left p-4 text-sm text-gray-600">Jobs</th>
                        <th className="text-left p-4 text-sm text-gray-600">Rating</th>
                        <th className="text-left p-4 text-sm text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {workers.map((worker) => (
                        <tr key={worker.id} className="hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarFallback>
                                  {worker.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="text-gray-900">{worker.name}</p>
                                  {worker.verified && (
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-gray-600">{worker.email}</td>
                          <td className="p-4">
                            <Badge variant={worker.status === 'Active' ? 'default' : 'secondary'}>
                              {worker.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-gray-600">{worker.jobs}</td>
                          <td className="p-4 text-gray-600">{worker.rating || 'N/A'}</td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              {!worker.verified && (
                                <Button size="sm" className="gap-1">
                                  <Shield className="h-3 w-3" />
                                  Verify
                                </Button>
                              )}
                              <Button size="sm" variant="outline">View</Button>
                              <Button size="sm" variant="ghost" className="p-1">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="employers">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 text-sm text-gray-600">Company</th>
                        <th className="text-left p-4 text-sm text-gray-600">Email</th>
                        <th className="text-left p-4 text-sm text-gray-600">Status</th>
                        <th className="text-left p-4 text-sm text-gray-600">Jobs Posted</th>
                        <th className="text-left p-4 text-sm text-gray-600">Workers Hired</th>
                        <th className="text-left p-4 text-sm text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {employers.map((employer) => (
                        <tr key={employer.id} className="hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarFallback>
                                  {employer.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="text-gray-900">{employer.name}</p>
                                  {employer.verified && (
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-gray-600">{employer.email}</td>
                          <td className="p-4">
                            <Badge variant={employer.status === 'Active' ? 'default' : 'secondary'}>
                              {employer.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-gray-600">{employer.jobs}</td>
                          <td className="p-4 text-gray-600">{employer.workers}</td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              {!employer.verified && (
                                <Button size="sm" className="gap-1">
                                  <Shield className="h-3 w-3" />
                                  Verify
                                </Button>
                              )}
                              <Button size="sm" variant="outline">View</Button>
                              <Button size="sm" variant="ghost" className="p-1">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
