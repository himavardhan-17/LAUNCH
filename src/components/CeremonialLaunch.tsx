import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import vardhamanLogo from '@/assets/vardhaman-logo.png';
import sacLogo from '@/assets/sac-logo.png';

const CeremonialLaunch = () => {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  
  // Target URL for the website
  const targetUrl = "https://sac-vmeg.vercel.app/"; // Replace with actual URL
  
  useEffect(() => {
    // Start entrance animations after component mounts
    const timer = setTimeout(() => {
      setIsAnimationStarted(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleLaunchClick = () => {
    setIsLaunching(true);
    
    // Add subtle delay with sheen animation, then redirect
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 800);
  };
  
  return (
    <div className="min-h-screen bg-ceremonial-navy relative overflow-hidden">
      {/* Static Background Watermark */}
      <div className="absolute inset-0 opacity-[0.06] animate-subtle-float">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="public/sac-Preloader.png" 
            alt="SAC Watermark" 
            className="w-96 h-96 md:w-[600px] md:h-[600px] object-contain"
          />
        </div>
      </div>
      
      {/* Header with Logos */}
      <header className="relative z-10 flex justify-between items-center p-6 md:p-12">
        <div className={`transition-all duration-1000 ${isAnimationStarted ? 'animate-fade-up' : ''}`}>
          <img 
            src="public/vce-Preloader.png"
            alt="Vardhaman College of Engineering" 
            className="h-16 md:h-24 lg:h-32 object-contain"
          />
        </div>
        
        <div className={`transition-all duration-1000 delay-200 ${isAnimationStarted ? 'animate-fade-up' : ''}`}>
          <img 
            src="public/sac-Preloader.png" 
            alt="Student Affairs Cell" 
            className="h-16 md:h-24 lg:h-32 object-contain"
          />
        </div>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        {/* Main Title */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${isAnimationStarted ? 'animate-fade-up' : ''}`}>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-ceremonial-gold mb-6 leading-tight tracking-wide">
            Official Website Launch
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Student Affairs Cell
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light tracking-wide">
            Vardhaman College of Engineering
          </p>
        </div>
        
        {/* Launch Button */}
        <div className={`transition-all duration-1000 delay-1000 ${isAnimationStarted ? 'animate-fade-up' : ''}`}>
          <button
            onClick={handleLaunchClick}
            disabled={isLaunching}
            className={`btn-ceremonial-gold text-xl md:text-2xl lg:text-3xl px-16 py-6 md:px-20 md:py-8 rounded-xl font-semibold tracking-wide uppercase letter-spacing-wider disabled:opacity-75 ${isLaunching ? 'launching' : ''}`}
          >
            {isLaunching ? 'Launching...' : 'Launch Website'}
          </button>
        </div>
        
        {/* Subtitle */}
        <div className={`mt-16 transition-all duration-1000 delay-1200 ${isAnimationStarted ? 'animate-fade-up' : ''}`}>
          <p className="text-lg md:text-xl text-white/70 font-light tracking-wide">
            Empowering Student Excellence • Building Future Leaders
          </p>
        </div>
      </main>
      
      
      {/* Elegant Corner Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Top corners decoration */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-ceremonial-gold opacity-40"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-ceremonial-gold opacity-40"></div>
        
        {/* Bottom corners decoration */}
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-ceremonial-gold opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-ceremonial-gold opacity-40"></div>
      </div>
    </div>
  );
};

export default CeremonialLaunch;