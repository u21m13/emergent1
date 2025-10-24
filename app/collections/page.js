'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CollectionsPage() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch('/data/collections.json')
      .then(res => res.json())
      .then(data => setCollections(data))
      .catch(err => console.error('Error loading collections:', err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Collections</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of handcrafted bedsheets and quilts from Jaipur
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link key={collection.id} href={`/collections/${collection.handle}`}>
              <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="mb-2 bg-white/20 backdrop-blur">
                      {collection.productCount} Products
                    </Badge>
                    <h2 className="text-2xl font-bold mb-2">{collection.title}</h2>
                    <p className="text-sm opacity-90">{collection.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}