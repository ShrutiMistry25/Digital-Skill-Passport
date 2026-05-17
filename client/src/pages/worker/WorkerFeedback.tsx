import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Star, ThumbsUp, MessageSquare, Calendar, Briefcase } from 'lucide-react';

export default function WorkerFeedback() {
  const overallStats = {
    averageRating: 4.8,
    totalReviews: 24,
    ratingDistribution: {
      5: 18,
      4: 5,
      3: 1,
      2: 0,
      1: 0,
    },
  };

  const feedbacks = [
    {
      id: 1,
      employer: 'ABC Logistics',
      employerInitials: 'AL',
      job: 'Warehouse Assistant',
      date: '2025-10-25',
      rating: 5,
      comment: 'Excellent worker! John is reliable, punctual, and always follows safety protocols. He went above and beyond in organizing the warehouse efficiently. Would definitely hire again for future projects.',
      skills: ['Reliability', 'Safety Compliance', 'Efficiency'],
    },
    {
      id: 2,
      employer: 'BuildRight Corp',
      employerInitials: 'BC',
      job: 'Construction Helper',
      date: '2025-10-20',
      rating: 4.5,
      comment: 'Great team player with strong work ethic. John adapted quickly to our construction site requirements and showed excellent attention to detail. Minor communication issues but overall very satisfied.',
      skills: ['Teamwork', 'Adaptability', 'Attention to Detail'],
    },
    {
      id: 3,
      employer: 'Quick Delivery Inc',
      employerInitials: 'QD',
      job: 'Delivery Driver',
      date: '2025-10-15',
      rating: 5,
      comment: 'Professional and efficient delivery driver. Completed all deliveries on time with zero customer complaints. Excellent customer service skills and very responsible with packages.',
      skills: ['Punctuality', 'Customer Service', 'Responsibility'],
    },
    {
      id: 4,
      employer: 'Manufacturing Plus',
      employerInitials: 'MP',
      job: 'Factory Worker',
      date: '2025-10-10',
      rating: 5,
      comment: 'Outstanding performance on the assembly line. John maintained high quality standards throughout the project and showed great initiative in identifying process improvements.',
      skills: ['Quality Control', 'Initiative', 'Process Improvement'],
    },
    {
      id: 5,
      employer: 'City Movers',
      employerInitials: 'CM',
      job: 'Moving Helper',
      date: '2025-10-05',
      rating: 4,
      comment: 'Hardworking and careful with belongings. John handled all items with care and completed the move efficiently. Would recommend for moving jobs.',
      skills: ['Physical Strength', 'Care', 'Efficiency'],
    },
  ];

  return (
    <DashboardLayout userType="worker" userName="John Smith" notifications={3}>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">Feedback & Ratings</h1>
          <p className="text-gray-600">See what employers say about your work</p>
        </div>

        {/* Overall Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-5xl text-yellow-600 mb-2">{overallStats.averageRating}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(overallStats.averageRating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on {overallStats.totalReviews} reviews</p>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Rating Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = overallStats.ratingDistribution[rating as keyof typeof overallStats.ratingDistribution];
                const percentage = (count / overallStats.totalReviews) * 100;
                return (
                  <div key={rating} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-16">
                      <span className="text-sm text-gray-600">{rating}</span>
                      <Star className="h-4 w-4 text-yellow-400" />
                    </div>
                    <Progress value={percentage} className="flex-1" />
                    <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Feedback Cards */}
        <div className="space-y-4">
          <h2 className="text-gray-900">Recent Feedback</h2>
          {feedbacks.map((feedback) => (
            <Card key={feedback.id}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>{feedback.employerInitials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-gray-900 mb-1">{feedback.employer}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Briefcase className="h-4 w-4" />
                          <span>{feedback.job}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(feedback.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(feedback.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg mb-3">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="h-5 w-5 text-gray-400 mt-0.5" />
                        <p className="text-gray-700">{feedback.comment}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Highlighted skills:</span>
                      <div className="flex flex-wrap gap-2">
                        {feedback.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
