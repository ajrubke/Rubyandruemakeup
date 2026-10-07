import heroImg from '../assets/images/hero_editorial_beauty_1791324399105.jpg';
import bridalImg from '../assets/images/bridal_makeup_portrait_1791324409241.jpg';
import brushesImg from '../assets/images/brushes_ceramic_cup_1791325718458.jpg';
import vanityImg from '../assets/images/studio_vanity_mirror_1791325104436.jpg';
import shopImg from '../assets/images/shop_beauty_products_1791324429489.jpg';
import lessonImg from '../assets/images/makeup_lesson_session_1791324439414.jpg';
import hairImg from '../assets/images/hair_claw_clip_1791325730921.jpg';
import eyeImg from '../assets/images/closeup_eye_lashes_1791325740114.jpg';
import swatchesImg from '../assets/images/lipstick_swatch_smears_1791325750256.jpg';
import prodLipGloss from '../assets/images/product_lip_gloss_1791326576180.jpg';
import prodBlush from '../assets/images/product_blush_compact_1791326585470.jpg';
import prodMascara from '../assets/images/product_mascara_tube_1791326595167.jpg';
import prodPalette from '../assets/images/product_eyeshadow_palette_1791326605837.jpg';
import prodFoundation from '../assets/images/product_foundation_bottle_1791326615176.jpg';
import prodSettingSpray from '../assets/images/product_setting_spray_1791326624047.jpg';
import { Service, Product, Testimonial, BlogPost } from '../types';

export const IMAGES = {
  hero: heroImg,
  bridal: bridalImg,
  brushes: brushesImg,
  vanity: vanityImg,
  shop: shopImg,
  lesson: lessonImg,
  hair: hairImg,
  eye: eyeImg,
  swatches: swatchesImg,
  prodLipGloss,
  prodBlush,
  prodMascara,
  prodPalette,
  prodFoundation,
  prodSettingSpray,
};

