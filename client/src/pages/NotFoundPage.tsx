import { Link } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <MainLayout showNav={false}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <span className="text-9xl text-blue-600">404</span>
          </div>
          <h1 className="text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="gap-2">
                <Home className="h-5 w-5" />
                Go to Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </div>
          
        </div>
      </div>
    </MainLayout>
  );
}
