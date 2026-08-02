
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaChevronDown,
  FaGlobe,
  FaSearch,
  FaShoppingCart,
  FaLaptopCode,
  FaBullhorn,
  FaCode,
  FaPaintBrush,
} from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const pathname = usePathname();

  /* =========================
     SCROLL EFFECT
  ========================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =========================
     MENU FUNCTIONS
  ========================== */

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  /* =========================
     MAIN NAVIGATION
  ========================== */

  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'Careers',
      path: '/careers',
    },
    {
      name: 'Contact Us',
      path: '/contact',
    },
  ];

  /* =========================
     SERVICES
  ========================== */

  const services = [
    {
      name: 'Web Development',
      path: '/services/web-development',
      icon: FaGlobe,
      description: 'Modern & responsive websites',
    },
    {
      name: 'Software Development',
      path: '/services/software-development',
      icon: FaCode,
      description: 'Custom business software',
    },
    {
      name: 'UI/UX Design',
      path: '/services/ui-ux-design',
      icon: FaPaintBrush,
      description: 'Creative user interfaces',
    },
    {
      name: 'Digital Marketing',
      path: '/services/digital-marketing',
      icon: FaBullhorn,
      description: 'Grow your business online',
    },
    {
      name: 'SEO Services',
      path: '/services/seo-services',
      icon: FaSearch,
      description: 'Boost search visibility',
    },
    {
      name: 'E-Commerce Solutions',
      path: '/services/e-commerce-solutions',
      icon: FaShoppingCart,
      description: 'Powerful online stores',
    },
    {
      name: 'Static Websites',
      path: '/services/static-websites',
      icon: FaLaptopCode,
      description: 'Fast & professional websites',
    },
    {
      name: 'Google & Meta Ads',
      path: '/services/google-meta-ads',
      icon: FaBullhorn,
      description: 'Targeted paid advertising',
    },
  ];

  const isServicesActive =
    pathname === '/services' || pathname.startsWith('/services/');

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'h-16 bg-white/95 shadow-lg backdrop-blur-md md:h-[70px]'
          : 'h-20 bg-white md:h-24'
      }`}
    >
      <div className="mx-auto h-full max-w-full px-4 sm:px-6 lg:px-8">

        {/* =========================
            HEADER INNER
        ========================== */}

        <div className="flex h-full items-center justify-between">

          {/* =========================
              LOGO
          ========================== */}

          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block"
            >
              <Image
                src="/logo.png"
                alt="Codevix Logo"
                width={220}
                height={70}
                priority
                className="h-11 w-auto object-contain sm:h-12 md:h-14 lg:h-16"
              />
            </Link>
          </div>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">

            {/* HOME */}

            <Link
              href="/"
              className={`relative whitespace-nowrap text-[14px] font-medium transition-all duration-300 xl:text-[15px] ${
                pathname === '/'
                  ? 'text-primary'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home

              {pathname === '/' && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary" />
              )}
            </Link>

            {/* =========================
                SERVICES DROPDOWN
            ========================== */}

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setIsServicesOpen((prev) => !prev)
                }
                className={`flex items-center gap-1.5 whitespace-nowrap text-[14px] font-medium transition-all duration-300 xl:text-[15px] ${
                  isServicesActive
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                Services

                <FaChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* =========================
                  COMPACT DROPDOWN
              ========================== */}

              <div
                className={`absolute left-1/2 top-full z-[200] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  isServicesOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0'
                }`}
              >
                <div className="w-[320px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-2.5 shadow-2xl">

                  {/* Dropdown Header */}

                  <div className="mb-1.5 border-b border-gray-100 px-3 pb-2.5 pt-1">

                    <div className="flex items-center justify-between">

                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                          Our Services
                        </h3>

                        <p className="mt-0.5 text-[10px] font-medium text-gray-500">
                          Digital solutions for your business
                        </p>
                      </div>

                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                        <FaCode className="text-xs text-primary" />
                      </div>

                    </div>

                  </div>

                  {/* Services Grid */}

                  <div className="grid grid-cols-2 gap-1">

                    {services.map((service) => {
                      const Icon = service.icon;

                      return (
                        <Link
                          key={service.name}
                          href={service.path}
                          onClick={() => setIsServicesOpen(false)}
                          className={`group/item flex min-h-[60px] items-center gap-2 rounded-xl p-2 transition-all duration-200 ${
                            pathname === service.path
                              ? 'bg-primary/10'
                              : 'hover:bg-gray-50'
                          }`}
                        >

                          {/* Icon */}

                          <div
                            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                              pathname === service.path
                                ? 'bg-primary'
                                : 'bg-primary/10 group-hover/item:bg-primary'
                            }`}
                          >
                            <Icon
                              size={13}
                              className={`transition-colors duration-200 ${
                                pathname === service.path
                                  ? 'text-white'
                                  : 'text-primary group-hover/item:text-white'
                              }`}
                            />
                          </div>

                          {/* Text */}

                          <div className="min-w-0 flex-1">

                            <h4
                              className={`truncate text-[11px] font-semibold leading-4 ${
                                pathname === service.path
                                  ? 'text-primary'
                                  : 'text-gray-800'
                              }`}
                            >
                              {service.name}
                            </h4>

                            <p className="mt-0.5 truncate text-[9px] font-medium leading-3 text-gray-400">
                              {service.description}
                            </p>

                          </div>

                        </Link>
                      );
                    })}

                  </div>

                  {/* View All */}

                  <div className="mt-2 border-t border-gray-100 pt-2">

                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-center justify-center rounded-lg py-2 text-[11px] font-semibold text-primary transition-all duration-200 hover:bg-primary/5"
                    >
                      View All Services
                      <span className="ml-1.5">→</span>
                    </Link>

                  </div>

                </div>
              </div>
            </div>

            {/* OTHER NAVIGATION */}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative whitespace-nowrap text-[14px] font-medium transition-all duration-300 xl:text-[15px] ${
                  pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}

                {pathname === link.path && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary" />
                )}
              </Link>
            ))}

          </nav>

          {/* =========================
              DESKTOP CTA
          ========================== */}

          <div className="hidden flex-shrink-0 lg:flex">

            <Link
              href="/schedule-demo"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl xl:px-6 xl:py-3"
            >
              <FaCalendarAlt size={13} />
              Schedule Demo
            </Link>

          </div>

          {/* =========================
              MOBILE CONTROLS
          ========================== */}

          <div className="flex items-center gap-2 lg:hidden">

            <Link
              href="/schedule-demo"
              className="rounded-full bg-gradient-to-r from-secondary to-accent px-3.5 py-2 text-xs font-semibold text-white shadow-md sm:px-4 sm:text-sm"
            >
              Demo
            </Link>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-primary transition-all hover:bg-primary/5"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FaTimes size={22} />
              ) : (
                <FaBars size={22} />
              )}
            </button>

          </div>

        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}

        <div
          className={`absolute left-0 top-full w-full overflow-hidden border-t border-gray-100 bg-white shadow-2xl transition-all duration-300 lg:hidden ${
            isMobileMenuOpen
              ? 'visible max-h-[calc(100vh-64px)] opacity-100'
              : 'invisible max-h-0 opacity-0'
          }`}
        >
          <nav className="max-h-[calc(100vh-64px)] overflow-y-auto py-2">

            {/* HOME */}

            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`flex items-center px-5 py-3.5 text-sm font-medium transition-all sm:px-6 ${
                pathname === '/'
                  ? 'bg-primary/5 font-semibold text-primary'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>

            {/* =========================
                MOBILE SERVICES
            ========================== */}

            <div className="border-y border-gray-100">

              <button
                type="button"
                onClick={() =>
                  setIsServicesOpen((prev) => !prev)
                }
                className={`flex w-full items-center justify-between px-5 py-3.5 text-sm font-medium sm:px-6 ${
                  isServicesActive
                    ? 'text-primary'
                    : 'text-gray-700'
                }`}
              >
                <span>Services</span>

                <FaChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* MOBILE SERVICES LIST */}

              <div
                className={`overflow-hidden bg-gray-50 transition-all duration-300 ${
                  isServicesOpen
                    ? 'max-h-[420px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >

                <div className="space-y-0.5 px-3 py-2 sm:px-4">

                  {/* ALL SERVICES */}

                  <Link
                    href="/services"
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3 rounded-lg p-2.5 ${
                      pathname === '/services'
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 hover:bg-white'
                    }`}
                  >

                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                      <FaCode className="text-xs text-primary" />
                    </div>

                    <span className="text-xs font-semibold">
                      All Services
                    </span>

                  </Link>

                  {/* SERVICES */}

                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.name}
                        href={service.path}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-3 rounded-lg p-2.5 transition-all ${
                          pathname === service.path
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-700 hover:bg-white'
                        }`}
                      >

                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                          <Icon className="text-xs text-primary" />
                        </div>

                        <div className="min-w-0 flex-1">

                          <span className="block truncate text-xs font-semibold">
                            {service.name}
                          </span>

                          <span className="mt-0.5 block truncate text-[10px] font-medium text-gray-400">
                            {service.description}
                          </span>

                        </div>

                        <span className="text-xs text-gray-300">
                          →
                        </span>

                      </Link>
                    );
                  })}

                </div>

              </div>

            </div>

            {/* OTHER MOBILE LINKS */}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={closeMobileMenu}
                className={`flex items-center px-5 py-3.5 text-sm font-medium transition-all sm:px-6 ${
                  pathname === link.path
                    ? 'bg-primary/5 font-semibold text-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* =========================
                CONTACT INFORMATION
            ========================== */}

            <div className="mx-4 mt-2 border-t border-gray-100 px-1 pb-3 pt-2">

              <a
                href="mailto:contact@codevix.com"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <FaEnvelope className="text-xs text-primary" />
                </div>

                <span>contact@codevix.com</span>
              </a>

              <a
                href="tel:+918810338523"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <FaPhone className="text-xs text-primary" />
                </div>

                <span>+91 8810338523</span>
              </a>

            </div>

          </nav>
        </div>

      </div>
    </header>
  );
}
