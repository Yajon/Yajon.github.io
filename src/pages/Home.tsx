import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedPosts from '@/components/FeaturedPosts';
import Footer from '@/components/Footer';
import { blogCategories, featuredPosts } from '@/lib/blogData';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <Categories categories={blogCategories} />
        <FeaturedPosts posts={featuredPosts} />
      </main>
      <Footer />
    </div>
  );
}