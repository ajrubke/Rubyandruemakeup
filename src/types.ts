export type Page = 'home' | 'about' | 'services' | 'shop' | 'blog' | 'sitemap';

export interface BlogPost {
  id: string;
  title: string;
  category: 'Beauty Tips' | 'Product Reviews' | 'Makeup Tutorials';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  tips: string[];
  image: string;
}

export interface Service {
  id: string;
  name: string;
  category: 'Everyday' | 'Events' | 'Bridal' | 'Education';
  price: number;
  durationMinutes: number;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  idealFor: string[];
  includes: string[];
  recommendedAddons?: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'Lips' | 'Cheeks' | 'Complexion' | 'Eyes & Brows' | 'Tools & Sets';
  price: number;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  fullDescription: string;
  artistTip: string;
  shades?: { name: string; hex: string }[];
  isBestSeller?: boolean;
  isNew?: boolean;
  ingredients: string;
  size: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedShade?: string;
}

export interface BookingData {
  serviceId: string;
  artistName: string;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  addons: string[];
  notes?: string;
  bookingRef?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  occasion: string;
  location: string;
  service: string;
}
