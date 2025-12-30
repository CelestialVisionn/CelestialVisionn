import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-forest-ferns.png';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 lg:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-tarot-cream via-tarot-sand to-tarot-warm" />
        <img
          src={heroImage}
          alt="Ethereal forest ferns in soft morning light"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-4 md:top-6 md:left-6 lg:top-7 lg:left-12 xl:top-8 xl:left-16 z-10"
      >
        <img
          src="/CelestialVisonnLogoDark.png"
          alt="Celestial Visonn Logo"
          className="h-10 sm:h-12 md:h-12 lg:h-14 xl:h-16 w-auto object-contain max-w-[120px] sm:max-w-none"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block text-xs sm:text-sm font-body tracking-wide-premium uppercase text-tarot-terracotta/80 border border-tarot-terracotta/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/50 backdrop-blur-sm">
            Tarot & Crystal Consultancy
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight"
        >
          Find peace of mind and
          <br />
          <span className="italic text-tarot-terracotta">know yourself better.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          I answered more than 2,000+ questions in past years, helping people to know the insights of their future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
        >
          <Button
            variant="default"
            size="lg"
            className="rounded-lg shadow-medium md:h-14 md:px-10 md:text-base"
            onClick={() => navigate('/book')}
          >
            Schedule Your Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-tarot-terracotta/60 hover:text-white transition-colors rounded-lg md:h-14 md:px-10 md:text-base"
            onClick={() => scrollToSection('#about')}
          >
            Learn More
          </Button>
        </motion.div>
      </div>

    </section>
  );
}
