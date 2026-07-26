
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

export const metadata = {
  title: 'Codevix | Website Design, SEO & Digital Growth Agency',
  description: 'Codevix is a digital agency focused on website design, SEO, e-commerce, and digital growth solutions for small and medium businesses.',
  keywords: [
    'Codevix', 'website design agency', 'SEO services', 'digital marketing agency',
    'static website development', 'dynamic website development', 'e-commerce websites',
    'landing page design', 'conversion optimization', 'digital growth strategy',
    'content marketing', 'responsive web design', 'Next.js website development',
    'React web development', 'online business growth', 'website maintenance services'
  ],
  authors: [{ name: 'Codevix' }],
  metadataBase: new URL('https://codevix.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Codevix | Innovating with Java, Python & React.js',
    description: 'Empowering businesses with scalable SaaS, Fintech, and Enterprise software. Specializing in high-performance cloud applications and custom IT consulting.',
    url: 'https://codevix.com',
    siteName: 'Codevix',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Codevix - Leading Software Development Partner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codevix | Custom Software & Cloud Solutions',
    description: 'Expert development in Java, Spring Boot, Python, and React.js for modern businesses.',
    images: ['/assets/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-primary">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer/>
        <ScrollToTop />
      </body>
    </html>
  );
}