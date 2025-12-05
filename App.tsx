
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AppStage } from './types';
import Opening from './components/Opening';
import Greeting from './components/Greeting';
import GiftList from './components/GiftList';
import Voucher from './components/Voucher';
import { appConfig } from './config';

export default function App() {
  const [stage, setStage] = useState<AppStage>(AppStage.OPENING);
  
  // Audio Refs
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  const voiceAudioRef = useRef<HTMLAudioElement | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize audio
  useEffect(() => {
    // Global Background Music
    bgAudioRef.current = new Audio(appConfig.music.background); 
    bgAudioRef.current.loop = true;
    bgAudioRef.current.volume = 0.4;

    // Promise Page Specific Audio (Voice message)
    voiceAudioRef.current = new Audio(appConfig.music.promiseVoice);
    voiceAudioRef.current.loop = false; // Voice message should not loop
    voiceAudioRef.current.volume = 1.0; // Max volume for clear voice

    // Restore BGM volume when voice audio finishes naturally
    voiceAudioRef.current.onended = () => {
      if (bgAudioRef.current) {
        bgAudioRef.current.volume = 0.4; // Restore to normal
      }
    };

    return () => {
      // Cleanup on unmount
      bgAudioRef.current?.pause();
      bgAudioRef.current = null;
      voiceAudioRef.current?.pause();
      voiceAudioRef.current = null;
    };
  }, []);

  // Handle Audio Transitions based on Stage
  useEffect(() => {
    // Handle Promise Stage Audio (The Final Voucher)
    if (stage === AppStage.PROMISE) {
      if (voiceAudioRef.current) {
        voiceAudioRef.current.currentTime = 0;
        voiceAudioRef.current.play().catch(e => console.log("Voice audio play failed", e));
      }
      // Lower background music volume while voice is playing
      if (bgAudioRef.current) {
        bgAudioRef.current.volume = 0.1; 
      }
    } else {
      // Ensure voice audio is stopped if we are NOT on the promise stage
      // (Mostly for cleanup if user could go back, though currently they can't)
      if (voiceAudioRef.current && !voiceAudioRef.current.paused) {
        voiceAudioRef.current.pause();
        voiceAudioRef.current.currentTime = 0;
      }
      
      // If we are NOT on the promise stage, ensure volume is normal
      // (This handles Greeting and GiftList stages)
      if (bgAudioRef.current) {
        bgAudioRef.current.volume = 0.4;
      }
    }
  }, [stage]);

  const handleStart = () => {
    // Start global background music on first user interaction
    if (bgAudioRef.current) {
      bgAudioRef.current.play().catch(e => console.log("Audio play failed interaction", e));
      setIsPlaying(true);
    }
    // Transition to Greeting
    setStage(AppStage.GREETING);
  };

  const handleGreetingNext = () => {
    setStage(AppStage.GIFTS);
  };

  const handleGiftFinish = () => {
    setStage(AppStage.PROMISE);
  };

  const toggleMusic = () => {
    if (bgAudioRef.current?.paused) {
      bgAudioRef.current.play();
      // If we are on Promise page, also resume voice audio if it was supposed to be playing
      if (stage === AppStage.PROMISE && voiceAudioRef.current && !voiceAudioRef.current.ended) {
        voiceAudioRef.current.play();
      }
      setIsPlaying(true);
    } else {
      bgAudioRef.current?.pause();
      // Also pause voice audio
      voiceAudioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white relative overflow-x-hidden flex flex-col items-center justify-center p-4">
      
      <div className="z-10 w-full max-w-md mx-auto h-full flex flex-col relative">
        <AnimatePresence mode="wait">
          {stage === AppStage.OPENING && (
            <Opening key="opening" onOpen={handleStart} />
          )}

          {stage === AppStage.GREETING && (
            <Greeting key="greeting" onNext={handleGreetingNext} />
          )}

          {stage === AppStage.GIFTS && (
            <GiftList key="gifts" onFinish={handleGiftFinish} />
          )}

          {stage === AppStage.PROMISE && (
            <Voucher key="promise" />
          )}
        </AnimatePresence>
      </div>

      {/* Audio Control */}
      {isPlaying && (
        <button 
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-medium z-50 hover:bg-white/30 transition-colors"
        >
          {isPlaying ? 'Music On' : 'Music Off'}
        </button>
      )}
    </div>
  );
}
