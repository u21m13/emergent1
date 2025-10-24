import Image from 'next/image';
import { Heart, Users, Award, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1648113140562-dfd9afe14abd"
            alt="Traditional Jaipur Bedroom"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">About Saanjh by Kashish</h1>
            <p className="text-xl italic">from Indian looms to luxe bedrooms</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>सांझ (Saanjh)</strong> - the serene twilight hour that brings peace and rest. It's this tranquility that inspired our brand name, representing the comfort and calmness we bring to your bedrooms.
            </p>
            <p>
              Founded by Kashish in the heart of Jaipur, Rajasthan, Saanjh by Kashish was born from a deep love for traditional Indian craftsmanship and a vision to make authentic handcrafted textiles accessible to modern Indian homes.
            </p>
            <p>
              Growing up surrounded by the rich heritage of Jaipur's textile industry, I witnessed firsthand the incredible skill of our local artisans—masters of block printing, weaving, and dyeing who have inherited their craft through generations. Yet, I also saw how middlemen often prevented these artisans from receiving fair compensation for their work.
            </p>
            <p>
              Saanjh by Kashish bridges this gap. We work directly with skilled artisans and their families, ensuring they receive fair wages and recognition for their extraordinary craftsmanship. Every bedsheet, every quilt, every piece you purchase directly supports these artisans and helps preserve centuries-old traditions.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="text-amber-800" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Artisan-First</h3>
                <p className="text-sm text-gray-600">
                  We put our artisans first, ensuring fair wages and sustainable livelihoods for their families.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="text-amber-800" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Authentic Quality</h3>
                <p className="text-sm text-gray-600">
                  100% authentic handcrafted products using premium materials and traditional techniques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="text-amber-800" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">
                  Direct from factory to your home. No hidden costs, no compromises on quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sparkles className="text-amber-800" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Heritage Preservation</h3>
                <p className="text-sm text-gray-600">
                  Keeping alive the centuries-old traditions of Indian block printing and weaving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Craftsmanship Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1527650003412-4c330a38fdf5"
                alt="Artisan Block Printing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">The Art of Block Printing</h2>
              <p className="text-gray-700 mb-4">
                Block printing is an ancient Indian art form that dates back over 400 years. Each design is carefully carved into wooden blocks by master craftsmen, then hand-stamped onto fabric using natural dyes.
              </p>
              <p className="text-gray-700 mb-4">
                The process requires incredible precision and patience. A single bedsheet can require hundreds of individual stamps, each placed perfectly to create intricate patterns that flow seamlessly across the fabric.
              </p>
              <p className="text-gray-700">
                This labor-intensive process results in unique pieces where no two items are exactly alike—each bearing the subtle marks of human craftsmanship that make them truly special.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Promise */}
        <div className="bg-amber-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Quality Promise</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            We personally oversee every step of production, from selecting the finest 100% pure cotton to the final quality check. Each product is inspected to ensure it meets our exacting standards before it reaches your home.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">✓ 100% Pure Cotton</h3>
              <p className="text-sm text-gray-600">Sourced from the finest cotton fields, ensuring breathability and comfort.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">✓ Natural Dyes</h3>
              <p className="text-sm text-gray-600">Eco-friendly, azo-free dyes that are safe for you and the environment.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">✓ Handcrafted Excellence</h3>
              <p className="text-sm text-gray-600">Every piece is carefully crafted by skilled artisans with decades of experience.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}