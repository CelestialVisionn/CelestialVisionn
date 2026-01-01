import { motion } from 'framer-motion';

type SelectedService = {
  id: string;
  title: string;
  price: number;
  details: string;
};

interface ServiceSelectorProps {
  selectedServices: SelectedService[];
  onAddService: (service: SelectedService) => void;
}

const tarotMinutesSessions = [
  { id: 'tarot-15', title: 'Tarot Reading - 15 min', duration: '15 min', price: 1100, description: 'Quick clarity session' },
  { id: 'tarot-30', title: 'Tarot Reading - 30 min', duration: '30 min', price: 2500, description: 'In-depth exploration' },
  { id: 'tarot-45', title: 'Tarot Reading - 45 min', duration: '45 min', price: 4100, description: 'Comprehensive reading' },
];

const tarotQuestionsSessions = [
  { id: 'tarot-1q', title: 'Tarot Reading - 1 Question', questions: '1 Question', price: 333, description: 'Detailed single question reading' },
  { id: 'tarot-3q', title: 'Tarot Reading - 3 Questions', questions: '3 Questions', price: 1100, description: 'Multi-question deep dive' },
];

export function TarotServiceSelector({ selectedServices, onAddService, tarotTab, setTarotTab }: ServiceSelectorProps & { tarotTab: 'minutes' | 'questions'; setTarotTab: (tab: 'minutes' | 'questions') => void }) {
  return (
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
              onClick={() => onAddService({
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
              onClick={() => onAddService({
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
  );
}

export function CrystalServiceSelector({ selectedServices, onAddService }: ServiceSelectorProps) {
  const crystalService = {
    id: 'crystal',
    title: 'Crystal Consultation',
    duration: '90 min',
    price: 2500,
    description: 'Custom gemstone pairing and energetic architecture',
  };

  return (
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
        onClick={() => onAddService({
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
  );
}
