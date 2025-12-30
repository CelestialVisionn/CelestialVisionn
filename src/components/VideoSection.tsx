import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    title: "Current feelings of your Person",
    subtitle: "Healing Through Clarity",
    date: "January 2025",
    description: "This collective tarot reading explores emotional confusion, third-party influence, and relationship healing. Discover how patience, communication, and time can restore harmony.",
    youtubeId: "PsSGzg57Rro",
  },
  {
    title: "What is going to happen in your career",
    subtitle: "The obstacles",
    date: "Energy Series",
    description: "Career guidance reading about growth opportunities, obstacles, delays, and the actions needed to move forward with clarity, confidence, and long-term professional growth.",
    youtubeId: "vhnquP5xP1A",
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
              <div className="relative aspect-video rounded-xl overflow-hidden bg-forest mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="font-heading text-xl text-forest">
                  {video.title}
                </h3>
                <p className="text-sm text-sage">
                  {video.subtitle} · {video.date}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
