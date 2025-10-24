'use client';

import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-2">Stay Connected</h3>
          <p className="text-gray-600 mb-4">Subscribe to our newsletter for exclusive offers and updates</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="bg-amber-800 hover:bg-amber-900">Subscribe</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-amber-800">Saanjh</span>
              <span className="text-gray-600"> by Kashish</span>
            </h3>
            <p className="text-sm text-gray-600 italic mb-4">
              from Indian looms to luxe bedrooms
            </p>
            <p className="text-sm text-gray-600">
              Authentic handcrafted textiles from the heart of Jaipur, bringing traditional Indian craftsmanship to your home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/collections/all" className="text-gray-600 hover:text-amber-800">Shop All</Link></li>
              <li><Link href="/collections" className="text-gray-600 hover:text-amber-800">Collections</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-amber-800">About Us</Link></li>
              <li><Link href="/gifting" className="text-gray-600 hover:text-amber-800">Gifting</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-amber-800">Blog</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/policies/shipping" className="text-gray-600 hover:text-amber-800">Shipping Policy</Link></li>
              <li><Link href="/policies/returns" className="text-gray-600 hover:text-amber-800">Returns & Exchange</Link></li>
              <li><Link href="/policies/privacy" className="text-gray-600 hover:text-amber-800">Privacy Policy</Link></li>
              <li><Link href="/policies/terms" className="text-gray-600 hover:text-amber-800">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <a href="mailto:hello@saanjhbykashish.in" className="hover:text-amber-800">
                  hello@saanjhbykashish.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <a href="tel:+919876543210" className="hover:text-amber-800">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2025 Saanjh by Kashish. All rights reserved. Made with ❤️ in Jaipur, India.</p>
        </div>
      </div>
    </footer>
  );
}