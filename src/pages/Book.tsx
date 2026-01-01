import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBookingForm } from '@/hooks/useBookingForm';
import { TarotServiceSelector, CrystalServiceSelector } from '@/components/booking/ServiceSelector';
import { DateSelector, TimeSelector } from '@/components/booking/DateTimeSelector';
import { BookingSummary } from '@/components/booking/BookingSummary';
import { CustomerDetailsForm } from '@/components/booking/CustomerDetailsForm';
import { BookingSubmit } from '@/components/booking/BookingSubmit';

export default function Book() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [tarotTab, setTarotTab] = useState<'minutes' | 'questions'>(() => {
    return location.state?.activeTab || 'minutes';
  });

  const {
    selectedServices,
    selectedTime,
    selectedDate,
    fullName,
    email,
    phone,
    additionalNotes,
    validationErrors,
    isSubmitting,
    submissionMessage,
    totalPrice,
    addService,
    removeService,
    setSelectedTime,
    setSelectedDate,
    setFullName,
    setEmail,
    setPhone,
    setAdditionalNotes,
    handleConfirmBooking,
  } = useBookingForm(location.state?.preSelectedServices || []);

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
              <TarotServiceSelector
                selectedServices={selectedServices}
                onAddService={addService}
                tarotTab={tarotTab}
                setTarotTab={setTarotTab}
              />

              <CrystalServiceSelector
                selectedServices={selectedServices}
                onAddService={addService}
              />

              <DateSelector
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />

              <TimeSelector
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
              />
            </div>

            {/* Right: Summary + Details */}
            <div className="space-y-8">
              <BookingSummary
                selectedServices={selectedServices}
                onRemoveService={removeService}
                totalPrice={totalPrice}
              />

              <CustomerDetailsForm
                fullName={fullName}
                email={email}
                phone={phone}
                additionalNotes={additionalNotes}
                onFullNameChange={setFullName}
                onEmailChange={setEmail}
                onPhoneChange={setPhone}
                onAdditionalNotesChange={setAdditionalNotes}
              />

              <BookingSubmit
                validationErrors={validationErrors}
                submissionMessage={submissionMessage}
                isSubmitting={isSubmitting}
                totalPrice={totalPrice}
                selectedServicesCount={selectedServices.length}
                onConfirm={handleConfirmBooking}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
