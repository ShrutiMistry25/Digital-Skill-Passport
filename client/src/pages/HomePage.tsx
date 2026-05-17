import { Link } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Shield,
  CheckCircle,
  Users,
  Briefcase,
  Star,
  QrCode,
  MessageCircle,
  Award,
  ArrowRight,
} from 'lucide-react';

export default function HomePage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Verified Identity',
      description: 'Digital verification ensures trust and authenticity for all workers',
    },
    {
      icon: QrCode,
      title: 'QR-Based Tracking',
      description: 'Simple QR code scanning for job start and completion verification',
    },
    {
      icon: Award,
      title: 'Skill Passport',
      description: 'Comprehensive digital record of verified skills and work history',
    },
    {
      icon: MessageCircle,
      title: 'Direct Communication',
      description: 'Built-in chat system for seamless worker-employer communication',
    },
    {
      icon: Star,
      title: 'Ratings & Feedback',
      description: 'Transparent feedback system to build reputation and trust',
    },
    {
      icon: Briefcase,
      title: 'Job Matching',
      description: 'Smart matching between skilled workers and relevant opportunities',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Verified Workers' },
    { value: '2,500+', label: 'Employers' },
    { value: '50,000+', label: 'Jobs Completed' },
    { value: '4.8/5', label: 'Average Rating' },
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Construction Worker',
      content:
        'Digital Skill Passport helped me showcase my verified skills and land better jobs. Employers trust me more because of my verified work history.',
      avatar: '/placeholder-avatar.jpg',
    },
    {
      name: 'John Chen',
      role: 'Warehouse Manager',
      content:
        'Finding reliable workers has never been easier. The verification system gives us confidence in who we hire, saving us time and money.',
      avatar: '/placeholder-avatar.jpg',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Electrician',
      content:
        'I love how easy it is to track my jobs and build my reputation. The QR system is simple and my digital passport opens doors.',
      avatar: '/placeholder-avatar.jpg',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5" />
              <span>Trusted by 10,000+ Workers</span>
            </div>
            <h1 className="text-white mb-6">Verified Skills, Trusted Work</h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect verified skilled workers with trusted employers through digital
              identity verification and seamless job matching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login?type=worker">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 gap-2"
                >
                  
                  Join as Worker
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login?type=employer">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 gap-2"
                >
                  Join as Employer
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Why Choose Digital Skill Passport?</h2>
            <p className="text-xl text-gray-600">
              A comprehensive platform designed for the modern workforce
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                  <CardContent className="pt-6">
                    <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Create Your Profile',
                description:
                  'Sign up and create your verified digital identity with skills and experience',
              },
              {
                step: '2',
                title: 'Connect & Match',
                description:
                  'Workers find jobs, employers find skilled workers through smart matching',
              },
              {
                step: '3',
                title: 'Work & Verify',
                description:
                  'Complete jobs with QR verification, build reputation through feedback',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.step}</span>
                </div>
                <h3 className="text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">
              Real stories from workers and employers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                      <span className="text-gray-600">
                        {testimonial.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </MainLayout>
  );
}
