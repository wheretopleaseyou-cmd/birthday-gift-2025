import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Smile, Dumbbell, Flame, BatteryCharging } from 'lucide-react';
import { appConfig } from '../config';

interface GiftListProps {
  onFinish: () => void;
}

const IconMap: { [key: string]: React.ElementType } = {
  Smile,
  Dumbbell,
  Flame,
  BatteryCharging
};

const GiftList: React.FC<GiftListProps> = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const gifts = appConfig.gifts;

  const handleNext = () => {
    if (currentIndex < gifts.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finished all regular gifts
      onFinish();
    }
  };

  const currentGift = gifts[currentIndex];
  const IconComponent = IconMap[currentGift.icon];

  return (
    <div className="flex flex-col items-center justify-center h-[85vh] w-full relative">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-full max-w-sm"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl text-center flex flex-col items-center min-h-[420px] justify-between relative overflow-hidden">
             
             {/* Decorative Background Blob inside card */}
             <div className={`absolute top-[-50%] left-[-50%] w-[200%] h-[200%] ${currentGift.color} opacity-20 rounded-full blur-3xl pointer-events-none`}></div>

             <div className="relative z-10 flex flex-col items-center">
                <div className={`p-6 rounded-3xl ${currentGift.color} mb-8 shadow-inner`}>
                  {IconComponent && <IconComponent size={48} className={currentGift.iconColor} />}
                </div>
                
                <h2 className={`text-2xl font-bold mb-4 ${currentGift.textColor}`}>
                  {currentGift.title}
                </h2>
                
                <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                  {currentGift.text}
                </p>
             </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Action Button */}
      <motion.button
        layout
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        className="mt-8 bg-white text-indigo-600 font-bold py-4 px-12 rounded-full shadow-lg shadow-black/20 text-lg flex items-center gap-2 hover:bg-indigo-50 transition-colors"
      >
        {currentIndex === gifts.length - 1 ? (
          <>
            全部拆完啦 <Check size={20} />
          </>
        ) : (
          <>
            下一个 <ChevronRight size={20} />
          </>
        )}
      </motion.button>
    </div>
  );
};

export default GiftList;