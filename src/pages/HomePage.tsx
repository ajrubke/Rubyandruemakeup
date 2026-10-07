import React from 'react';
import { ArrowRight, Sparkles, Check, Heart, Star, Calendar } from 'lucide-react';
import { BowIcon } from '../components/Icons';
import { IMAGES, SERVICES, PRODUCTS, TESTIMONIALS } from '../data/content';
import { Page, Product } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (serviceId?: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number, selectedShade?: string) => void;
}

export function HomePage({
  onNavigate,
  onOpenBooking,
  onSelectProduct,
  onAddToCart,
}: HomePageProps) {
  // Top 4 featured products from mockup: Lip Gloss, Blush, Mascara, Eyeshadow Palette
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 1. HERO SECTION (Aligned with Aaralyn's Mockup) */}
      <section className="pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F9F5F1] border border-[#EBE2DA] p-6 sm:p-10 lg:p-12 shadow-xs">
          
          {/* Left Column: Image of Model with Makeup Brush */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden border border-[#E5DAD0] shadow-md bg-[#EDE2D8]">
              <img
                src={IMAGES.hero}
                alt="Editorial close-up of model face having makeup applied with soft brush"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center filter saturate-[0.98] transition-transform duration-700 hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Hero Typography matching mockup */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C5F4D] font-medium block">
                Beauty + Confidence + You
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1E1A] tracking-wider uppercase leading-snug font-normal">
                Makeup That Feels Like You
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#6E5B51] font-sans font-light leading-relaxed max-w-lg">
              At Ruby & Rue, we believe makeup is more than just a look — it’s a form of self-expression. Whether you’re here for a fresh everyday glow or a full glam moment, we’re here to help you feel confident, radiant, and completely you. Founded and led by makeup artist Aaralyn, our mission is to enhance your natural beauty rather than alter who you are.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-[#C68B85] hover:bg-[#B37973] text-white px-8 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-medium transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
              >
                <BowIcon className="w-4 h-4 text-[#FDF7F5]" />
                <span>Book a Service</span>
              </button>
            </div>

            {/* Quiet trust notes */}
            <div className="pt-6 border-t border-[#E8DDD4] w-full flex flex-wrap justify-center lg:justify-start items-center gap-6 text-xs text-[#8A776D]">
              <div>
                <strong className="font-serif text-sm text-[#2C1E1A] block">Clean & Cruelty-Free</strong>
                <span>Formulated for sensitive skin</span>
              </div>
              <span className="text-[#C4A79D]">·</span>
              <div>
                <strong className="font-serif text-sm text-[#2C1E1A] block">Studio by Aaralyn</strong>
                <span>Bespoke personalized artistry</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. FEATURED PRODUCTS (Matching Aaralyn's Mockup) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#C68B85]">
            <BowIcon className="w-4 h-4 text-[#C68B85]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C5F4D] font-medium">
              Curated Collection
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider font-normal">
            Featured Products
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6458] font-light">
            Everyday beauty essentials handpicked by Aaralyn for quality, performance, and that effortless glow.
          </p>
        </div>

        {/* 4 Featured Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF7F5] border border-[#E8DDD4] p-4 sm:p-5 flex flex-col justify-between hover:border-[#C68B85] transition-all group text-center"
            >
              <div>
                {/* Visual Thumbnail with Real Product Image */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="w-full h-44 sm:h-52 bg-[#F2ECE6] border border-[#E8DDD4] overflow-hidden cursor-pointer relative mb-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 right-2 bg-white/90 text-[#8C5F4D] text-[9px] uppercase px-1.5 py-0.5 rounded-none font-medium border border-[#E5DAD0]">
                    {product.size}
                  </span>
                </div>

                <h3
                  onClick={() => onSelectProduct(product)}
                  className="font-serif text-sm sm:text-base text-[#2C1E1A] tracking-wider uppercase hover:text-[#C68B85] transition-colors cursor-pointer"
                >
                  {product.name}
                </h3>
                <span className="text-xs font-semibold text-[#8C5F4D] block mt-1 tabular-nums">
                  ${product.price}
                </span>
              </div>

              <div className="pt-4 mt-3 border-t border-[#F0E6DF] flex flex-col gap-2">
                <button
                  onClick={() =>
                    onAddToCart(
                      product,
                      1,
                      product.shades ? product.shades[0].name : undefined
                    )
                  }
                  className="w-full bg-[#C68B85] hover:bg-[#B37973] text-white py-2 text-[11px] uppercase tracking-wider font-medium cursor-pointer transition-colors shadow-xs"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs uppercase tracking-widest text-[#8C5F4D] hover:text-[#C68B85] font-medium inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Curated Essentials</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 3. SIGNATURE SERVICES OVERVIEW */}
      <section className="bg-[#F6EFEA] py-16 border-y border-[#E8DDD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="font-script text-2xl sm:text-3xl text-[#C68B85]">
              look good + feel good
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider font-normal">
              Personalized Studio Services
            </h2>
            <p className="text-xs sm:text-sm text-[#6E5B51] font-light leading-relaxed">
              Whether you are getting ready for a special event or simply want to treat yourself, Aaralyn offers tailored makeup experiences designed to enhance your natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-[#FAF7F5] border border-[#E8DDD4] p-6 flex flex-col justify-between hover:border-[#C68B85] transition-all text-center"
              >
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-[#2C1E1A] uppercase tracking-wider">
                    {service.name}
                  </h3>
                  <span className="font-serif text-xl text-[#8C5F4D] font-medium tabular-nums block">
                    ${service.price}{service.id === 'bridal-package' ? '+' : ''}
                  </span>
                  <p className="text-xs text-[#6E5B51] font-light leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0E6DF]">
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="w-full bg-[#C68B85] hover:bg-[#B37973] text-white py-2 text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <button
              onClick={() => onNavigate('services')}
              className="text-xs uppercase tracking-widest text-[#8C5F4D] hover:text-[#C68B85] font-medium inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Full Service Menu & Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. CLIENT PRAISE / TESTIMONIALS (FEATURING AARALYN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="font-script text-2xl sm:text-3xl text-[#C68B85]">Kind Words</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider font-normal">
            Reflections From Our Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF7F5] border border-[#E8DDD4] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-serif text-2xl text-[#C68B85] leading-none block">“</span>
                <p className="text-xs sm:text-sm text-[#523F36] italic leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DDD4]">
                <strong className="font-serif text-sm text-[#2C1E1A] block">
                  {t.clientName}
                </strong>
                <span className="text-xs text-[#8C5F4D] block font-medium">
                  {t.occasion}
                </span>
                <span className="text-[11px] text-[#8C766B] block">
                  {t.location} · {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NOTE FROM FOUNDER AARALYN (Matching Mockup) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 bg-[#FAF6F2] border border-[#EADBCE] p-8 sm:p-12">
        <div className="w-14 h-14 rounded-full bg-[#F2E5E1] border border-[#DECFC5] flex items-center justify-center mx-auto text-[#C68B85]">
          <BowIcon className="w-7 h-7" />
        </div>
        
        <span className="font-script text-3xl text-[#C68B85] block">
          A personal note
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A]">
          "Beauty is about feeling like the best version of yourself."
        </h3>

        <p className="text-sm text-[#6E5B51] font-light leading-relaxed max-w-xl mx-auto">
          I started Ruby & Rue because I've always believed that makeup has the power to boost confidence, celebrate your individuality, and bring out your natural glow. Whether you are stepping into the studio for wedding makeup, an everyday refresh, or a hands-on lesson, you are in caring hands.
        </p>

        <div className="pt-2">
          <span className="font-script text-3xl text-[#2C1E1A] block">
            – Aaralyn
          </span>
          <span className="text-xs text-[#8A776D] uppercase tracking-widest font-medium mt-1 block">
            Founder & Makeup Artist
          </span>
        </div>
      </section>

    </div>
  );
}
