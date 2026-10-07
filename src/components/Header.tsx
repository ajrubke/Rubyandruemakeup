import React, { useState } from 'react';
import { Instagram, ShoppingBag, Menu, X, Calendar } from 'lucide-react';
import { TikTokIcon, BowIcon } from './Icons';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
}

export function Header({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenBooking,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Shop', page: 'shop' },
    { label: 'Blog', page: 'blog' },
    { label: 'Site Map', page: 'sitemap' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F5]/95 backdrop-blur-md border-b border-[#EBE4DC] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark with signature bow and cursive accent */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none flex items-center gap-2.5"
          aria-label="Ruby & Rue Makeup Co. Home"
        >
          <BowIcon className="w-6 h-6 text-[#C68B85] group-hover:scale-110 transition-transform shrink-0" />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-widest text-[#2C1E1A] group-hover:text-[#8C5F4D] transition-colors uppercase leading-none">
              Ruby & Rue
            </span>
            <span className="font-script text-base text-[#C68B85] leading-none mt-0.5">
              makeup co.
            </span>
          </div>
        </button>

        {/* Zone 2: Clean nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`text-xs sm:text-sm tracking-wider uppercase transition-colors relative py-1 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-[#8C5F4D] font-semibold'
                    : 'text-[#6E5B51] hover:text-[#2C1E1A]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C68B85] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions + Socials & Bag */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Social icons hyperlinked to real social media websites */}
          <div className="hidden lg:flex items-center gap-3 pr-2 border-r border-[#E2D8CF] text-[#6E5A50]">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:text-[#6B1D2F] hover:bg-[#F0E6DF] rounded-full transition-colors"
              aria-label="Visit Ruby & Rue on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:text-[#6B1D2F] hover:bg-[#F0E6DF] rounded-full transition-colors"
              aria-label="Visit Ruby & Rue on TikTok"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Shopping Bag Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#4A3930] hover:text-[#6B1D2F] hover:bg-[#F2EAE4] rounded-full transition-colors cursor-pointer focus:outline-none"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#6B1D2F] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center tabular-nums shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 bg-[#6B1D2F] hover:bg-[#521321] text-[#FAF7F5] px-4 sm:px-5 py-2.5 rounded-none text-xs sm:text-sm font-medium tracking-wider uppercase transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Service</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4A3930] hover:text-[#6B1D2F] rounded-md transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EAE1D7] bg-[#FAF7F5] px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`text-left text-base tracking-wider uppercase py-2 border-b border-[#F0E6DF] transition-colors ${
                  currentPage === link.page
                    ? 'text-[#6B1D2F] font-semibold'
                    : 'text-[#4A3930] hover:text-[#6B1D2F]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4 text-[#5C4A42]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-[#6B1D2F]"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-[#6B1D2F]"
              >
                <TikTokIcon className="w-4 h-4" /> TikTok
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
