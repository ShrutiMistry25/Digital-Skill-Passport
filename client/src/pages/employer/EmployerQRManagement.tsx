import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { QrCode, Download, Plus, Calendar, MapPin, Users, CheckCircle } from 'lucide-react';

export default function EmployerQRManagement() {
  const qrCodes = [
    {
      id: 1,
      jobTitle: 'Warehouse Assistant',
      location: 'Brooklyn, NY',
      workers: 2,
      scansToday: 8,
      created: '2025-10-28',
      status: 'Active',
    },
    {
      id: 2,
      jobTitle: 'Delivery Driver',
      location: 'Manhattan, NY',
      workers: 1,
      scansToday: 4,
      created: '2025-10-30',
      status: 'Active',
    },
    {
      id: 3,
      jobTitle: 'Construction Helper',
      location: 'Queens, NY',
      workers: 3,
      scansToday: 12,
      created: '2025-10-29',
      status: 'Active',
    },
  ];

  const recentScans = [
    {
      id: 1,
      worker: 'John Smith',
      job: 'Warehouse Assistant',
      action: 'Clock In',
      time: '8:00 AM',
      location: 'Brooklyn, NY',
    },
    {
      id: 2,
      worker: 'Maria Garcia',
      job: 'Warehouse Assistant',
      action: 'Clock In',
      time: '8:15 AM',
      location: 'Brooklyn, NY',
    },
    {
      id: 3,
      worker: 'Sarah Johnson',
      job: 'Delivery Driver',
      action: 'Clock Out',
      time: '5:30 PM',
      location: 'Manhattan, NY',
    },
  ];

  return (
    <DashboardLayout userType="employer" userName="ABC Logistics" notifications={5}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">QR Code Management</h1>
            <p className="text-gray-600">Generate and manage QR codes for job verification</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Generate New QR
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-blue-600 mb-2">{qrCodes.length}</div>
              <p className="text-gray-600">Active QR Codes</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-green-600 mb-2">{qrCodes.reduce((sum, qr) => sum + qr.scansToday, 0)}</div>
              <p className="text-gray-600">Scans Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-purple-600 mb-2">{qrCodes.reduce((sum, qr) => sum + qr.workers, 0)}</div>
              <p className="text-gray-600">Total Workers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-orange-600 mb-2">100%</div>
              <p className="text-gray-600">Verification Rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* QR Codes List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Active QR Codes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {qrCodes.map((qr) => (
                  <div key={qr.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <QrCode className="h-16 w-16 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-gray-900">{qr.jobTitle}</h3>
                          <Badge variant="default">{qr.status}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {qr.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {qr.workers} workers
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Created {new Date(qr.created).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            {qr.scansToday} scans today
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="gap-1">
                            <Download className="h-3 w-3" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">View Details</Button>
                          <Button size="sm" variant="outline">Deactivate</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Scans */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Scans</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentScans.map((scan) => (
                <div key={scan.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-900">{scan.worker}</p>
                    <Badge variant={scan.action === 'Clock In' ? 'default' : 'secondary'}>
                      {scan.action}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{scan.job}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{scan.time}</span>
                    <span>{scan.location}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
