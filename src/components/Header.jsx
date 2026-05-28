
// 'use client';

// import { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image'; // Next.js Image component import kiya
// import { FaBars, FaTimes, FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Services', path: '/services' },
//     { name: 'Products', path: '/products' },
//     {name: 'technologies', path: '/technologies'},
//     { name: 'About Us', path: '/about' },
//     { name: 'Careers', path: '/careers' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white/95 backdrop-blur-md shadow-lg h-16' 
//           : 'bg-white h-20'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
//         <div className="flex justify-between items-center h-full">
//           {/* Logo Section */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
//               <Image 
//                 src="/Softnexis_logo.png" // Public folder se path
//                 alt="Softnexis Gentech Logo"
//                 width={250} // Logo ki width
//                 height={80} // Logo ki height
//                 priority // Page load hote hi turant load karne ke liye
//                 className="object-contain"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link 
//                 key={link.name}
//                 href={link.path}
//                 className={`text-sm font-medium transition-colors duration-300 ${
//                   pathname === link.path 
//                     ? 'text-primary font-semibold border-b-2 border-primary' 
//                     : 'text-text-muted hover:text-primary'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop CTA Button */}
//           <div className="hidden md:flex items-center">
//             <Link 
//               href="/schedule-demo"
//               className="bg-linear-to-r from-secondary to-accent text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all flex items-center"
//             >
//               <FaCalendarAlt className="mr-2" /> Schedule Demo
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center space-x-4">
//             <Link 
//               href="/schedule-demo"
//               className="bg-linear-to-r from-secondary to-accent text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md"
//             >
//               Demo
//             </Link>
//             <button 
//               onClick={toggleMobileMenu}
//               className="text-primary hover:text-accent transition-colors duration-300"
//               aria-label="Toggle mobile menu"
//             >
//               {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div 
//           className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
//             isMobileMenuOpen ? 'max-h-screen opacity-100 shadow-xl' : 'max-h-0 opacity-0'
//           }`}
//         >
//           <nav className="py-4 px-6 space-y-2">
//             {navLinks.map((link) => (
//               <Link 
//                 key={link.name}
//                 href={link.path}
//                 onClick={closeMobileMenu}
//                 className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors duration-300 ${
//                   pathname === link.path 
//                     ? 'bg-light text-primary' 
//                     : 'text-muted hover:bg-light hover:text-primary'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
            
//             {/* Mobile Contact Info */}
//             <div className="pt-4 border-t border-light space-y-4">
//               <a 
//                 href="mailto:contact@softnexis.in" 
//                 className="flex items-center text-sm text-muted hover:text-primary transition-colors"
//               >
//                 <FaEnvelope className="mr-3 text-secondary" />
//                 contact@softnexis.in
//               </a>
//               <a 
//                 href="tel:+918810338523" 
//                 className="flex items-center text-sm text-muted hover:text-primary transition-colors"
//               >
//                 <FaPhone className="mr-3 text-secondary" />
//                 +91 8810338523
//               </a>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg h-16 md:h-18' 
          : 'bg-white h-20 md:h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full gap-4">
          
          {/* Logo Section - Responsive Scaling */}
          <div className="flex-shrink-0 relative w-[180px] sm:w-[220px] md:w-[250px]">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image 
                src="/Softnexis_logo.png"
                alt="Softnexis Gentech Logo"
                width={250}
                height={80}
                priority
                className="object-contain w-full h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on Mobile/Tablet (Small/Medium) */}
          <nav className="hidden lg:flex items-center xl:space-x-8 lg:space-x-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path}
                className={`text-sm xl:text-base font-medium transition-colors duration-300 whitespace-nowrap ${
                  pathname === link.path 
                    ? 'text-primary font-semibold border-b-2 border-primary' 
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button - Responsive Visibility */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/schedule-demo"
              className="bg-gradient-to-r from-secondary to-accent text-white lg:px-4 xl:px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center text-sm xl:text-base whitespace-nowrap"
            >
              <FaCalendarAlt className="mr-2" /> Schedule Demo
            </Link>
          </div>

          {/* Mobile/Tablet Controls (Visible below Large breakpoint) */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">
            <Link 
              href="/schedule-demo"
              className="bg-gradient-to-r from-secondary to-accent text-white px-3 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm shadow-md whitespace-nowrap"
            >
              Demo
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className="text-primary hover:text-accent p-2 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>
          </div>
        </div>

        {/* Fullscreen Mobile/Tablet Navigation Overlay */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 overflow-y-auto transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
            isMobileMenuOpen 
              ? 'max-h-[calc(100vh-64px)] opacity-100 shadow-2xl pb-8' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="py-4 px-4 sm:px-8 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path}
                onClick={closeMobileMenu}
                className={`block py-3.5 px-4 rounded-xl text-lg font-medium transition-all ${
                  pathname === link.path 
                    ? 'bg-blue-50 text-primary' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Contact Info Section */}
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-5 px-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contact Support</p>
              <a 
                href="mailto:contact@softnexis.in" 
                className="flex items-center text-base text-gray-600 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                  <FaEnvelope className="text-secondary" />
                </div>
                contact@softnexis.in
              </a>
              <a 
                href="tel:+918810338523" 
                className="flex items-center text-base text-gray-600 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center mr-4">
                  <FaPhone className="text-secondary" />
                </div>
                +91 8810338523
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}