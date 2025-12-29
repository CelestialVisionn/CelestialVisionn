import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const navigate = useNavigate();

  return (
    <footer id="contact" className="bg-forest text-cream" ref={ref}>
      {/* CTA Section */}
      <div className="section-padding border-b border-cream/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container-narrow text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Begin
            <br />
            <span className="italic text-gold">Your Journey?</span>
          </h2>
          <p className="text-cream/70 max-w-lg mx-auto mb-10 text-lg">
            Take the first step toward clarity and grounded insight. 
            Schedule your consultation today.
          </p>
          <Button
            variant="sage"
            size="xl"
            className="rounded-lg"
            onClick={() => navigate('/book')}
          >
            Schedule Your Consultation
            <ArrowUpRight size={18} />
          </Button>
        </motion.div>
      </div>

      {/* Footer Links */}
      <div className="px-6 py-12 md:px-12 lg:px-24">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-start">
            {/* Brand */}
            <div>
              <h3 className="font-heading text-2xl mb-4">Celestial Visonn</h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                Strategic intuitive guidance for the modern professional.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm tracking-wide-premium uppercase text-cream/50 mb-4">
                Contact
              </h4>
              <a
                href="mailto:hello@verdantoracle.com"
                className="flex items-center gap-2 text-cream hover:text-gold transition-colors group"
              >
                <Mail size={16} />
                tarotwithmansi@gmail.com
              </a>
            </div>

            {/* Social & Legal */}
            <div>
              <h4 className="text-sm tracking-wide-premium uppercase text-cream/50 mb-4">
                Connect
              </h4>
              <div className="flex items-center gap-4 mb-6">
                <a
                  href="https://www.instagram.com/celestial_visionn"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream/10 hover:border-cream/40 transition-all"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream/10 hover:border-cream/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <a href="#" className="text-sm text-cream/50 hover:text-cream transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/40">
              © 2025 Celestial Visonn. All rights reserved.
            </p>
            <p className="text-sm text-cream/40">
              Crafted with intention
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
