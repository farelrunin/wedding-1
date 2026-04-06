import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  // Auto-close after duration
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const variants = {
    initial: { opacity: 0, y: 20, x: 20 },
    animate: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: 20, x: 20 },
  };

  const bgColor =
    type === 'success'
      ? 'bg-green-100 border-green-300'
      : type === 'error'
      ? 'bg-red-100 border-red-300'
      : 'bg-yellow-100 border-yellow-300';

  const textColor =
    type === 'success'
      ? 'text-green-800'
      : type === 'error'
      ? 'text-red-800'
      : 'text-yellow-800';

  const iconColor =
    type === 'success'
      ? 'text-green-600'
      : type === 'error'
      ? 'text-red-600'
      : 'text-yellow-600';

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`fixed bottom-8 right-8 z-50 max-w-sm border rounded-lg shadow-lg p-4 flex items-start gap-4 ${bgColor}`}
    >
      {type === 'success' && (
        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
      )}
      {type === 'error' && (
        <AlertCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
      )}

      <div className="flex-1">
        <p className={`font-sans font-medium ${textColor}`}>{message}</p>
      </div>

      <button
        onClick={onClose}
        className={`flex-shrink-0 hover:opacity-75 transition ${textColor}`}
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default Toast;
