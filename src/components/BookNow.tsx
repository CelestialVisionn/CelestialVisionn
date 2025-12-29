import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BookNow() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'tarot',
      title: 'Tarot Reading',
      duration: '60 min',
      price: '$175',
    },
    {
      id: 'crystal',
      title: 'Crystal Consultation',
      duration: '90 min',
      price: '$250',
    },
  ];

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  return (
    <>
      {/* Floating Book Now Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-gold hover:bg-gold/90 text-forest font-heading px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
      >
        <Calendar size={20} />
        Book Now
      </motion.button>

      {/* Modal Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            >
              <div className="bg-cream rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-cream border-b border-border p-6 flex items-center justify-between">
                  <h2 className="font-heading text-2xl text-forest">Book Your Session</h2>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setSelectedService(null);
                    }}
                    className="p-2 hover:bg-sage/10 rounded-lg transition-colors"
                  >
                    <X size={24} className="text-forest" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {!selectedService ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <p className="text-muted-foreground mb-6">
                        Select a service to get started with your consultation.
                      </p>

                      {services.map((service) => (
                        <motion.button
                          key={service.id}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedService(service.id)}
                          className="w-full p-4 border border-border rounded-xl hover:border-gold hover:bg-gold/5 transition-all duration-300 text-left group"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-heading text-forest group-hover:text-gold transition-colors">
                              {service.title}
                            </h3>
                            <span className="font-heading text-gold">{service.price}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              {service.duration}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-6"
                    >
                      <button
                        onClick={() => setSelectedService(null)}
                        className="text-sm text-sage hover:text-forest transition-colors flex items-center gap-1 mb-4"
                      >
                        ← Back to Services
                      </button>

                      <div>
                        <label className="block text-sm font-heading text-forest mb-3">
                          Select a Date
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-heading text-forest mb-3">
                          Select a Time
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((slot) => (
                            <motion.button
                              key={slot}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-3 border border-border rounded-lg hover:border-gold hover:bg-gold/5 text-sm font-body transition-all duration-300"
                            >
                              {slot}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-heading text-forest mb-3">
                          <MessageSquare size={16} className="inline mr-2" />
                          Additional Notes
                        </label>
                        <textarea
                          placeholder="Share any specific topics or concerns..."
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all resize-none text-sm"
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all text-sm"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all text-sm"
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className="w-full bg-forest hover:bg-forest/90 text-cream font-heading rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          Confirm Booking
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
