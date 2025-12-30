import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const RefundPolicy = () => {
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
              Refund Policy
            </h1>

            <div className="prose prose-lg max-w-none font-body text-muted-foreground space-y-8">
              <p className="text-lg leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Our Commitment</h2>
                <p>
                  At The Verdant Oracle, we are committed to providing meaningful, insightful experiences. 
                  We understand that circumstances may change, and we strive to accommodate our clients 
                  with fair and transparent policies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Cancellation Policy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">More than 48 hours notice:</strong> Full refund 
                    or reschedule at no charge
                  </li>
                  <li>
                    <strong className="text-foreground">24-48 hours notice:</strong> 50% refund or 
                    full credit toward future session
                  </li>
                  <li>
                    <strong className="text-foreground">Less than 24 hours notice:</strong> No refund; 
                    session credit offered at our discretion
                  </li>
                  <li>
                    <strong className="text-foreground">No-show:</strong> No refund or credit
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Rescheduling</h2>
                <p>
                  We understand life happens. You may reschedule your appointment up to 2 times 
                  without penalty, provided you give at least 24 hours notice each time.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Dissatisfaction with Services</h2>
                <p>
                  Due to the personal and subjective nature of tarot readings and crystal consultations, 
                  we cannot offer refunds based on dissatisfaction with the content or outcome of a 
                  completed session.
                </p>
                <p>
                  However, if you experienced technical difficulties during a virtual session or other 
                  service-related issues, please contact us within 24 hours and we will work to resolve 
                  the matter.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Gift Certificates</h2>
                <p>
                  Gift certificates are non-refundable but are transferable. They are valid for 
                  12 months from the date of purchase.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">How to Request a Refund</h2>
                <p>
                  To request a refund or reschedule, please contact us at:
                </p>
                <p className="text-foreground font-medium">
                  hello@verdantoracle.com
                </p>
                <p>
                  Please include your booking confirmation number and the reason for your request. 
                  We aim to respond within 24-48 business hours.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Refund Processing</h2>
                <p>
                  Approved refunds will be processed within 5-7 business days and returned to the 
                  original payment method. Please allow additional time for your financial institution 
                  to process the refund.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default RefundPolicy;
