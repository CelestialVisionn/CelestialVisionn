import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

const services = [
  { id: 'tarot', title: 'Tarot Reading', duration: '60 min', price: '₹ 900' },
  { id: 'crystal', title: 'Crystal Consultation', duration: '90 min', price: '₹ 1200' },
];

const timeSlots = ['10:00 AM','11:00 AM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'];

export default function Book() {
  const [selectedService, setSelectedService] = useState<string>(services[0].id);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="min-h-screen bg-cream">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-3 md:top-4 md:left-8 lg:left-16 z-10"
      >
        <img
          src="/CelestialVisonnLogoDark.png"
          alt="Celestial Visonn Logo"
          className="h-8 sm:h-12 md:h-16 w-auto object-contain"
        />
      </motion.div>

      <main className="section-padding">
        <div className="container-narrow">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-10"
          >
            <span className="text-sm font-body tracking-wide-premium uppercase text-sage mb-4 block">
              Booking
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-forest">
              Schedule Your Session
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto mt-3">
              Choose a service, pick a date and time, and share your details.
            </p>
          </motion.div>

          {/* Form Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Service + Date/Time */}
            <div className="space-y-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-cream rounded-2xl border border-border p-6"
              >
                <h2 className="font-heading text-xl text-forest mb-4">Select a Service</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((svc) => (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={svc.id}
                      onClick={() => setSelectedService(svc.id)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        selectedService === svc.id
                          ? 'border-gold bg-gold/5'
                          : 'border-border hover:border-gold hover:bg-gold/5'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-heading text-forest">{svc.title}</h3>
                        <span className="font-heading text-gold">{svc.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{svc.duration}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Date */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-cream rounded-2xl border border-border p-6"
              >
                <h2 className="font-heading text-xl text-forest mb-3">Select a Date</h2>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-3 border border-border rounded-lg text-left text-sm bg-white hover:border-gold focus:outline-none focus:border-gold transition-all"
                    >
                      <span className="flex items-center gap-2 text-forest">
                        <CalendarIcon size={16} className="text-gold" />
                        {selectedDate ? format(selectedDate, 'MMM d, yyyy') : 'Select a date'}
                      </span>
                      <span className="text-muted-foreground">Change</span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </motion.div>

              {/* Time */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-cream rounded-2xl border border-border p-6"
              >
                <h2 className="font-heading text-xl text-forest mb-3">Select a Time</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        selectedTime === slot
                          ? 'border-gold bg-gold/5'
                          : 'border-border hover:border-gold hover:bg-gold/5'
                      }`}
                    >
                      {slot}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Details */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-cream rounded-2xl border border-border p-6"
              >
                <h2 className="font-heading text-xl text-forest mb-4">Your Details</h2>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all text-sm"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-cream rounded-2xl border border-border p-6"
              >
                <h2 className="font-heading text-xl text-forest mb-3">Additional Notes</h2>
                <textarea
                  rows={5}
                  placeholder="Share any specific topics or concerns..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all text-sm resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button className="w-full bg-forest hover:bg-forest/90 text-cream font-heading rounded-lg">
                  Confirm Booking
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
