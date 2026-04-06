import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';
import { useLocalStorage } from '../hooks/useHooks';

const GuestBook = () => {
  const [guests, setGuests] = useLocalStorage('wedding-guests', []);
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'hadir',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() && formData.message.trim()) {
      const newGuest = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toLocaleString('id-ID'),
      };

      setGuests((prev) => [newGuest, ...prev]);
      setFormData({ name: '', attendance: 'hadir', message: '' });
      setSubmitted(true);

      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="guestbook"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bone-white to-cream overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-light-gold/10 text-8xl">❀</div>
      <div className="absolute bottom-20 right-10 text-light-gold/10 text-8xl">❀</div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-dark-brown font-bold mb-4">
            Buku Tamu Digital
          </h2>
          <p className="font-sans text-wood-brown/70">
            Berikan ucapan dan doa terbaik untuk pernikahan kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-light-gold"
          >
            <h3 className="font-serif text-2xl text-wood-brown font-bold mb-6">
              Isi Buku Tamu
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block font-sans text-sm font-semibold text-dark-brown mb-2">
                  Nama <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 border border-light-gold/30 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-light-gold/50"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block font-sans text-sm font-semibold text-dark-brown mb-2">
                  Kehadiran <span className="text-red-500">*</span>
                </label>
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-gold/30 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-light-gold/50"
                >
                  <option value="hadir">Insya Allah Hadir</option>
                  <option value="tidak">Maaf, Tidak Bisa Hadir</option>
                  <option value="ragu">Belum Pasti</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-sm font-semibold text-dark-brown mb-2">
                  Ucapan / Doa <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Berikan ucapan dan doa terbaik Anda..."
                  rows="4"
                  className="w-full px-4 py-3 border border-light-gold/30 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-light-gold/50 resize-none"
                ></textarea>
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 mt-6"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Ucapan</span>
              </motion.button>

              {/* Success message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg font-sans text-sm text-center"
                >
                  ✓ Ucapan Anda berhasil dikirim. Terima kasih!
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Guest messages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:max-h-96 overflow-y-auto pr-2"
          >
            <h3 className="font-serif text-2xl text-wood-brown font-bold mb-6 sticky top-0 bg-cream">
              Ucapan Tamu
            </h3>

            {guests.length === 0 ? (
              <p className="text-center text-gray-600 font-sans py-8">
                Belum ada ucapan. Jadilah yang pertama! 💕
              </p>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {guests.map((guest) => (
                  <motion.div
                    key={guest.id}
                    variants={itemVariants}
                    className="bg-white rounded-lg p-4 border-l-4 border-light-gold shadow-sm hover:shadow-md transition"
                  >
                    {/* Guest name and status */}
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-serif font-bold text-wood-brown">
                          {guest.name}
                        </p>
                        <p className="font-sans text-xs text-gray-600">
                          {guest.timestamp}
                        </p>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {guest.attendance === 'hadir' ? (
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-sans text-xs font-semibold">
                            Hadir
                          </span>
                        ) : guest.attendance === 'tidak' ? (
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-sans text-xs font-semibold">
                            Tidak Hadir
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-sans text-xs font-semibold">
                            Belum Pasti
                          </span>
                        )}
                      </motion.div>
                    </div>

                    {/* Message */}
                    <p className="font-sans text-sm text-gray-700 leading-relaxed">
                      {guest.message}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuestBook;
