import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Search, MapPin, DollarSign, Calendar, Briefcase, Building2 } from 'lucide-react';
import { useState } from 'react';

export default function WorkerJobSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Warehouse Associate',
      company: 'Global Logistics LLC',
      location: 'Brooklyn, NY',
      type: 'Full-time',
      pay: '$18-22/hr',
      posted: '2 days ago',
      description: 'Looking for reliable warehouse workers with forklift experience. Must be able to lift 50 lbs.',
      skills: ['Forklift', 'Warehouse', 'Inventory'],
      verified: true,
    },
    {
      id: 2,
      title: 'Construction Laborer',
      company: 'Metro Build Inc',
      location: 'Queens, NY',
      type: 'Contract',
      pay: '$25-30/hr',
      posted: '1 day ago',
      description: 'Experienced construction workers needed for commercial building project. 3+ months contract.',
      skills: ['Construction', 'Safety', 'Physical Labor'],
      verified: true,
    },
    {
      id: 3,
      title: 'Delivery Driver',
      company: 'Fast Express Co',
      location: 'Manhattan, NY',
      type: 'Part-time',
      pay: '$20/hr + tips',
      posted: '3 days ago',
      description: 'Part-time delivery drivers needed. Clean driving record required. Flexible hours available.',
      skills: ['Driving', 'Customer Service'],
      verified: false,
    },
    {
      id: 4,
      title: 'Factory Worker',
      company: 'Manufacturing Plus',
      location: 'Bronx, NY',
      type: 'Full-time',
      pay: '$19-23/hr',
      posted: '4 days ago',
      description: 'Assembly line workers needed for manufacturing facility. Night shifts available with premium pay.',
      skills: ['Manufacturing', 'Quality Control', 'Assembly'],
      verified: true,
    },
    {
      id: 5,
      title: 'Maintenance Technician',
      company: 'Property Services Group',
      location: 'Brooklyn, NY',
      type: 'Full-time',
      pay: '$24-28/hr',
      posted: '5 days ago',
      description: 'Seeking maintenance technicians for residential properties. HVAC and electrical experience preferred.',
      skills: ['Maintenance', 'Electrical', 'HVAC'],
      verified: true,
    },
    {
      id: 6,
      title: 'Moving Helper',
      company: 'City Movers',
      location: 'Queens, NY',
      type: 'Contract',
      pay: '$18-20/hr',
      posted: '1 week ago',
      description: 'Strong individuals needed to assist with residential and commercial moves. Weekend work available.',
      skills: ['Physical Labor', 'Customer Service'],
      verified: false,
    },
  ];

  return (
    <DashboardLayout userType="worker" userName="John Smith" notifications={3}>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">Find Jobs</h1>
          <p className="text-gray-600">Search and apply for verified job opportunities</p>
        </div>

        {/* Search Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 space-y-2">
                <Label htmlFor="search">Job Title or Keywords</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="search"
                    placeholder="e.g. Warehouse, Driver, Construction"
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
                  <Input
                    id="location"
                    placeholder="City or ZIP code"
                    className="pl-9"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="jobType">Job Type</Label>
                <Select>
                  <SelectTrigger id="jobType">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="payRange">Pay Range</Label>
                <Select>
                  <SelectTrigger id="payRange">
                    <SelectValue placeholder="Any Pay" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Pay</SelectItem>
                    <SelectItem value="15-20">$15-20/hr</SelectItem>
                    <SelectItem value="20-25">$20-25/hr</SelectItem>
                    <SelectItem value="25-30">$25-30/hr</SelectItem>
                    <SelectItem value="30+">$30+/hr</SelectItem>
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

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600">{jobs.length} jobs found</p>
          <Select defaultValue="recent">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="pay-high">Highest Pay</SelectItem>
              <SelectItem value="pay-low">Lowest Pay</SelectItem>
              <SelectItem value="distance">Nearest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-gray-900">{job.title}</h3>
                      {job.verified && (
                        <Badge variant="default">Verified Employer</Badge>
                      )}
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Building2 className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-blue-600 mb-2">{job.pay}</div>
                    <Button>Apply Now</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-3 border-t">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Posted {job.posted}
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
