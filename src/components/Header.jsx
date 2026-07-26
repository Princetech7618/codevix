
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
//                 src="/Codevix_logo.png" // Public folder se path
//                 alt="Codevix Logo"
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
//                 href="mailto:contact@codevix.com" 
//                 className="flex items-center text-sm text-muted hover:text-primary transition-colors"
//               >
//                 <FaEnvelope className="mr-3 text-secondary" />
//                 contact@codevix.com
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
    // { name: 'Products', path: '/products' },
    // { name: 'Technologies', path: '/technologies' },
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
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full">
  <div className="flex items-center justify-between h-full">

    {/* Logo */}
    <div className="flex-shrink-0">
      <Link href="/" onClick={closeMobileMenu}>
        <Image
          src="/logo.png"
          alt="Codevix Logo"
          width={220}
          height={70}
          priority
          className="h-12 md:h-14 lg:h-16 w-auto object-contain"
        />
      </Link>
    </div>

    {/* Desktop Navigation */}
    <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`text-[15px] font-medium transition-all duration-300 ${
            pathname === link.path
              ? "text-primary border-b-2 border-primary pb-1"
              : "text-gray-700 hover:text-primary"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>

    {/* Desktop Button */}
    <div className="hidden lg:flex flex-shrink-0">
      <Link
        href="/schedule-demo"
        className="bg-gradient-to-r from-secondary to-accent text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center"
      >
        <FaCalendarAlt className="mr-2" />
        Schedule Demo
      </Link>
    </div>

    {/* Mobile Controls */}
    <div className="lg:hidden flex items-center gap-3">
      <Link
        href="/schedule-demo"
        className="bg-gradient-to-r from-secondary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold"
      >
        Demo
      </Link>

      <button
        onClick={toggleMobileMenu}
        className="text-primary"
      >
        {isMobileMenuOpen ? (
          <FaTimes size={26} />
        ) : (
          <FaBars size={26} />
        )}
      </button>
    </div>

  </div>

  {/* Mobile Menu */}
  <div
    className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${
      isMobileMenuOpen
        ? "max-h-screen opacity-100"
        : "max-h-0 opacity-0 overflow-hidden"
    }`}
  >
    <nav className="flex flex-col py-6">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          onClick={closeMobileMenu}
          className={`px-6 py-4 text-lg ${
            pathname === link.path
              ? "text-primary font-semibold bg-blue-50"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          {link.name}
        </Link>
      ))}

      <div className="border-t mt-4 pt-4 px-6">
        <a
          href="mailto:contact@codevix.com"
          className="flex items-center gap-3 py-3 text-gray-700"
        >
          <FaEnvelope />
          contact@codevix.com
        </a>

        <a
          href="tel:+918810338523"
          className="flex items-center gap-3 py-3 text-gray-700"
        >
          <FaPhone />
          +91 8810338523
        </a>
      </div>
    </nav>
  </div>
</div>
    </header>
  );
}