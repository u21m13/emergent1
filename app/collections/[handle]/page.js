'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default function CollectionPage() {
  const params = useParams();
  const [collection, setCollection] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    // Load collection and products
    Promise.all([
      fetch('/data/collections.json').then(res => res.json()),
      fetch('/data/products.json').then(res => res.json()),
    ])
      .then(([collectionsData, productsData]) => {
        const foundCollection = collectionsData.find(c => c.handle === params.handle);
        if (foundCollection) {
          setCollection(foundCollection);
          const collectionProducts = productsData.filter(
            p => p.collectionId === foundCollection.id
          );
          setProducts(collectionProducts);
          setFilteredProducts(collectionProducts);
        } else if (params.handle === 'all') {
          setCollection({
            id: 'all',
            title: 'All Products',
            description: 'Browse our complete collection of handcrafted textiles',
          });
          setProducts(productsData);
          setFilteredProducts(productsData);
        }
      })
      .catch(err => console.error('Error loading collection:', err));
  }, [params.handle]);

  useEffect(() => {
    // Apply sorting
    let sorted = [...filteredProducts];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      case 'new':
        sorted.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        break;
    }
    setFilteredProducts(sorted);
  }, [sortBy]);

  if (!collection) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">Loading...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
        <Link href="/" className="hover:text-amber-800">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{collection.title}</span>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-2">{collection.title}</h1>
          <p className="text-gray-600">{collection.description}</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-600">{filteredProducts.length} products</p>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="new">New Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Highest Discount</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">No products found in this collection.</p>
            <Button asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}