import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { getGuestName } from '../utils/helpers';

const Envelope = ({ onOpen }) => {
  const [isOpened, setIsOpened] = useState(false);
  const guestName = getGuestName();

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream via-cream to-bone-white overflow-hidden">
      {/* Decorative ornaments */}
      <div className="absolute top-20 left-10 text-light-gold/20 text-6xl">✦</div>
      <div className="absolute bottom-20 right-10 text-light-gold/20 text-6xl">✦</div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center z-10 px-4"
      >
        {!isOpened && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="perspective"
          >
            {/* Envelope 3D Effect */}
            <div className="relative w-full max-w-md mx-auto h-80 cursor-pointer group" onClick={handleOpen}>
              {/* Envelope body */}
              <motion.div
                animate={{ rotateX: isOpened ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full bg-bone-white border-4 border-wood-brown shadow-2xl"
              >
                {/* Envelope flap */}
                <motion.div
                  animate={{ rotateX: isOpened ? -180 : 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-wood-brown origin-top"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-light-gold" />
                  </div>
                </motion.div>

                {/* Content inside */}
                <div className="absolute inset-0 flex items-center justify-center pt-20">
                  <div className="text-center">
                    <h2 className="font-script text-4xl text-wood-brown mb-4">
                      Undangan Pernikahan
                    </h2>
                    <p className="font-sans text-lg text-dark-brown font-semibold">
                      Untuk
                    </p>
                    <p className="font-script text-3xl text-light-gold mt-2">
                      {guestName}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Open button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="mt-12 btn-primary text-lg animate-pulse hover:animate-none"
            >
              ✨ Buka Undangan ✨
            </motion.button>

            {/* Decorative text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <p className="text-sm text-wood-brown/60 font-sans">
                Klik untuk membuka undangan istimewa kami
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Envelope;
