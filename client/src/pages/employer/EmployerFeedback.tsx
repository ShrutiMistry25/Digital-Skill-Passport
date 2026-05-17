import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Star, ThumbsUp } from 'lucide-react';
import { useState } from 'react';

export default function EmployerFeedback() {
  const [selectedRating, setSelectedRating] = useState(0);

  const pendingFeedback = [
    {
      id: 1,
      worker: 'John Smith',
      job: 'Warehouse Assistant',
      completedDate: '2025-10-30',
      hoursWorked: 40,
    },
    {
      id: 2,
      worker: 'Maria Garcia',
      job: 'Forklift Operator',
      completedDate: '2025-10-29',
      hoursWorked: 32,
    },
  ];

  const submittedFeedback = [
    {
      id: 1,
      worker: 'Sarah Johnson',
      job: 'Delivery Driver',
      rating: 5,
      comment: 'Excellent performance! Very reliable and professional.',
      submittedDate: '2025-10-28',
    },
    {
      id: 2,
      worker: 'David Chen',
      job: 'Inventory Manager',
      rating: 4.5,
      comment: 'Great worker with strong attention to detail.',
      submittedDate: '2025-10-25',
    },
  ];

  return (
    <DashboardLayout userType="employer" userName="ABC Logistics" notifications={5}>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">Worker Feedback</h1>
          <p className="text-gray-600">Rate and provide feedback for completed jobs</p>
        </div>

        {/* Pending Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Feedback ({pendingFeedback.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingFeedback.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {item.worker.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{item.worker}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.job}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>Completed: {new Date(item.completedDate).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{item.hoursWorked} hours worked</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Rating</p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => setSelectedRating(rating)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              rating <= selectedRating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Comments</p>
                    <Textarea
                      placeholder="Share your experience working with this worker..."
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button>Submit Feedback</Button>
                    <Button variant="outline">Skip</Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Submitted Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>Submitted Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {submittedFeedback.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {item.worker.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-gray-900 mb-1">{item.worker}</h3>
                        <p className="text-sm text-gray-600">{item.job}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(item.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg mb-2">
                      <p className="text-sm text-gray-700">{item.comment}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Submitted on {new Date(item.submittedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
