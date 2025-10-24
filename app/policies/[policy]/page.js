'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PolicyPage() {
  const params = useParams();
  const policy = params.policy;

  const policies = {
    shipping: {
      title: 'Shipping Policy',
      content: [
        {
          heading: 'Free Shipping',
          text: 'We offer free shipping on all orders across India. No minimum order value required.',
        },
        {
          heading: 'Processing Time',
          text: 'Orders are processed within 1-2 business days. You will receive a confirmation email once your order is shipped.',
        },
        {
          heading: 'Delivery Time',
          text: 'Standard delivery takes 3-7 business days depending on your location. Metro cities typically receive orders within 3-5 days, while remote areas may take up to 7 days.',
        },
        {
          heading: 'Tracking',
          text: 'Once your order is shipped, you will receive a tracking number via email and SMS to track your package.',
        },
        {
          heading: 'Issues with Delivery',
          text: 'If you face any issues with delivery or have not received your order within the estimated time, please contact us at hello@saanjhbykashish.in or call +91 98765 43210.',
        },
      ],
    },
    returns: {
      title: 'Returns & Exchange Policy',
      content: [
        {
          heading: '7-Day Return Policy',
          text: 'We offer a 7-day return and exchange policy from the date of delivery. Products must be unused, unwashed, and in their original packaging with all tags intact.',
        },
        {
          heading: 'How to Initiate a Return',
          text: 'Contact us at hello@saanjhbykashish.in or WhatsApp +91 98765 43210 with your order number and reason for return. Our team will guide you through the process.',
        },
        {
          heading: 'Return Shipping',
          text: 'Return shipping costs are borne by the customer unless the product received is defective or incorrect.',
        },
        {
          heading: 'Refund Process',
          text: 'Once we receive and inspect the returned product, your refund will be processed within 5-7 business days to the original payment method.',
        },
        {
          heading: 'Exchange',
          text: 'Exchanges are subject to product availability. If you wish to exchange an item, please contact us and we will arrange for a replacement.',
        },
        {
          heading: 'Non-Returnable Items',
          text: 'Customized or personalized products cannot be returned or exchanged unless they are defective.',
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      content: [
        {
          heading: 'Information We Collect',
          text: 'We collect personal information such as name, email, phone number, and shipping address when you place an order or sign up for our newsletter.',
        },
        {
          heading: 'How We Use Your Information',
          text: 'Your information is used to process orders, communicate order status, provide customer support, and send promotional emails (only if you have opted in).',
        },
        {
          heading: 'Data Security',
          text: 'We implement industry-standard security measures to protect your personal information. Your payment details are processed through secure payment gateways and are never stored on our servers.',
        },
        {
          heading: 'Third-Party Sharing',
          text: 'We do not sell or share your personal information with third parties except for trusted service providers who assist us in operating our website and conducting our business (e.g., payment processors, shipping companies).',
        },
        {
          heading: 'Cookies',
          text: 'Our website uses cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings, but this may affect website functionality.',
        },
        {
          heading: 'Your Rights',
          text: 'You have the right to access, update, or delete your personal information. Contact us at hello@saanjhbykashish.in for any requests.',
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      content: [
        {
          heading: 'Use of Website',
          text: 'By accessing and using this website, you accept and agree to be bound by these terms and conditions.',
        },
        {
          heading: 'Product Information',
          text: 'We strive to provide accurate product descriptions and images. However, slight variations in color and pattern may occur due to the handcrafted nature of our products and screen display differences.',
        },
        {
          heading: 'Pricing',
          text: 'All prices are listed in Indian Rupees (INR) and include applicable taxes. We reserve the right to change prices without prior notice.',
        },
        {
          heading: 'Payment',
          text: 'We accept various payment methods including credit/debit cards, UPI, net banking, and digital wallets. Payment must be received in full before order processing.',
        },
        {
          heading: 'Order Cancellation',
          text: 'You may cancel your order within 24 hours of placement for a full refund. After 24 hours, if your order has been processed, cancellation may not be possible.',
        },
        {
          heading: 'Intellectual Property',
          text: 'All content on this website, including images, text, and logos, is the property of Saanjh by Kashish and is protected by copyright laws.',
        },
        {
          heading: 'Limitation of Liability',
          text: 'Saanjh by Kashish shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.',
        },
        {
          heading: 'Contact',
          text: 'For any questions regarding these terms, please contact us at hello@saanjhbykashish.in',
        },
      ],
    },
  };

  const currentPolicy = policies[policy] || policies.shipping;

  return (
    <div className=\"min-h-screen bg-white\">
      <Header />

      <div className=\"container mx-auto px-4 py-16\">
        <Card className=\"max-w-4xl mx-auto\">
          <CardHeader>
            <CardTitle className=\"text-3xl\">{currentPolicy.title}</CardTitle>
          </CardHeader>
          <CardContent className=\"space-y-6\">
            {currentPolicy.content.map((section, idx) => (
              <div key={idx}>
                <h3 className=\"text-lg font-semibold mb-2\">{section.heading}</h3>
                <p className=\"text-gray-700 leading-relaxed\">{section.text}</p>
              </div>
            ))}

            <div className=\"mt-8 pt-6 border-t\">
              <p className=\"text-sm text-gray-600\">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className=\"text-sm text-gray-600 mt-2\">
                For questions or concerns, contact us at{' '}
                <a href=\"mailto:hello@saanjhbykashish.in\" className=\"text-amber-800 hover:underline\">
                  hello@saanjhbykashish.in
                </a>{' '}
                or call +91 98765 43210
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
