import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_5qeghob';
const EMAILJS_TEMPLATE_ID = 'template_w1xtx1h';
const EMAILJS_PUBLIC_KEY = 'SrKYaekqwMia2xuI-';

// Initialize EmailJS once when module loads
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Format a date into human-friendly format
 * @param date - Date object to format
 * @returns Formatted string like "3 January 2026"
 */
export const formatDateForEmail = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
};

/**
 * Format services into plain text list for EmailJS
 * @param services - Array of selected services
 * @returns Plain text formatted string
 */
export const formatServicesList = (services: Array<{ title: string; price: number }>) => {
  return services.map((service) => ({
    name: service.title,
    price: service.price
  }));
};

/**
 * Send booking confirmation email via EmailJS
 * @param bookingData - Booking details to send
 * @returns Promise with result
 */
export interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  price: string;
  notes: string;
}

export const sendBookingEmail = async (bookingData: BookingData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate required fields
    if (!bookingData.name || !bookingData.email || !bookingData.phone || !bookingData.service || !bookingData.date || !bookingData.time) {
      return {
        success: false,
        message: 'Missing required booking information. Please try again.'
      };
    }

    // Prepare template variables exactly as specified
    const templateParams = {
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      service: bookingData.service,
      date: bookingData.date,
      time: bookingData.time,
      price: bookingData.price,
      notes: bookingData.notes || 'No additional notes'
    };

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Booking confirmed! We will contact you shortly.'
      };
    } else {
      return {
        success: false,
        message: 'Failed to send booking confirmation. Please try again.'
      };
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'There was an error processing your booking. Please check your details and try again.'
    };
  }
};
