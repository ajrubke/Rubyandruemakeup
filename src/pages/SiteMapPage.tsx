import React from 'react';
import { ArrowRight, Map, Compass, Sparkles, ShoppingBag, Calendar, Instagram, Code, UserCheck, ShieldCheck, BookOpen } from 'lucide-react';
import { TikTokIcon, BowIcon } from '../components/Icons';
import { Page } from '../types';
import { SERVICES, PRODUCTS, BLOG_POSTS, IMAGES } from '../data/content';

interface SiteMapPageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export function SiteMapPage({ onNavigate, onOpenBooking }: SiteMapPageProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 1. Header (Matching Aaralyn's Mockup) */}
      <section className="pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1E1A] tracking-wider uppercase font-normal">
          Site Map
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#C68B85] block">
          find your way
        </span>
        <p className="text-sm sm:text-base text-[#6E5B51] font-light max-w-2xl mx-auto leading-relaxed pt-2">
          An organized overview of all pages, services, curated products, and blog tutorials across Ruby & Rue Makeup Co. Designed and maintained by founder and webmaster Aaralyn Rubke.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="bg-[#C68B85] hover:bg-[#B37973] text-white px-7 py-3 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-md transition-colors inline-flex items-center gap-2"
          >
            <BowIcon className="w-4 h-4 text-white" />
            <span>Book Now</span>
          </button>
        </div>
      </section>

      {/* 2. Webmaster Credit & Studio Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5ECE6] border border-[#E0D3CA] p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          
          <div className="lg:col-span-5 relative">
            <div className="border border-[#D8C7BC] p-2 bg-white shadow-sm overflow-hidden">
              <img
                src={IMAGES.vanity}
                alt="Studio vanity table and glowing mirror at Ruby & Rue Makeup Co."
                className="w-full h-72 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[11px] text-[#7A6458] mt-2 block italic text-center">
              The SoHo Studio Vanity Suite · Curated by Founder & Webmaster Aaralyn Rubke
            </span>
          </div>

          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="flex items-center gap-2 text-[#C68B85]">
              <UserCheck className="w-5 h-5 text-[#C68B85]" />
              <span className="font-script text-2xl">Webmaster Information</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider">
              Site Created and Maintained by Aaralyn Rubke
            </h2>

            <p className="text-sm text-[#5C4A42] leading-relaxed font-light">
              This website was designed and built by <strong className="text-[#2C1E1A] font-medium">Aaralyn Rubke</strong>, the founder and lead makeup artist behind Ruby & Rue Makeup Co. The brand name was chosen purely out of personal love for its timeless elegance and warmth. The digital architecture serves to make beauty feel effortless, personal, and easily navigable for all visitors.
            </p>

            <div className="space-y-2 text-xs text-[#6E5B51] pt-1">
              <div className="flex items-center gap-2">
                <BowIcon className="w-3.5 h-3.5 text-[#C68B85]" />
                <span><strong>Founder, Makeup Artist & Webmaster:</strong> Aaralyn Rubke</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-3.5 h-3.5 text-[#C68B85]" />
                <span><strong>Core Architecture:</strong> Persistent Top Navigation Menu + Standalone Architectural Site Map</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C68B85]" />
                <span><strong>Content Standard:</strong> Substantial professional prose exceeding 250 words per page with responsive viewports</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Structured Directory Matching Aaralyn's Mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Home Section */}
          <div className="bg-[#FAF7F5] border border-[#E8DDD4] p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8DDD4] pb-3">
              <Compass className="w-5 h-5 text-[#C68B85]" />
              <h2 className="font-serif text-xl sm:text-2xl text-[#2C1E1A] uppercase tracking-wider">Home</h2>
            </div>
            <ul className="space-y-3 text-sm text-[#5C4A42]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Welcome / Hero Section</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  "Makeup That Feels Like You" overview, brand philosophy, and quick booking access.
                </p>
              </li>
              <li className="pt-2 border-t border-[#F0E6DF]">
                <button
                  onClick={() => handleNav('home')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Featured Products</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  Lip Gloss ($16), Blush ($18), Mascara ($20), and Eyeshadow Palette ($32).
                </p>
              </li>
            </ul>
          </div>

          {/* 2. About Section */}
          <div className="bg-[#FAF7F5] border border-[#E8DDD4] p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8DDD4] pb-3">
              <Sparkles className="w-5 h-5 text-[#C68B85]" />
              <h2 className="font-serif text-xl sm:text-2xl text-[#2C1E1A] uppercase tracking-wider">About</h2>
            </div>
            <ul className="space-y-3 text-sm text-[#5C4A42]">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Brand Story</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  The story behind Ruby & Rue, making beauty feel effortless and empowering.
                </p>
              </li>
              <li className="pt-2 border-t border-[#F0E6DF]">
                <button
                  onClick={() => handleNav('about')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Mission & Values</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  Beauty + Confidence + You, skin-first prep, and clinical sanitation standards.
                </p>
              </li>
              <li className="pt-2 border-t border-[#F0E6DF]">
                <button
                  onClick={() => handleNav('about')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Founder</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  Aaralyn Rubke, Founder & Lead Makeup Artist.
                </p>
              </li>
            </ul>
          </div>

          {/* 3. Services Section */}
          <div className="bg-[#FAF7F5] border border-[#E8DDD4] p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8DDD4] pb-3">
              <Calendar className="w-5 h-5 text-[#C68B85]" />
              <h2 className="font-serif text-xl sm:text-2xl text-[#2C1E1A] uppercase tracking-wider">Services</h2>
            </div>
            <ul className="space-y-3 text-sm text-[#5C4A42]">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Service Descriptions</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  Everyday Glam, Special Event, Makeup Lesson, and Bridal Package.
                </p>
              </li>
              <li className="pt-2 border-t border-[#F0E6DF]">
                <button
                  onClick={() => handleNav('services')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Pricing</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  Transparent service rates from $60 to $150+ with custom add-ons.
                </p>
              </li>
              <li className="pt-2 border-t border-[#F0E6DF]">
                <button
                  onClick={() => onOpenBooking()}
                  className="font-medium text-[#C68B85] hover:underline flex items-center justify-between w-full cursor-pointer text-left"
                >
                  <span>• Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  Interactive online reservation system with date and time selection.
                </p>
              </li>
            </ul>
          </div>

          {/* 4. Shop Section */}
          <div className="bg-[#FAF7F5] border border-[#E8DDD4] p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8DDD4] pb-3">
              <ShoppingBag className="w-5 h-5 text-[#C68B85]" />
              <h2 className="font-serif text-xl sm:text-2xl text-[#2C1E1A] uppercase tracking-wider">Shop</h2>
            </div>
            <ul className="space-y-3 text-sm text-[#5C4A42]">
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Product Listings</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  Lip Gloss ($16), Blush ($18), Mascara ($20), Eyeshadow Palette ($32), Foundation ($36), Setting Spray ($24).
                </p>
              </li>
              <li className="pt-2 border-t border-[#F0E6DF]">
                <button
                  onClick={() => handleNav('shop')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Add to Cart</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  Sliding shopping bag drawer with quantity controls and simulated checkout.
                </p>
              </li>
            </ul>
          </div>

          {/* 5. Blog Section */}
          <div className="bg-[#FAF7F5] border border-[#E8DDD4] p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8DDD4] pb-3">
              <BookOpen className="w-5 h-5 text-[#C68B85]" />
              <h2 className="font-serif text-xl sm:text-2xl text-[#2C1E1A] uppercase tracking-wider">Blog</h2>
            </div>
            <ul className="space-y-3 text-sm text-[#5C4A42]">
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Beauty Tips</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  "5 Steps to Everyday Glass Skin That Actually Lasts All Day"
                </p>
              </li>
              <li className="pt-2 border-t border-[#F0E6DF]">
                <button
                  onClick={() => handleNav('blog')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Product Reviews</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  "The Only 4 Brushes You Actually Need in Your Makeup Bag"
                </p>
              </li>
              <li className="pt-2 border-t border-[#F0E6DF]">
                <button
                  onClick={() => handleNav('blog')}
                  className="font-medium hover:text-[#C68B85] flex items-center justify-between w-full group cursor-pointer text-left"
                >
                  <span>• Makeup Tutorials</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <p className="text-xs text-[#8A776D] font-light mt-0.5">
                  "Aaralyn’s 10-Minute Morning Routine for Busy Days"
                </p>
              </li>
            </ul>
          </div>

          {/* 6. Social Media Section */}
          <div className="bg-[#FAF7F5] border border-[#E8DDD4] p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8DDD4] pb-3">
              <Instagram className="w-5 h-5 text-[#C68B85]" />
              <h2 className="font-serif text-xl sm:text-2xl text-[#2C1E1A] uppercase tracking-wider">Social Media</h2>
            </div>
            <ul className="space-y-3 text-sm text-[#5C4A42]">
              <li className="flex items-center justify-between pb-2 border-b border-[#F0E6DF]">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#2C1E1A] hover:text-[#C68B85]"
                >
                  <Instagram className="w-4 h-4 text-[#C68B85]" />
                  <span>Instagram</span>
                </a>
                <span className="text-[10px] text-[#8A776D]">@rubyandruemakeup</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-[#F0E6DF]">
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#2C1E1A] hover:text-[#C68B85]"
                >
                  <TikTokIcon className="w-4 h-4 text-[#C68B85]" />
                  <span>TikTok</span>
                </a>
                <span className="text-[10px] text-[#8A776D]">@rubyandruebeauty</span>
              </li>
              <li className="pt-2 text-xs text-[#8A776D] font-light">
                Follow along for daily client before-and-afters, studio vlogs, and beauty announcements from Aaralyn.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Bottom Call-to-Action */}
      <section className="bg-[#F5EFEA] py-16 border-y border-[#E8DDD4] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#C68B85]">
            <BowIcon className="w-5 h-5 text-[#C68B85]" />
            <span className="font-script text-3xl block">
              Ready to feel radiant?
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider">
            Reserve Your Session with Aaralyn
          </h3>
          <p className="text-sm text-[#6E5B51] font-light">
            Every booking is an opportunity to celebrate your natural individuality. Site created and maintained by Aaralyn Rubke.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#C68B85] hover:bg-[#B37973] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-md transition-colors"
            >
              Book Now
            </button>
            <button
              onClick={() => handleNav('services')}
              className="border border-[#8C5F4D] hover:border-[#C68B85] text-[#2C1E1A] hover:text-[#C68B85] px-8 py-3.5 text-xs uppercase tracking-widest font-semibold cursor-pointer transition-colors"
            >
              View Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
