'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, ShoppingCart, Heart, Share2, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    // Load product data
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(p => p.handle === params.handle);
        if (foundProduct) {
          setProduct(foundProduct);
          if (foundProduct.sizeOptions && foundProduct.sizeOptions.length > 0) {
            setSelectedSize(foundProduct.sizeOptions[0]);
          }
          // Get related products
          const related = data
            .filter(p => p.collectionId === foundProduct.collectionId && p.id !== foundProduct.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      })
      .catch(err => console.error('Error loading product:', err));

    // Sticky add to cart bar
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [params.handle]);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">Loading...</div>
        <Footer />
      </div>
    );
  }

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
        <Link href="/" className="hover:text-amber-800">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collections" className="hover:text-amber-800">Collections</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.title}</span>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.images?.[selectedImage] || '/placeholder.png'}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images?.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-md overflow-hidden border-2 ${
                    selectedImage === idx ? 'border-amber-800' : 'border-gray-200'
                  }`}
                >
                  <Image src={image} alt={`${product.title} ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              {product.badges?.map(badge => (
                <Badge key={badge} variant="secondary" className="mr-2">
                  {badge}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold">{formatCurrency(product.price)}</span>
              {product.mrp && product.mrp > product.price && (
                <>
                  <span className="text-xl text-gray-500 line-through">{formatCurrency(product.mrp)}</span>
                  <Badge className="bg-red-600 text-white">{product.discount}% OFF</Badge>
                </>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Inclusive of all taxes. <span className="font-semibold">Free delivery in India.</span>
            </p>

            <Separator className="my-6" />

            {/* Size Selection */}
            {product.sizeOptions && product.sizeOptions.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Size: {selectedSize}</label>
                <div className="flex gap-2">
                  {product.sizeOptions.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md text-sm ${
                        selectedSize === size
                          ? 'border-amber-800 bg-amber-50 text-amber-800'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border rounded-md hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border rounded-md hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 mb-6">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-amber-800 hover:bg-amber-900"
                size="lg"
              >
                <ShoppingCart className="mr-2" size={20} />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart size={20} />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 size={20} />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-stone-50 rounded-md">
                <Truck className="mx-auto mb-2 text-amber-800" size={24} />
                <p className="text-xs font-medium">Free Delivery</p>
              </div>
              <div className="text-center p-3 bg-stone-50 rounded-md">
                <RotateCcw className="mx-auto mb-2 text-amber-800" size={24} />
                <p className="text-xs font-medium">7-Day Returns</p>
              </div>
              <div className="text-center p-3 bg-stone-50 rounded-md">
                <span className="block text-2xl mb-2">🇮🇳</span>
                <p className="text-xs font-medium">Made in India</p>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Product Specs */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Size:</span>
                <span className="font-medium">{product.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Material:</span>
                <span className="font-medium">{product.material}</span>
              </div>
              {product.threadCount && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Thread Count:</span>
                  <span className="font-medium">{product.threadCount}</span>
                </div>
              )}
              {product.gsm && (
                <div className="flex justify-between">
                  <span className="text-gray-600">GSM:</span>
                  <span className="font-medium">{product.gsm}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Weight:</span>
                <span className="font-medium">{product.weight}</span>
              </div>
              {product.pillows && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Pillow Covers:</span>
                  <span className="font-medium">{product.pillows}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Contents:</span>
                <span className="font-medium">{product.contents}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <h3 className="font-semibold mb-3">Product Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </TabsContent>
            <TabsContent value="care" className="mt-6">
              <h3 className="font-semibold mb-3">Care Instructions</h3>
              <ul className="space-y-2">
                {product.care?.map((instruction, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-800 mt-1">•</span>
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Shipping</h3>
                  <p className="text-gray-700">{product.shipping}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Returns & Exchange</h3>
                  <p className="text-gray-700">{product.returns}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Add to Cart Bar (Mobile) */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-40 md:hidden">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="font-semibold">{formatCurrency(product.price)}</p>
              {product.mrp && product.mrp > product.price && (
                <p className="text-sm text-gray-500 line-through">{formatCurrency(product.mrp)}</p>
              )}
            </div>
            <Button onClick={handleAddToCart} className="bg-amber-800 hover:bg-amber-900">
              <ShoppingCart className="mr-2" size={16} />
              Add to Cart
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}