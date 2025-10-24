'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // Save order to backend
      fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: formData,
          items: cart,
          total: cartTotal,
          orderDate: new Date().toISOString(),
        }),
      })
        .then(res => res.json())
        .then(data => {
          clearCart();
          router.push(`/checkout/success?orderId=${data.orderId}`);
        })
        .catch(err => {
          console.error('Error creating order:', err);
          alert('There was an error processing your order. Please try again.');
          setIsProcessing(false);
        });
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Button asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div>
                    <h3 className="font-semibold mb-4">Payment Method</h3>
                    <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                      <p className="text-sm text-amber-900">
                        👋 This is a demo checkout. Your order will be recorded but no actual payment will be processed.
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-800 hover:bg-amber-900"
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Complete Order'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                        <Image
                          src={item.images?.[0] || '/placeholder.png'}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">{item.title}</h4>
                        {item.selectedSize && (
                          <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                        )}
                        <p className="text-sm">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-sm font-semibold">
                        {formatCurrency(item.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>{formatCurrency(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(cartTotal)}</span>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-stone-50 rounded-md">
                  <p className="text-xs text-gray-600">
                    ✅ Free delivery across India<br />
                    ✅ 7-day easy returns<br />
                    ✅ 100% authentic handcrafted products
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}