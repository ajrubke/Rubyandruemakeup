import React, { useState } from 'react';
import { X, Sparkles, Check, Heart, ShieldCheck } from 'lucide-react';
import { BowIcon } from './Icons';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedShade?: string) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [selectedShade, setSelectedShade] = useState<string>(
    product?.shades ? product.shades[0].name : ''
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedShade || undefined);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-[#FAF7F5] w-full max-w-2xl border border-[#E5DAD2] shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#6E5A50] hover:text-[#2F211A] bg-white/80 hover:bg-white rounded-full transition-colors border border-[#E2D5CC]"
          aria-label="Close product details"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Visual Side */}
          <div className="bg-[#F4ECE7] p-8 flex flex-col justify-between items-center text-center border-b md:border-b-0 md:border-r border-[#E8DDD4]">
            <div className="w-full flex justify-between items-center text-xs text-[#8A776D] font-medium uppercase tracking-wider">
              <span>{product.category}</span>
              <span>{product.size}</span>
            </div>

            <div className="my-6 space-y-3 w-full">
              {product.image ? (
                <div className="w-full h-56 bg-white border border-[#E5DAD2] overflow-hidden shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-[#EBDAD4] border-2 border-[#D9C4BD] flex items-center justify-center mx-auto shadow-inner text-[#822B3E]">
                  <BowIcon className="w-12 h-12 text-[#822B3E]" />
                </div>
              )}
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#822B3E]">
                <BowIcon className="w-3.5 h-3.5 text-[#822B3E]" />
                <span className="font-serif text-lg text-[#3A2A22] italic">
                  Ruby & Rue Essentials
                </span>
              </div>
              <div className="flex items-center justify-center gap-1 text-xs text-[#822B3E]">
                <span>★ ★ ★ ★ ★</span>
                <span className="text-[#6E5B51] text-[11px] ml-1">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Cruelty-free badge */}
            <div className="text-[11px] text-[#806B60] flex items-center gap-1.5 bg-[#FAF7F5] px-3 py-1.5 border border-[#E6D9D0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#822B3E]" />
              <span>Clean · Cruelty-Free · Hypoallergenic</span>
            </div>
          </div>

          {/* Details & Form Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#822B3E] block mb-1">
                  Studio Formulation
                </span>
                <h3 className="font-serif text-2xl text-[#2F211A] leading-tight">
                  {product.name}
                </h3>
                <span className="font-serif text-xl text-[#822B3E] font-medium block mt-1 tabular-nums">
                  ${product.price}
                </span>
              </div>

              <p className="text-xs text-[#5C4A42] leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Shade Selector if available */}
              {product.shades && product.shades.length > 0 && (
                <div className="pt-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E5B51] mb-2">
                    Select Shade: <span className="font-normal text-[#2F211A]">{selectedShade}</span>
                  </label>
                  <div className="flex items-center gap-2.5">
                    {product.shades.map((shade) => (
                      <button
                        key={shade.name}
                        type="button"
                        onClick={() => setSelectedShade(shade.name)}
                        className={`w-7 h-7 rounded-full transition-all flex items-center justify-center cursor-pointer border ${
                          selectedShade === shade.name
                            ? 'ring-2 ring-[#822B3E] ring-offset-2 scale-110 border-white'
                            : 'border-[#CAB6AD] opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: shade.hex }}
                        title={shade.name}
                      >
                        {selectedShade === shade.name && (
                          <Check className="w-3.5 h-3.5 text-white drop-shadow" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Artist Tip */}
              <div className="bg-[#F8EFEB] p-3.5 border-l-2 border-[#822B3E] text-xs text-[#523F36] space-y-1">
                <span className="font-serif italic font-medium text-[#822B3E] block">
                  Studio Artistry Tip
                </span>
                <p className="text-[11px] leading-relaxed italic text-[#6B554B]">
                  "{product.artistTip}"
                </p>
              </div>

              {/* Ingredients toggle/preview */}
              <div className="text-[11px] text-[#7A675D]">
                <strong className="text-[#3E2E25]">Formulated with:</strong> {product.ingredients}
              </div>

              {/* School project notice */}
              <div className="bg-[#FAF3EF] p-2.5 border border-[#E8DDD4] text-[11px] text-[#70594D]">
                <span className="font-semibold text-[#822B3E]">Student Project Notice:</span> Catalog display only. Purchasing is disabled for academic review.
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#E8DDD4] flex items-center gap-3">
              <div className="flex items-center border border-[#E5DAD2] bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2.5 py-2 text-xs text-[#5C4A42] hover:bg-[#F0E6DF]"
                >
                  -
                </button>
                <span className="px-3 text-xs tabular-nums font-medium text-[#2F211A]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2.5 py-2 text-xs text-[#5C4A42] hover:bg-[#F0E6DF]"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 bg-[#822B3E] hover:bg-[#681E2E] text-white py-3 text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Added to Bag
                  </>
                ) : (
                  <span>Add to Bag · ${(product.price * quantity).toFixed(2)}</span>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
