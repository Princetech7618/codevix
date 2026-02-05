

// import Header from "@/components/Header";
// import "./globals.css";
// import Footer from "@/components/Footer";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

export const metadata = {
  title: 'Softnexis Gentech | Smart IT Solutions',
  description: 'Softnexis Gentech - Web Development, App Development, CRM Solutions, Digital Marketing, SEO, Hospital Management, School Management, and more IT services.',
  keywords: 'IT solutions, web development, app development, CRM, digital marketing, SEO, hospital management, school management',
  authors: [{ name: 'Softnexis Gentech' }],
  metadataBase: new URL('https://softnexis.in'),
  openGraph: {
    title: 'Softnexis Gentech | Smart IT Solutions',
    description: 'Leading IT solutions company providing comprehensive software, web, mobile, and digital services.',
    url: 'https://softnexis.in',
    siteName: 'Softnexis Gentech',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Softnexis Gentech Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softnexis Gentech | Smart IT Solutions',
    description: 'Leading IT solutions company providing comprehensive software, web, mobile, and digital services.',
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