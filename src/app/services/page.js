import { Metadata } from "next";
import {
  FaGlobe,
  FaMobileAlt,
  FaLaptopCode,
  FaChartLine,
  FaSearch,
  FaShoppingCart,
  FaFileAlt,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaCloud,
  FaPalette,
} from "react-icons/fa";

export const metadata = {
  title: "Codevix Services | Website Design & SEO",
  description:
    "Codevix delivers website design, SEO, e-commerce, and digital marketing services for businesses ready to grow online.",
  keywords: [
    "Codevix Services",
    "website design",
    "SEO services",
    "digital marketing",
    "custom website development",
    "e-commerce development",
    "react web development",
    "next js development",
    "responsive websites",
    "scalable web applications",
    "SEO optimization",
    "business website services",
    "Codevix digital agency",
    "online growth solutions",
    "website maintenance services",
    "digital product development",
    "custom web apps",
    "website UX design",
    "digital strategy consulting"
  ].join(", "),
};

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 md:p-12 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Our Services
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Comprehensive IT solutions tailored to your business needs
        </p>
      </div>

      {/* Service Sections */}
      <div className="space-y-16">
        {/* Web Development */}
        {/* Web Development Section */}
        <section id="web-development" className="animate-on-scroll py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Content Box */}
            <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl border-2 border-light-100 group hover:border-[#79d66b] transition-all">
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center tracking-tight">
                <FaGlobe className="mr-3 text-accent" size={20} /> Web
                Development
              </h4>
              <p className="text-muted text-sm md:text-base mb-6 leading-relaxed font-medium">
                We create stunning, responsive websites that deliver exceptional
                user experiences. Our expertise ensures your brand stands out in
                the digital landscape.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Custom Web Development",
                  "E-commerce Platforms",
                  "Progressive Web Apps",
                  "CMS Integration",
                  "Website Maintenance",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted font-bold text-xs uppercase tracking-tight"
                  >
                    <FaCheckCircle
                      className="text-accent mr-2 shrink-0"
                      size={12}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted text-[11px] font-bold italic border-t border-light-100 pt-4">
                * Built with modern tech like React, Next.js, and Node.js for
                maximum SEO performance.
              </p>
            </div>

            {/* Right Side: Professional Coding Image */}
            <div className="relative group overflow-hidden rounded-[32px] shadow-2xl border-2 border-light-100 hover:border-[#79d66b] h-[350px]">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="Modern Web Development Workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Decorative Badge */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-light-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                    Active Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing & Lead Growth Section (replacing App Development) */}
        <section id="marketing-growth" className="animate-on-scroll py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Marketing Visual */}
            <div className="order-2 lg:order-1 relative group overflow-hidden rounded-[32px] shadow-2xl border-2 border-white h-[350px]">
              <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop"
                alt="Digital Marketing and Growth Strategy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-light-100">
                <p className="text-[10px] font-black text-secondary uppercase tracking-widest">
                  Growth Campaigns
                </p>
              </div>
            </div>

            {/* Right Side: Content Box */}
            <div className="order-1 lg:order-2 bg-white rounded-[32px] p-6 md:p-10 shadow-xl border-2 border-light-100 group hover:border-secondary transition-all">
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center tracking-tight">
                <FaChartLine className="mr-3 text-secondary" size={20} /> Marketing &
                Growth
              </h4>
              <p className="text-muted text-sm md:text-base mb-6 leading-relaxed font-medium">
                We craft data-driven marketing strategies that turn traffic into
                qualified leads—through SEO, content, and conversion-focused
                campaign execution.
              </p>

              <ul className="grid grid-cols-1 gap-3 mb-6">
                {[
                  "SEO + content growth plans",
                  "Landing pages & conversion CTAs",
                  "Social media and email campaigns",
                  "Performance tracking & reporting",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted font-bold text-xs uppercase tracking-tight"
                  >
                    <FaCheckCircle
                      className="text-accent mr-2 shrink-0"
                      size={12}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted text-[11px] font-bold italic border-t border-light-100 pt-4">
                * Long-term visibility with measurable ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Software Development Section */}
        <section id="software-development" className="animate-on-scroll py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Content Box */}
            <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-light-100 group hover:border-secondary transition-all">
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center tracking-tight">
                <FaLaptopCode className="mr-3 text-secondary" size={20} />{" "}
                Software Development
              </h4>
              <p className="text-muted text-sm md:text-base mb-6 leading-relaxed font-medium">
                Enterprise-grade custom software solutions designed to automate
                processes and drive efficiency across your organization.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Custom Business Apps",
                  "ERP Systems",
                  "Workflow Automation",
                  "Database Management",
                  "API Integration",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted font-bold text-xs uppercase tracking-tight"
                  >
                    <FaCheckCircle
                      className="text-accent mr-2 shrink-0"
                      size={12}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted text-[11px] font-bold italic border-t border-light-100 pt-4">
                * We follow agile methodologies to deliver scalable, secure, and
                maintainable software.
              </p>
            </div>

            {/* Right Side: Professional Software Engineering Image */}
            <div className="relative group overflow-hidden rounded-[32px] shadow-2xl border-4 border-white h-[350px]">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                alt="Enterprise Software Development"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dynamic Status Badge */}
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-light-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-ping"></div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                    Enterprise Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="digital-services" className="animate-on-scroll py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-light-100">
              <div className="mb-6 flex items-center gap-3 text-primary">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <FaChartLine size={22} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Digital Services for Growth</h2>
              </div>

              <p className="text-text-secondary text-lg mb-4">
                Transform your online presence with polished websites, dynamic
                web apps, and SEO-driven digital marketing.
              </p>
              <ul className="space-y-3 text-text-muted">
                {[
                  "Custom website design for modern brands",
                  "SEO optimization for better search visibility",
                  "Dynamic web applications with real-time features",
                  "Performance tuning for fast page loads",
                  "Ongoing website support and updates",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group overflow-hidden rounded-[32px] shadow-2xl border-2 border-light-100 h-[420px] bg-slate-100">
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
                alt="Responsive Website Design"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-light-100">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  Website Design & SEO
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="industry-packages" className="animate-on-scroll py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Static Website",
                desc: "Fast, secure brochure websites ideal for portfolios, agencies, and professional services.",
              },
              {
                title: "Dynamic Website",
                desc: "Interactive sites with CMS, user login, and custom business workflows.",
              },
              {
                title: "SEO & Analytics",
                desc: "Improve rankings and conversion with search-friendly content and analytics tracking.",
              },
              {
                title: "E-commerce Website",
                desc: "Sell online with modern storefronts, payment integration, and product management.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-3xl bg-white p-6 border border-light-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cloud Computing & Deployment Section */}
        <section id="cloud-services" className="animate-on-scroll py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Content Box */}
            <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-light-100 group hover:border-secondary transition-all">
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center tracking-tight">
                <FaCloud className="mr-3 text-secondary" size={24} /> Vercel
                Deployment
              </h4>
              <p className="text-muted text-sm md:text-base mb-6 leading-relaxed font-medium">
                Launch and scale your website or web app using Vercel—with
                fast global delivery, secure previews, and performance-first
                optimizations.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Vercel hosting & CDN",
                  "Preview Deployments for every change",
                  "Security headers & secure routing",
                  "Performance tuning (core web vitals)",
                  "Environment variables setup",
                  "SEO-friendly deployment configuration",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted font-bold text-xs uppercase tracking-tight"
                  >
                    <FaCheckCircle
                      className="text-accent mr-2 shrink-0"
                      size={14}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted text-[11px] font-bold italic border-t border-light-100 pt-4">
                * We deploy on Vercel so you can focus on marketing and growth.
              </p>
            </div>

            {/* Right Side: Vercel Deployment Visual */}
            <div className="relative group overflow-hidden rounded-[32px] shadow-2xl border-4 border-white h-[400px] w-full bg-slate-100">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="/cloudimg.jpg"
                alt="Vercel deployment dashboard"
                className="w-full h-auto object-cover"
              />

              <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-light-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                    Global Delivery Enabled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Marketing Section */}
        <section id="digital-marketing" className="animate-on-scroll py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Content Box */}
            <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-light-100 group hover:border-secondary transition-all">
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center tracking-tight">
                <FaChartLine className="mr-3 text-secondary" size={20} />{" "}
                Digital Marketing
              </h4>
              <p className="text-muted text-sm md:text-base mb-6 leading-relaxed font-medium">
                Complete digital marketing strategies to boost your online
                presence and drive conversions. We create data-driven campaigns
                for maximum ROI.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Social Media Marketing",
                  "Content Marketing",
                  "Email Campaigns",
                  "PPC Advertising",
                  "Conversion Optimization",
                  "Analytics & Reporting",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted font-bold text-xs uppercase tracking-tight"
                  >
                    <FaCheckCircle
                      className="text-accent mr-2 shrink-0"
                      size={12}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted text-[11px] font-bold italic border-t border-light-100 pt-4">
                * Data-driven marketing campaigns that deliver measurable
                results and maximize your ROI.
              </p>
            </div>

            {/* Right Side: Professional Marketing Campaign Image */}
            <div className="relative group overflow-hidden rounded-[32px] shadow-2xl border-4 border-white h-[350px]">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Digital Marketing Campaign Analytics"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Boost Brand Badge */}
              <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-light-100">
                <p className="text-[10px] font-black text-secondary uppercase tracking-widest">
                  Boost Your Brand
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* SEO Services Section */}
        <section id="seo-services" className="animate-on-scroll py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Professional SEO Graph Image */}
            <div className="order-2 lg:order-1 relative group overflow-hidden rounded-[32px] shadow-2xl border-4 border-white h-[350px]">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2000&auto=format&fit=crop"
                alt="SEO Data Analytics and Search Ranking"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Search Rank Badge */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-light-100">
                <p className="text-[10px] font-black text-secondary uppercase tracking-widest">
                  Organic Growth
                </p>
              </div>
            </div>

            {/* Right Side: Content Box */}
            <div className="order-1 lg:order-2 bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-light-100 group hover:border-secondary transition-all">
              {/* Reduced font size with h4 */}
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center tracking-tight">
                <FaSearch className="mr-3 text-secondary" size={20} /> SEO
                Services
              </h4>
              <p className="text-muted text-sm md:text-base mb-6 leading-relaxed font-medium">
                Search engine optimization to improve your website's visibility
                and drive organic traffic. We deliver long-term results and
                sustainable growth.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Keyword Research",
                  "On-page SEO",
                  "Technical Audits",
                  "Link Building",
                  "Local SEO",
                  "SEO Reporting",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted font-bold text-xs uppercase tracking-tight"
                  >
                    <FaCheckCircle
                      className="text-accent mr-2 shrink-0"
                      size={12}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted text-[11px] font-bold italic border-t border-light-100 pt-4">
                * Our strategies are designed to ensure your business stays
                ahead in search rankings.
              </p>
            </div>
          </div>
        </section>

        {/* E-Commerce Solutions Section */}
        <section id="e-commerce-solutions" className="animate-on-scroll py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Content Box */}
            <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-light-100 group hover:border-secondary transition-all">
              {/* Reduced font size with h4 */}
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center tracking-tight">
                <FaShoppingCart className="mr-3 text-secondary" size={20} />{" "}
                E-Commerce Solutions
              </h4>
              <p className="text-muted text-sm md:text-base mb-6 leading-relaxed font-medium">
                Full-featured online stores with payment integration, inventory
                management, and analytics. We build platforms that drive sales.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Custom Development",
                  "Cart Integration",
                  "Payment Gateway",
                  "Order Management",
                  "Customer Portal",
                  "Sales Analytics",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted font-bold text-xs uppercase tracking-tight"
                  >
                    <FaCheckCircle
                      className="text-accent mr-2 shrink-0"
                      size={12}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted text-[11px] font-bold italic border-t border-light-100 pt-4">
                * We build scalable platforms that provide excellent shopping
                experiences.
              </p>
            </div>

            {/* Right Side: Professional E-Commerce Store Image */}
            <div className="relative group overflow-hidden rounded-[32px] shadow-2xl border-4 border-white h-[350px]">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop"
                alt="Modern E-commerce Website Platform"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Sales Growth Badge */}
              <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-light-100">
                <p className="text-[10px] font-black text-secondary uppercase tracking-widest">
                  Global Sales Ready
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Static Websites Section */}
        <section id="static-websites" className="animate-on-scroll py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Professional Static Web Mockup Image */}
            <div className="order-2 lg:order-1 relative group overflow-hidden rounded-[32px] shadow-2xl border-4 border-white h-[350px]">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop"
                alt="High Performance Static Website"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Performance Badge */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-light-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                    99+ Speed Score
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Content Box */}
            <div className="order-1 lg:order-2 bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-light-100 group hover:border-secondary transition-all">
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center tracking-tight">
                <FaFileAlt className="mr-3 text-secondary" size={20} /> Static
                Websites
              </h4>
              <p className="text-muted text-sm md:text-base mb-6 leading-relaxed font-medium">
                Fast, secure, and professional static websites perfect for
                portfolios, landing pages, and business sites. Elegant presence
                without complexity.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Fast Loading Times",
                  "Enhanced Security",
                  "Lower Hosting Costs",
                  "SEO-Friendly",
                  "Responsive Design",
                  "Easy Maintenance",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted font-bold text-xs uppercase tracking-tight"
                  >
                    <FaCheckCircle
                      className="text-accent mr-2 shrink-0"
                      size={12}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted text-[11px] font-bold italic border-t border-light-100 pt-4">
                * Ideal for businesses needing a simple, fast, and elegant
                online presence.
              </p>
            </div>
          </div>
        </section>

        {/* Graphic Designing Section */}
        <section
          id="graphic-design-services"
          className="animate-on-scroll py-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Professional Graphic Design Image */}
            <div className="relative group overflow-hidden rounded-[32px] shadow-2xl border-4 border-white h-[350px] order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
                alt="Professional Graphic Design Workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Creative Badge */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-light-100">
                <p className="text-[10px] font-black text-secondary uppercase tracking-widest">
                  Creative Excellence
                </p>
              </div>
            </div>

            {/* Right Side: Content Box */}
            <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-light-100 group hover:border-secondary transition-all order-1 lg:order-2">
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center tracking-tight">
                <FaPalette className="mr-3 text-secondary" size={20} /> Graphic
                Designing
              </h4>
              <p className="text-muted text-sm md:text-base mb-6 leading-relaxed font-medium">
                Transform your brand identity with stunning visuals. From logo
                creation to complete brand guidelines, we design experiences
                that captivate.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Logo & Branding",
                  "Social Media Posts",
                  "UI/UX Designing",
                  "Marketing Materials",
                  "Business Stationery",
                  "Vector Illustration",
                  "3D Design Assets",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted font-bold text-xs uppercase tracking-tight"
                  >
                    <FaCheckCircle
                      className="text-accent mr-2 shrink-0"
                      size={12}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted text-[11px] font-bold italic border-t border-light-100 pt-4">
                * We create high-impact designs that help your business stand
                out in a crowded digital world.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Contact CTA */}
      <div className="mt-16 bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
          Ready to Get Started?
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <p className="text-text-secondary text-xl mb-8">
          Contact us today to discuss your project requirements.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+918810338523"
            className="bg-gradient-to-r from-primary-light to-accent text-white px-8 py-4 rounded-full font-semibold btn-hover flex items-center justify-center"
          >
            <FaPhone className="mr-2" /> Call Now: +91 8810338523
          </a>
          <a
            href="mailto:contact@codevix.com"
            className="bg-white text-primary-light px-8 py-4 rounded-full font-semibold border-2 border-background-gradient hover:bg-background-light hover:border-primary-light hover:text-primary transition-all duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" /> Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
