import { motion } from 'framer-motion';

interface CustomerDetailsFormProps {
  fullName: string;
  email: string;
  phone: string;
  additionalNotes: string;
  onFullNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onAdditionalNotesChange: (value: string) => void;
}

export function CustomerDetailsForm({
  fullName,
  email,
  phone,
  additionalNotes,
  onFullNameChange,
  onEmailChange,
  onPhoneChange,
  onAdditionalNotesChange,
}: CustomerDetailsFormProps) {
  return (
    <>
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
            onChange={(e) => onFullNameChange(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all text-sm"
          />
          <input
            type="email"
            placeholder="Your Email *"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all text-sm"
          />
          <input
            type="tel"
            placeholder="Your Phone Number *"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
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
          onChange={(e) => onAdditionalNotesChange(e.target.value)}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all text-sm resize-none"
        />
      </motion.div>
    </>
  );
}
