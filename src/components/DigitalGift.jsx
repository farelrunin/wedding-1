import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CreditCard, QrCode, MapPin, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/helpers';
import { weddingData } from '../data/mockData';

const DigitalGift = () => {
  const [copiedId, setCopiedId] = useState(null);
  const { bankAccounts, qrisCode, giftAddress } = weddingData;

  const handleCopyAccount = (accountNumber, accountName) => {
    copyToClipboard(`${accountNumber}`, () => {
      setCopiedId(accountNumber);
      setTimeout(() => setCopiedId(null), 2000);
    });
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
      id="gift"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-bone-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-light-gold/10 text-8xl">✦</div>
      <div className="absolute bottom-20 left-10 text-light-gold/10 text-8xl">✦</div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-dark-brown font-bold mb-4">
            Hadiah Digital &amp; Kado
          </h2>
          <p className="font-sans text-wood-brown/70">
            Berbagai cara untuk mengirimkan hadiah untuk kami
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Bank Transfers */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-light-gold"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-light-gold/10 rounded-lg">
                <CreditCard className="w-6 h-6 text-light-gold" />
              </div>
              <h3 className="font-serif text-2xl text-wood-brown font-bold">
                Transfer Bank
              </h3>
            </div>

            <p className="font-sans text-sm text-gray-600 mb-6">
              Anda dapat mengirimkan hadiah melalui transfer bank ke rekening kami:
            </p>

            <div className="space-y-4">
              {bankAccounts.map((account) => (
                <motion.div
                  key={account.id}
                  whileHover={{ y: -2 }}
                  className="p-4 border border-light-gold/20 rounded-lg hover:bg-light-gold/5 transition"
                >
                  <p className="font-sans text-sm font-semibold text-dark-brown mb-2">
                    {account.bankName}
                  </p>
                  <p className="font-sans text-sm text-gray-600 mb-1">
                    {account.accountName}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <code className="font-mono text-lg font-bold text-wood-brown">
                      {account.accountNumber}
                    </code>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        handleCopyAccount(
                          account.accountNumber,
                          account.accountName
                        )
                      }
                      className="p-2 hover:bg-light-gold/20 rounded-lg transition flex items-center gap-1"
                    >
                      {copiedId === account.accountNumber ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-xs text-green-600 font-sans">
                            Disalin
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-light-gold" />
                          <span className="text-xs text-light-gold font-sans">
                            Salin
                          </span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* QRIS & E-Wallet */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-light-gold"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-light-gold/10 rounded-lg">
                <QrCode className="w-6 h-6 text-light-gold" />
              </div>
              <h3 className="font-serif text-2xl text-wood-brown font-bold">
                QRIS &amp; E-Wallet
              </h3>
            </div>

            <p className="font-sans text-sm text-gray-600 mb-6">
              Scan QRIS di bawah untuk mengirimkan hadiah melalui e-wallet:
            </p>

            {/* QRIS placeholder */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-light-gold/10 rounded-lg p-8 flex items-center justify-center cursor-pointer hover:bg-light-gold/20 transition"
            >
              <div className="text-6xl">🔲</div>
            </motion.div>
            {/* Replace with real QRIS: <img src={qrisCode} alt="QRIS" className="w-full rounded-lg" /> */}

            <p className="font-sans text-xs text-center text-gray-600 mt-4">
              Scan dengan aplikasi e-wallet pilihan Anda
            </p>

            {/* E-Wallet methods */}
            <div className="mt-6 pt-6 border-t border-light-gold/20">
              <p className="font-sans text-sm font-semibold text-dark-brown mb-3">
                Metode E-Wallet:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {['GCash', 'OVO', 'Dana'].map((method) => (
                  <div
                    key={method}
                    className="px-3 py-2 bg-light-gold/10 rounded text-center font-sans text-sm text-wood-brown flex items-center justify-center"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Physical Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-light-gold"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-light-gold/10 rounded-lg">
              <MapPin className="w-6 h-6 text-light-gold" />
            </div>
            <h3 className="font-serif text-2xl text-wood-brown font-bold">
              Pengiriman Kado Fisik
            </h3>
          </div>

          <p className="font-sans text-sm text-gray-600 mb-6">
            Untuk mengirimkan kado atau hadiah fisik, silahkan kirim ke alamat berikut:
          </p>

          <div className="p-6 bg-light-gold/5 rounded-lg border border-light-gold/20">
            <p className="font-sans text-base text-dark-brown leading-relaxed">
              {giftAddress}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => copyToClipboard(giftAddress)}
            className="mt-6 btn-primary flex items-center justify-center gap-2 w-full md:w-auto mx-auto md:mx-0"
          >
            <Copy className="w-4 h-4" />
            <span>Salin Alamat</span>
          </motion.button>

          <p className="font-sans text-xs text-gray-600 mt-6 text-center">
            📦 Pastikan kado dibungkus dengan indah dan cantik
          </p>
        </motion.div>

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-light-gold/20"
        >
          <p className="font-script text-3xl text-wood-brown mb-2">
            Terima Kasih
          </p>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            Hadiah Anda bukan hanya sebuah barang, tetapi adalah ungkapan kasih sayang dan doa terbaik untuk perjalanan hidup baru kami. Kami sangat menghargai setiap dukungan Anda. ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalGift;
