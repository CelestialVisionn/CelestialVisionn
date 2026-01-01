import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, X, ShoppingCart } from 'lucide-react';
import { formatDateForEmail, formatServicesList } from '@/components/BookingEmailHandler';
import emailjs from '@emailjs/browser';

const tarotMinutesSessions = [
  { id: 'tarot-15', title: 'Tarot Reading - 15 min', duration: '15 min', price: 1100, description: 'Quick clarity session' },
  { id: 'tarot-30', title: 'Tarot Reading - 30 min', duration: '30 min', price: 2500, description: 'In-depth exploration' },
  { id: 'tarot-45', title: 'Tarot Reading - 45 min', duration: '45 min', price: 4100, description: 'Comprehensive reading' },
];

const tarotQuestionsSessions = [
  { id: 'tarot-1q', title: 'Tarot Reading - 1 Question', questions: '1 Question', price: 333, description: 'Detailed single question reading' },
  { id: 'tarot-3q', title: 'Tarot Reading - 3 Questions', questions: '3 Questions', price: 1100, description: 'Multi-question deep dive' },
];

const crystalService = {
  id: 'crystal',
  title: 'Crystal Consultation',
  duration: '90 min',
  price: 2500,
  description: 'Custom gemstone pairing and energetic architecture',
};

const timeSlots = ['10:00 AM','11:00 AM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'];

type SelectedService = {
  id: string;
  title: string;
  price: number;
  details: string;
};