export const SERVICES: Service[] = [
  {
    id: 'everyday-glam',
    name: 'Everyday Glam',
    category: 'Everyday',
    price: 60,
    durationMinutes: 45,
    subtitle: 'A fresh, natural look perfect for work, school, or any day.',
    description: 'An effortless, breathable makeup application focused on skin-first hydration, soft warmth, and pinpoint feature enhancement. Designed for daily life, headshots, and daytime events where you want to look polished and glowing without feeling heavy or overdone.',
    keyFeatures: [
      'Gentle skin hydration & lymphatic facial massage prep',
      'Featherlight customized skin tint & pinpoint spot concealing',
      'Cream blush & subtle soft-focus radiance sculpting',
      'Natural fluffy brow grooming & individual flutter lashes',
      'Hydrating lip oil or petal gloss application'
    ],
    idealFor: [
      'Professional headshots, meetings & presentations',
      'Graduations, family photos & weekend celebrations',
      'Daytime luncheons, showers & elevated outings',
      'Anyone seeking an effortless, lit-from-within glow'
    ],
    includes: [
      '45-minute personalized in-studio appointment with Aaralyn',
      'Custom luxury skincare prep suited to your skin type',
      'Natural daytime flutter lash application (optional)',
      'Touch-up tips to maintain your glow all day long'
    ],
    recommendedAddons: ['Cryo Ice Globe Depuffing ($15)', 'Custom Brow Shaping ($20)']
  },
  {
    id: 'special-event',
    name: 'Special Event',
    category: 'Events',
    price: 85,
    durationMinutes: 60,
    subtitle: 'Full glam for weddings, parties, or any special occasion.',
    description: 'Tailored red-carpet and evening elegance designed to turn heads and endure under camera flash, dance floors, and candlelight. Aaralyn sculpts your natural features with balanced dimension, long-wearing transfer-resistant techniques, and custom lash architecture.',
    keyFeatures: [
      'Long-wear primers & transfer-resistant micro-setting technique',
      'Dimension-focused eye architecture (smokey, winged, or shimmery)',
      'Sculpted cheekbone & collarbone contouring',
      'Tiered individual or silk demi-strip lash styling',
      'Precision lip liner contouring with long-lasting satin finish'
    ],
    idealFor: [
      'Galas, award banquets & charity benefits',
      'Milestone birthdays, bachelorettes & cocktail receptions',
      'Wedding guests, bridesmaids & mothers of the bride',
      'Proms, homecomings & red-carpet celebrations'
    ],
    includes: [
      '60-minute bespoke appointment in our private studio vanity suite',
      'Extended skin prep with revitalizing eye contour patches',
      'Custom lash design tailored to your eye shape',
      'Event touch-up kit with blotting papers and matching lip vial'
    ],
    recommendedAddons: ['Collarbone & Decollete Glow Buffing ($20)', 'Airbrush Complexion Finish ($25)']
  },
  {
    id: 'makeup-lesson',
    name: 'Makeup Lesson',
    category: 'Education',
    price: 75,
    durationMinutes: 75,
    subtitle: 'Learn your perfect routine and get personalized tips and tricks.',
    description: 'A completely personalized, hands-on masterclass where Aaralyn sits with you step-by-step. Bring your own makeup bag or explore studio essentials as Aaralyn audits your current tools, diagnoses what flatters your bone structure and skin tone, and guides you through applying half your face yourself.',
    keyFeatures: [
      'Honest makeup bag audit (what to keep, repurpose, or replace)',
      'Skin type & undertone analysis with curated shade matching',
      'Step-by-step half-face demonstration: Aaralyn shows, you practice',
      'Brush mechanics: proper holding angles, pressure & blending strokes',
      'Handwritten, personalized Face Chart with customized product guide'
    ],
    idealFor: [
      'Women seeking a modern, simplified 10-minute everyday routine',
      'Anyone feeling intimidated or overwhelmed by beauty aisles',
      'Updating beauty routines after life transitions or milestone birthdays',
      'Beginners wanting foundational confidence in brush techniques'
    ],
    includes: [
      '75 minutes of private, uninterrupted one-on-one coaching with Aaralyn',
      'Full hygiene sanitization of your personal makeup brushes',
      'Custom handwritten Face Chart with exact shade recommendations',
      '15% discount on all Ruby & Rue beauty essentials purchased that day'
    ],
    recommendedAddons: ['Starter Brush Essentials Kit ($35)', 'Follow-Up Virtual Technique Q&A ($30)']
  },
  {
    id: 'bridal-package',
    name: 'Bridal Package',
    category: 'Bridal',
    price: 150,
    durationMinutes: 90,
    subtitle: 'For you and your bridal party. Custom packages available.',
    description: 'Bespoke, timeless bridal artistry that photographs flawlessly from morning preparation through midnight toasts. Aaralyn crafts a luminous, tear-resistant complexion, customized individual lash mapping, and an intimate, calming bridal suite experience.',
    keyFeatures: [
      'Comprehensive in-depth consultation & face chart archiving',
      'Bespoke skincare infusion (hyaluronic mist & rose quartz massage)',
      'Waterproof, tear-resistant, high-definition complexion artistry',
      'Meticulous custom-tailored lash clustering for your eye shape',
      'Bridal Emergency Deluxe Touch-Up Kit included'
    ],
    idealFor: [
      'Discerning brides seeking refined, timeless editorial beauty',
      'Estate, destination, winery & chic city hall weddings',
      'Bridal parties seeking a harmonious, cohesive aesthetic',
      'Multi-day celebrations, rehearsal dinners & farewell brunches'
    ],
    includes: [
      '90-minute bridal artistry appointment with photography lighting test',
      'Deluxe bridal emergency kit (full-size custom lip color & blotting sheets)',
      'Option to reserve on-location services for bridal parties',
      'Direct scheduling coordination with your wedding planner'
    ],
    recommendedAddons: ['Bridal Party Member Artistry ($75/person)', 'Rehearsal Dinner Glam ($85)', 'Touch-Up Artist on Retainer ($100/hr)']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'lip-gloss',
    name: 'Lip Gloss',
    category: 'Lips',
    price: 16,
    rating: 4.9,
    reviewsCount: 128,
    shortDescription: 'Ultra-cushiony, non-sticky high-shine lip gloss enriched with jojoba and vitamin E for juicy, hydrated lips.',
    fullDescription: 'Our signature everyday lip essential. Formulated with botanical oils to drench lips in continuous hydration without a hint of stickiness. Imparts a glass-like sheen with a delicate wash of flattering color that makes lips look plump, soft, and refreshed.',
    artistTip: 'Apply alone on bare lips for an everyday juicy pout, or layer over your favorite lip liner for an elevated dimensional evening look.',
    shades: [
      { name: 'Petal Rose (Soft Rosy Pink)', hex: '#D88A8A' },
      { name: 'Honey Nude (Warm Golden Caramel)', hex: '#CF9970' },
      { name: 'Crystal Clear (High-Gloss Sheen)', hex: '#F0EBE6' }
    ],
    isBestSeller: true,
    ingredients: 'Polybutene, Simmondsia Chinensis (Jojoba) Seed Oil, Caprylic/Capric Triglyceride, Tocopheryl Acetate (Vitamin E), Ricinus Communis Seed Oil, Mica.',
    size: '6.5 ml / 0.22 fl. oz.',
    image: IMAGES.prodLipGloss
  },
  {
    id: 'blush',
    name: 'Blush',
    category: 'Cheeks',
    price: 18,
    rating: 5.0,
    reviewsCount: 146,
    shortDescription: 'Silky, blendable blush compact that melts into the skin for a healthy, naturally flushed glow.',
    fullDescription: 'Handcrafted to mimic the healthy rush of blood beneath the skin. Packed with micro-milled pigments and nourishing squalane, this blush glides onto bare skin or over foundation seamlessly with zero chalkiness or powdery texture.',
    artistTip: 'Tap gently onto the high apples of your cheeks and sweep upward along the cheekbone toward your temple for an instant youthful lift.',
    shades: [
      { name: 'Dusty Rose (Soft Mauve Petal)', hex: '#C67A83' },
      { name: 'Warm Peach (Sun-Kissed Glow)', hex: '#DE8C73' },
      { name: 'Berry Flush (Vibrant Fresh Berry)', hex: '#9E4357' }
    ],
    isBestSeller: true,
    ingredients: 'Mica, Squalane, Zinc Stearate, Silica, Lauroyl Lysine, Rosa Moschata (Rosehip) Seed Oil, Iron Oxides, Red 7 Lake.',
    size: '8 g / 0.28 oz. compact',
    image: IMAGES.prodBlush
  },
  {
    id: 'mascara',
    name: 'Mascara',
    category: 'Eyes & Brows',
    price: 20,
    rating: 4.8,
    reviewsCount: 92,
    shortDescription: 'Volumizing and lengthening tubing mascara that defines every single lash with zero smudging or flaking.',
    fullDescription: 'Engineered with our custom precision hourglass wand to grip, separate, and coat each lash from root to tip. The tubing polymer formula resists humidity, sweat, and happy tears while washing off effortlessly with warm water.',
    artistTip: 'Wiggle the brush horizontally at the base of the lash line to deposit volume, then sweep smoothly upward through the tips for clean, fluttery length.',
    shades: [
      { name: 'Rich Black', hex: '#1C1917' },
      { name: 'Deep Espresso Brown', hex: '#443128' }
    ],
    isBestSeller: false,
    isNew: true,
    ingredients: 'Water/Aqua, Acrylates Copolymer, Beeswax, Copernicia Cerifera Cera, Stearic Acid, Panthenol, Biotinoyl Tripeptide-1, Iron Oxides (CI 77499).',
    size: '9 ml / 0.30 fl. oz.',
    image: IMAGES.prodMascara
  },
  {
    id: 'eyeshadow-palette',
    name: 'Eyeshadow Palette',
    category: 'Eyes & Brows',
    price: 32,
    rating: 5.0,
    reviewsCount: 110,
    shortDescription: 'Curated 6-pan palette of versatile neutral mattes and champagne shimmers for day-to-night elegance.',
    fullDescription: 'A capsule collection of the essential tones Aaralyn reaches for during every client service. Featuring velvety buttery mattes for contouring the crease and light-reflecting micro-shimmers that illuminate the lids with zero fallout.',
    artistTip: 'Dust the soft taupe across your entire eyelid for a 2-minute wash of warmth, then press the champagne shimmer onto the center of the lid and inner tear duct for awake, sparkling eyes.',
    isBestSeller: true,
    ingredients: 'Talc, Mica, Octyldodecyl Stearoyl Stearate, Zinc Stearate, Dimethicone, Silica, Caprylyl Glycol, Ethylhexylglycerin, Iron Oxides (CI 77491, CI 77492, CI 77499).',
    size: '6 x 1.8 g net wt.',
    image: IMAGES.prodPalette
  },
  {
    id: 'foundation',
    name: 'Foundation',
    category: 'Complexion',
    price: 36,
    rating: 4.9,
    reviewsCount: 84,
    shortDescription: 'Weightless medium-coverage serum foundation infused with hyaluronic acid for an all-day luminous second-skin finish.',
    fullDescription: 'A true skincare-makeup hybrid. Delivers breathable, buildable coverage that evens out redness and discoloration while allowing your real skin texture to shine through naturally. Formulated without pore-clogging silicones or drying alcohols.',
    artistTip: 'Dispense one pump onto the back of your hand, warm it with your fingers, and stipple onto the center of your face blending outward toward the jawline for seamless invisibility.',
    shades: [
      { name: 'Fair Warm 01', hex: '#F3E5D8' },
      { name: 'Light Neutral 02', hex: '#EBD4C1' },
      { name: 'Medium Golden 03', hex: '#DFBA9C' },
      { name: 'Deep Tan 04', hex: '#AC7B55' }
    ],
    isBestSeller: false,
    ingredients: 'Water/Aqua, Dimethicone, Caprylic/Capric Triglyceride, Glycerin, Sodium Hyaluronate, Niacinamide, Camellia Sinensis Leaf Extract, Titanium Dioxide, Iron Oxides.',
    size: '30 ml / 1.0 fl. oz. frosted bottle',
    image: IMAGES.prodFoundation
  },
  {
    id: 'setting-spray',
    name: 'Setting Spray',
    category: 'Complexion',
    price: 24,
    rating: 4.9,
    reviewsCount: 135,
    shortDescription: 'Micro-fine continuous setting mist with soothing rosewater and aloe that locks in makeup for 16 hours of fresh wear.',
    fullDescription: 'The secret to melting powders into the skin and extinguishing powdery dryness. This botanical cloud bonds makeup layers into a flexible, breathable shield that resists melting, creasing, and fading throughout your day or event.',
    artistTip: 'Mist once before makeup to hydrate, and twice after your full face is complete. Keep a mini bottle in your purse for an instant afternoon refresh.',
    isBestSeller: true,
    ingredients: 'Rosa Damascena Flower Water, Aloe Barbadensis Leaf Juice, Hamamelis Virginiana Water, PVP, Glycerin, Phenoxyethanol, Ethylhexylglycerin.',
    size: '100 ml / 3.4 fl. oz. bottle',
    image: IMAGES.prodSettingSpray
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'glass-skin-guide',
    title: '5 Steps to Everyday Glass Skin That Actually Lasts All Day',
    category: 'Beauty Tips',
    date: 'March 24, 2026',
    readTime: '4 min read',
    summary: 'Discover the exact layering technique Aaralyn uses in the studio to achieve a luminous, dew-drenched complexion without feeling greasy.',
    content: [
      'The secret to real glass skin is never about piling on thick highlighters or oily products—it starts with deep cellular hydration and intentional thin layering.',
      'Step 1: Always cleanse gently with a non-stripping milky cleanser and apply your hydrating toner onto damp skin. Pressing hydration into the epidermis plumps fine lines immediately.',
      'Step 2: Use a pea-sized amount of serum infused with hyaluronic acid and niacinamide. Let it absorb for 60 seconds before touching your face again.',
      'Step 3: Stipple a serum foundation only where needed (usually around the nose, chin, and between the brows), leaving cheeks naturally sheer.',
      'Step 4: Melt cream blush onto the apples of your cheeks using warm fingertips.',
      'Step 5: Lock it all in with a fine rosewater setting mist instead of heavy translucent powder. You will glow in any light all day long.'
    ],
    tips: [
      'Apply skincare to damp skin for 3x better absorption',
      'Pinpoint conceal only where discoloration exists',
      'Swap powder bronzers for warm cream balms'
    ],
    image: swatchesImg
  },
  {
    id: 'brush-guide-review',
    title: 'The Only 4 Brushes You Actually Need in Your Makeup Bag',
    category: 'Product Reviews',
    date: 'April 2, 2026',
    readTime: '5 min read',
    summary: 'A candid review and guide to decluttering your brush holder. Cut the overwhelm and master these four indispensable workhorses.',
    content: [
      'During my One-on-One Makeup Lessons, the number one source of confusion clients bring to my chair is a chaotic bag filled with 25 different brushes they don’t know how to use.',
      'The honest truth: you only need four quality brushes to accomplish any look from a fresh morning glow to a full red-carpet event.',
      '1. The Angled Complexion Buffer: Perfect for cream foundation and cream bronzer. The angled density hugs the contours of the cheekbones and jawline.',
      '2. The Fluffy Cloud Cheek Brush: Soft, domed synthetic fibers that disperse cream or powder blush without creating harsh streaks or patches.',
      '3. The Tapered Crease Blending Brush: A soft dome that windshield-wipes neutral eyeshadow into the crease with zero effort.',
      '4. The Precision Spot Definer: A tiny flat synthetic brush for spot concealing blemishes, cleaning up lip lines, or smudging soft liner.'
    ],
    tips: [
      'Wash your brushes weekly with gentle baby shampoo',
      'Always lay brushes flat on a towel to dry so water does not loosen the glue ferrule',
      'Synthetic bristles work best for modern cream and liquid formulas'
    ],
    image: brushesImg
  },
  {
    id: '10-minute-morning-routine',
    title: 'Aaralyn’s 10-Minute Morning Routine for Busy Days',
    category: 'Makeup Tutorials',
    date: 'April 18, 2026',
    readTime: '3 min read',
    summary: 'A step-by-step tutorial for looking polished, rested, and radiant in ten minutes flat before work or school.',
    content: [
      'As a makeup artist, people often assume my personal morning routine takes an hour. In reality, on busy studio mornings, I give myself exactly 10 minutes.',
      'Minute 1–2: Hydrate skin with moisturizer and SPF. Let sink in while brushing teeth.',
      'Minute 3–4: Apply two pumps of serum foundation and dab pinpoint concealer under eyes.',
      'Minute 5–6: Swirl cream blush across cheeks and bridge of nose for instant sun-kissed life.',
      'Minute 7–8: Brush brows upward with clear brow gel, curl lashes, and apply two coats of tubing mascara.',
      'Minute 9–10: Slick on Ruby & Rue Lip Gloss in Petal Rose, mist with Setting Spray, and walk out the door feeling invincible.'
    ],
    tips: [
      'Multitask your blush as a wash of monochromatic color on eyelids',
      'Tubing mascara saves time because it never leaves raccoon smudges',
      'A great lip gloss instantly makes the entire face look put together'
    ],
    image: eyeImg
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Aaralyn made me feel like the most refined, radiant version of myself on my wedding day! My makeup looked just as fresh and glowing at 1:00 AM as it did during our morning photos. She doesn't disguise you—she brings out your absolute natural magic.",
    clientName: 'Elena Rostova',
    occasion: 'Bride, Napa Valley Wedding',
    location: 'St. Helena, California',
    service: 'Bridal Package'
  },
  {
    id: 't2',
    quote: "The Makeup Lesson with Aaralyn completely reshaped how I think about beauty. I had spent so much money on products sitting untouched in drawers because I never knew how to apply them. Aaralyn taught me the why behind each brush and stroke. I get compliments daily now!",
    clientName: 'Dr. Sarah Lin',
    occasion: 'Masterclass Client',
    location: 'New York, New York',
    service: 'Makeup Lesson'
  },
  {
    id: 't3',
    quote: "Finding an artist who understands how to do high-glam without heavy cakey texture is nearly impossible. Aaralyn at Ruby & Rue has this rare editorial eye where your skin looks real, juicy, and breathtaking both in person and in photos.",
    clientName: 'Chloe Bennett',
    occasion: 'Gala Host & Philanthropist',
    location: 'SoHo, New York',
    service: 'Special Event'
  },
  {
    id: 't4',
    quote: "Aaralyn is an absolute beauty visionary! She took time to analyze my bone structure, selected the most flattering rose tones, and made me feel so calm and confident. Her signature aesthetic and attention to skin prep are unmatched.",
    clientName: 'Julianna Hayes',
    occasion: 'Bridal Client & Gala Guest',
    location: 'Manhattan, New York',
    service: 'Bridal Package with Aaralyn'
  }
];

