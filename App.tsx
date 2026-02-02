import React from 'react';
import { Globe, Star, Linkedin, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './components/Icons';

export default function App() {
  return (
    <div className="relative min-h-[100dvh] w-full font-sans text-white bg-black selection:bg-orange-500/40 overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        {/* Background Image - Brick wall + Warm Barber Shop Lights aesthetic */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px] scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')`, 
          }}
        />
        
        {/* Dark Overlay - Uniform dimming for text contrast, but lighter to see background */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Gradient - Only dark at the bottom, transparent at the top to remove the black header effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-between px-6 py-12">
        
        {/* Top Spacer */}
        <div className="flex-[0.2]" />

        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profile Image - Man with apron and tattoos */}
          <div className="relative mb-6 h-40 w-40 rounded-full bg-gray-900 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden border border-white/10">
             <img 
               src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" 
               alt="Alejandro Lopez"
               className="h-full w-full object-cover object-top"
             />
          </div>

          {/* Text Content */}
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-xl mb-2">
            Álejandro Lopez
          </h1>
          
          <p className="text-xl font-normal text-gray-300 tracking-wide drop-shadow-md">
            Estilista Profesional
          </p>
        </div>

        {/* Buttons Section - Exact Neon Pill Style */}
        <div className="my-8 flex w-full max-w-[320px] flex-col gap-4">
          
          {/* WhatsApp Button */}
          <button className="group relative flex h-14 w-full items-center justify-center rounded-full border-2 border-orange-400 bg-black/60 text-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.3)] backdrop-blur-md transition-all active:scale-95 hover:shadow-[0_0_25px_rgba(251,146,60,0.5)]">
             <WhatsAppIcon className="h-7 w-7 fill-current" />
          </button>

          {/* Website Button */}
          <button className="group relative flex h-14 w-full items-center justify-center gap-3 rounded-full border-2 border-orange-400 bg-black/60 text-white shadow-[0_0_15px_rgba(251,146,60,0.3)] backdrop-blur-md transition-all active:scale-95 hover:shadow-[0_0_25px_rgba(251,146,60,0.5)]">
             <Globe className="h-6 w-6 text-orange-400" />
             <span className="text-lg font-medium tracking-wide">Visit Website</span>
          </button>

          {/* Reviews Button */}
          <button className="group relative flex h-14 w-full items-center justify-center gap-3 rounded-full border-2 border-orange-400 bg-black/60 text-white shadow-[0_0_15px_rgba(251,146,60,0.3)] backdrop-blur-md transition-all active:scale-95 hover:shadow-[0_0_25px_rgba(251,146,60,0.5)]">
             <Star className="h-6 w-6 text-orange-400" />
             <span className="text-lg font-medium tracking-wide">Reviews</span>
          </button>

        </div>

        {/* Footer Socials */}
        <div className="mb-6 flex items-center gap-6">
          <a href="#" className="text-orange-400 transition-colors hover:text-orange-300 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]">
            <Linkedin className="h-8 w-8" strokeWidth={1.5} />
          </a>
          <a href="#" className="text-orange-400 transition-colors hover:text-orange-300 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]">
            <Instagram className="h-8 w-8" strokeWidth={1.5} />
          </a>
        </div>

      </div>
    </div>
  );
}