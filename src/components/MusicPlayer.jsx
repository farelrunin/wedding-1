import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause } from 'lucide-react';

const MusicPlayer = forwardRef(({ musicUrl, isVisible = true }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef(null);

  const playAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return false;
    }

    try {
      await audio.play();
      return true;
    } catch (err) {
      console.error('Error playing audio:', err);
      setIsPlaying(false);
      return false;
    }
  };

  const pauseAudio = () => {
    audioRef.current?.pause();
  };

  useImperativeHandle(ref, () => ({
    playFromUserGesture: playAudio,
    pause: pauseAudio,
  }));

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      void playAudio();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return undefined;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="auto"
        playsInline
      />

      {/* Floating Music Player Button */}
      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        onClick={() => setShowPlayer(!showPlayer)}
        className={`fixed bottom-8 right-8 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-light-gold to-gold-600 shadow-lg transition group hover:shadow-xl ${
          isVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-label="Buka kontrol musik"
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { duration: 3, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Vinyl record effect */}
          {isPlaying && (
            <>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-dark-brown/20"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                className="absolute inset-2 rounded-full border border-dark-brown/10"
              ></motion.div>
            </>
          )}

          {/* Icon */}
          <Music className="w-6 h-6 text-dark-brown relative z-10" />
        </motion.div>

        {/* Pulse effect when playing */}
        {isPlaying && (
          <motion.div
            animate={{ scale: [1, 1.3], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-dark-brown"
          ></motion.div>
        )}
      </motion.button>

      {/* Expanded Player */}
      {showPlayer && isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-24 right-8 z-40 w-80 bg-white rounded-lg shadow-2xl p-6 border-2 border-light-gold/30"
        >
          {/* Player header */}
          <h3 className="font-serif text-lg text-wood-brown font-bold mb-6">
            Musik Latar
          </h3>

          {/* Vinyl record visualization */}
          <div className="flex justify-center mb-6">
            <motion.div
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={isPlaying ? { duration: 2, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }}
              className="relative w-32 h-32"
            >
              {/* Vinyl disk */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-dark-brown to-black relative overflow-hidden shadow-lg">
                {/* Vinyl grooves */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={isPlaying ? { duration: 2, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }}
                    className="absolute inset-0 rounded-full border border-dark-brown/20"
                    style={{ padding: `${i * 8}px` }}
                  ></motion.div>
                ))}

                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-light-gold to-gold-600 flex items-center justify-center shadow-md">
                    <Music className="w-6 h-6 text-dark-brown" />
                  </div>
                </div>
              </div>

              {/* Needle */}
              {isPlaying && (
                <motion.div
                  animate={{ rotate: [10, 20, 10] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute -left-12 top-0 w-12 h-1 bg-gray-400 origin-right rounded-full"
                ></motion.div>
              )}
            </motion.div>
          </div>

          {/* Song info */}
          <div className="text-center mb-6">
            <p className="font-serif text-base text-wood-brown font-semibold">
              Musik Romantis
            </p>
            <p className="font-sans text-xs text-gray-600 mt-1">
              Musik latar untuk pernikahan
            </p>
          </div>

          {/* Control buttons */}
          <div className="flex gap-3 justify-center">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="flex-1 btn-primary flex items-center justify-center gap-2"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span className="font-sans text-sm">Jeda</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span className="font-sans text-sm">Putar</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Status indicator */}
          <p className="text-center font-sans text-xs text-gray-600 mt-4">
            {isPlaying ? (
              <span className="flex items-center justify-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Sedang Memutar
              </span>
            ) : (
              <span>Siap untuk diputar</span>
            )}
          </p>
        </motion.div>
      )}
    </>
  );
});

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;
