import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Search, MapPin, Star, Award, Briefcase, CheckCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function EmployerWorkerSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const workers = [
    {
      id: 1,
      name: 'John Smith',
      location: 'Brooklyn, NY',
      skills: ['Warehouse Operations', 'Forklift', 'Inventory Management'],
      experience: '5 years',
      rating: 4.8,
      jobsCompleted: 24,
      verified: true,
      availability: 'Available Now',
    },
    {
      id: 2,
      name: 'Maria Garcia',
      location: 'Queens, NY',
      skills: ['Forklift Operation', 'Safety Compliance', 'Team Leadership'],
      experience: '7 years',
      rating: 5.0,
      jobsCompleted: 42,
      verified: true,
      availability: 'Available from Nov 1',
    },
    {
      id: 3,
      name: 'David Chen',
      location: 'Manhattan, NY',
      skills: ['Inventory Management', 'Quality Control', 'Data Entry'],
      experience: '3 years',
      rating: 4.5,
      jobsCompleted: 18,
      verified: true,
      availability: 'Available Now',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      location: 'Bronx, NY',
      skills: ['Delivery Driver', 'Customer Service', 'Route Planning'],
      experience: '4 years',
      rating: 4.9,
      jobsCompleted: 31,
      verified: true,
      availability: 'Available Now',
    },
    {
      id: 5,
      name: 'Ahmed Hassan',
      location: 'Brooklyn, NY',
      skills: ['Construction', 'Safety Compliance', 'Equipment Operation'],
      experience: '6 years',
      rating: 4.7,
      jobsCompleted: 28,
      verified: true,
      availability: 'Available from Oct 31',
    },
  ];

  return (
    <DashboardLayout userType="employer" userName="ABC Logistics" notifications={5}>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">Find Workers</h1>
          <p className="text-gray-600">Search for verified skilled workers</p>
        </div>

        {/* Search Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 space-y-2">
                <Label htmlFor="search">Skills or Name</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="search"
                    placeholder="e.g. Forklift, Warehouse"
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="md:col-span-3 space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="location" placeholder="City or ZIP code" className="pl-9" />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="experience">Experience</Label>
                <Select>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Experience</SelectItem>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="rating">Min Rating</Label>
                <Select>
                  <SelectTrigger id="rating">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Rating</SelectItem>
                    <SelectItem value="4.5">4.5+ Stars</SelectItem>
                    <SelectItem value="4.0">4.0+ Stars</SelectItem>
                    <SelectItem value="3.5">3.5+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-1 flex items-end">
                <Button className="w-full gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600">{workers.length} workers found</p>
          <Select defaultValue="rating">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="experience">Most Experienced</SelectItem>
              <SelectItem value="jobs">Most Jobs</SelectItem>
              <SelectItem value="distance">Nearest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Worker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workers.map((worker) => (
            <Card key={worker.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>
                      {worker.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-gray-900">{worker.name}</h3>
                      {worker.verified && (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      {worker.location}
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-gray-900">{worker.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Briefcase className="h-4 w-4" />
                        {worker.jobsCompleted} jobs
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Award className="h-4 w-4" />
                        {worker.experience}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {worker.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <Badge variant={worker.availability === 'Available Now' ? 'default' : 'secondary'}>
                    {worker.availability}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <MessageCircle className="h-3 w-3" />
                      Message
                    </Button>
                    <Button size="sm">View Profile</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
