import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsConditions = () => {
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
              Terms & Conditions
            </h1>

            <div className="prose prose-lg max-w-none font-body text-muted-foreground space-y-8">
              <p className="text-lg leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using The Verdant Oracle's services, you accept and agree to be bound 
                  by these Terms and Conditions. If you do not agree, please do not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">2. Nature of Services</h2>
                <p>
                  The Verdant Oracle provides tarot readings and crystal consultations for entertainment 
                  and self-reflection purposes. Our services are not intended to replace professional 
                  medical, legal, financial, or psychological advice.
                </p>
                <p>
                  All readings and consultations are subjective interpretations and should be considered 
                  as guidance for personal reflection only.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">3. Booking & Appointments</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All appointments must be booked in advance</li>
                  <li>Sessions begin at the scheduled time; late arrivals may result in shortened sessions</li>
                  <li>Rescheduling is available with 24-hour notice</li>
                  <li>No-shows forfeit the session fee</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">4. Payment Terms</h2>
                <p>
                  Payment is required at the time of booking. We accept major credit cards and secure 
                  online payment methods. All prices are listed in USD unless otherwise specified.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">5. Confidentiality</h2>
                <p>
                  All session content remains strictly confidential. We do not share, record, or 
                  disclose any information from your readings without your explicit consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">6. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the 
                  property of The Verdant Oracle and is protected by copyright laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">7. Limitation of Liability</h2>
                <p>
                  The Verdant Oracle shall not be liable for any decisions made based on our readings 
                  or consultations. You acknowledge that you are solely responsible for your actions 
                  and decisions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">8. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our services 
                  constitutes acceptance of any changes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">9. Contact</h2>
                <p>
                  For questions about these Terms & Conditions, please contact:
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

export default TermsConditions;
