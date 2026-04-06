import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { weddingData } from '../data/mockData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { gallery, videos } = weddingData;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="gallery"
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
            Galeri Foto
          </h2>
          <p className="font-sans text-wood-brown/70">
            Momen-momen indah dari pre-wedding kami
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16"
        >
          {gallery.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedImage(image);
                setCurrentIndex(index);
              }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square bg-light-gold/10 group"
            >
              {/* Image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-4xl opacity-30 group-hover:opacity-50 transition">
                📷
              </div>
              {/* Replace with real image: <img
                src={image.thumbnail}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              /> */}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white font-sans text-sm text-center px-4">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Videos Section */}
        {videos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-light-gold/20"
          >
            <h3 className="font-serif text-3xl text-dark-brown font-bold text-center mb-8">
              Video Pernikahan
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg overflow-hidden shadow-lg bg-dark-brown aspect-video flex items-center justify-center cursor-pointer group"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-110 transition-transform">
                      📹
                    </div>
                    {/* YouTube/Vimeo iframe would go here */}
                    {/* <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              {/* Image */}
              <div className="w-full aspect-video md:aspect-auto bg-light-gold/10 rounded-lg flex items-center justify-center text-8xl">
                📷
              </div>
              {/* Replace with real image: <img
                src={gallery[currentIndex]?.src}
                alt={gallery[currentIndex]?.alt}
                className="w-full rounded-lg lightext-image"
              /> */}

              {/* Caption */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-white mt-4 font-sans text-lg"
              >
                {gallery[currentIndex]?.caption}
              </motion.p>

              {/* Navigation buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-light-gold hover:bg-gold-600 text-dark-brown p-2 rounded-full transition hidden md:flex"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-light-gold hover:bg-gold-600 text-dark-brown p-2 rounded-full transition hidden md:flex"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-light-gold hover:bg-gold-600 text-dark-brown p-2 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full font-sans text-sm">
                {currentIndex + 1} / {gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
