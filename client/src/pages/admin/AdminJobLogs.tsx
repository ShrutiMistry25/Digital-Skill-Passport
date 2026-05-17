import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Search, Download, QrCode, Calendar, MapPin, Users } from 'lucide-react';

export default function AdminJobLogs() {
  const jobLogs = [
    {
      id: 1,
      jobTitle: 'Warehouse Assistant',
      worker: 'John Smith',
      employer: 'ABC Logistics',
      location: 'Brooklyn, NY',
      date: '2025-10-30',
      hoursWorked: 8,
      qrScans: 2,
      status: 'Completed',
      verified: true,
    },
    {
      id: 2,
      jobTitle: 'Delivery Driver',
      worker: 'Sarah Johnson',
      employer: 'Quick Delivery Inc',
      location: 'Manhattan, NY',
      date: '2025-10-30',
      hoursWorked: 6,
      qrScans: 2,
      status: 'In Progress',
      verified: true,
    },
    {
      id: 3,
      jobTitle: 'Construction Helper',
      worker: 'David Chen',
      employer: 'BuildRight Corp',
      location: 'Queens, NY',
      date: '2025-10-29',
      hoursWorked: 10,
      qrScans: 2,
      status: 'Completed',
      verified: true,
    },
    {
      id: 4,
      jobTitle: 'Factory Worker',
      worker: 'Maria Garcia',
      employer: 'Manufacturing Plus',
      location: 'Bronx, NY',
      date: '2025-10-29',
      hoursWorked: 8,
      qrScans: 2,
      status: 'Completed',
      verified: true,
    },
  ];

  return (
    <DashboardLayout userType="admin" userName="Admin" notifications={8}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">Job Logs</h1>
            <p className="text-gray-600">View all verified job records and QR code scans</p>
          </div>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Logs
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search jobs..." className="pl-9" />
              </div>
              <Input type="date" placeholder="Date" />
              <Input placeholder="Worker name" />
              <Input placeholder="Employer name" />
            </div>
          </CardContent>
        </Card>

        {/* Job Logs Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 text-sm text-gray-600">Job Title</th>
                    <th className="text-left p-4 text-sm text-gray-600">Worker</th>
                    <th className="text-left p-4 text-sm text-gray-600">Employer</th>
                    <th className="text-left p-4 text-sm text-gray-600">Location</th>
                    <th className="text-left p-4 text-sm text-gray-600">Date</th>
                    <th className="text-left p-4 text-sm text-gray-600">Hours</th>
                    <th className="text-left p-4 text-sm text-gray-600">QR Scans</th>
                    <th className="text-left p-4 text-sm text-gray-600">Status</th>
                    <th className="text-left p-4 text-sm text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {jobLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="p-4 text-gray-900">{log.jobTitle}</td>
                      <td className="p-4 text-gray-600">{log.worker}</td>
                      <td className="p-4 text-gray-600">{log.employer}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{log.location}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(log.date).toLocaleDateString()}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600">{log.hoursWorked}h</td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <QrCode className="h-4 w-4 text-green-600" />
                          <span className="text-gray-600">{log.qrScans}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant={log.status === 'Completed' ? 'default' : 'secondary'}>
                          {log.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Button size="sm" variant="outline">View Details</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
