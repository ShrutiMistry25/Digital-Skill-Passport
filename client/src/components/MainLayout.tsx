import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

export function MainLayout({ children, showNav = true }: MainLayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {showNav && (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-900">Digital Skill Passport</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-gray-700 hover:text-blue-600 transition-colors ${
                      location.pathname === link.path ? 'text-blue-600' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="block mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}

      <main className="flex-1">{children}</main>

      {showNav && (
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <span>Digital Skill Passport</span>
                </div>
                <p className="text-gray-400">
                  Verified Skills, Trusted Work. Connecting skilled blue-collar workers
                  with verified digital identities to trusted employers.
                </p>
              </div>
              <div>
                <h3 className="mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/terms" className="hover:text-white transition-colors">
                      Terms & Privacy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: support@digitalskillpassport.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Tech Street, Innovation City</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Digital Skill Passport. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
