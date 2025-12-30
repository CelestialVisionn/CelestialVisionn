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
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">1. Information We Collect</h2>
                <p>
                  At The Verdant Oracle, we collect information you provide directly to us, including your name, 
                  email address, and any other information you choose to provide when booking a consultation 
                  or contacting us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send promotional communications (with your consent)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to outside parties. 
                  This does not include trusted third parties who assist us in operating our website, 
                  conducting our business, or servicing you.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, 
                  no method of transmission over the Internet is 100% secure, and we cannot guarantee 
                  absolute security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">5. Cookies</h2>
                <p>
                  We may use cookies to enhance your experience on our site. You can choose to disable 
                  cookies through your browser settings, though this may affect some functionality.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">6. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information at any time. 
                  Contact us at hello@verdantoracle.com to exercise these rights.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">7. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-foreground font-medium">
                  hello@verdantoracle.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
