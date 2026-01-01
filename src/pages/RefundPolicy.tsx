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
              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Refund Policy</h2>
                <p className="text-lg leading-relaxed">
                  At Celestial Visionn, we strive to provide a high-quality tarot reading and crystal healing service. However, please be aware that <strong className="text-foreground">all bookings made with us are non-refundable</strong>. Once you have booked a session, we are unable to offer any refunds.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Understanding Our Policy</h2>
                <p>
                  We understand that circumstances may change, and you may have unforeseen situations that prevent you from attending the scheduled session. However, please note that we are unable to accommodate refund requests, regardless of the reason.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Before You Book</h2>
                <p>
                  We encourage you to carefully consider your availability and commitment before making a booking. If you have any doubts or questions about our services, we are more than happy to address them prior to your booking.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Contact Us</h2>
                <p>
                  You can contact us via email or WhatsApp if you have any questions before booking:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground font-medium">
                    celestialvisionwithmansi@gmail.com
                  </p>
                  <p className="text-foreground font-medium">
                    WhatsApp: +91 8743907967
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">Our Commitment</h2>
                <p>
                  We appreciate your understanding and cooperation in adhering to our refund policy. We are committed to providing you with an enriching and insightful tarot reading and crystal healing experience, and we look forward to assisting you on your spiritual journey.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Thank you for choosing Celestial Visionn.</strong>
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
