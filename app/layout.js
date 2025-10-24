import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Saanjh by Kashish - Luxury Indian Home Textiles',
  description: 'From Indian looms to luxe bedrooms. Premium bedsheets and quilts handcrafted in Jaipur with authentic block printing.',
  keywords: 'Indian bedsheets, Jaipur quilts, block print bedding, razai, mughal print, cotton bedsheets',
  openGraph: {
    title: 'Saanjh by Kashish - Luxury Indian Home Textiles',
    description: 'From Indian looms to luxe bedrooms',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Saanjh by Kashish',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Saanjh by Kashish',
              url: 'https://saanjhbykashish.in',
              logo: 'https://saanjhbykashish.in/logo.png',
              description: 'From Indian looms to luxe bedrooms',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'Rajasthan',
                addressLocality: 'Jaipur',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}