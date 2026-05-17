import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Award, Star, Briefcase, Calendar, MapPin, Download, Share2, CheckCircle, QrCode } from 'lucide-react';

export default function WorkerSkillPassport() {
  const workHistory = [
    {
      id: 1,
      jobTitle: 'Warehouse Assistant',
      employer: 'ABC Logistics',
      location: 'Brooklyn, NY',
      startDate: '2025-09-15',
      endDate: '2025-10-20',
      duration: '35 days',
      rating: 5,
      verified: true,
      feedback: 'Excellent worker, very reliable and hardworking. Always on time and follows safety protocols.',
    },
    {
      id: 2,
      jobTitle: 'Construction Helper',
      employer: 'BuildRight Corp',
      location: 'Queens, NY',
      startDate: '2025-08-01',
      endDate: '2025-08-31',
      duration: '30 days',
      rating: 4.5,
      verified: true,
      feedback: 'Great team player with strong work ethic. Would hire again.',
    },
    {
      id: 3,
      jobTitle: 'Delivery Driver',
      employer: 'Quick Delivery Inc',
      location: 'Manhattan, NY',
      startDate: '2025-07-10',
      endDate: '2025-07-25',
      duration: '15 days',
      rating: 5,
      verified: true,
      feedback: 'Professional and efficient. Completed all deliveries on time.',
    },
  ];

  const skills = [
    { name: 'Warehouse Operations', level: 'Expert', verified: true },
    { name: 'Forklift Operation', level: 'Advanced', verified: true },
    { name: 'Inventory Management', level: 'Intermediate', verified: true },
    { name: 'Safety Compliance', level: 'Expert', verified: true },
    { name: 'Team Leadership', level: 'Intermediate', verified: false },
  ];

  const stats = {
    totalJobs: 24,
    completedJobs: 24,
    averageRating: 4.8,
    verifiedSkills: 4,
  };

  return (
    <DashboardLayout userType="worker" userName="John Smith" notifications={3}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">My Skill Passport</h1>
            <p className="text-gray-600">Your verified digital work identity</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Passport Header */}
        <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24 border-4 border-white">
                <AvatarFallback className="bg-blue-500 text-white">JS</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-white mb-2">John Smith</h2>
                <p className="text-blue-100 mb-4">Verified Skilled Worker</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge className="bg-white text-blue-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Identity Verified
                  </Badge>
                  <Badge className="bg-white text-blue-600">
                    <Award className="h-3 w-3 mr-1" />
                    {stats.verifiedSkills} Skills Verified
                  </Badge>
                  <Badge className="bg-white text-blue-600">
                    <Star className="h-3 w-3 mr-1" />
                    {stats.averageRating} Rating
                  </Badge>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <QrCode className="h-24 w-24 text-blue-600" />
                <p className="text-xs text-blue-600 text-center mt-2">Scan to Verify</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-blue-600 mb-2">{stats.totalJobs}</div>
              <p className="text-gray-600">Total Jobs</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-green-600 mb-2">{stats.completedJobs}</div>
              <p className="text-gray-600">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-yellow-600 mb-2">{stats.averageRating}</div>
              <p className="text-gray-600">Avg Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-purple-600 mb-2">{stats.verifiedSkills}</div>
              <p className="text-gray-600">Verified Skills</p>
            </CardContent>
          </Card>
        </div>

        {/* Verified Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Verified Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-900">{skill.name}</span>
                      {skill.verified && (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                    <Badge variant={skill.verified ? 'default' : 'secondary'}>
                      {skill.level}
                    </Badge>
                  </div>
                  <Award className={`h-6 w-6 ${skill.verified ? 'text-blue-600' : 'text-gray-300'}`} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Work History */}
        <Card>
          <CardHeader>
            <CardTitle>Verified Work History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {workHistory.map((job) => (
              <div key={job.id} className="border rounded-lg p-4 hover:border-blue-200 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-gray-900">{job.jobTitle}</h3>
                      {job.verified && (
                        <Badge variant="default" className="gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{job.employer}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(job.startDate).toLocaleDateString()} - {new Date(job.endDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(job.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">{job.feedback}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
