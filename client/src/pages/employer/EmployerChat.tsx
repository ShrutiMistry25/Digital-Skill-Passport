import { DashboardLayout } from '../../components/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Search, Send, Paperclip, MoreVertical } from 'lucide-react';
import { useState } from 'react';

export default function EmployerChat() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      worker: 'John Smith',
      lastMessage: 'Yes, absolutely! I\'ll be there on time.',
      time: '10:15 AM',
      unread: 0,
      online: true,
    },
    {
      id: 2,
      worker: 'Maria Garcia',
      lastMessage: 'Sure, I can work overtime this weekend.',
      time: 'Yesterday',
      unread: 1,
      online: false,
    },
    {
      id: 3,
      worker: 'Sarah Johnson',
      lastMessage: 'When does the training start?',
      time: '2 days ago',
      unread: 2,
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'employer',
      text: 'Hi John! How are you doing?',
      time: '9:00 AM',
    },
    {
      id: 2,
      sender: 'worker',
      text: 'Hello! I\'m doing well, thank you.',
      time: '9:05 AM',
    },
    {
      id: 3,
      sender: 'employer',
      text: 'Can you come in tomorrow at 8 AM for the warehouse shift?',
      time: '9:10 AM',
    },
    {
      id: 4,
      sender: 'worker',
      text: 'Yes, absolutely! I\'ll be there on time.',
      time: '10:15 AM',
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <DashboardLayout userType="employer" userName="ABC Logistics" notifications={5}>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Communicate with workers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Conversations List */}
          <Card className="lg:col-span-4">
            <CardContent className="p-0">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search conversations..." className="pl-9" />
                </div>
              </div>
              <div className="divide-y max-h-[600px] overflow-y-auto">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedChat(conv.id)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedChat === conv.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarFallback>
                            {conv.worker.split(' ').map((n) => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {conv.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-gray-900 truncate">{conv.worker}</h4>
                          <span className="text-xs text-gray-500">{conv.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                          {conv.unread > 0 && (
                            <Badge className="ml-2">{conv.unread}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-8">
            <CardContent className="p-0">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-gray-900">John Smith</h3>
                    <p className="text-sm text-gray-600">Active now</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-4 h-[450px] overflow-y-auto space-y-4 bg-gray-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'employer' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg px-4 py-2 ${
                        msg.sender === 'employer'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-900 border'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === 'employer' ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button onClick={handleSend} className="gap-2">
                    <Send className="h-4 w-4" />
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
