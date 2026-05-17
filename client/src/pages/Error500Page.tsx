import { MainLayout } from '../components/MainLayout';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ServerCrash, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Error500Page() {
  return (
    <MainLayout showNav={false}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ServerCrash className="h-10 w-10 text-red-600" />
            </div>
            <h1 className="text-gray-900 mb-4">500 - Server Error</h1>
            <p className="text-gray-600 mb-6">
              Oops! Something went wrong on our end. Our team has been notified and is working to fix the issue.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => window.location.reload()} variant="outline" className="flex-1 gap-2">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
              <Link to="/" className="flex-1">
                <Button className="w-full">
                  Go Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
