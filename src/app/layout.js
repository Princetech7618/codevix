
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

export const metadata = {
  title: 'Softnexis Gentech | Custom SaaS, Python, Django & Java Spring Boot Solutions',
  description: 'Softnexis Gentech delivers high-performance IT solutions: Custom SaaS, Python Django web apps, Java Spring Boot backends, and React.js interfaces. Experts in Multi-tenant CRM, Fintech, and Enterprise systems.',
  keywords: [
    // Core Business & Services (Broad Target)
    'Softnexis Gentech','Softnexis', 'IT services India', 'software development company', 'web development agency', 
    'mobile app development', 'managed IT services', 'IT consulting company', 'enterprise IT solutions',

    // Technology Stack (Developer & Tech Search)
    'Java Spring Boot developers', 'Python Django web development', 'Flask framework experts', 
    'MERN stack development', 'React.js frontend solutions', 'Full-stack software engineering', 
    'REST API development', 'Microservices architecture', 'AWS cloud deployment',

    // Project-Specific & Niche Solutions (High Intent)
    'Multi-tenant SaaS Travel CRM', 'Hospital Management System software', 'School Management ERP', 
    'Warehouse Management System inventory', 'Fintech payment gateway integration', 
    'Swiftopay fintech solutions', 'Real-time Task Management platform', 'Inventory tracking software',

    // Business-Specific Long-tail Keywords
    'Custom CRM for travel agencies', 'Automated school administration platform', 
    'Scalable cloud applications for startups', 'Enterprise-grade database optimization', 
    'Secure multi-tenant database architecture', 'Professional IT outsourcing India'
  ],
  authors: [{ name: 'Softnexis Gentech' }],
  metadataBase: new URL('https://softnexis.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Softnexis Gentech | Innovating with Java, Python & React.js',
    description: 'Empowering businesses with scalable SaaS, Fintech, and Enterprise software. Specializing in high-performance cloud applications and custom IT consulting.',
    url: 'https://softnexis.in',
    siteName: 'Softnexis Gentech',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Softnexis Gentech - Leading Software Development Partner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softnexis Gentech | Custom Software & Cloud Solutions',
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