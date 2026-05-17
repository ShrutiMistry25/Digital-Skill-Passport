import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import Error500Page from './pages/Error500Page';
import MaintenancePage from './pages/MaintenancePage';

// Worker Pages
import WorkerDashboard from './pages/worker/WorkerDashboard';
import WorkerProfile from './pages/worker/WorkerProfile';
import WorkerSkillPassport from './pages/worker/WorkerSkillPassport';
import WorkerJobSearch from './pages/worker/WorkerJobSearch';
import WorkerActiveJobs from './pages/worker/WorkerActiveJobs';
import WorkerChat from './pages/worker/WorkerChat';
import WorkerFeedback from './pages/worker/WorkerFeedback';

// Employer Pages
import EmployerDashboard from './pages/employer/EmployerDashboard';
import EmployerPostJob from './pages/employer/EmployerPostJob';
import EmployerWorkerSearch from './pages/employer/EmployerWorkerSearch';
import EmployerActiveJobs from './pages/employer/EmployerActiveJobs';
import EmployerQRManagement from './pages/employer/EmployerQRManagement';
import EmployerChat from './pages/employer/EmployerChat';
import EmployerFeedback from './pages/employer/EmployerFeedback';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUserManagement from './pages/admin/AdminUserManagement';
import AdminJobLogs from './pages/admin/AdminJobLogs';
import AdminReports from './pages/admin/AdminReports';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/terms" element={<TermsPage />} />
        
        {/* Worker Routes */}
        <Route path="/worker/dashboard" element={<WorkerDashboard />} />
        <Route path="/worker/profile" element={<WorkerProfile />} />
        <Route path="/worker/skill-passport" element={<WorkerSkillPassport />} />
        <Route path="/worker/job-search" element={<WorkerJobSearch />} />
        <Route path="/worker/active-jobs" element={<WorkerActiveJobs />} />
        <Route path="/worker/chat" element={<WorkerChat />} />
        <Route path="/worker/feedback" element={<WorkerFeedback />} />
        
        {/* Employer Routes */}
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/employer/post-job" element={<EmployerPostJob />} />
        <Route path="/employer/worker-search" element={<EmployerWorkerSearch />} />
        <Route path="/employer/active-jobs" element={<EmployerActiveJobs />} />
        <Route path="/employer/qr-management" element={<EmployerQRManagement />} />
        <Route path="/employer/chat" element={<EmployerChat />} />
        <Route path="/employer/feedback" element={<EmployerFeedback />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUserManagement />} />
        <Route path="/admin/job-logs" element={<AdminJobLogs />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        
        {/* Utility Routes */}
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/error" element={<Error500Page />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    <Toaster />
    </>
  );
}
