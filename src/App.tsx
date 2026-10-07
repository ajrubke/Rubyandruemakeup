import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ShopPage } from './pages/ShopPage';
import { BlogPage } from './pages/BlogPage';
import { SiteMapPage } from './pages/SiteMapPage';
import { Page, Product, CartItem } from './types';
import { PRODUCTS } from './data/content';
import { BowIcon } from './components/Icons';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ruby_rue_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    // Default starter item to showcase the bag experience
    return [
      {
        product: PRODUCTS[0],
        quantity: 1,
        selectedShade: PRODUCTS[0].shades ? PRODUCTS[0].shades[0].name : undefined,
      },
    ];
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'about', 'services', 'shop', 'blog', 'sitemap'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('ruby_rue_cart', JSON.stringify(cartItems));
    } catch (e) {
      // ignore
    }
  }, [cartItems]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleAddToCart = (product: Product, quantity = 1, selectedShade?: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          (item.selectedShade || '') === (selectedShade || '')
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, quantity, selectedShade }];
    });

    setToastMessage(`Added "${product.name}" to your bag.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdateQuantity = (productId: string, quantity: number, selectedShade?: string) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (
          item.product.id === productId &&
          (item.selectedShade || '') === (selectedShade || '')
        ) {
          return { ...item, quantity: Math.max(1, quantity) };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (productId: string, selectedShade?: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            (item.selectedShade || '') === (selectedShade || '')
          )
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#2C2420] font-sans">
      
      {/* Global Top Announcement Bar */}
      <div className="bg-[#2B211C] text-[#EFE7E1] text-[11px] sm:text-xs py-2 px-4 text-center tracking-wider font-light flex items-center justify-center gap-2">
        <BowIcon className="w-3.5 h-3.5 text-[#E3B8BA]" />
        <span className="font-serif italic text-[#E3B8BA]">Studio Sanctuary in SoHo:</span>
        <span>Now Reserving 2026 & 2027 Bridal Suites and Studio Masterclasses with Aaralyn</span>
        <button
          onClick={() => handleOpenBooking('bridal-makeup')}
          className="underline font-medium text-[#FAF7F5] hover:text-[#E3B8BA] ml-1 cursor-pointer"
        >
          Book Now
        </button>
      </div>

      {/* Top Bar Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
            onOpenBooking={() => handleOpenBooking('makeup-lesson')}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('makeup-lesson')}
          />
        )}

        {currentPage === 'sitemap' && (
          <SiteMapPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Global Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingServiceId}
        onBookingComplete={(details) => {
          setToastMessage(`Reserved ${details.service} with ${details.artist}!`);
          setTimeout(() => setToastMessage(null), 4000);
        }}
      />

      {/* Sliding Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2C211C] text-[#FAF7F5] px-4 py-3 rounded-none shadow-2xl border border-[#4A3B32] text-xs flex items-center gap-3 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#E3B8BA]" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
