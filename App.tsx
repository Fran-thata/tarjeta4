import React from 'react';
import { Globe, Star, Linkedin, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './components/Icons';

export default function App() {
  return (
    <div className="relative min-h-[100dvh] w-full font-sans text-white bg-black selection:bg-orange-500/40 overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        {/* Static Background Image - Exactly as requested */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px] scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop')`, 
          }}
        />
        
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-between px-6 py-12">
        
        {/* Top Spacer */}
        <div className="flex-[0.2]" />

        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profile Image - Man with apron and tattoos */}
          <div className="relative mb-6 h-40 w-40 rounded-full bg-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden border border-white/5">
             <img 
               src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" 
               alt="Alejandro Lopez"
               className="h-full w-full object-cover object-top"
             />
          </div>

          {/* Text Content - Exact Match */}
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg mb-2">
            Álejandro Lopez
          </h1>
          
          <p className="text-xl font-normal text-gray-200 tracking-wide">
            Estilista Profesional
          </p>
        </div>

        {/* Buttons Section - Exact Neon Pill Style */}
        <div className="my-8 flex w-full max-w-[320px] flex-col gap-4">
          
          {/* WhatsApp Button - Only Icon */}
          <button className="group relative flex h-14 w-full items-center justify-center rounded-full border-2 border-orange-400 bg-black/50 text-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.4)] backdrop-blur-sm transition-transform active:scale-95">
             <WhatsAppIcon className="h-7 w-7 fill-current" />
          </button>

          {/* Website Button */}
          <button className="group relative flex h-14 w-full items-center justify-center gap-3 rounded-full border-2 border-orange-400 bg-black/50 text-white shadow-[0_0_15px_rgba(251,146,60,0.4)] backdrop-blur-sm transition-transform active:scale-95">
             <Globe className="h-6 w-6 text-orange-400" />
             <span className="text-lg font-medium tracking-wide">Visit Website</span>
          </button>

          {/* Reviews Button */}
          <button className="group relative flex h-14 w-full items-center justify-center gap-3 rounded-full border-2 border-orange-400 bg-black/50 text-white shadow-[0_0_15px_rgba(251,146,60,0.4)] backdrop-blur-sm transition-transform active:scale-95">
             <Star className="h-6 w-6 text-orange-400" />
             <span className="text-lg font-medium tracking-wide">Reviews</span>
          </button>

        </div>

        {/* Footer Socials */}
        <div className="mb-6 flex items-center gap-6">
          <a href="#" className="text-orange-400 transition-colors hover:text-orange-300">
            <Linkedin className="h-8 w-8" strokeWidth={1.5} />
          </a>
          <a href="#" className="text-orange-400 transition-colors hover:text-orange-300">
            <Instagram className="h-8 w-8" strokeWidth={1.5} />
          </a>
        </div>

      </div>
    </div>
  );
}