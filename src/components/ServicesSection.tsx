import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Gem, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Sparkles,
    title: 'Tarot Reading',
    subtitle: 'Deep-Dive Sessions',
    description: '60-minute intensive readings focused on career, transitions, and personal growth. Uncover patterns, gain perspective, and chart your path forward with clarity.',
    features: ['Strategic Career Guidance', 'Transition Navigation', 'Personal Growth Focus'],
    duration: '60 min',
    price: '₹ 900',
  },
  {
    icon: Gem,
    title: 'Crystal Consultation',
    subtitle: 'Bespoke Alignment',
    description: 'Custom gemstone pairing and energetic architecture for your workspace or home. Create environments that support your intentions and enhance your daily practice.',
    features: ['Custom Stone Selection', 'Workspace Design', 'Home Harmonization'],
    duration: '90 min',
    price: '₹ 1200',
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section id="services" className="section-padding bg-cream-dark" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body tracking-wide-premium uppercase text-sage mb-4 block">
            Our Offerings
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-forest mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each session is a collaborative exploration, tailored to your unique needs 
            and conducted with the utmost professionalism.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-cream rounded-2xl border border-border p-8 md:p-10 hover:shadow-medium transition-all duration-500 overflow-hidden"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-sage/20 text-forest mb-6 group-hover:bg-forest group-hover:text-cream transition-all duration-300">
                <service.icon size={28} />
              </div>

              {/* Content */}
              <div className="mb-6 relative z-10">
                <span className="text-sm tracking-wide-premium uppercase text-sage block mb-2">
                  {service.subtitle}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-forest mb-3 group-hover:text-forest transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-8 relative z-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-forest">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-border relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock size={16} />
                    {service.duration}
                  </div>
                  <span className="font-heading text-xl text-forest">{service.price}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-forest hover:text-gold group/btn"
                  onClick={() => navigate('/book')}
                >
                  Book
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Subtle thin outline on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
