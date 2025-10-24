'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const id = searchParams.get('orderId');
    if (id) {
      setOrderId(id);
    } else {
      router.push('/');
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={48} />
            </div>

            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-2">
              Thank you for your purchase. Your order has been confirmed.
            </p>
            {orderId && (
              <p className="text-sm text-gray-500 mb-8">
                Order ID: <span className="font-mono font-semibold">{orderId}</span>
              </p>
            )}

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Package size={20} className="text-amber-800" />
                What's Next?
              </h3>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-semibold text-amber-800">1.</span>
                  <span>You will receive an order confirmation email shortly.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-amber-800">2.</span>
                  <span>We will start preparing your order within 1-2 business days.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-amber-800">3.</span>
                  <span>Your order will be shipped within 3-7 business days.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-amber-800">4.</span>
                  <span>Track your order using the tracking number we'll send you.</span>
                </li>
              </ol>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Truck size={16} />
                <span>Free Delivery</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>7-Day Returns</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-amber-800 hover:bg-amber-900">
                <Link href="/">Continue Shopping</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  Contact Us on WhatsApp
                </a>
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-8">
              Need help? Contact us at hello@saanjhbykashish.in or call +91 98765 43210
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}