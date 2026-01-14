import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-sm px-4"
        >
          <div className="bg-[#5a6470] rounded shadow-xl p-4 text-white relative flex items-center gap-4 border border-gray-600">
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-10 h-6 bg-white text-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm text-[9px] font-bold border border-gray-200 tracking-widest"
              aria-label="閉じる"
            >
              閉じる
            </button>

            <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded flex items-center justify-center font-bold text-[#c4967e] text-xs border border-white/10 tracking-tighter">
              O2
            </div>
            
            <div className="flex-1">
              <div className="font-bold text-[10px] mb-0.5 tracking-wider">デモ体験・お問い合わせ</div>
              <div className="text-[9px] text-gray-300 tracking-widest">思考回路の同期を体験する</div>
            </div>
            
            <button className="px-4 py-2 bg-white text-[#5a6470] rounded text-[10px] font-bold hover:bg-gray-100 transition-colors whitespace-nowrap tracking-widest">
              開始
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
