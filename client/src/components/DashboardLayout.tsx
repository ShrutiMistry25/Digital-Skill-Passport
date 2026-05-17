import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import {
  Shield,
  LayoutDashboard,
  User,
  Briefcase,
  Search,
  MessageCircle,
  Star,
  QrCode,
  Users,
  FileText,
  BarChart3,
  LogOut,
  Bell,
  Menu,
  X,
  PlusCircle,
  Clipboard,
  Award,
} from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'worker' | 'employer' | 'admin';
  userName?: string;
  userAvatar?: string;
  notifications?: number;
}

export function DashboardLayout({
  children,
  userType,
  userName = 'User',
  userAvatar,
  notifications = 0,
}: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getMenuItems = () => {
    switch (userType) {
      case 'worker':
        return [
          { path: '/worker/dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { path: '/worker/profile', label: 'Profile', icon: User },
          { path: '/worker/skill-passport', label: 'Skill Passport', icon: Award },
          { path: '/worker/job-search', label: 'Job Search', icon: Search },
          { path: '/worker/active-jobs', label: 'Active Jobs', icon: Briefcase },
          { path: '/worker/chat', label: 'Chat', icon: MessageCircle },
          { path: '/worker/feedback', label: 'Feedback', icon: Star },
        ];
      case 'employer':
        return [
          { path: '/employer/dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { path: '/employer/post-job', label: 'Post a Job', icon: PlusCircle },
          { path: '/employer/worker-search', label: 'Find Workers', icon: Search },
          { path: '/employer/active-jobs', label: 'Active Jobs', icon: Briefcase },
          { path: '/employer/qr-management', label: 'QR Management', icon: QrCode },
          { path: '/employer/chat', label: 'Chat', icon: MessageCircle },
          { path: '/employer/feedback', label: 'Feedback', icon: Star },
        ];
      case 'admin':
        return [
          { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { path: '/admin/users', label: 'User Management', icon: Users },
          { path: '/admin/job-logs', label: 'Job Logs', icon: Clipboard },
          { path: '/admin/reports', label: 'Reports & Analytics', icon: BarChart3 },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  const handleLogout = () => {
    navigate('/login');
  };

  const getUserTypeLabel = () => {
    switch (userType) {
      case 'worker':
        return 'Worker';
      case 'employer':
        return 'Employer';
      case 'admin':
        return 'Admin';
      default:
        return 'User';
    }
  };

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className={`${
        mobile ? 'fixed inset-0 z-50 bg-white' : 'hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0'
      } bg-white border-r border-gray-200`}
    >
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-gray-900">DSP</span>
          </Link>
          {mobile && (
            <button onClick={() => setSidebarOpen(false)} className="p-2">
              <X className="h-6 w-6 text-gray-700" />
            </button>
          )}
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => mobile && setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      {sidebarOpen && <Sidebar mobile={true} />}

      <div className="lg:pl-64 flex flex-col min-h-screen">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="lg:hidden p-2.5 text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{getUserTypeLabel()}</Badge>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={userAvatar} />
                      <AvatarFallback>
                        {userName
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline">{userName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {userType === 'worker' && (
                    <DropdownMenuItem onClick={() => navigate('/worker/profile')}>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                  )}
                  {userType === 'employer' && (
                    <DropdownMenuItem onClick={() => navigate('/employer/dashboard')}>
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
