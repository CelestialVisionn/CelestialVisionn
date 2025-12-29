import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import portraitImage from '@/assets/practitioner-portrait2.png';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-cream" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-sage/30 rounded-lg -rotate-3" />
              <img
                src={portraitImage}
                alt="The Verdant Oracle practitioner in natural setting"
                className="relative rounded-lg w-full aspect-[3/4] object-cover border border-border"
              />
              <div className="absolute -bottom-4 -right-4 bg-forest text-cream px-6 py-3 rounded-lg">
                <span className="font-heading italic text-lg">Est. 2019</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-body tracking-wide-premium uppercase text-sage mb-4 block">
              About Mansi
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-forest mb-6 leading-tight">
              Beyond Fortune Telling
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
               <p> At <strong>Celestial Visionn</strong>, led by tarot reader <strong>Mansi Saxena</strong>, the journey goes far beyond traditional fortune-telling. Each session is a carefully guided experience where Tarot, lithotherapy, Vedic switchwords, and angelic symbolism become powerful tools for deep self-reflection, emotional healing, and meaningful decision-making. The focus is on helping you understand not only what is happening in your life, but also why it is unfolding the way it is. </p>

                <p> Devoted to the art of <strong>grounded intuition</strong>, Mansi blends the wisdom of ancient spiritual practices with the realities of modern living. Every consultation is personally tailored to your journey, whether you are navigating relationships, emotional challenges, career transitions, or major life choices, guiding you forward with clarity, balance, confidence, and purpose. </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {[
                { number: '2000+', label: 'Sessions' },
                { number: '6', label: 'Years' },
                { number: '100%', label: 'Confidential' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-heading text-3xl md:text-4xl text-forest mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground tracking-wide-premium uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
