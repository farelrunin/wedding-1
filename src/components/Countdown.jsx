import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useHooks';
import { weddingData } from '../data/mockData';

const Countdown = () => {
  const timeLeft = useCountdown(weddingData.countdown);

  const CountdownItem = ({ value, label }) => (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', bounce: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg bg-gradient-to-br from-light-gold to-gold-600 flex items-center justify-center shadow-lg mb-3 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-white/10"
        ></motion.div>

        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="text-3xl md:text-5xl font-bold text-dark-brown font-serif relative z-10"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <p className="font-serif text-sm md:text-base text-wood-brown font-semibold uppercase tracking-widest">
        {label}
      </p>
    </motion.div>
  );

  return (
    <section
      id="countdown"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-wood-brown via-brown-700 to-dark-brown overflow-hidden text-white"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-light-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-light-gold">
            Menghitung Hari Istimewa
          </h2>
          <p className="font-sans text-cream/80 text-lg">
            Waktu menuju pernikahan kami...
          </p>
        </motion.div>

        {/* Countdown display */}
        {!timeLeft.isExpired ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12"
          >
            <CountdownItem value={timeLeft.days} label="Hari" />
            <CountdownItem value={timeLeft.hours} label="Jam" />
            <CountdownItem value={timeLeft.minutes} label="Menit" />
            <CountdownItem value={timeLeft.seconds} label="Detik" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="font-script text-4xl md:text-6xl text-light-gold mb-4">
              Acara Telah Dimulai!
            </p>
            <p className="font-sans text-cream/80 text-lg">
              Terima kasih atas kehadiran Anda yang berharga.
            </p>
          </motion.div>
        )}

        {/* Event date display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center py-8 border-t border-light-gold/30 mt-12"
        >
          <p className="font-sans text-cream/70 text-sm uppercase tracking-widest mb-2">
            Acara Dimulai Pada
          </p>
          <p className="font-serif text-2xl md:text-3xl text-light-gold font-semibold">
            {new Date(weddingData.countdown).toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className="font-serif text-xl text-light-gold/80 mt-2">
            Pukul{' '}
            {new Date(weddingData.countdown).toLocaleTimeString('id-ID', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
