import { motion } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';

type SelectedService = {
  id: string;
  title: string;
  price: number;
  details: string;
};

interface BookingSummaryProps {
  selectedServices: SelectedService[];
  onRemoveService: (id: string) => void;
  totalPrice: number;
}

export function BookingSummary({ selectedServices, onRemoveService, totalPrice }: BookingSummaryProps) {
  return (
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
                  onClick={() => onRemoveService(service.id)}
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
  );
}
