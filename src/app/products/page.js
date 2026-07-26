import { Metadata } from "next";
import Image from "next/image";
import {
  FaHospital,
  FaSchool,
  FaPlane,
  FaBuilding,
  FaBox,
  FaTasks,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaLaptop,
  FaCloud,
  FaMobileAlt,
  FaUserPlus,
  FaUsers,
  FaComments,
} from "react-icons/fa";

export const metadata = {
  title: "Our Products | Website, SEO & Digital Growth Solutions",
  description:
    "Discover Codevix website products: static websites, dynamic web apps, e-commerce stores, and SEO services to grow your online business.",
  keywords: [
    "static website design",
    "dynamic website development",
    "e-commerce website solutions",
    "SEO services",
    "digital marketing products",
    "web application development",
    "responsive website design",
    "Next.js web development",
    "React website development",
    "website optimization services"
  ].join(", "),
};

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-gradient-to-br from-sky via-light-blue to-very-light-blue rounded-2xl p-8 md:p-12 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Website, SEO & Digital Growth Products
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Codevix delivers polished website packages, SEO programs, and digital
          growth services for businesses looking to stand out online.
        </p>
      </div>

      <div className="space-y-16">
        <section id="landing-page" className="animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaLaptop className="mr-3 text-accent" /> Landing Page Package
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                A fast-launch landing page tailored to your product or campaign,
                designed to convert visitors into customers.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Custom design with brand-forward visuals',
                  'Lead capture forms and CTAs',
                  'SEO-friendly content structure',
                  'Mobile-first performance',
                  'Analytics and UTM tracking',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-accent to-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Fast Launch
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Conversion Focused
                </span>
              </div>
            </div>

            <div className="flex justify-center w-full px-4 md:px-0">
              <div className="w-full max-w-xl h-[380px] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/landing-page-website.jpg"
                  alt="Landing Page Design"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="business-website" className="animate-on-scroll py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 flex justify-center w-full px-4 md:px-0">
              <div className="w-full max-w-xl h-[380px] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/business-website.jpg"
                  alt="Business Website"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaBuilding className="mr-3 text-accent" /> Business Website
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                A polished website for your company, service, or portfolio that
                communicates trust and professionalism.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Responsive pages for every device',
                  'Content-first structure for brand storytelling',
                  'SEO basics built in',
                  'Blog or resources section',
                  'Contact and quote request flows',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Brand Ready
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  SEO Friendly
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="ecommerce" className="animate-on-scroll py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaBox className="mr-3 text-accent" /> E-commerce Store
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                A scalable online store with inventory, product pages, checkout
                flow, and marketing-ready product promotions.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Product catalog and search',
                  'Secure checkout experience',
                  'Payment gateway setup',
                  'Inventory and order management',
                  'Promotions and discount banners',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Conversion Ready
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Secure Payments
                </span>
              </div>
            </div>

            <div className="flex justify-center w-full px-4 md:px-0">
              <div className="w-full max-w-xl h-[380px] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/ecommerce-store.jpg"
                  alt="E-commerce Store"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="seo-growth" className="animate-on-scroll py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 flex justify-center w-full px-4 md:px-0">
              <div className="w-full max-w-xl h-[380px] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/seo-analytics.jpg"
                  alt="SEO Growth Strategy"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaCloud className="mr-3 text-accent" /> SEO & Growth
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                Improve your search visibility, capture quality traffic, and
                convert visitors with a focused SEO growth program.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Keyword strategy and competitor analysis',
                  'Technical SEO and page speed optimization',
                  'Content optimization for search intent',
                  'Local SEO and listings setup',
                  'Performance tracking and reporting',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Organic Traffic
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Content Strategy
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="conversion-optimization" className="animate-on-scroll py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaUsers className="mr-3 text-accent" /> Conversion Optimization
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                Turn more visitors into customers with UX enhancements, A/B
                testing, and performance tuning.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'User journey improvements',
                  'CTA and funnel optimization',
                  'Performance audits and fixes',
                  'Mobile experience refinement',
                  'Analytics-backed recommendations',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Better Conversions
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Fast Wins
                </span>
              </div>
            </div>

            <div className="flex justify-center w-full px-4 md:px-0">
              <div className="w-full max-w-xl h-[380px] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/conversion-optimization.jpg"
                  alt="Conversion Optimization"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-16 bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
          Want a tailored digital solution?
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <p className="text-text-secondary text-xl mb-8 max-w-3xl mx-auto">
          Codevix creates websites, SEO campaigns, and digital products that help
          your brand grow online.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+918810338523"
            className="bg-gradient-to-r from-primary-light to-accent text-white px-8 py-4 rounded-full font-semibold btn-hover flex items-center justify-center"
          >
            <FaLaptop className="mr-2" /> Book a Consultation
          </a>
          <a
            href="mailto:contact@codevix.com"
            className="bg-white text-primary-light px-8 py-4 rounded-full font-semibold border-2 border-background-gradient hover:bg-background-light hover:border-primary-light hover:text-primary transition-all duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" /> Send a Message
          </a>
        </div>
      </div>
    </div>
  );
}
