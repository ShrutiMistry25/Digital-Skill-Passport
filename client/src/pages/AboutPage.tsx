import { MainLayout } from '../components/MainLayout';
import { Card, CardContent } from '../components/ui/card';
import { Target, Eye, Heart, TrendingUp, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Verified Workers' },
    { icon: Globe, value: '25+', label: 'Cities Covered' },
    { icon: TrendingUp, value: '50,000+', label: 'Jobs Completed' },
    { icon: Heart, value: '98%', label: 'Satisfaction Rate' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To create verified digital identities for blue-collar workers, enabling them to showcase their skills and connect with trusted employment opportunities.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'A world where every skilled worker has access to dignified employment through transparent verification and equal opportunities.',
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description:
        'Empowering marginalized workers with digital tools, reducing unemployment, and fostering economic inclusion through technology.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">About Digital Skill Passport</h1>
            <p className="text-xl text-blue-100">
              Building bridges between skilled workers and opportunities through verified
              digital identities and transparent job matching.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">
              Making a difference in the lives of workers and employers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-blue-600 mb-2">{stat.value}</div>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
