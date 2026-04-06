import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';
import { weddingData } from '../data/mockData';

const CoupleProfile = () => {
  const { groom, bride } = weddingData.couple;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const ProfileCard = ({ person, position = 'left' }) => (
    <motion.div
      variants={itemVariants}
      className="w-full md:w-1/3"
    >
      <div className="text-center">
        {/* Photo placeholder */}
        <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg h-64 md:h-80 bg-light-gold/10 flex items-center justify-center border-4 border-light-gold/30">
          <div className="text-6xl opacity-30">📷</div>
          {/* Replace with real image: <img src={person.photo} alt={person.fullName} className="w-full h-full object-cover" /> */}
        </div>

        {/* Name */}
        <h3 className="font-script text-4xl text-wood-brown mb-2">
          {person.nickName}
        </h3>
        <p className="font-serif text-xl text-dark-brown font-semibold mb-1">
          {person.fullName}
        </p>

        {/* Parents */}
        <div className="py-4 border-y border-light-gold/20 my-4">
          <p className="text-sm text-wood-brown/70 font-sans mb-2">Anak dari</p>
          <p className="text-base text-dark-brown font-sans mb-2">
            {person.father}
          </p>
          <p className="text-base text-dark-brown font-sans">
            {person.mother}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 font-sans text-sm leading-relaxed my-4">
          {person.description}
        </p>

        {/* Instagram link */}
        {person.instagram && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={person.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-light-gold hover:text-wood-brown transition mt-4"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-sans text-sm">Follow Instagram</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section
      id="couple"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-bone-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-light-gold/10 text-8xl">✿</div>
      <div className="absolute bottom-20 left-10 text-light-gold/10 text-8xl">✿</div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-dark-brown font-bold mb-4">
            Calon Pengantin
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-0.5 w-12 bg-light-gold"></div>
            <Heart className="w-6 h-6 text-light-gold" />
            <div className="h-0.5 w-12 bg-light-gold"></div>
          </div>
        </motion.div>

        {/* Couple profiles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          {/* Groom */}
          <ProfileCard person={groom} position="left" />

          {/* Heart divider */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              💕
            </motion.div>
          </motion.div>

          {/* Bride */}
          <ProfileCard person={bride} position="right" />
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <span className="text-2xl text-light-gold">✦ ✦ ✦</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleProfile;
