import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Introduction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="introduction"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bone-white to-cream overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-5 text-6xl">❀</div>
        <div className="absolute bottom-10 right-5 text-6xl">❀</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">✿</div>
        <div className="absolute top-1/3 right-1/4 text-4xl">✿</div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-wood-brown font-sans font-light mb-8 tracking-wide"
          >
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </motion.p>

          {/* Divider with icon */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 my-8"
          >
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-light-gold"></div>
            <Heart className="w-6 h-6 text-light-gold" />
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-light-gold"></div>
          </motion.div>

          {/* Main title */}
          <motion.h1
            variants={itemVariants}
            className="font-script text-5xl md:text-7xl text-wood-brown mb-8 leading-tight"
          >
            Ahmad &amp; Haliza
          </motion.h1>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="my-12 px-4 md:px-8"
          >
            <p className="text-lg md:text-2xl text-dark-brown font-serif italic mb-4">
              "Pernikahan adalah permulaan dari cerita cinta yang abadi."
            </p>
            <p className="text-sm md:text-base text-wood-brown/70 font-sans">
              Kami mengucapkan terima kasih atas kesediaan Anda untuk menjadi bagian dari momen istimewa dalam hidup kami.
            </p>
          </motion.div>

          {/* Request */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 bg-light-gold/10 rounded-lg border border-light-gold/20"
          >
            <p className="text-base md:text-lg text-wood-brown font-sans">
              Merupakan suatu kehormatan bagi kami jika Anda berkenan menghadiri
              acara pernikahan kami pada hari yang istimewa ini.
            </p>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <div className="inline-block text-4xl text-light-gold">✦ ✦ ✦</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
