import React, { useState } from 'react';
import { ShoppingBag, Star, Sparkles, Filter, Check, Eye, ShieldCheck, Heart } from 'lucide-react';
import { BowIcon } from '../components/Icons';
import { PRODUCTS, IMAGES } from '../data/content';
import { Page, Product } from '../types';

interface ShopPageProps {
  onNavigate: (page: Page) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number, selectedShade?: string) => void;
  onOpenBooking: () => void;
}

export function ShopPage({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onOpenBooking,
}: ShopPageProps) {
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const handleQuickAdd = (product: Product) => {
    const defaultShade = product.shades ? product.shades[0].name : undefined;
    onAddToCart(product, 1, defaultShade);
    setAddedNotice(product.name);
    setTimeout(() => {
      setAddedNotice(null);
    }, 2200);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 1. Header (Matching Aaralyn's Mockup) */}
      <section className="pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1E1A] tracking-wider uppercase font-normal">
          Shop
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#C68B85] block">
          favorite finds
        </span>
        <p className="text-sm sm:text-base text-[#6E5B51] font-light max-w-2xl mx-auto leading-relaxed pt-2">
          Explore my curated collection of makeup essentials — from everyday staples to beauty must-haves. Each product is handpicked for quality, performance, and that perfect, effortless finish.
        </p>

        {/* Reassurance bar */}
        <div className="pt-4 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs text-[#705A4E] border-b border-[#E8DDD4] pb-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C68B85]" /> 100% Cruelty-Free & Vegan
          </span>
          <span className="hidden sm:inline text-[#C4A79D]">·</span>
          <span>Academic Project Portfolio</span>
          <span className="hidden sm:inline text-[#C4A79D]">·</span>
          <span>Curated by Makeup Artist Aaralyn</span>
        </div>

        {/* Academic Project Notice Banner */}
        <div className="mt-4 bg-[#F5EBE6] border border-[#D9C2B8] p-3 text-xs text-[#6B5347] max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#8C5F4D] shrink-0" />
          <span>
            <strong>School Project Note:</strong> This boutique catalog is a creative portfolio display. Real transactions and purchasing are intentionally disabled.
          </span>
        </div>

        {/* Added notification banner */}
        {addedNotice && (
          <div className="mt-4 bg-[#F8EFEB] border border-[#C68B85] text-[#8C5F4D] px-4 py-2.5 text-xs flex items-center justify-center gap-2 animate-fadeIn max-w-md mx-auto">
            <Check className="w-4 h-4 text-[#C68B85]" />
            <span>Added <strong>{addedNotice}</strong> to your beauty bag!</span>
          </div>
        )}
      </section>

      {/* 2. 6 Products Grid (Matching Aaralyn's Mockup) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF7F5] border border-[#E8DDD4] p-5 sm:p-6 flex flex-col justify-between hover:border-[#C68B85] transition-all text-center group"
            >
              <div>
                {/* Product Thumbnail Box with Real Studio Image */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="w-full h-56 sm:h-64 bg-[#F2ECE6] border border-[#E8DDD4] overflow-hidden cursor-pointer relative mb-5"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-white/90 text-[#8C5F4D] text-[10px] uppercase px-2 py-0.5 rounded-none font-medium border border-[#E5DAD0]">
                    {product.size}
                  </span>

                  {/* Quick view button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-[#2C1E1A] text-[11px] px-2.5 py-1 flex items-center gap-1 border border-[#E2D5CC] shadow-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Eye className="w-3 h-3 text-[#C68B85]" /> Details
                  </button>
                </div>

                <div className="space-y-1.5">
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-serif text-base sm:text-lg text-[#2C1E1A] tracking-wider uppercase hover:text-[#C68B85] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <span className="font-serif text-lg text-[#8C5F4D] font-medium tabular-nums block">
                    ${product.price}
                  </span>
                  <p className="text-xs text-[#6E5B51] font-light leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Shade Swatch Dots */}
                  {product.shades && (
                    <div className="flex items-center justify-center gap-1.5 pt-2">
                      <span className="text-[10px] text-[#8A776D] mr-1">Shades:</span>
                      {product.shades.map((s) => (
                        <span
                          key={s.name}
                          className="w-3 h-3 rounded-full border border-[#CAB6AD]"
                          style={{ backgroundColor: s.hex }}
                          title={s.name}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action row with ADD TO CART button matching mockup */}
              <div className="pt-5 mt-5 border-t border-[#F0E6DF]">
                <button
                  onClick={() => handleQuickAdd(product)}
                  className="w-full bg-[#C68B85] hover:bg-[#B37973] text-white py-2.5 text-xs uppercase tracking-widest font-semibold cursor-pointer transition-colors shadow-xs"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Formulation Ethos by Aaralyn (>250 Words Requirement) */}
      <section className="bg-[#F5EFEA] py-16 border-y border-[#E8DDD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="border border-[#E8DDD4] p-3 bg-white shadow-md">
                <img
                  src={IMAGES.shop}
                  alt="Curated beauty products formulated for Ruby & Rue Makeup Co."
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="font-script text-3xl text-[#C68B85] block">
                The Ruby & Rue Standard
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider font-normal">
                Why I Curated This Collection
              </h2>
              <p className="text-sm text-[#5C4A42] leading-relaxed font-light">
                After years of applying makeup on diverse skin types and undertones, I noticed clients often struggled to find everyday products that deliver professional results without requiring 20 steps. I created and handpicked this collection so you have only the highest-performing essentials in your vanity.
              </p>
              <p className="text-sm text-[#5C4A42] leading-relaxed font-light">
                Every formula is enriched with gentle skincare actives like squalane, cold-pressed jojoba oil, hyaluronic acid, and botanical extracts. They melt effortlessly into bare skin or over serum foundation, ensuring your skin can breathe and glow all day long.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#C68B85] hover:bg-[#B37973] text-white px-6 py-3 text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors inline-flex items-center gap-2"
                >
                  <BowIcon className="w-3.5 h-3.5" />
                  <span>Book a Lesson to Learn How to Apply These</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
