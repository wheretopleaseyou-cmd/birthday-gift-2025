
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Apple, Star, Download } from 'lucide-react';
import { toPng } from 'html-to-image';
import { appConfig } from '../config';

const Voucher: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intense Confetti explosion on mount
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: ['#FFD700', '#ffffff', '#FFA500'] // Gold and White theme
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: ['#FFD700', '#ffffff', '#FFA500']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 });
        const link = document.createElement('a');
        link.download = 'iphone17-promise-card.png';
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Failed to download image', err);
        alert('保存失败，请截图保存哦！');
      }
    }
  };

  const { voucher } = appConfig.text;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[85vh] w-full relative pb-10"
    >
      
      {/* Surprise Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6 text-white font-bold text-xl tracking-wider flex items-center gap-2"
      >
        <Star className="fill-yellow-400 text-yellow-400" /> 终极彩蛋 <Star className="fill-yellow-400 text-yellow-400" />
      </motion.div>

      {/* Black Gold Card Container - Ref for download */}
      <div ref={cardRef} className="w-full max-w-[360px] relative perspective-1000">
        <div className="relative w-full rounded-[1.5rem] overflow-hidden shadow-2xl border border-yellow-600/30 bg-black">
          
          {/* Card Background Gradient & Texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"></div>
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          
          {/* Gold Shimmer/Glow */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-yellow-500/10 via-transparent to-yellow-500/5 rotate-45 pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 p-8 flex flex-col h-full min-h-[500px] justify-between text-yellow-500/90">
            
            {/* Top Section */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <div className="relative">
                 {/* Glowing backdrop for logo */}
                 <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full"></div>
                 <Apple size={64} className="relative z-10 text-transparent fill-current bg-gradient-to-b from-yellow-200 to-yellow-600 bg-clip-text drop-shadow-[0_2px_10px_rgba(234,179,8,0.5)]" />
              </div>
              
              <div className="text-center">
                <span className="text-[10px] tracking-[0.4em] uppercase text-yellow-600/80 mb-2 block">Premium Gift Access</span>
                <h2 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-600">
                  {voucher.headerTitle}
                </h2>
              </div>
            </div>

            {/* Main Promise Text */}
            <div className="space-y-6 text-center my-8">
              <div className="inline-block border-y border-yellow-800/50 py-2 px-6">
                <div className="flex items-baseline justify-center gap-2">
                    <span className="text-2xl font-bold text-white tracking-tighter shadow-black drop-shadow-md">{voucher.productName}</span>
                    <span className="text-sm font-medium text-yellow-500">{voucher.productModel}</span>
                </div>
              </div>
              
              <p className="text-sm leading-relaxed text-zinc-400 font-light max-w-[260px] mx-auto">
                {voucher.number}
                <br/>
                <span className="block mt-4 text-yellow-100/90 font-medium text-lg tracking-wide">
                  "{voucher.promise}"
                </span>
                <span className="block mt-2 text-xs text-zinc-500 italic">
                  {voucher.englishSub}
                </span>
              </p>
            </div>

            {/* Footer Signature */}
            <div className="border-t border-dashed border-zinc-800 pt-4 mt-auto">
               <div className="flex justify-between items-end px-2">
                   <div className="text-left">
                      <p className="text-[9px] uppercase tracking-widest text-zinc-600 mb-1">{voucher.fromLabel}</p>
                      <p className="text-sm font-handwriting text-zinc-300">{voucher.fromName}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[9px] uppercase tracking-widest text-zinc-600 mb-1">{voucher.dateLabel}</p>
                      <p className="text-sm font-mono text-zinc-300">{voucher.dateValue}</p>
                   </div>
               </div>
            </div>

          </div>
          
          {/* Metallic Sheen Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-[1.5rem]"></div>
          {/* Border */}
          <div className="absolute inset-[1px] border border-yellow-500/20 rounded-[1.5rem] pointer-events-none"></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4">
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/50 text-yellow-400 px-6 py-3 rounded-full font-medium backdrop-blur-md hover:bg-yellow-500/20 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]"
        >
          <Download size={18} /> 保存承诺卡
        </motion.button>
      </div>

      {/* Footer Photo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-10 text-center pb-8"
      >
        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full mx-auto mb-3 overflow-hidden border-2 border-yellow-500/30">
           <img src={appConfig.images.voucherAvatar} alt="Love" className="w-full h-full object-cover" />
        </div>
        <p className="text-white/60 text-sm flex items-center justify-center gap-1">
          生日快乐 <Star size={12} className="text-yellow-500 fill-yellow-500" />
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Voucher;