export default function Book() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(() => {
    return location.state?.preSelectedServices || [];
  });
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [tarotTab, setTarotTab] = useState<'minutes' | 'questions'>(() => {
    return location.state?.activeTab || 'minutes';
  });
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const addService = (service: SelectedService) => {
    // Check if service already exists
    if (!selectedServices.find(s => s.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const removeService = (id: string) => {
    setSelectedServices(selectedServices.filter(s => s.id !== id));
  };

  const validateForm = () => {
    const errors: string[] = [];
    
    if (!fullName.trim()) {
      errors.push('Full Name is required');
    }
    if (!email.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please enter a valid email');
    }
    if (!phone.trim()) {
      errors.push('Phone Number is required');
    }
    if (selectedServices.length === 0) {
      errors.push('Please select at least one service');
    }
    if (!selectedDate) {
      errors.push('Please select a date');
    }
    if (!selectedTime) {
      errors.push('Please select a time');
    }
    
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleConfirmBooking = async () => {
    // Clear previous messages
    setSubmissionMessage(null);

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Format the date into human-friendly format
        const formattedDate = selectedDate ? formatDateForEmail(selectedDate) : '';

        // Normalize services to always be an array
        const normalizedServices = Array.isArray(selectedServices)
          ? selectedServices
          : selectedServices
          ? [selectedServices]
          : [];

        // Calculate total price from selected services
        const calculatedTotal = normalizedServices.reduce((sum, service) => sum + service.price, 0);

        // Prepare data object with exact required fields
        const data = {
          name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          services: normalizedServices,
          date: formattedDate,
          time: selectedTime || '',
          price: `₹${calculatedTotal.toLocaleString('en-IN')}`,
          notes: additionalNotes.trim() || 'No additional notes',
        };

        // Send single EmailJS request
        const response = await emailjs.send('service_5qeghob', 'template_w1xtx1h', data);

        if (response.status === 200) {
          setSubmissionMessage({
            type: 'success',
            message: 'Booking confirmed! We will contact you shortly.',
          });

          // Reset form after successful submission
          setTimeout(() => {
            setFullName('');
            setEmail('');
            setPhone('');
            setAdditionalNotes('');
            setSelectedServices([]);
            setSelectedDate(undefined);
            setSelectedTime(null);
            setSubmissionMessage(null);
          }, 2000);
        } else {
          setSubmissionMessage({
            type: 'error',
            message: 'Failed to send booking confirmation. Please try again.',
          });
        }
      } catch (error) {
        console.error('Booking submission error:', error);
        setSubmissionMessage({
          type: 'error',
          message: 'There was an error processing your booking. Please check your details and try again.',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);

  return (
    <div className="min-h-screen bg-cream">
      <div className="sticky top-0 z-[9999]">
        {/* Logo Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 p-0 bg-transparent border-0 hover:opacity-80 transition-opacity cursor-pointer w-fit"
        >
          <img
            src="/CelestialVisonnLogoDark.png"
            alt="Celestial Visonn Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
          />
        </motion.button>
      </div>

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
            {/* Left: Service Selection + Date/Time */}
            <div className="space-y-8">
              {/* Tarot Reading Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-cream rounded-2xl border border-border p-6"
              >
                <h2 className="font-heading text-xl text-forest mb-4">Tarot Reading</h2>
                
                {/* Tab Switcher */}
                <div className="flex bg-cream-dark rounded-lg p-1 mb-4">
                  <button
                    onClick={() => setTarotTab('minutes')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                      tarotTab === 'minutes'
                        ? 'bg-forest text-white shadow-sm'
                        : 'text-muted-foreground hover:text-forest'
                    }`}
                  >
                    By Duration
                  </button>
                  <button
                    onClick={() => setTarotTab('questions')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                      tarotTab === 'questions'
                        ? 'bg-forest text-white shadow-sm'
                        : 'text-muted-foreground hover:text-forest'
                    }`}
                  >
                    By Questions
                  </button>
                </div>

                {/* Tarot Options */}
                <div className="space-y-2">
                  {tarotTab === 'minutes' ? (
                    tarotMinutesSessions.map((session) => (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        key={session.id}
                        onClick={() => addService({
                          id: session.id,
                          title: session.title,
                          price: session.price,
                          details: session.duration
                        })}
                        disabled={selectedServices.some(s => s.id === session.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${
                          selectedServices.some(s => s.id === session.id)
                            ? 'border-gold bg-gold/10 cursor-not-allowed'
                            : 'border-border hover:border-gold hover:bg-gold/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-heading text-forest text-sm">{session.duration}</h3>
                            <p className="text-xs text-muted-foreground">{session.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-heading text-tarot-terracotta">₹{session.price}</span>
                            {selectedServices.some(s => s.id === session.id) && (
                              <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    ))
                  ) : (
                    tarotQuestionsSessions.map((session) => (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        key={session.id}
                        onClick={() => addService({
                          id: session.id,
                          title: session.title,
                          price: session.price,
                          details: session.questions
                        })}
                        disabled={selectedServices.some(s => s.id === session.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${
                          selectedServices.some(s => s.id === session.id)
                            ? 'border-gold bg-gold/10 cursor-not-allowed'
                            : 'border-border hover:border-gold hover:bg-gold/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-heading text-forest text-sm">{session.questions}</h3>
                            <p className="text-xs text-muted-foreground">{session.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-heading text-tarot-terracotta">₹{session.price}</span>
                            {selectedServices.some(s => s.id === session.id) && (
                              <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    ))
                  )}
                </div>
              </motion.div>

              {/* Crystal Consultation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="bg-cream rounded-2xl border border-border p-6"
              >
                <h2 className="font-heading text-xl text-forest mb-4">Crystal Consultation</h2>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addService({
                    id: crystalService.id,
                    title: crystalService.title,
                    price: crystalService.price,
                    details: crystalService.duration
                  })}
                  disabled={selectedServices.some(s => s.id === crystalService.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedServices.some(s => s.id === crystalService.id)
                      ? 'border-gold bg-gold/10 cursor-not-allowed'
                      : 'border-border hover:border-gold hover:bg-gold/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-forest">{crystalService.title}</h3>
                      <p className="text-sm text-muted-foreground">{crystalService.duration}</p>
                      <p className="text-xs text-muted-foreground mt-1">{crystalService.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-tarot-terracotta">₹{crystalService.price}</span>
                      {selectedServices.some(s => s.id === crystalService.id) && (
                        <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.button>
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
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
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

            {/* Right: Summary + Details */}
            <div className="space-y-8">
              {/* Cart Summary */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-cream rounded-2xl border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingCart size={20} className="text-gold" />
                  <h2 className="font-heading text-xl text-forest">Your Selection</h2>
                </div>
                
                {selectedServices.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-6">
                    No services selected yet. Choose from the options on the left.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {selectedServices.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-start justify-between p-4 bg-cream-dark/50 rounded-lg border border-gold/30"
                      >
                        <div className="flex-1 pr-4">
                          <h3 className="font-heading text-forest text-sm leading-tight">{service.title}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{service.details}</p>
                        </div>
                        <div className="flex items-start justify-between gap-2 flex-shrink-0">
                          <span className="font-heading text-tarot-terracotta text-sm whitespace-nowrap">₹{service.price}</span>
                          <button
                            onClick={() => removeService(service.id)}
                            className="p-1 hover:bg-sage/10 rounded transition-colors flex-shrink-0"
                          >
                            <X size={16} className="text-muted-foreground hover:text-forest" />
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    {/* Total */}
                    <div className="pt-4 mt-4 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-forest text-lg">Total</span>
                        <span className="font-heading text-tarot-terracotta text-2xl">₹{totalPrice.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-cream rounded-2xl border border-border p-6"
              >
                <h2 className="font-heading text-xl text-forest mb-4">Your Details</h2>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all text-sm resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {validationErrors.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 text-sm font-medium mb-2">Please fix the following:</p>
                    <ul className="text-sm text-red-700 space-y-1">
                      {validationErrors.map((error, index) => (
                        <li key={index}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {submissionMessage && (
                  <div className={`border rounded-lg p-4 mb-4 ${
                    submissionMessage.type === 'success'
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <p className={`text-sm font-medium ${
                      submissionMessage.type === 'success'
                        ? 'text-green-800'
                        : 'text-red-800'
                    }`}>
                      {submissionMessage.message}
                    </p>
                  </div>
                )}
                
                <Button 
                  onClick={handleConfirmBooking}
                  disabled={isSubmitting}
                  className="w-full bg-forest hover:bg-forest/90 text-cream font-heading rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : `Confirm Booking ${selectedServices.length > 0 ? `(₹${totalPrice})` : ''}`}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
