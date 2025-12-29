import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "A transformative experience that felt more like a strategy session than a reading. The insights I gained helped me navigate a pivotal career transition with confidence.",
    author: "Elena R.",
    title: "Executive",
  },
  {
    quote: "The most professional and grounded approach to tarot I have ever encountered. It's clear that this practice is rooted in deep respect and genuine expertise.",
    author: "Marcus T.",
    title: "Designer",
  },
  {
    quote: "I was skeptical at first, but the crystal consultation for my home office has genuinely shifted my energy and focus. A truly bespoke experience.",
    author: "Sophia L.",
    title: "Entrepreneur",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="section-padding bg-cream" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body tracking-wide-premium uppercase text-sage mb-4 block">
            Client Experiences
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-forest mb-4">
            Words of Trust
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear from professionals who have discovered clarity and direction 
            through our consultations.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative bg-cream-dark rounded-lg border border-border p-8 hover:shadow-soft transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-gold mb-6">
                <Quote size={32} />
              </div>

              {/* Quote */}
              <blockquote className="text-forest leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-sage/30 flex items-center justify-center">
                  <span className="font-heading text-forest">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-forest">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
