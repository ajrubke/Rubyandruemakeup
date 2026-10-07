import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { BowIcon } from '../components/Icons';
import { BLOG_POSTS, IMAGES } from '../data/content';
import { Page, BlogPost } from '../types';

interface BlogPageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: () => void;
}

export function BlogPage({ onNavigate, onOpenBooking }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);

  const categories = ['All', 'Beauty Tips', 'Product Reviews', 'Makeup Tutorials'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 1. Header (Matching Ruby & Rue Aesthetic) */}
      <section className="pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1E1A] tracking-wider uppercase font-normal">
          Blog
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#C68B85] block">
          the beauty journal & studio notes
        </span>
        <p className="text-sm sm:text-base text-[#6E5B51] font-light max-w-2xl mx-auto leading-relaxed pt-2">
          Beauty tips, candid product reviews, and step-by-step makeup tutorials written by founder and makeup artist Aaralyn. Learn practical, timeless techniques to elevate your daily routine.
        </p>

        {/* Filter categories */}
        <div className="pt-4 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#C68B85] text-white shadow-xs'
                  : 'bg-[#F2ECE6] text-[#5C4A42] hover:bg-[#EAE0D7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const isExpanded = expandedPostId === post.id;
            return (
              <article
                key={post.id}
                className="bg-[#FAF7F5] border border-[#E8DDD4] p-6 flex flex-col justify-between hover:border-[#C68B85] transition-all group"
              >
                <div className="space-y-4">
                  {/* Photo thumbnail */}
                  <div className="w-full h-56 bg-[#F2ECE6] border border-[#E8DDD4] overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-[#FAF7F5]/90 backdrop-blur-xs text-[#8C5F4D] text-[10px] uppercase tracking-wider px-2 py-0.5 font-medium border border-[#E5DAD0]">
                      {post.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#8C766B]">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="font-serif text-lg sm:text-xl text-[#2C1E1A] leading-snug group-hover:text-[#C68B85] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-xs text-[#6E5B51] font-light leading-relaxed">
                      {post.summary}
                    </p>

                    {/* Expanded Content Toggle */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-[#F0E6DF] space-y-3 text-xs text-[#523F36] leading-relaxed animate-fadeIn">
                        {post.content.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                        
                        <div className="bg-[#F5EFEA] p-3 border-l-2 border-[#C68B85] space-y-1 mt-2">
                          <strong className="text-[#2C1E1A] block">Aaralyn’s Quick Tips:</strong>
                          <ul className="list-disc list-inside space-y-0.5 text-[#6E5B51]">
                            {post.tips.map((t, i) => (
                              <li key={i}>{t}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0E6DF] flex items-center justify-between">
                  <span className="text-[11px] text-[#8A776D] italic">
                    By Aaralyn
                  </span>

                  <button
                    onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                    className="text-xs text-[#8C5F4D] hover:text-[#C68B85] font-medium inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Read Full Guide'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. Learn Directly from Aaralyn Banner */}
      <section className="bg-[#F5EFEA] py-16 border-y border-[#E8DDD4] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#C68B85]">
            <BowIcon className="w-5 h-5 text-[#C68B85]" />
            <span className="font-script text-3xl block">
              Want hands-on instruction?
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1E1A] uppercase tracking-wider">
            Book a One-on-One Makeup Lesson
          </h2>
          <p className="text-sm text-[#6E5B51] font-light leading-relaxed">
            Reading tutorials is wonderful, but nothing replaces sitting side-by-side with Aaralyn in our private studio. Learn how to apply these techniques to your exact facial geometry.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#C68B85] hover:bg-[#B37973] text-white px-8 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-semibold cursor-pointer shadow-md transition-colors inline-flex items-center gap-2"
            >
              <BowIcon className="w-4 h-4 text-white" />
              <span>Book a Lesson with Aaralyn ($75)</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
