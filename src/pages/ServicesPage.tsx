import React, { useState } from 'react';
import { Clock, Calendar, Check, Sparkles, ChevronDown, ChevronUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { BowIcon } from '../components/Icons';
import { SERVICES, FAQS, IMAGES } from '../data/content';
import { Page, Service } from '../types';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export function ServicesPage({ onNavigate, onOpenBooking }: ServicesPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Mapping images to the 4 services matching Aaralyn's visual layout
  const serviceImages: Record<string, string> = {
    'everyday-glam': IMAGES.hero,
    'special-event': IMAGES.hair,
    'makeup-lesson': IMAGES.eye,
    'bridal-package': IMAGES.bridal,
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 1. Header (Matching Aaralyn's Mockup) */}
      <section className="pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1E1A] tracking-wider uppercase font-normal">
          Services
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#C68B85] block">
          look good  +  feel good
        </span>
        <p className="text-sm sm:text-base text-[#6E5B51] font-light max-w-2xl mx-auto leading-relaxed pt-2">
          Whether you’re getting ready for a special event or just want to treat yourself, I offer a variety of makeup services tailored to your style and needs. Each service is designed to enhance your natural beauty and leave you feeling confident.
        </p>
      </section>

      {/* 2. 4 Service Cards Grid (Matching Aaralyn's Mockup) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#FAF7F5] border border-[#E8DDD4] p-4 sm:p-5 flex flex-col justify-between hover:border-[#C68B85] transition-all text-center group"
            >
              <div>
                {/* Photo matching card layout */}
                <div className="w-full h-56 bg-[#F2ECE6] border border-[#E8DDD4] overflow-hidden mb-4 relative">
                  <img
                    src={serviceImages[service.id] || IMAGES.hero}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-base sm:text-lg text-[#2C1E1A] uppercase tracking-wider font-medium">
                    {service.name}
                  </h3>
                  <span className="font-serif text-xl text-[#8C5F4D] font-semibold tabular-nums block">
                    ${service.price}{service.id === 'bridal-package' ? '+' : ''}
                  </span>
                  <p className="text-xs text-[#6E5B51] font-light leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-4 mt-4 border-t border-[#F0E6DF]">
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="w-full bg-[#C68B85] hover:bg-[#B37973] text-white py-2 text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Center-Aligned Calling-for-Action Button from Mockup */}
        <div className="text-center pt-10">
          <button
            onClick={() => onOpenBooking()}
            className="bg-[#C68B85] hover:bg-[#B37973] text-white px-10 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-semibold cursor-pointer shadow-md transition-all inline-flex items-center gap-2"
          >
            <BowIcon className="w-4 h-4 text-white" />
            <span>Book Now</span>
          </button>
        </div>
      </section>

      {/* 3. In-Depth Service Breakdown & Inclusions (>250 Words Requirement) */}
      <section className="bg-[#F6EFEA] py-16 border-y border-[#E8DDD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-script text-3xl text-[#C68B85]">What’s Included</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider">
              The Ruby & Rue Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#6E5B51] font-light">
              Every appointment with Aaralyn is a private, pampering beauty ritual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((s) => (
              <div key={`detail-${s.id}`} className="bg-[#FAF7F5] border border-[#E8DDD4] p-6 sm:p-8 space-y-4">
                <div className="flex justify-between items-baseline border-b border-[#E8DDD4] pb-3">
                  <div>
                    <h4 className="font-serif text-xl text-[#2C1E1A]">{s.name}</h4>
                    <span className="text-xs text-[#8A776D] flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5" /> {s.durationMinutes} Minutes with Aaralyn
                    </span>
                  </div>
                  <span className="font-serif text-xl text-[#8C5F4D] font-semibold tabular-nums">
                    ${s.price}{s.id === 'bridal-package' ? '+' : ''}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed font-light">
                  {s.description}
                </p>

                <div className="space-y-1.5 text-xs text-[#6E5B51]">
                  <strong className="text-[#2C1E1A] block uppercase tracking-wider text-[11px]">
                    Includes in Your Session:
                  </strong>
                  <ul className="grid grid-cols-1 gap-1 text-[11px]">
                    {s.includes.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C68B85] shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Preparation & FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="font-script text-3xl text-[#C68B85]">Questions & Answers</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6458] font-light">
            Everything you need to know before sitting in Aaralyn’s chair.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-[#FAF7F5] border border-[#E8DDD4] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-[#2C1E1A] font-serif text-base sm:text-lg cursor-pointer hover:bg-[#F7EFEA]"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#C68B85] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#8A776D] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#5C4A42] font-light leading-relaxed border-t border-[#F0E6DF]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-6">
          <button
            onClick={() => onOpenBooking()}
            className="bg-[#C68B85] hover:bg-[#B37973] text-white px-8 py-3 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-sm transition-colors inline-flex items-center gap-2"
          >
            <BowIcon className="w-4 h-4 text-white" />
            <span>Book a Service</span>
          </button>
        </div>
      </section>

    </div>
  );
}
