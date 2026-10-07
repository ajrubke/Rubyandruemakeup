import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, User, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { BowIcon } from './Icons';
import { SERVICES } from '../data/content';
import { Service } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  onBookingComplete?: (details: any) => void;
}

export function BookingModal({
  isOpen,
  onClose,
  initialServiceId,
  onBookingComplete,
}: BookingModalProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SERVICES[0].id
  );
  const [selectedArtist, setSelectedArtist] = useState<string>('Aaralyn Rubke (Founder & Lead Artist)');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update selected service if prop changes
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // Set default date to tomorrow in YYYY-MM-DD
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setSelectedDate(dateStr);
  }, []);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const availableAddons = [
    { id: 'cryo-prep', name: 'Cryo Ice Globe Lymphatic Depuffing', price: 15 },
    { id: 'brow-groom', name: 'Custom Brow Shaping & Tint', price: 20 },
    { id: 'decollete-glow', name: 'Collarbone & Decollete Glow Buffing', price: 20 },
    { id: 'airbrush-finish', name: 'Airbrush Complexion Finish', price: 25 },
  ];

  const handleAddonToggle = (addonName: string) => {
    if (selectedAddons.includes(addonName)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addonName));
    } else {
      setSelectedAddons([...selectedAddons, addonName]);
    }
  };

  const calculateTotal = () => {
    let total = currentService.price;
    selectedAddons.forEach((addonName) => {
      const match = availableAddons.find((a) => a.name === addonName);
      if (match) total += match.price;
    });
    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `RR-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsConfirmed(true);
    if (onBookingComplete) {
      onBookingComplete({
        service: currentService.name,
        artist: selectedArtist,
        date: selectedDate,
        time: selectedTime,
        total: calculateTotal(),
        bookingRef: ref,
      });
    }
  };

  const handleReset = () => {
    setIsConfirmed(false);
    onClose();
  };

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-[#FAF7F5] w-full max-w-2xl border border-[#E5DAD2] shadow-2xl overflow-hidden my-8">
        
        {/* Top header bar */}
        <div className="bg-[#FAF7F5] border-b border-[#E8DDD4] px-6 sm:px-8 py-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[#822B3E]">
              <BowIcon className="w-4 h-4 text-[#822B3E]" />
              <span className="font-script text-xl text-[#822B3E] block">
                Boutique Studio Artistry
              </span>
            </div>
            <h2 className="font-serif text-2xl text-[#2F211A] font-medium">
              {isConfirmed ? 'Reservation Confirmed' : 'Book a Personalized Service'}
            </h2>
          </div>
          <button
            onClick={handleReset}
            className="p-2 text-[#7A6458] hover:text-[#2F211A] hover:bg-[#EFEAE5] transition-colors rounded-full"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmation Screen */}
        {isConfirmed ? (
          <div className="p-8 sm:p-10 space-y-6 text-center">
            <div className="w-16 h-16 bg-[#F3E5E3] text-[#822B3E] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#822B3E]">
                Booking Reference #{bookingRef}
              </span>
              <h3 className="font-serif text-3xl text-[#2F211A]">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-sm text-[#6E5B51] max-w-md mx-auto">
                Thank you, <strong className="text-[#2F211A]">{name || 'valued guest'}</strong>. Your bespoke appointment is scheduled. A confirmation summary with preparation instructions has been generated.
              </p>
            </div>

            {/* Appointment summary box */}
            <div className="bg-[#F5EFEA] border border-[#E2D5CC] p-6 text-left max-w-lg mx-auto space-y-3 text-sm text-[#4E3D34]">
              <div className="flex justify-between border-b border-[#E6D9D0] pb-2">
                <span className="text-[#846E62]">Service:</span>
                <span className="font-medium text-[#2F211A]">{currentService.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#E6D9D0] pb-2">
                <span className="text-[#846E62]">Artist:</span>
                <span className="font-medium text-[#2F211A]">{selectedArtist}</span>
              </div>
              <div className="flex justify-between border-b border-[#E6D9D0] pb-2">
                <span className="text-[#846E62]">Date & Time:</span>
                <span className="font-medium text-[#2F211A]">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between border-b border-[#E6D9D0] pb-2">
                <span className="text-[#846E62]">Duration:</span>
                <span className="font-medium text-[#2F211A]">{currentService.durationMinutes} Minutes</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="flex justify-between border-b border-[#E6D9D0] pb-2">
                  <span className="text-[#846E62]">Add-ons:</span>
                  <span className="font-medium text-[#2F211A] text-right text-xs">
                    {selectedAddons.join(', ')}
                  </span>
                </div>
              )}
              <div className="flex justify-between pt-1 font-serif text-base text-[#2F211A]">
                <span>Total Investment:</span>
                <span className="font-semibold">${calculateTotal()}</span>
              </div>
            </div>

            <div className="bg-[#FAF3EF] p-4 text-xs text-[#70594D] max-w-lg mx-auto flex items-start gap-2.5 text-left border border-[#EDE0D6]">
              <ShieldCheck className="w-4 h-4 text-[#822B3E] shrink-0 mt-0.5" />
              <span>
                Studio Address: 428 Mercer Street, Suite 4B, SoHo, NY. Please arrive with clean, hydrated skin free of makeup. Contact us at least 48 hours prior if you need to reschedule.
              </span>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={handleReset}
                className="bg-[#822B3E] hover:bg-[#681E2E] text-white px-8 py-3 text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[78vh] overflow-y-auto">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#6E5B51] mb-2">
                1. Select Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES.map((s) => {
                  const isSelected = s.id === selectedServiceId;
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#822B3E] bg-[#FAF0EE] ring-1 ring-[#822B3E]'
                          : 'border-[#E5DAD2] bg-white hover:border-[#C4A79D]'
                      }`}
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-serif font-medium text-sm text-[#2F211A]">
                          {s.name}
                        </span>
                        <span className="text-xs font-semibold text-[#822B3E] tabular-nums">
                          ${s.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#7A6458] line-clamp-2 leading-relaxed">
                        {s.subtitle}
                      </p>
                      <span className="text-[10px] text-[#9A8478] mt-1 block">
                        {s.durationMinutes} min appointment
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Preferred Artist */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#6E5B51] mb-2">
                2. Preferred Makeup Artist
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Aaralyn Rubke (Founder & Lead Artist)',
                  'First Available Studio Artist',
                ].map((artist) => (
                  <button
                    type="button"
                    key={artist}
                    onClick={() => setSelectedArtist(artist)}
                    className={`p-2.5 text-xs text-left border transition-all cursor-pointer ${
                      selectedArtist === artist
                        ? 'border-[#C68B85] bg-[#FAF0EE] text-[#8C5F4D] font-medium'
                        : 'border-[#E5DAD2] bg-white text-[#564237] hover:border-[#C4A79D]'
                    }`}
                  >
                    {artist}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[#6E5B51] mb-2">
                  3. Select Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-white border border-[#E5DAD2] px-3 py-2 text-xs text-[#2F211A] focus:outline-none focus:border-[#822B3E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[#6E5B51] mb-2">
                  4. Select Time Slot
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-1.5 text-[11px] border text-center transition-all cursor-pointer ${
                        selectedTime === time
                          ? 'border-[#822B3E] bg-[#822B3E] text-white font-medium'
                          : 'border-[#E5DAD2] bg-white text-[#564237] hover:border-[#C4A79D]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Optional Add-on Enhancements */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#6E5B51] mb-2">
                Enhance Your Appointment (Optional)
              </label>
              <div className="space-y-2">
                {availableAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.name);
                  return (
                    <label
                      key={addon.id}
                      className={`flex items-center justify-between p-2.5 border text-xs cursor-pointer transition-colors ${
                        isChecked ? 'border-[#822B3E] bg-[#FDF5F4]' : 'border-[#E5DAD2] bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleAddonToggle(addon.name)}
                          className="accent-[#822B3E] w-3.5 h-3.5"
                        />
                        <span className="text-[#3E2E25]">{addon.name}</span>
                      </div>
                      <span className="font-medium text-[#822B3E] tabular-nums">
                        +${addon.price}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Contact Information */}
            <div className="space-y-3 pt-2 border-t border-[#E8DDD4]">
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#6E5B51]">
                Client Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border border-[#E5DAD2] px-3 py-2 text-xs text-[#2F211A] placeholder-[#9E8B80] focus:outline-none focus:border-[#822B3E]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-[#E5DAD2] px-3 py-2 text-xs text-[#2F211A] placeholder-[#9E8B80] focus:outline-none focus:border-[#822B3E]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white border border-[#E5DAD2] px-3 py-2 text-xs text-[#2F211A] placeholder-[#9E8B80] focus:outline-none focus:border-[#822B3E]"
                />
                <input
                  type="text"
                  placeholder="Special Event Occasion or Vision (Optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="bg-white border border-[#E5DAD2] px-3 py-2 text-xs text-[#2F211A] placeholder-[#9E8B80] focus:outline-none focus:border-[#822B3E]"
                />
              </div>
            </div>

            {/* Total summary and submit */}
            <div className="pt-4 border-t border-[#E8DDD4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#7A6458] block">Total Investment</span>
                <span className="font-serif text-2xl text-[#2F211A] font-semibold tabular-nums">
                  ${calculateTotal()}
                </span>
                <span className="text-[11px] text-[#9A8478] ml-2">
                  ({currentService.durationMinutes} min with {selectedArtist.split(' ')[0]})
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#822B3E] hover:bg-[#681E2E] text-white px-8 py-3.5 text-xs font-medium uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm & Reserve Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
