import { MainLayout } from '../components/MainLayout';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Construction, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MaintenancePage() {
  return (
    <MainLayout showNav={false}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="h-10 w-10 text-orange-600" />
            </div>
            <h1 className="text-gray-900 mb-4">We'll Be Right Back</h1>
            <p className="text-gray-600 mb-6">
              We're currently performing scheduled maintenance to improve your experience.
              Please check back soon!
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
              <Clock className="h-4 w-4" />
              <span>Estimated downtime: 2 hours</span>
            </div>
            <Link to="/">
              <Button variant="outline" className="w-full">
                Return to Homepage
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
