import { MainLayout } from '../components/MainLayout';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { FileText, Shield, Lock } from 'lucide-react';

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <FileText className="h-5 w-5 text-blue-600" />
              <span className="text-blue-600">Legal</span>
            </div>
            <h1 className="text-gray-900 mb-4">Terms & Privacy</h1>
            <p className="text-gray-600">
              Last updated: October 30, 2025
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="terms">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="terms" className="gap-2">
                    <Shield className="h-4 w-4" />
                    Terms of Service
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="gap-2">
                    <Lock className="h-4 w-4" />
                    Privacy Policy
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="terms" className="space-y-6">
                  <div>
                    <h2 className="text-gray-900 mb-4">Terms of Service</h2>
                    <p className="text-gray-600 mb-4">
                      Welcome to Digital Skill Passport. By accessing or using our platform, you agree to be bound by these Terms of Service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">1. Acceptance of Terms</h3>
                    <p className="text-gray-600">
                      By creating an account on Digital Skill Passport, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">2. User Accounts</h3>
                    <p className="text-gray-600 mb-2">
                      Users must be at least 18 years old to create an account. You are responsible for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Maintaining the confidentiality of your account credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Providing accurate and truthful information</li>
                      <li>Updating your information to keep it current</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">3. Platform Use</h3>
                    <p className="text-gray-600 mb-2">
                      Workers agree to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mb-4">
                      <li>Provide accurate information about skills and experience</li>
                      <li>Complete jobs as agreed with employers</li>
                      <li>Use QR verification system honestly and appropriately</li>
                      <li>Maintain professional conduct in all interactions</li>
                    </ul>
                    <p className="text-gray-600 mb-2">
                      Employers agree to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Provide accurate job descriptions and requirements</li>
                      <li>Honor agreed-upon terms of employment</li>
                      <li>Provide honest feedback and ratings</li>
                      <li>Use the platform only for legitimate business purposes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">4. Verification and Trust</h3>
                    <p className="text-gray-600">
                      Our QR-based verification system creates a record of work completion. Users must not attempt to manipulate, forge, or circumvent this system. Any fraudulent activity will result in immediate account termination and may be reported to authorities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">5. Payments and Fees</h3>
                    <p className="text-gray-600">
                      Payment terms are agreed upon directly between workers and employers. Digital Skill Passport is not responsible for payment disputes but provides tools for documentation and verification. Certain premium features may require fees as specified on the platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">6. Intellectual Property</h3>
                    <p className="text-gray-600">
                      All content on the platform, including but not limited to text, graphics, logos, and software, is the property of Digital Skill Passport and protected by copyright laws. Users retain ownership of their own content but grant us a license to use it for platform operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">7. Limitation of Liability</h3>
                    <p className="text-gray-600">
                      Digital Skill Passport serves as a platform connecting workers and employers. We are not liable for disputes between parties, job performance, injuries, or damages arising from work relationships formed through the platform. Users engage with each other at their own risk.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">8. Termination</h3>
                    <p className="text-gray-600">
                      We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or pose risks to other users. Users may also delete their accounts at any time through account settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">9. Changes to Terms</h3>
                    <p className="text-gray-600">
                      We may update these terms periodically. Continued use of the platform after changes constitutes acceptance of the new terms. We will notify users of significant changes via email or platform notifications.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="space-y-6">
                  <div>
                    <h2 className="text-gray-900 mb-4">Privacy Policy</h2>
                    <p className="text-gray-600 mb-4">
                      Digital Skill Passport is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">1. Information We Collect</h3>
                    <p className="text-gray-600 mb-2">
                      We collect the following types of information:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Profile information (name, email, phone number, location)</li>
                      <li>Skills, experience, and work history</li>
                      <li>Job postings and applications</li>
                      <li>QR verification records and timestamps</li>
                      <li>Ratings, feedback, and reviews</li>
                      <li>Messages and communications on the platform</li>
                      <li>Device information and usage data</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">2. How We Use Your Information</h3>
                    <p className="text-gray-600 mb-2">
                      We use your information to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Provide and improve our platform services</li>
                      <li>Match workers with relevant job opportunities</li>
                      <li>Verify identities and work completion</li>
                      <li>Facilitate communication between users</li>
                      <li>Generate skill passports and work histories</li>
                      <li>Send notifications and updates</li>
                      <li>Prevent fraud and ensure platform security</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">3. Information Sharing</h3>
                    <p className="text-gray-600 mb-2">
                      We share your information only in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>With other users as necessary for job matching and verification (e.g., employers see worker profiles, workers see job details)</li>
                      <li>With service providers who assist in platform operations</li>
                      <li>When required by law or to protect our legal rights</li>
                      <li>With your explicit consent</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      We never sell your personal information to third parties.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">4. Data Security</h3>
                    <p className="text-gray-600">
                      We implement industry-standard security measures to protect your data, including encryption, secure servers, and access controls. However, no system is 100% secure, and we cannot guarantee absolute security of your information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">5. Your Rights</h3>
                    <p className="text-gray-600 mb-2">
                      You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Access and download your personal data</li>
                      <li>Correct inaccurate information</li>
                      <li>Delete your account and associated data</li>
                      <li>Control privacy settings and profile visibility</li>
                      <li>Opt out of promotional communications</li>
                      <li>Object to certain data processing activities</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">6. Data Retention</h3>
                    <p className="text-gray-600">
                      We retain your information for as long as your account is active or as needed to provide services. Verified work history and QR records may be retained longer for verification purposes, even after account deletion, as they serve as permanent work records.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">7. Cookies and Tracking</h3>
                    <p className="text-gray-600">
                      We use cookies and similar technologies to enhance user experience, analyze platform usage, and remember your preferences. You can control cookie settings through your browser, though some features may not function properly if cookies are disabled.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">8. Children's Privacy</h3>
                    <p className="text-gray-600">
                      Our platform is not intended for users under 18 years of age. We do not knowingly collect information from children. If we become aware of such data, we will promptly delete it.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">9. International Users</h3>
                    <p className="text-gray-600">
                      Your information may be transferred to and processed in countries other than your own. By using our platform, you consent to such transfers in accordance with this Privacy Policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-3">10. Contact Us</h3>
                    <p className="text-gray-600">
                      For questions about this Privacy Policy or to exercise your rights, contact us at privacy@digitalskillpassport.com or through our Help & Contact page.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
