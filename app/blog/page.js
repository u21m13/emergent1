import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Jaipuri Razai: Your Winter Essential',
      excerpt: 'Discover why traditional Jaipuri quilts are the perfect choice for cozy winter nights. Learn about the unique craftsmanship and materials that make these quilts special.',
      content: 'As winter approaches, there\'s nothing quite like snuggling under a traditional Jaipuri razai...',
      image: 'https://images.unsplash.com/photo-1720700955550-0b3bbe66b093',
      date: 'December 15, 2024',
      author: 'Kashish',
      category: 'Product Guide',
    },
    {
      id: 2,
      title: 'Block Printing 101: An Ancient Craft',
      excerpt: 'Learn about the centuries-old art of block printing and how it creates unique patterns on fabric. Meet the master artisans who keep this tradition alive.',
      content: 'Block printing is one of the oldest forms of textile printing in India...',
      image: 'https://images.unsplash.com/photo-1748327219221-8c56726d6f75',
      date: 'November 28, 2024',
      author: 'Kashish',
      category: 'Craftsmanship',
    },
    {
      id: 3,
      title: 'Care Guide for 100% Cotton Bedsheets',
      excerpt: 'Keep your premium cotton bedsheets fresh and vibrant with these simple care tips. Learn the do\'s and don\'ts of washing and maintaining handcrafted textiles.',
      content: 'Proper care ensures your handcrafted bedsheets last for years...',
      image: 'https://images.unsplash.com/photo-1745313452052-0e4e341f326c',
      date: 'November 10, 2024',
      author: 'Kashish',
      category: 'Care Tips',
    },
    {
      id: 4,
      title: 'The Story Behind Mughal Print Patterns',
      excerpt: 'Explore the rich history of Mughal print designs and their influence on modern Indian textiles. Discover the symbolism in traditional motifs.',
      content: 'Mughal prints draw inspiration from the grandeur of Mughal architecture and art...',
      image: 'https://images.unsplash.com/photo-1720700956353-3e2b39b0b261',
      date: 'October 22, 2024',
      author: 'Kashish',
      category: 'Heritage',
    },
    {
      id: 5,
      title: 'Choosing the Right Thread Count',
      excerpt: 'Understand thread count and what it means for your bedsheets. Learn how to choose the perfect bedsheet based on your comfort preferences.',
      content: 'Thread count is often misunderstood. Here\'s what really matters...',
      image: 'https://images.unsplash.com/photo-1702590447351-28395dfef0a1',
      date: 'October 5, 2024',
      author: 'Kashish',
      category: 'Buying Guide',
    },
    {
      id: 6,
      title: 'Supporting Artisans: Our Commitment',
      excerpt: 'Learn how Saanjh by Kashish works directly with artisans to ensure fair wages and preserve traditional crafts for future generations.',
      content: 'Every purchase you make supports the livelihoods of skilled artisans...',
      image: 'https://images.unsplash.com/photo-1527650003412-4c330a38fdf5',
      date: 'September 18, 2024',
      author: 'Kashish',
      category: 'Our Mission',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stories, tips, and insights about Indian textiles, craftsmanship, and home decor
          </p>
        </div>

        {/* Featured Post */}
        <Card className="overflow-hidden mb-12 hover:shadow-xl transition-shadow">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto">
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge className="mb-3 w-fit">{posts[0].category}</Badge>
              <h2 className="text-3xl font-bold mb-3">{posts[0].title}</h2>
              <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {posts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {posts[0].author}
                </span>
              </div>
              <Button className="w-fit bg-amber-800 hover:bg-amber-900">
                Read More <ArrowRight className="ml-2" size={16} />
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3" variant="secondary">{post.category}</Badge>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-800 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-amber-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Get the latest updates on new collections, exclusive offers, and textile care tips delivered to your inbox.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
            <Button className="bg-amber-800 hover:bg-amber-900">Subscribe</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}