export const FAQS = [
  {
    q: 'How far in advance should I book my bridal makeup?',
    a: 'We recommend reserving your wedding date 4 to 8 months in advance, especially for peak wedding season (May through October). Aaralyn accepts a limited number of weddings per month to ensure complete undivided focus on each bride.'
  },
  {
    q: 'What should I do to prepare my skin before an appointment?',
    a: 'Arrive with a clean, moisturized face free of makeup. We recommend drinking plenty of water the 48 hours prior and avoiding aggressive chemical peels, retinoids, or heavy exfoliation for 5 days before your service. Aaralyn performs a custom luxury skin prep ritual at the start of every session.'
  },
  {
    q: 'Can I book an on-location appointment or do services take place in your studio?',
    a: 'Everyday Glam and Makeup Lessons take place in our private sunlit boutique studio. Bridal packages and special event bookings can be accommodated on-location across the greater region or at destination venues upon request with custom travel arrangements.'
  },
  {
    q: 'What makes your makeup kits clean and sanitary?',
    a: 'Aaralyn adheres to clinical sanitation protocols. All cream and liquid formulas are decanted onto sterile stainless steel palettes with metal spatulas. Brushes are deep-cleaned and UV-sanitized between clients, and disposables are used for all mascara and lash applications. Our kit features cruelty-free, hypoallergenic brands.'
  },
  {
    q: 'What is your cancellation and rescheduling policy?',
    a: 'Studio services can be rescheduled up to 48 hours prior without penalty. For bridal contracts, preview dates and retainer guidelines are detailed in your bespoke client agreement.'
  }
];
