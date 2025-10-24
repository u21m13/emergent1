'use client';

import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartDrawer() {
  const { cart, cartTotal, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push('/checkout');
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {cart.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Button onClick={() => setIsCartOpen(false)}>Continue Shopping</Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 border-b pb-4">
                      <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                        <Image
                          src={item.images?.[0] || '/placeholder.png'}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm mb-1 truncate">{item.title}</h3>
                        {item.selectedSize && (
                          <p className="text-xs text-gray-500 mb-2">Size: {item.selectedSize}</p>
                        )}
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-sm">{formatCurrency(item.price)}</p>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                              className="p-1 rounded-md border hover:bg-gray-100"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                              className="p-1 rounded-md border hover:bg-gray-100"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="text-gray-400 hover:text-red-500 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span>{formatCurrency(cartTotal)}</span>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-amber-800 hover:bg-amber-900"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
                <Button
                  onClick={() => setIsCartOpen(false)}
                  variant="outline"
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}