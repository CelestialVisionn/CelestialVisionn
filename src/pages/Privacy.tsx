import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding pt-32">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              <span className="font-body text-sm tracking-premium">Back to Home</span>
            </Link>

            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none font-body text-muted-foreground space-y-8">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Celestial Visionn | Tarot & Crystal Healing Services</strong> is owned and operated by <strong className="text-foreground">Mansi Saxena</strong>, who acts as the data controller of your personal information.
              </p>

              <p className="text-lg leading-relaxed">
                We have adopted this Privacy Policy, which explains how we collect, use, protect, and process the personal data provided by users of Celestial Visionn. By using our website, you agree to the collection and use of information in accordance with this policy. We deeply value your trust and are committed to safeguarding your personal information with the highest standards of confidentiality and security.
              </p>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">1. Information We Collect</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-2">Device Information</h3>
                    <p>
                      When you visit the Celestial Visionn website, certain information is collected automatically, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Device information (browser type, IP address, time zone)</li>
                      <li>Cookies and usage data</li>
                      <li>Pages viewed, time spent, and referral sources</li>
                      <li>Interaction patterns on the website</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-2">Voluntarily Provided Information</h3>
                    <p>
                      Additionally, when you choose to use our services or communicate with us, we may collect personal data you voluntarily provide, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Phone Number</li>
                      <li>City / Country</li>
                      <li>Payment and transaction details</li>
                      <li>Any information shared during consultations or inquiries</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">2. How We Use Your Information</h2>
                <p>
                  Your data is processed strictly for legitimate and necessary purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delivering Tarot and Crystal Healing services</li>
                  <li>Managing bookings and communication</li>
                  <li>Improving website performance and user experience</li>
                  <li>Maintaining website security and preventing misuse</li>
                  <li>Fulfilling legal and regulatory requirements</li>
                </ul>
                <p className="italic text-sm text-muted-foreground">
                  We collect only the minimum data required to provide our services effectively.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">3. Your Choices & Access</h2>
                <p>
                  You may browse the website without revealing personal identity. However, some features such as consultations, bookings, newsletters, or contact forms require personal information. If you choose not to provide certain details, some services may not be accessible.
                </p>
                <p className="italic text-sm text-muted-foreground">
                  For any clarification regarding required information, you may contact us at <strong>celestialvisionwithmansi@gmail.com</strong>
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">4. Your Rights</h2>
                <p>
                  Depending on your location and applicable laws, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction or updates</li>
                  <li>Request deletion of your data</li>
                  <li>Restrict or object to data processing</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="italic text-sm text-muted-foreground">
                  To exercise any of these rights, please contact us using the details provided below.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">5. Links to External Websites</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies when you leave our website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">6. Information Security</h2>
                <p>
                  We implement appropriate administrative, technical, and physical security measures to protect your personal data from unauthorized access, misuse, alteration, or disclosure.
                </p>
                <p className="italic text-sm text-muted-foreground">
                  While we take every reasonable step to secure your data, no method of internet transmission is 100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">7. Legal Disclosure</h2>
                <p>
                  We may disclose your information if required by law, court order, or government authority, or when we believe disclosure is necessary to protect our rights, users, or comply with legal obligations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or your personal data, please contact:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="font-medium text-foreground">Mansi Saxena</p>
                  <p className="font-medium text-foreground">Celestial Visionn</p>
                  <p className="text-foreground">
                  <strong>celestialvisionwithmansi@gmail.com</strong>
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
