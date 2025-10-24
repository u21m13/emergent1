# Saanjh by Kashish - E-Commerce Website

**"from Indian looms to luxe bedrooms"**

A mobile-first luxury e-commerce website for Saanjh by Kashish, an Indian home textiles brand specializing in handcrafted bedsheets and quilts from Jaipur.

## Features

### 🏠 Homepage
- Hero section with brand messaging and CTAs
- Featured collections with product cards
- "Why Choose Us" section highlighting brand values
- Brand story with artisan imagery
- Customer reviews and testimonials
- Gifting promotion section
- Blog article previews
- Newsletter signup

### 🛍️ Shopping Experience
- Product catalog with filters and sorting
- Detailed product pages with:
  - Image gallery with thumbnails
  - Size selection
  - Quantity controls
  - Product specifications (material, thread count, weight, etc.)
  - Care instructions
  - Shipping & returns information
  - Related products
  - Sticky add-to-cart bar on mobile
- Shopping cart with add/remove/update quantity
- Mock checkout flow with order confirmation

### 📄 Content Pages
- **About**: Brand story, values, craftsmanship details
- **Collections**: Overview of all product collections
- **Gifting**: Bulk order inquiry form for weddings and corporate events
- **Blog**: Articles about textiles, care tips, and heritage
- **Policies**: Shipping, Returns, Privacy, Terms of Service

### 🛒 E-Commerce Features
- Local state cart management (persists in localStorage)
- Cart drawer with product summary
- Mock payment processing
- Order confirmation page
- Orders stored in MongoDB

### 🎨 Design & UX
- Mobile-first responsive design
- Clean, elegant UI with warm color palette (amber/brown tones)
- Inter font for modern readability
- Trust badges (Made in India, Free Delivery, Easy Returns)
- WhatsApp integration for customer support
- Smooth animations and transitions

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **State Management**: React Context API
- **Icons**: Lucide React

## Project Structure

```
/app
├── app/
│   ├── api/[[...path]]/route.js    # API endpoints
│   ├── about/page.js                # About page
│   ├── blog/page.js                 # Blog listing
│   ├── checkout/
│   │   ├── page.js                  # Checkout form
│   │   └── success/page.js          # Order confirmation
│   ├── collections/
│   │   ├── page.js                  # Collections overview
│   │   └── [handle]/page.js         # Collection products
│   ├── gifting/page.js              # Gifting inquiry
│   ├── policies/[policy]/page.js    # Policy pages
│   ├── products/[handle]/page.js    # Product detail page
│   ├── layout.js                    # Root layout
│   ├── page.js                      # Homepage
│   └── globals.css                  # Global styles
├── components/
│   ├── Header.js                    # Site header
│   ├── Footer.js                    # Site footer
│   ├── CartDrawer.js                # Shopping cart drawer
│   └── ProductCard.js               # Product card component
├── contexts/
│   └── CartContext.js               # Cart state management
├── public/
│   └── data/
│       ├── products.json            # Product data
│       └── collections.json         # Collection data
└── README.md
```

## Getting Started

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

The application will be available at `http://localhost:3000`

### Environment Variables

Create a `.env` file with the following:

```
MONGO_URL=mongodb://localhost:27017
DB_NAME=saanjh_db
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Product Data

Products are stored in `/public/data/products.json` with the following structure:

```json
{
  "id": "prod-001",
  "title": "Product Name",
  "handle": "product-slug",
  "category": "bedsheets|quilts",
  "collectionId": "collection-id",
  "price": 1199,
  "mrp": 2099,
  "discount": 43,
  "images": ["url1", "url2"],
  "size": "King (108 x 108 inch)",
  "sizeOptions": ["Single", "Double", "King"],
  "material": "100% Pure Cotton",
  "threadCount": "200-300 TC",
  "weight": "1 kg",
  "pillows": "2 Pillow Covers (18 x 27 inch)",
  "contents": "1 Bedsheet + 2 Pillow Covers",
  "care": ["Care instruction 1", "Care instruction 2"],
  "description": "Product description",
  "badges": ["Bestseller", "Made in India"],
  "rating": 4.5,
  "reviewCount": 127,
  "inStock": true
}
```

## API Endpoints

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders` - Get all orders

### Status Check
- `GET /api/status` - Get all status checks
- `POST /api/status` - Create a status check

## Features to Add (Future Enhancements)

- [ ] Real payment gateway integration (Razorpay/Stripe)
- [ ] User authentication and accounts
- [ ] Order tracking
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Product search
- [ ] Email notifications for orders
- [ ] Admin panel for managing products/orders
- [ ] Analytics integration (GA4, Meta Pixel)
- [ ] SEO optimization with sitemap and robots.txt

## Brand Identity

**Brand Name**: Saanjh by Kashish  
**Tagline**: "from Indian looms to luxe bedrooms"  
**Meaning**: सांझ (Saanjh) - the serene twilight hour that brings peace and rest

**Brand Values**:
- Directly from the Factory
- People-first Brand
- Authentic & Transparent
- Heritage Preservation

**Contact**:
- Email: hello@saanjhbykashish.in
- Phone: +91 98765 43210
- WhatsApp: +91 98765 43210

## License

© 2025 Saanjh by Kashish. All rights reserved.
