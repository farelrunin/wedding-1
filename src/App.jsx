import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// ... import lainnya tetap sama

function App() {
  const [isEnvelopOpen, setIsEnvelopeOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // State untuk musik

  // Efek untuk mengunci scroll saat sampul belum dibuka
  useEffect(() => {
    if (!isEnvelopOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isEnvelopOpen]);

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
    setIsPlaying(true); // Musik akan mulai HANYA setelah tombol diklik
  };

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden selection:bg-gold-200">
      <Header />

      <AnimatePresence>
        {!isEnvelopOpen && (
          <motion.div
            key="envelope"
            exit={{ y: '-100%', opacity: 0 }} // Efek sampul terangkat ke atas
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            <Envelope onOpen={handleOpenInvitation} />
          </motion.div>
        )}
      </AnimatePresence>

      {isEnvelopOpen && (
        <motion.div 
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
        </motion.div>
      )}

      {/* Kirim state isPlaying ke MusicPlayer agar dia tahu kapan harus mulai */}
      <MusicPlayer 
        musicUrl={weddingData.musicUrl} 
        autoPlayTrigger={isPlaying} 
      />

      {isEnvelopOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-8 left-8 z-30 w-14 h-14 bg-light-gold text-dark-brown rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all font-bold"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}