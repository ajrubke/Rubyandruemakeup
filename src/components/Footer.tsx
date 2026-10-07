import React, { useState } from 'react';
import { Instagram, Mail, MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import { TikTokIcon, BowIcon } from './Icons';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: () => void;
}

export function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#261E1A] text-[#EFE7E1] pt-16 pb-12 border-t border-[#3D302A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner call to action */}
        <div className="bg-[#332822] border border-[#47372F] p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <span className="font-script text-2xl text-[#E3B8BA] block mb-1">
              Your Most Radiant Self
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F5] font-normal leading-snug">
              Ready to celebrate your natural beauty?
            </h3>
            <p className="text-sm text-[#C8B8AE] mt-2 font-sans font-light">
              Appointments for weddings, private lessons, and bespoke event artistry are currently open for booking.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-[#8A2B3D] hover:bg-[#A3384D] text-[#FAF7F5] px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              Book Now
            </button>
            <button
              onClick={() => handleLinkClick('services')}
              className="border border-[#7D6659] hover:border-[#E3B8BA] text-[#FAF7F5] px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap"
            >
              View Service Menu
            </button>
          </div>
        </div>

        {/* 4-column footer body */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Col 1: Brand & Philosophy (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <BowIcon className="w-5 h-5 text-[#E3B8BA]" />
              <span className="font-serif text-2xl tracking-wide text-[#FAF7F5]">
                Ruby & Rue Makeup Co.
              </span>
            </div>
            <p className="text-sm text-[#C8B8AE] leading-relaxed font-light max-w-sm">
              An editorial beauty studio dedicated to enhancing natural features rather than changing who you are. We believe in skin that breathes, timeless warmth, and quiet confidence.
            </p>
            
            {/* Social media connections */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#9E8A7F] block mb-3 font-medium">
                Follow Our Studio
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#342721] hover:bg-[#8A2B3D] text-[#EFE7E1] hover:text-white flex items-center justify-center transition-colors border border-[#4A3B33]"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#342721] hover:bg-[#8A2B3D] text-[#EFE7E1] hover:text-white flex items-center justify-center transition-colors border border-[#4A3B33]"
                  aria-label="TikTok Profile"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@rubyandruemakeup.com"
                  className="w-9 h-9 rounded-full bg-[#342721] hover:bg-[#8A2B3D] text-[#EFE7E1] hover:text-white flex items-center justify-center transition-colors border border-[#4A3B33]"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E3B8BA] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C8B8AE]">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-[#FAF7F5] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-[#FAF7F5] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-[#FAF7F5] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('shop')}
                  className="hover:text-[#FAF7F5] transition-colors cursor-pointer"
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('blog')}
                  className="hover:text-[#FAF7F5] transition-colors cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('sitemap')}
                  className="hover:text-[#FAF7F5] transition-colors cursor-pointer"
                >
                  Site Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Signature Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E3B8BA] font-semibold">
              Artistry Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C8B8AE]">
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-[#FAF7F5] transition-colors cursor-pointer text-left"
                >
                  Everyday Glam Artistry
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-[#FAF7F5] transition-colors cursor-pointer text-left"
                >
                  Special Event & Gala Makeup
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-[#FAF7F5] transition-colors cursor-pointer text-left"
                >
                  Bridal Atelier & Preview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-[#FAF7F5] transition-colors cursor-pointer text-left"
                >
                  1-on-1 Makeup Masterclass
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#E3B8BA] hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-medium pt-1"
                >
                  Book a Service <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio & Journal Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E3B8BA] font-semibold">
              Boutique Studio
            </h4>
            <div className="text-xs text-[#C8B8AE] space-y-2 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E3B8BA] shrink-0 mt-0.5" />
                <span>428 Mercer Street, Suite 4B<br />SoHo, New York, NY 10013</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#E3B8BA] shrink-0 mt-0.5" />
                <span>Tuesday – Saturday<br />9:00 AM – 6:30 PM (By Appt)</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#9E8A7F] block mb-2 font-medium">
                The Beauty Journal
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#A8D5BA] bg-[#2E3B33] p-2 rounded">
                  <Check className="w-3.5 h-3.5" /> You are subscribed to studio notes.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full bg-[#352A24] border border-[#4C3B32] text-xs px-3 py-2 text-[#FAF7F5] placeholder-[#8A776D] focus:outline-none focus:border-[#E3B8BA]"
                  />
                  <button
                    type="submit"
                    className="bg-[#8A2B3D] hover:bg-[#A3384D] text-white px-3 py-2 text-xs uppercase font-medium cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright row matching mockup */}
        <div className="pt-8 border-t border-[#3D302A] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E8A7F] gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-serif text-sm tracking-wider text-[#FAF7F5]">
              Site created and maintained by <strong className="text-[#E3B8BA] font-medium">Aaralyn Rubke</strong>
            </p>
            <p className="text-[11px] text-[#A6948B]">
              © {new Date().getFullYear()} Ruby & Rue Makeup Co. Beauty + Confidence + You.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handleLinkClick('sitemap')} className="hover:text-[#FAF7F5] transition-colors cursor-pointer">
              Site Map
            </button>
            <span>·</span>
            <span>Clean & Cruelty-Free Artistry</span>
            <span>·</span>
            <span>Studio by Aaralyn Rubke</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
