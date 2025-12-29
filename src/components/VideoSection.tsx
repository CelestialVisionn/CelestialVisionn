import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    title: "This Week's Reading",
    subtitle: "New Moon in Capricorn",
    date: "January 2025",
    description: "Join our weekly reflection on the current lunar cycle and how it influences your personal and professional journey. This week we explore themes of manifestation and strategic planning.",
  },
  {
    title: "Crystal Healing Basics",
    subtitle: "Understanding Your Stones",
    date: "Energy Series",
    description: "Learn the fundamentals of crystal selection and placement. Discover how different minerals can support your workspace energy and enhance your daily intentions.",
  },
];

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body tracking-wide-premium uppercase text-sage mb-4 block">
            Weekly Reflection
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-forest mb-4">
            Collective Energy
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join our weekly exploration of the current energetic landscape and transformative practices.
          </p>
        </motion.div>

        {/* Video Grid - responsive: stacked on small, side-by-side on md+ */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Video Player */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-forest group cursor-pointer mb-4">
                {/* Placeholder Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest/90 to-sage/30" />
                
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-sage/50 animate-pulse" />
                  <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full border border-gold/30" />
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center group-hover:bg-cream/20 group-hover:scale-110 transition-all duration-300">
                    <Play size={32} className="text-cream ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-forest/80 to-transparent">
                  <h3 className="font-heading text-xl md:text-2xl text-cream mb-1">
                    {video.title}
                  </h3>
                  <p className="text-cream/70 text-sm">
                    {video.subtitle} · {video.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {video.description}
                </p>
                <button className="inline-flex items-center gap-2 text-forest font-heading text-sm uppercase tracking-wide-premium hover:text-gold transition-colors duration-300">
                  Watch Full Video
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
