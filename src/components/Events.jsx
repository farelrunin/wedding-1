import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { addToCalendar, openGoogleMaps, formatDate } from '../utils/helpers';
import { weddingData } from '../data/mockData';

const Events = () => {
  const { events } = weddingData;

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

  const EventCard = ({ event }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-light-gold overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 opacity-5 text-6xl">✦</div>

      <div className="relative z-10">
        {/* Event name */}
        <h3 className="font-serif text-2xl md:text-3xl text-wood-brown font-bold mb-6">
          {event.name}
        </h3>

        {/* Event details */}
        <div className="space-y-4 mb-8">
          {/* Date and time */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Clock className="w-5 h-5 text-light-gold" />
            </div>
            <div>
              <p className="font-sans text-sm text-gray-600 mb-1">Waktu Acara</p>
              <p className="font-sans text-base text-dark-brown font-semibold">
                {new Date(event.date).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="font-sans text-base text-dark-brown">
                {new Date(event.date).toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}{' '}
                -{' '}
                {new Date(event.endDate).toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <MapPin className="w-5 h-5 text-light-gold" />
            </div>
            <div>
              <p className="font-sans text-sm text-gray-600 mb-1">Lokasi</p>
              <p className="font-sans text-base text-dark-brown font-semibold">
                {event.location}
              </p>
              <p className="font-sans text-sm text-gray-600 mt-1">
                {event.address}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="font-sans text-gray-600 text-sm leading-relaxed mt-4">
            {event.description}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              addToCalendar(event.name, new Date(event.date), new Date(event.endDate), event.address)
            }
            className="flex-1 btn-primary flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Tambah ke Kalender</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openGoogleMaps(event.address)}
            className="flex-1 btn-secondary flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            <span>Google Maps</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="events"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bone-white to-cream overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-light-gold/10 text-8xl">❀</div>
      <div className="absolute bottom-20 right-10 text-light-gold/10 text-8xl">❀</div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-dark-brown font-bold mb-4">
            Acara &amp; Jadwal
          </h2>
          <p className="font-sans text-wood-brown/70 text-lg">
            Berikut adalah detail jadwal acara pernikahan kami
          </p>
        </motion.div>

        {/* Events grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
