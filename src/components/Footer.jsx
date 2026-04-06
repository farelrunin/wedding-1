import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-brown text-cream py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-light-gold">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo */}
          <h3 className="font-script text-3xl">
            Ahmad &amp; Haliza
          </h3>

          {/* Date */}
          <p className="font-sans text-light-gold">
            15 Desember 2024
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-light-gold/50"></div>
            <Heart className="w-5 h-5 text-light-gold" />
            <div className="h-0.5 w-8 bg-light-gold/50"></div>
          </div>

          {/* Thanks message */}
          <p className="font-sans text-cream/80 max-w-2xl mx-auto">
            Terima kasih telah menjadi bagian dari hari istimewa kami. Kehadiran dan doa Anda berarti banyak bagi kami.
          </p>

          {/* Social links placeholder */}
          <div className="flex justify-center gap-4 py-6">
            {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
              <motion.a
                key={social}
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-full border-2 border-light-gold hover:bg-light-gold hover:text-dark-brown transition flex items-center justify-center font-sans text-sm font-semibold"
              >
                {social.charAt(0)}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-light-gold/20">
            <p className="font-sans text-cream/60 text-sm">
              © {currentYear} Ahmad Rizki & Siti Haliza. All rights reserved.
            </p>
            <p className="font-sans text-cream/40 text-xs mt-2">
              Undangan Pernikahan Digital dengan Cinta
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
