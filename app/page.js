'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Truck, Heart, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Load products and collections
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error loading products:', err));

    fetch('/data/collections.json')
      .then(res => res.json())
      .then(data => setCollections(data))
      .catch(err => console.error('Error loading collections:', err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1633605015660-b0f2dbad3bf2"
            alt="Luxury Bedroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Saanjh by Kashish
            </h1>
            <p className="text-xl md:text-2xl mb-2 italic">
              from Indian looms to luxe bedrooms
            </p>
            <p className="text-lg mb-8 opacity-90">
              Handcrafted luxury textiles from the heart of Jaipur
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-800 hover:bg-amber-900 text-white"
              >
                <Link href="/collections/king-size-bedsheets">Shop Bedsheets</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur text-white border-white hover:bg-white/20"
              >
                <Link href="/collections/mughal-print-quilts">Shop Quilts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      {collections.map((collection) => {
        const collectionProducts = products.filter(
          p => p.collectionId === collection.id
        ).slice(0, 4);

        if (collectionProducts.length === 0) return null;

        return (
          <section key={collection.id} className="container mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">{collection.title}</h2>
                <p className="text-gray-600">{collection.description}</p>
              </div>
              <Button asChild variant="outline">
                <Link href={`/collections/${collection.handle}`}>
                  View All <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {collectionProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Why Choose Us */}
      <section className="bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Saanjh</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <Truck className="text-amber-800" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Directly from the Factory</h3>
                <p className="text-gray-600">
                  No middlemen. Premium quality textiles directly from our Jaipur workshop to your doorstep at unbeatable prices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="text-amber-800" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">People-first Brand</h3>
                <p className="text-gray-600">
                  Supporting local artisans and their families. Every purchase empowers traditional craftspeople and preserves heritage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <Shield className="text-amber-800" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentic & Transparent</h3>
                <p className="text-gray-600">
                  100% authentic handcrafted products. What you see is what you get - no hidden costs or compromises on quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1527650003412-4c330a38fdf5"
              alt="Artisan Block Printing"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Saanjh</h2>
            <p className="text-gray-600 mb-4 italic">
              सांझ - the serene twilight hour that brings peace and rest
            </p>
            <p className="text-gray-700 mb-4">
              Saanjh by Kashish brings you authentic handcrafted textiles straight from the looms of Jaipur. Our journey began with a simple vision: to preserve the rich heritage of traditional Indian block printing while making it accessible to modern homes.
            </p>
            <p className="text-gray-700 mb-4">
              Each piece is carefully crafted by skilled artisans who have inherited their craft through generations. We work directly with these master craftspeople, ensuring fair wages and sustainable practices while delivering uncompromising quality to your bedroom.
            </p>
            <p className="text-gray-700 mb-6">
              From selecting the finest cotton to hand-printing intricate Mughal and Paisley patterns, every step reflects our commitment to authenticity and excellence.
            </p>
            <Button asChild className="bg-amber-800 hover:bg-amber-900">
              <Link href="/about">Read Our Full Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Priya Sharma',
                rating: 5,
                text: 'Absolutely stunning bedsheets! The quality is exceptional and the prints are so vibrant. Worth every rupee.',
                product: 'Opium King Size Bedsheet',
              },
              {
                name: 'Rajesh Kumar',
                rating: 5,
                text: 'Bought the Mughal quilt for winter and it\'s incredibly warm yet lightweight. The craftsmanship is evident in every stitch.',
                product: 'Mughal Print Quilt',
              },
              {
                name: 'Anjali Mehta',
                rating: 5,
                text: 'Love supporting authentic brands! The block print patterns are gorgeous and the cotton quality is superb.',
                product: 'Floral Double Bedsheet',
              },
            ].map((review, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">&quot;{review.text}&quot;</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.product}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gifting Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Perfect for Gifting</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Looking for bulk orders for weddings or corporate gifting? We offer special packages with customization options. Get in touch to discuss your requirements.
          </p>
          <Button asChild size="lg" className="bg-amber-800 hover:bg-amber-900">
            <Link href="/gifting">Explore Gifting Options</Link>
          </Button>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">From Our Blog</h2>
          <Button asChild variant="outline">
            <Link href="/blog">View All Articles <ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Jaipuri Razai: Your Winter Essential',
              excerpt: 'Discover why traditional Jaipuri quilts are the perfect choice for cozy winter nights...',
              image: 'https://images.unsplash.com/photo-1720700955550-0b3bbe66b093',
              date: 'Dec 15, 2024',
            },
            {
              title: 'Block Printing 101: An Ancient Craft',
              excerpt: 'Learn about the centuries-old art of block printing and how it creates unique patterns...',
              image: 'https://images.unsplash.com/photo-1748327219221-8c56726d6f75',
              date: 'Nov 28, 2024',
            },
            {
              title: 'Care Guide for 100% Cotton Bedsheets',
              excerpt: 'Keep your premium cotton bedsheets fresh and vibrant with these simple care tips...',
              image: 'https://images.unsplash.com/photo-1745313452052-0e4e341f326c',
              date: 'Nov 10, 2024',
            },
          ].map((post, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <Link href="/blog" className="text-amber-800 hover:text-amber-900 text-sm font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}