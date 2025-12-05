
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Heart } from 'lucide-react';
import { appConfig } from '../config';

interface GreetingProps {
  onNext: () => void;
}

const Greeting: React.FC<GreetingProps> = ({ onNext }) => {
  return (
    <motion.div 
      className="flex flex-col items-center w-full min-h-[80vh] py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <motion.h2 
        className="text-2xl font-bold text-white mb-8 drop-shadow-md flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {appConfig.text.greeting.title} <Heart className="fill-red-400 text-red-400 w-6 h-6 animate-pulse" />
      </motion.h2>

      {/* Photo Frame */}
      <motion.div
        className="relative w-full max-w-[280px] bg-white p-3 pb-8 rounded shadow-2xl rotate-2 mb-10 shrink-0"
        initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
        animate={{ scale: 1, rotate: 2, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="w-full aspect-[4/5] bg-zinc-100 overflow-hidden rounded-sm relative">
           <img 
             src={appConfig.images.greetingPhoto} 
             alt="Us" 
             className="w-full h-full object-cover"
           />
           {/* Overlay texture effect */}
           <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
        </div>
        <div className="absolute bottom-2 right-4 text-zinc-400 font-handwriting text-xs font-medium tracking-widest">
           LOVE YOU ALWAYS
        </div>
      </motion.div>

      {/* Message Card */}
      <motion.div 
        className="w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl relative mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {/* Decorative quotes */}
        <span className="absolute top-4 left-4 text-4xl text-indigo-200 font-serif leading-none">“</span>
        
        <div className="z-10 my-4 px-2">
            <p className="text-zinc-800 text-lg leading-relaxed font-medium whitespace-pre-line">
              {appConfig.text.greeting.letter}
            </p>
        </div>

        <span className="absolute bottom-4 right-4 text-4xl text-indigo-200 font-serif leading-none rotate-180">“</span>
      </motion.div>

      {/* Next Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="bg-indigo-600 text-white font-bold py-3 px-10 rounded-full shadow-lg shadow-indigo-500/30 flex items-center gap-2 hover:bg-indigo-700 transition-colors text-lg mb-10"
      >
        {appConfig.text.greeting.button} <ChevronRight size={20} />
      </motion.button>

    </motion.div>
  );
};

export default Greeting;
