import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, ArrowRight, Instagram } from 'lucide-react';
import { TikTokIcon, BowIcon } from '../components/Icons';
import { IMAGES } from '../data/content';
import { Page } from '../types';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: () => void;
}

export function AboutPage({ onNavigate, onOpenBooking }: AboutPageProps) {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 1. Header matching mockup */}
      <section className="pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1E1A] tracking-wider uppercase font-normal">
          About
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#C68B85] block">
          the story behind ruby & rue
        </span>
      </section>

      {/* 2. Main Story Split Section (Directly from Aaralyn's Mockup) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Written Story & Signature */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-5 text-base sm:text-lg text-[#5A473E] font-sans font-light leading-relaxed">
              <p>
                Ruby & Rue was created with a simple mission — to make beauty feel effortless, empowering, and personal. I started this brand because I've always believed that makeup has the power to boost confidence, bring out your unique features, and help you feel like the best version of yourself.
              </p>
              <p>
                I chose the name Ruby & Rue because it evokes warmth, classic romance, and playful sophistication. Rather than adhering to heavy theatrical trends or masking identities, my approach is centered entirely on skin-first radiance and enhancing who you naturally are.
              </p>
              <p>
                From carefully curated products to personalized makeup services, everything at Ruby & Rue is designed with you in mind. I'm so glad you're here, and I can't wait to be part of your beauty journey.
              </p>
            </div>

            {/* Aaralyn's Signature block from mockup */}
            <div className="pt-4 border-t border-[#E8DDD4]">
              <span className="font-script text-4xl sm:text-5xl text-[#2C1E1A] block">
                – Aaralyn
              </span>
              <span className="text-sm uppercase tracking-widest text-[#8C5F4D] font-medium block mt-1">
                Founder & Makeup Artist
              </span>
            </div>

            {/* In-depth details to support >250 words assignment requirement */}
            <div className="pt-6 space-y-4 border-t border-[#E8DDD4]">
              <h3 className="font-serif text-xl text-[#2C1E1A] uppercase tracking-wider">
                Our Core Principles: Beauty + Confidence + You
              </h3>
              <p className="text-sm text-[#6E5B51] font-light leading-relaxed">
                Whether applying makeup for a high-profile photoshoot, crafting a timeless wedding look, or teaching a beginner how to hold an angled cheek brush, my chair is an open, unhurried space. I listen carefully to how you feel in your own skin, study your undertones, and select weightless textures that move naturally with your expressions.
              </p>
            </div>

          </div>

          {/* Right Column: Two Stacked Photos Matching Aaralyn's Mockup */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Top Photo: Brushes in ceramic holder */}
            <div className="border border-[#E5DAD0] p-2 bg-white shadow-md">
              <img
                src={IMAGES.brushes}
                alt="Neat collection of makeup brushes in a ceramic holder on marble table"
                className="w-full h-64 sm:h-72 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <span className="text-[11px] text-[#8C766B] mt-2 block italic text-center">
                Studio brushes cleaned and sterilized before every appointment
              </span>
            </div>

            {/* Bottom Photo: Vanity mirror with lights and floral */}
            <div className="border border-[#E5DAD0] p-2 bg-white shadow-md">
              <img
                src={IMAGES.vanity}
                alt="Studio vanity table with glowing mirror and fresh roses"
                className="w-full h-64 sm:h-72 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <span className="text-[11px] text-[#8C766B] mt-2 block italic text-center">
                The private SoHo studio vanity suite curated by Aaralyn
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 3. The Clean Kit Standard */}
      <section className="bg-[#F6EFEA] py-16 border-y border-[#E8DDD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
            <span className="font-script text-3xl text-[#C68B85]">Clean & Gentle</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider font-normal">
              Aaralyn's Studio Kit Standards
            </h2>
            <p className="text-xs sm:text-sm text-[#6E5B51] font-light">
              Your skin health is sacred. Here is what you can always expect in my beauty chair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF7F5] border border-[#E8DDD4] p-6 space-y-2">
              <div className="w-9 h-9 rounded-full bg-[#F0D5D2] text-[#8C5F4D] flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#2C1E1A]">Sanitary Palettes Only</h3>
              <p className="text-xs text-[#6E5B51] font-light leading-relaxed">
                All creams, lipsticks, and liquids are decanted using stainless steel spatulas. No double-dipping, and all mascara wands are single-use.
              </p>
            </div>

            <div className="bg-[#FAF7F5] border border-[#E8DDD4] p-6 space-y-2">
              <div className="w-9 h-9 rounded-full bg-[#F0D5D2] text-[#8C5F4D] flex items-center justify-center mb-2">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#2C1E1A]">Cruelty-Free Formulas</h3>
              <p className="text-xs text-[#6E5B51] font-light leading-relaxed">
                Every product in our boutique and professional kit is certified 100% cruelty-free, hypoallergenic, and formulated without harsh synthetic parabens.
              </p>
            </div>

            <div className="bg-[#FAF7F5] border border-[#E8DDD4] p-6 space-y-2">
              <div className="w-9 h-9 rounded-full bg-[#F0D5D2] text-[#8C5F4D] flex items-center justify-center mb-2">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#2C1E1A]">Skincare-First Prep</h3>
              <p className="text-xs text-[#6E5B51] font-light leading-relaxed">
                We begin with gentle thermal mist, cryo ice globes, and hyaluronic hydration so your skin absorbs pigment with pure, weightless radiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Center-Aligned Call-to-Action Button Below Text (Requirement #5) */}
      <section className="bg-[#FAF7F5] border border-[#E8DDD4] max-w-4xl mx-auto p-10 sm:p-14 text-center space-y-5">
        <div className="flex items-center justify-center gap-2 text-[#C68B85]">
          <BowIcon className="w-6 h-6 text-[#C68B85]" />
          <span className="font-script text-3xl block">
            Begin Your Beauty Journey
          </span>
        </div>
        
        <h3 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider">
          Book an In-Studio Session with Aaralyn
        </h3>
        
        <p className="text-sm sm:text-base text-[#6E5B51] font-light leading-relaxed max-w-xl mx-auto">
          Whether you are preparing for your wedding day, planning an evening gala look, or wanting to learn a 10-minute everyday routine in a private one-on-one masterclass, Aaralyn's studio is your personal sanctuary.
        </p>

        {/* Center-aligned button directly below the descriptive text */}
        <div className="pt-3 flex flex-col items-center justify-center space-y-2">
          <button
            onClick={onOpenBooking}
            className="bg-[#C68B85] hover:bg-[#B37973] text-white px-10 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-semibold cursor-pointer transition-all shadow-md inline-flex items-center gap-2"
          >
            <BowIcon className="w-4 h-4 text-white" />
            <span>Book Now</span>
          </button>
          <span className="text-[11px] text-[#8C766B] font-light">
            Instant online confirmation · In-studio & on-location options available
          </span>
        </div>
      </section>

    </div>
  );
}
