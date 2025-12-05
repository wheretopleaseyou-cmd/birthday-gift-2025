
import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Headphones } from 'lucide-react';
import { appConfig } from '../config';

interface OpeningProps {
  onOpen: () => void;
}

const Opening: React.FC<OpeningProps> = ({ onOpen }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-[80vh] w-full"
      exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={onOpen}
        className="cursor-pointer flex flex-col items-center gap-8"
      >
        <div className="relative">
            {/* Glowing effect behind the box */}
            <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full scale-150 animate-pulse"></div>
            
            <motion.div
              animate={{ 
                rotate: [0, -5, 5, -5, 5, 0],
                scale: [1, 1.05, 1, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="relative bg-white/10 backdrop-blur-xl p-10 rounded-[2rem] shadow-2xl border border-white/20"
            >
              <Gift size={100} className="text-white drop-shadow-lg" strokeWidth={1.5} />
            </motion.div>
        </div>
        
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold tracking-tight text-white drop-shadow-md"
          >
            {appConfig.text.opening.title}
          </motion.h1>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.7 }}
             className="flex items-center justify-center gap-2 text-white/70 text-sm"
          >
            <Headphones size={14} />
            <span>{appConfig.text.opening.headphonesHint}</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-2 justify-center pt-2"
          >
             <span className="text-white/90 text-base font-bold bg-white/20 px-6 py-2 rounded-full backdrop-blur-md shadow-lg border border-white/10">
                {appConfig.text.opening.subtitle}
             </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Opening;
