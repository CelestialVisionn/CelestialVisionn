import { useState } from 'react';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formatDateForEmail, formatServicesList } from '@/components/BookingEmailHandler';
import emailjs from '@emailjs/browser';

type SelectedService = {
  id: string;
  title: string;
  price: number;
  details: string;
};

export function useBookingForm(initialServices: SelectedService[] = []) {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(initialServices);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const addService = (service: SelectedService) => {
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
    setSubmissionMessage(null);

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const formattedDate = selectedDate ? formatDateForEmail(selectedDate) : '';

        // Format services as HTML table rows
        const formattedServicesHTML = formatServicesList(selectedServices);

        // Calculate total price
        const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);

        // Prepare email payload
        const payload = {
          name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          services: formattedServicesHTML,
          date: formattedDate,
          time: selectedTime || '',
          price: `₹${totalPrice.toLocaleString('en-IN')}`,
          notes: additionalNotes.trim() || 'No additional notes'
        };

        console.log("EMAIL PAYLOAD =>", payload);

        // Use the same EmailJS IDs as configured in BookingEmailHandler to keep accounts in sync
        const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload);

        if (response.status === 200) {
          setSubmissionMessage({
            type: 'success',
            message: 'Booking confirmed! We will contact you shortly.',
          });

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

  return {
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
  };
}
