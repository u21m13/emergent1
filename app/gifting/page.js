'use client';

import { useState } from 'react';
import { Gift, Building2, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GiftingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    occasion: '',
    quantity: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here you would send to backend
    console.log('Gifting inquiry:', formData);
    
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        occasion: '',
        quantity: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gifting Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Make your special occasions memorable with handcrafted luxury textiles from Jaipur
          </p>
        </div>

        {/* Gifting Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart className="text-pink-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wedding Gifting</h3>
              <p className="text-gray-600 mb-4">
                Elegant bedsheets and quilts perfect for wedding favors and trousseau gifting.
              </p>
              <ul className="text-sm text-gray-600 text-left space-y-1">
                <li>• Minimum order: 50 pieces</li>
                <li>• Custom packaging available</li>
                <li>• Bulk pricing discounts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Building2 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Corporate Gifting</h3>
              <p className="text-gray-600 mb-4">
                Premium textiles for employee appreciation, client gifts, and festive occasions.
              </p>
              <ul className="text-sm text-gray-600 text-left space-y-1">
                <li>• Minimum order: 25 pieces</li>
                <li>• Customization options</li>
                <li>• Pan-India delivery</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <Gift className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Festival Gifting</h3>
              <p className="text-gray-600 mb-4">
                Thoughtful gifts for Diwali, Holi, and other special celebrations.
              </p>
              <ul className="text-sm text-gray-600 text-left space-y-1">
                <li>• Flexible minimum orders</li>
                <li>• Festival-themed packaging</li>
                <li>• Quick turnaround</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="bg-stone-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us for Bulk Orders?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold mb-1">Best Prices</h3>
              <p className="text-sm text-gray-600">Direct factory pricing with volume discounts</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="font-semibold mb-1">Premium Quality</h3>
              <p className="text-sm text-gray-600">100% handcrafted authentic products</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold mb-1">Customization</h3>
              <p className="text-sm text-gray-600">Custom packaging and design options</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-semibold mb-1">Timely Delivery</h3>
              <p className="text-sm text-gray-600">Reliable delivery across India</p>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                <Sparkles className="inline-block mr-2 text-amber-800" size={28} />
                Request a Quote
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company/Organization (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="occasion">Occasion *</Label>
                      <Input
                        id="occasion"
                        name="occasion"
                        placeholder="e.g., Wedding, Corporate Event"
                        value={formData.occasion}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="quantity">Approximate Quantity *</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        placeholder="e.g., 50-100 pieces"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements, preferred designs, delivery timeline, etc."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-800 hover:bg-amber-900"
                    size="lg"
                  >
                    Submit Inquiry
                  </Button>

                  <p className="text-xs text-center text-gray-500">
                    Or reach us directly at <a href="mailto:gifting@saanjhbykashish.in" className="text-amber-800 hover:underline">gifting@saanjhbykashish.in</a> or call +91 98765 43210
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}