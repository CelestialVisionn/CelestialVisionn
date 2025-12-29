import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export function FloatingBookButton() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/book')) return null;

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 overflow-hidden">
      <Button asChild variant="gold" className="rounded-full shadow-none sm:shadow-medium h-10 px-3 py-2 sm:h-11 sm:px-6 text-xs sm:text-sm">
        <Link to="/book" aria-label="Book Now">
          <Calendar className="sm:mr-1.5" size={16} />
          <span className="hidden sm:inline ml-1">Book Now</span>
        </Link>
      </Button>
    </div>
  );
}

export default FloatingBookButton;
