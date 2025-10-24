'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/products/${product.handle}`}>
      <div className="group cursor-pointer">
        <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.images?.[0] || '/placeholder.png'}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.badges && product.badges.length > 0 && (
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="bg-white/90">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          {product.discount && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-red-600 text-white">{product.discount}% OFF</Badge>
            </div>
          )}
          <Button
            onClick={handleQuickAdd}
            size="sm"
            className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-amber-800 hover:bg-amber-900"
          >
            <ShoppingCart size={16} className="mr-1" />
            Quick Add
          </Button>
        </div>

        <div>
          <h3 className="font-medium mb-1 text-sm line-clamp-2">{product.title}</h3>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-lg">{formatCurrency(product.price)}</span>
            {product.mrp && product.mrp > product.price && (
              <span className="text-sm text-gray-500 line-through">{formatCurrency(product.mrp)}</span>
            )}
          </div>
          {product.rating && (
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>⭐ {product.rating}</span>
              <span>({product.reviewCount})</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}