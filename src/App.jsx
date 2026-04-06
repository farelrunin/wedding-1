import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Envelope from './components/Envelope';
import Introduction from './components/Introduction';
import CoupleProfile from './components/CoupleProfile';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Gallery from './components/Gallery';
import GuestBook from './components/GuestBook';
import DigitalGift from './components/DigitalGift';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import { weddingData } from './data/mockData';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const musicPlayerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isEnvelopeOpen ? 'unset' : 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isEnvelopeOpen]);

  useEffect(() => {
    if (!isEnvelopeOpen) {
      return undefined;
    }

    const scrollTimer = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

      const firstSection = document.getElementById('introduction');
      firstSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 250);

    return () => window.clearTimeout(scrollTimer);
  }, [isEnvelopeOpen]);

  const handleEnvelopeInteraction = () => {
    musicPlayerRef.current?.playFromUserGesture();
  };

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden selection:bg-gold-200">
      <Header />

      <AnimatePresence>
        {!isEnvelopeOpen && (
          <motion.div
            key="envelope"
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100]"
          >
            <Envelope
              onOpen={handleOpenInvitation}
              onOpenStart={handleEnvelopeInteraction}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {isEnvelopeOpen && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Introduction />
          <CoupleProfile />
          <Countdown />
          <Events />
          <Gallery />
          <GuestBook />
          <DigitalGift />
          <Footer />
        </motion.main>
      )}

      <MusicPlayer
        ref={musicPlayerRef}
        musicUrl={weddingData.musicUrl}
        isVisible={isEnvelopeOpen}
      />

      {isEnvelopeOpen && (
        <motion.button
          type="button"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-8 left-8 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-light-gold text-[0] text-dark-brown shadow-2xl transition-all hover:scale-110 before:text-2xl before:font-bold before:leading-none before:text-dark-brown before:content-['^']"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Kembali ke atas"
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}

export default App;
