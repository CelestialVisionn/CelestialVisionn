import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface BookingSubmitProps {
  validationErrors: string[];
  submissionMessage: { type: 'success' | 'error'; message: string } | null;
  isSubmitting: boolean;
  totalPrice: number;
  selectedServicesCount: number;
  onConfirm: () => void;
}

export function BookingSubmit({
  validationErrors,
  submissionMessage,
  isSubmitting,
  totalPrice,
  selectedServicesCount,
  onConfirm,
}: BookingSubmitProps) {
  return (
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
        onClick={onConfirm}
        disabled={isSubmitting}
        className="w-full bg-forest hover:bg-forest/90 text-cream font-heading rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Processing...' : `Confirm Booking ${selectedServicesCount > 0 ? `(₹${totalPrice})` : ''}`}
      </Button>
    </motion.div>
  );
}
