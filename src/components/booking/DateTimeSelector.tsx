import { motion } from 'framer-motion';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

interface DateTimeSelectorProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}

const timeSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

export function DateSelector({ selectedDate, onSelectDate }: Pick<DateTimeSelectorProps, 'selectedDate' | 'onSelectDate'>) {
  return (
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
            onSelect={onSelectDate}
            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </motion.div>
  );
}

export function TimeSelector({ selectedTime, onSelectTime }: Pick<DateTimeSelectorProps, 'selectedTime' | 'onSelectTime'>) {
  return (
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
            onClick={() => onSelectTime(slot)}
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
  );
}
