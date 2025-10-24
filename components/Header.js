'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import CartDrawer from './CartDrawer';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-amber-700 text-white text-center py-2 text-sm">
        Free Delivery in India | Easy Returns & Exchange
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-amber-800">Saanjh</span>
                <span className="text-gray-600 text-lg"> by Kashish</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/collections/all" className="text-gray-700 hover:text-amber-800 transition">
                Shop
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-amber-800 transition">
                Collections
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-800 transition">
                About
              </Link>
              <Link href="/gifting" className="text-gray-700 hover:text-amber-800 transition">
                Gifting
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-amber-800 transition">
                Blog
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-amber-800 transition hidden sm:block">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-amber-800 transition hidden sm:block">
                <User size={20} />
              </button>
              <button
                className="relative text-gray-700 hover:text-amber-800 transition"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/collections/all"
                  className="text-gray-700 hover:text-amber-800 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/collections"
                  className="text-gray-700 hover:text-amber-800 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Collections
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-amber-800 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/gifting"
                  className="text-gray-700 hover:text-amber-800 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gifting
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-amber-800 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <CartDrawer />
    </>
  );
}