import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { BowIcon } from './Icons';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, selectedShade?: string) => void;
  onRemoveItem: (productId: string, selectedShade?: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Checkout form fields
  const [custName, setCustName] = useState('');
  const [custEmail, setCustEmail] = useState('');
  const [custAddress, setCustAddress] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 75;
  const shippingCost = subtotal >= freeShippingThreshold || items.length === 0 ? 0 : 8;
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = subtotal - discountAmount + shippingCost;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'GLOW15' || promoCode.trim().toUpperCase() === 'WELCOME10') {
      const discount = promoCode.trim().toUpperCase() === 'GLOW15' ? 15 : 10;
      setDiscountPercent(discount);
      setPromoMessage(`Applied ${discount}% discount!`);
    } else {
      setPromoMessage('Invalid code. Try GLOW15');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `RR-SHOP-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setOrderComplete(true);
    setIsCheckingOut(false);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#FAF7F5] h-full shadow-2xl flex flex-col border-l border-[#E5DAD2]">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E8DDD4] flex items-center justify-between bg-[#FAF7F5]">
          <div className="flex items-center gap-2">
            <BowIcon className="w-5 h-5 text-[#822B3E]" />
            <h2 className="font-serif text-2xl text-[#2F211A] font-medium">Your Beauty Bag</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7A6458] hover:text-[#2F211A] rounded-full hover:bg-[#EFEAE5] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free shipping progress */}
        {items.length > 0 && (
          <div className="bg-[#F4EBE6] px-6 py-3 border-b border-[#E8DDD4] text-xs text-[#5C463C]">
            {subtotal >= freeShippingThreshold ? (
              <span className="font-medium text-[#822B3E] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> You have unlocked complimentary standard shipping!
              </span>
            ) : (
              <div>
                <span>Add <strong className="text-[#822B3E]">${amountToFreeShipping.toFixed(2)}</strong> more to receive free shipping</span>
                <div className="w-full bg-[#E5D7CE] h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className="bg-[#822B3E] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Body content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderComplete ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-[#F5E6E8] text-[#822B3E] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#2F211A]">Demonstration Complete!</h3>
              <p className="text-xs text-[#822B3E] font-semibold uppercase tracking-wider">
                Sample Order #{orderId} (Demonstration Only)
              </p>
              <div className="bg-[#FAF3EF] p-3 text-xs text-[#6E5B51] border border-[#EADCD0] max-w-sm mx-auto space-y-1">
                <p className="font-semibold text-[#822B3E]">Student Project Notice</p>
                <p>
                  No real payment was charged and no items will be shipped. This e-commerce interface is built exclusively as an interactive demonstration for Aaralyn's web design course project.
                </p>
              </div>
              <p className="text-xs text-[#6E5B51] max-w-xs mx-auto">
                Thank you for reviewing the product showcase, {custName || 'guest reviewer'}!
              </p>
              <button
                onClick={() => {
                  setOrderComplete(false);
                  onClose();
                }}
                className="mt-4 bg-[#822B3E] text-white px-6 py-2.5 text-xs uppercase tracking-wider font-medium cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Form */
            <form onSubmit={handleCompleteOrder} className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8DDD4] pb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6E5B51]">
                  Shipping & Guest Checkout
                </span>
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="text-xs text-[#822B3E] underline cursor-pointer"
                >
                  Back to Bag
                </button>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7A6458] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={custName}
                  onChange={(e) => setCustName(e.target.value)}
                  placeholder="Elena Rostova"
                  className="w-full bg-white border border-[#E5DAD2] px-3 py-2 text-xs text-[#2F211A] focus:outline-none focus:border-[#822B3E]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7A6458] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={custEmail}
                  onChange={(e) => setCustEmail(e.target.value)}
                  placeholder="elena@example.com"
                  className="w-full bg-white border border-[#E5DAD2] px-3 py-2 text-xs text-[#2F211A] focus:outline-none focus:border-[#822B3E]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7A6458] mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  required
                  value={custAddress}
                  onChange={(e) => setCustAddress(e.target.value)}
                  placeholder="Street, City, State & Zip Code"
                  className="w-full bg-white border border-[#E5DAD2] px-3 py-2 text-xs text-[#2F211A] focus:outline-none focus:border-[#822B3E]"
                />
              </div>

              <div className="bg-[#FAF3EF] p-3 text-[11px] text-[#70594D] border border-[#EDE0D6] flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#822B3E] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-[#822B3E]">Academic Project Demonstration</p>
                  <p>Purchases are disabled for this student portfolio project. No financial transactions or credit card processing occur.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#822B3E] hover:bg-[#681E2E] text-white py-3 text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors"
                >
                  Complete Sample Demo (${total.toFixed(2)})
                </button>
              </div>
            </form>
          ) : items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-10 h-10 text-[#C4A79D] mx-auto stroke-1" />
              <p className="font-serif text-lg text-[#4A3B32]">Your beauty bag is currently empty.</p>
              <p className="text-xs text-[#8A776D] max-w-xs mx-auto">
                Explore our curated essentials, lip oils, and artisan brushes formulated for effortless natural beauty.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#4A3B32] hover:bg-[#34241B] text-white px-5 py-2.5 text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors"
              >
                Explore Shop
              </button>
            </div>
          ) : (
            /* Items List */
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedShade || 'default'}`}
                  className="flex gap-4 p-3 bg-white border border-[#EBE3DC] relative group"
                >
                  <div className="w-16 h-16 bg-[#FAF7F5] border border-[#EDE5DE] flex items-center justify-center shrink-0">
                    <span className="font-serif text-lg text-[#822B3E] italic">R&R</span>
                  </div>

                  <div className="flex-1 min-w-0 pr-6">
                    <h4 className="font-serif text-sm text-[#2F211A] font-medium truncate">
                      {item.product.name}
                    </h4>
                    {item.selectedShade && (
                      <p className="text-[11px] text-[#7A6458]">
                        Shade: {item.selectedShade}
                      </p>
                    )}
                    <span className="text-xs font-semibold text-[#822B3E] tabular-nums mt-1 block">
                      ${item.product.price}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#E5DAD2]">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(
                              item.product.id,
                              Math.max(1, item.quantity - 1),
                              item.selectedShade
                            )
                          }
                          className="px-2 py-0.5 text-xs text-[#5C4A42] hover:bg-[#F0E6DF]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs tabular-nums text-[#2F211A]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.selectedShade
                            )
                          }
                          className="px-2 py-0.5 text-xs text-[#5C4A42] hover:bg-[#F0E6DF]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove item */}
                  <button
                    onClick={() => onRemoveItem(item.product.id, item.selectedShade)}
                    className="absolute top-3 right-3 text-[#B0998F] hover:text-[#822B3E] transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Promo code form */}
              <div className="pt-2">
                <form onSubmit={applyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (try GLOW15)"
                    className="flex-1 bg-white border border-[#E5DAD2] px-3 py-1.5 text-xs text-[#2F211A] placeholder-[#9E8B80] focus:outline-none focus:border-[#822B3E]"
                  />
                  <button
                    type="submit"
                    className="bg-[#5C4A42] hover:bg-[#43342D] text-white px-3 py-1.5 text-xs uppercase tracking-wider font-medium cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
                {promoMessage && (
                  <p className="text-[11px] text-[#822B3E] mt-1 font-medium">{promoMessage}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer with Subtotal & Checkout */}
        {items.length > 0 && !isCheckingOut && !orderComplete && (
          <div className="p-6 border-t border-[#E8DDD4] bg-[#FAF7F5] space-y-3">
            <div className="space-y-1.5 text-xs text-[#6E5B51]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-[#2F211A] tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-[#822B3E]">
                  <span>Discount ({discountPercent}%)</span>
                  <span className="tabular-nums">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="tabular-nums">
                  {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#E8DDD4] text-sm text-[#2F211A] font-medium font-serif">
                <span>Total</span>
                <span className="text-base text-[#822B3E] font-semibold tabular-nums">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckingOut(true)}
              className="w-full bg-[#822B3E] hover:bg-[#681E2E] text-white py-3.5 text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <p className="text-[10px] text-center text-[#8C766B] pt-1">
              ✦ School Project Showcase — Real purchasing is disabled
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
