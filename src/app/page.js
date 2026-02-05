import { Metadata } from "next";
import Link from "next/link";
import {
  FaRocket,
  FaGlobe,
  FaMobileAlt,
  FaLaptopCode,
  FaChartLine,
  FaSearch,
  FaShoppingCart,
  FaFileAlt,
  FaHospital,
  FaSchool,
  FaPlane,
  FaBuilding,
  FaBox,
  FaTasks,
  FaCheckCircle,
  FaLightbulb,
  FaUserCheck,
  FaBolt,
  FaLock,
  FaDollarSign,
  FaHeadset,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaCloud,
  FaSmileBeam,
  FaShieldAlt,
  FaChartBar,
   FaBullhorn,
     FaInfinity,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

export const metadata = {
  title: "Softnexis Gentech | Smart IT Solutions",
  description:
    "Softnexis Gentech - Web Development, App Development, CRM Solutions, Digital Marketing, SEO, Hospital Management, School Management, and more IT services.",
  keywords:
    "IT solutions, web development, app development, CRM, digital marketing, SEO, hospital management, school management",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background-light via-background-gradient to-accent pt-24 pb-20 md:pt-32 md:pb-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-gradient-to-r from-primary-light to-accent text-white px-8 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse-slow shadow-lg">
            <FaRocket className="inline mr-2" /> Your Technology Partner
          </div>

          <div className="mb-8">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              Softnexis <span className="text-accent">Gentech</span>
            </div>
            <div className="text-xl md:text-2xl text-text-secondary font-medium">
              Smart IT Solutions
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-text-secondary font-medium tracking-wide mb-8">
            INNOVATE • TRANSFORM • SUCCEED
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="/services"
              className="bg-gradient-to-r from-primary-light to-accent text-white px-8 py-3 rounded-full font-semibold btn-hover"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold border-2 border-background-light hover:bg-background-light hover:border-primary-light transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-background-light p-6 md:p-8 mb-12 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Building Digital Excellence
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            Softnexis Gentech is a leading IT solutions company providing
            comprehensive software, web, mobile, and digital services to help
            businesses grow with cutting-edge technology.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            We deliver reliable, scalable, and innovative technology solutions
            for startups, SMEs, and enterprises across India and globally. From
            custom software development to ready-made CRM solutions, we've got
            everything your business needs to succeed in the digital age.
          </p>
          <p className="text-lg leading-relaxed">
            <strong className="text-primary-light">Our mission:</strong>{" "}
            Empowering businesses with smart technology that drives real results
            and sustainable growth.
          </p>
        </div>

        {/* Services Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
          Our Core IT Services
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Web Development */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">
              Web Development
            </h3>
            <p className="text-text-muted">
              Custom websites, e-commerce platforms, and web applications built
              with modern technologies for optimal performance.
            </p>
          </div>

          {/* App Development */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light">
              <FaMobileAlt />
            </div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">
              App Development
            </h3>
            <p className="text-text-muted">
              Native Android & iOS applications with seamless user experience
              and powerful functionality.
            </p>
          </div>

          {/* Software Development */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">
              Software Development
            </h3>
            <p className="text-text-muted">
              Enterprise-grade custom software solutions tailored to your unique
              business requirements.
            </p>
          </div>

          {/* CRM Solutions */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">
              CRM Solutions
            </h3>
            <p className="text-text-muted">
              Ready-to-deploy CRM systems for various industries - Hospital,
              School, Travel, Real Estate & more.
            </p>
          </div>

          {/* Digital Marketing */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">
              Digital Marketing
            </h3>
            <p className="text-text-muted">
              Complete digital marketing strategies including social media,
              content marketing, and online advertising.
            </p>
          </div>

          {/* SEO Services */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light">
              <FaSearch />
            </div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">
              SEO Services
            </h3>
            <p className="text-text-muted">
              Search engine optimization to boost your online visibility and
              drive organic traffic to your business.
            </p>
          </div>

          {/* E-Commerce Solutions */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light">
              <FaShoppingCart />
            </div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">
              E-Commerce Solutions
            </h3>
            <p className="text-text-muted">
              Full-featured online stores with payment integration, inventory
              management, and analytics.
            </p>
          </div>

          {/* Static Websites */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light">
              <FaFileAlt />
            </div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">
              Static Websites
            </h3>
            <p className="text-text-muted">
              Fast, secure, and professional static websites perfect for
              portfolios, landing pages, and business sites.
            </p>
          </div>
        </div>

        {/* CRM Section */}
        <div className="bg-accent/10 rounded-2xl border-2 border-accent p-6 md:p-8 mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6 relative pb-4">
            Ready-Made CRM & Management Systems
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent to-primary-light rounded-full"></span>
          </h2>
          <p className="text-text-secondary text-center text-lg mb-8 font-medium">
            Pre-built, tested, and ready to deploy. Customize according to your
            needs!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hospital Management */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaHospital className="mr-2 text-green-500" /> Hospital
                Management System
              </h4>
              <p className="text-text-muted">
                Complete hospital operations - patient records, appointments,
                billing, inventory, and staff management.
              </p>
            </div>

            {/* School Management */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaSchool className="mr-2 text-green-500" /> School Management
                System
              </h4>
              <p className="text-text-muted">
                Student admissions, attendance, grades, fee management, and
                parent-teacher communication portal.
              </p>
            </div>

            {/* Travel CRM */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaPlane className="mr-2 text-green-500" /> Travel CRM
              </h4>
              <p className="text-text-gray">
                Booking management, itinerary planning, customer management, and
                payment tracking for travel agencies.
              </p>
              <span className="inline-block bg-gradient-to-r from-accent to-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold mt-3">
                + Free Landing Website
              </span>
            </div>

            {/* Real Estate CRM */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaBuilding className="mr-2 text-green-500" /> Real Estate CRM
              </h4>
              <p className="text-text-muted">
                Property listings, lead management, client database, document
                management, and sales tracking.
              </p>
            </div>

            {/* Inventory Management */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaBox className="mr-2 text-green-500" /> Inventory Management
              </h4>
              <p className="text-text-muted">
                Stock tracking, order management, supplier management, and
                real-time inventory reports.
              </p>
            </div>

            {/* Task Manager */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaTasks className="mr-2 text-green-500" /> Task Manager
              </h4>
              <p className="text-text-muted">
                Project management, task assignment, team collaboration, and
                productivity tracking tools.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 text-center border-2 border-background-gradient">
            <p className="text-accent font-bold text-lg mb-2">
              <FaCheckCircle className="inline mr-2" /> Special Offer:
            </p>
            <p className="text-text-secondary">
              Get a free landing website with Travel CRM!
            </p>
            <p className="text-text-muted mt-2">
              Deploy our solutions on your own domain instantly.
            </p>
          </div>
        </div>

        {/* Real-time Chatting Application Section */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-linear-to-br from-light to-white p-8 md:p-12 rounded-[40px] border-2 border-light-100 shadow-xl">
              {/* Left Side: Product Image */}
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-[1.02]">
                <div className="bg-linear-to-tr from-secondary/20 to-accent/20 absolute inset-0 pointer-events-none"></div>
                <img
                  src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop"
                  alt="Real-time Chatting Application"
                  className="w-full h-auto object-cover"
                />
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-xl font-bold shadow-lg animate-bounce">
                  Free Installation 🚀
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="space-y-6">
                <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  New Product Launch
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                  Real-Time{" "}
                  <span className="text-accent">Web Chat Application</span>
                </h4>
                <p className="text-muted text-lg leading-relaxed font-medium">
                  An advanced real-time chatting platform for your business and
                  personal use, similar to WhatsApp. Experience fast, secure,
                  and seamless communication!
                </p>

                {/* Feature List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "One-on-One Chat",
                      desc: "Secure private conversations",
                    },
                    {
                      title: "Group Discussions",
                      desc: "Collaborate with multiple users",
                    },
                    {
                      title: "Contact List",
                      desc: "Manage your user network easily",
                    },
                    {
                      title: "Privacy First",
                      desc: "End-to-end secure environment",
                    },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="mt-1 bg-accent/20 p-1 rounded-full text-accent">
                        <FaCheckCircle size={14} />
                      </div>
                      <div>
                        <h4 className="text-primary font-bold text-sm">
                          {feat.title}
                        </h4>
                        <p className="text-muted text-xs">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="pt-6 border-t border-light-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-2xl font-black text-primary">
                      ₹25,000
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                      Limited Time Offer
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/schedule-demo"
                      className="bg-linear-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-bold text-center shadow-lg shadow-blue-200 transition-all hover:scale-105 active:scale-95"
                    >
                      Request Live Demo
                    </Link>
                    <a
                      href="https://wa.me/918810338523"
                      className="bg-white border-2 border-light-100 text-primary px-8 py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2 hover:bg-light transition-all"
                    >
                      Buy Now & Setup
                    </a>
                  </div>
                  <p className="text-[11px] text-muted mt-4 font-medium italic">
                    * Note: We provide full application setup and deployment
                    **completely free of cost**.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Cloud Deployment & Hosting Services Section */}
<section className="py-16 bg-[#f8fbff] animate-on-scroll">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      {/* Title font size reduced for a cleaner look */}
      <h4 className="text-2xl md:text-3xl font-bold text-primary mb-3">
        Cloud <span className="text-accent">Deployment Services</span>
      </h4>
      <div className="w-16 h-1 bg-linear-to-r from-secondary to-accent mx-auto rounded-full"></div>
      <p className="mt-4 text-muted text-base max-w-xl mx-auto font-medium">
        Professional deployment solutions to get your projects live with enterprise-grade security and performance.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Infrastructure Card */}
      <div className="bg-white p-7 rounded-3xl shadow-md border-b-4 border-secondary hover:shadow-xl transition-all">
        <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center text-secondary mb-5 text-xl">
          <FaCloud />
        </div>
        <h3 className="text-xl font-bold text-primary mb-4">Cloud Platforms</h3>
        <ul className="space-y-2.5 text-muted text-sm font-medium">
          <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" size={12} /> AWS EC2 & Beanstalk</li>
          <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" size={12} /> AWS RDS (Database)</li>
          <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" size={12} /> DigitalOcean Droplets</li>
          <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" size={12} /> Domain Registration</li>
        </ul>
      </div>

      {/* Security & Mapping Card */}
      <div className="bg-white p-7 rounded-3xl shadow-md border-b-4 border-accent hover:shadow-xl transition-all">
        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-accent mb-5 text-xl">
          <FaLock />
        </div>
        <h3 className="text-xl font-bold text-primary mb-4">Setup & Security</h3>
        <ul className="space-y-2.5 text-muted text-sm font-medium">
          <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" size={12} /> AWS Domain Mapping</li>
          <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" size={12} /> SSL Certificate Install</li>
          <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" size={12} /> Project Deployment</li>
          <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" size={12} /> 24/7 Free Support</li>
        </ul>
      </div>

      {/* Pricing Card - Scaled down for professional look */}
      <div className="bg-linear-to-br from-primary to-secondary p-7 rounded-3xl shadow-lg text-white transform lg:scale-105">
        <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-4 tracking-wider">
          Best Value Pricing
        </div>
        <h3 className="text-xl font-bold mb-6">Deployment Plans</h3>
        <div className="space-y-5">
          <div className="border-b border-white/20 pb-3">
            <p className="text-white/80 text-xs uppercase font-bold tracking-tight">Backend Project</p>
            <p className="text-2xl font-black">₹2,000 <span className="text-xs font-normal opacity-80">/setup</span></p>
          </div>
          <div className="border-b border-white/20 pb-3">
            <p className="text-white/80 text-xs uppercase font-bold tracking-tight">Frontend Project</p>
            <p className="text-2xl font-black">₹1,000 <span className="text-xs font-normal opacity-80">/setup</span></p>
          </div>
          <p className="text-xs italic font-medium opacity-90">Includes free customer support for your peace of mind.</p>
          <Link href="/contact" className="block w-full bg-accent text-white text-center py-3.5 rounded-xl font-bold shadow-md hover:bg-white hover:text-primary transition-all text-sm uppercase tracking-wide">
            Deploy Now 🚀
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Static Website Package Section */}
<section className="py-20 bg-white animate-on-scroll">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-linear-to-r from-light to-white rounded-[40px] border-2 border-light-100 shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Left Side: Offer Image & Badge */}
        <div className="p-8 md:p-12 relative group">
          <div className="absolute top-12 left-12 z-10 bg-accent text-white px-6 py-2 rounded-full font-black shadow-xl animate-pulse">
            Super Saver Deal 🏷️
          </div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
            alt="Static Website Design" 
            className="rounded-3xl shadow-lg border-4 border-white transition-transform duration-500 group-hover:rotate-1"
          />
        </div>

        {/* Right Side: Content & Pricing */}
        <div className="p-8 md:p-12 space-y-6">
          <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter">
            Web Development Special
          </div>
          
          {/* Header updated to h4 with professional font size */}
          <h4 className="text-xl md:text-2xl font-bold text-primary leading-snug">
            Get Your Professional <br />
            <span className="text-secondary tracking-tight underline decoration-accent decoration-2 underline-offset-4">Static Website</span>
          </h4>
          
          <p className="text-muted text-base font-medium leading-relaxed">
            Kickstart your online presence with a fast, secure, and professional 5-page static website. Custom-built to match your business goals!
          </p>

          {/* Page List */}
          <div className="bg-white p-6 rounded-2xl border border-light-100 shadow-sm">
            <p className="text-primary font-bold mb-4 flex items-center text-sm">
              <FaCheckCircle className="mr-2 text-accent" /> 5 Dedicated Custom Pages:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Home', 'About Us', 'Services', 'Key Features', 'Contact Us'].map((page) => (
                <span key={page} className="bg-light text-primary px-3 py-1.5 rounded-lg text-xs font-bold border border-light-100">
                  {page}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-muted mt-4 font-bold italic">
              * Note: Pages can be fully customized based on your specific requirements.
            </p>
          </div>

          {/* Pricing & Free Hosting */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <div className="text-center sm:text-left">
              <p className="text-muted text-[10px] font-bold uppercase tracking-widest mb-1">Starting At Only</p>
              <p className="text-3xl font-black text-primary tracking-tighter">₹2,499</p>
            </div>
            <div className="h-16 w-px bg-light-100 hidden sm:block"></div>
            <div className="bg-linear-to-r from-accent/20 to-transparent p-4 rounded-2xl border-l-4 border-accent">
              <p className="text-primary font-bold text-sm">🎁 Bonus Offer:</p>
              <p className="text-muted text-xs leading-tight font-medium">1-Month **FREE Hosting** on our premium server with your domain mapping.</p>
            </div>
          </div>

          <div className="pt-6">
            <Link 
              href="https://wa.me/918810338523" 
              className="inline-flex items-center justify-center w-full sm:w-auto bg-linear-to-r from-primary to-secondary text-white px-10 py-4 rounded-2xl font-black shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Order Your Website <FaArrowRight className="ml-3 animate-bounce-x" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


<section className="py-20 bg-white animate-on-scroll">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      
      {/* Left Content */}
      <div className="space-y-6">
        <h4 className="text-2xl md:text-4xl font-black text-primary leading-tight">
          Our Clients,
          <span className="text-secondary">Our Priority</span>
        </h4>
        <p className="text-muted text-lg leading-relaxed font-medium">
          Elevating customer satisfaction to the pinnacle of our priorities, we recognize that our software company's success hinges on the happiness and success of our clients. Our foremost commitment is to deliver solutions that seamlessly align with their needs and expectations. We prioritize active and empathetic listening to truly understand their challenges, ensuring that our products not only meet but exceed their requirements.
        </p>
      </div>

      {/* Right Image with Overlay */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-linear-to-tr from-secondary/20 to-accent/20 blur-2xl rounded-[40px]"></div>
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.01]">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            alt="Client Satisfaction" 
            className="w-full h-[400px] object-cover"
          />
          {/* Professional Overlay Graphics like in image */}
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
            <div className="w-24 h-24 border-2 border-white/50 rounded-full flex items-center justify-center animate-pulse">
               <FaShieldAlt className="text-white text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Features Row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-light-100">
      
      {/* Client Support */}
      <div className="space-y-4 group">
        <h4 className="text-xl font-bold text-primary flex items-center group-hover:text-secondary transition-colors">
          <FaHeadset className="mr-3 text-secondary" /> Client Support
        </h4>
        <p className="text-muted text-sm leading-relaxed font-medium">
          Providing rapid response times and priority support for our clients. We are always here to assist you.
        </p>
      </div>

      {/* Quality Assurance */}
      <div className="space-y-4 group">
        <h4 className="text-xl font-bold text-primary flex items-center group-hover:text-secondary transition-colors">
          <FaShieldAlt className="mr-3 text-secondary" /> Quality Assurance
        </h4>
        <p className="text-muted text-sm leading-relaxed font-medium">
          Ensuring the highest level of quality in all our products and services through rigorous testing and standards.
        </p>
      </div>

      {/* Customer Satisfaction */}
      <div className="space-y-4 group">
        <h4 className="text-xl font-bold text-primary flex items-center group-hover:text-secondary transition-colors">
          <FaSmileBeam className="mr-3 text-secondary" /> Customer Satisfaction
        </h4>
        <p className="text-muted text-sm leading-relaxed font-medium">
          Focused on ensuring long-term success and satisfaction for every client we partner with.
        </p>
      </div>

    </div>
  </div>
</section>

        {/* Why Choose Section */}
        <div className="bg-background-light rounded-2xl p-6 md:p-8 mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
            Why Choose Softnexis Gentech?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Innovation First */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-yellow-400" /> Innovation
                First
              </h4>
              <p className="text-text-muted">
                We use the latest technologies and best practices to build
                future-ready solutions that scale with your business.
              </p>
            </div>

            {/* Client-Focused Approach */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaUserCheck className="mr-2 text-accent" /> Client-Focused
                Approach
              </h4>
              <p className="text-text-muted">
                Your success is our priority. We work closely with you at every
                step to ensure the perfect solution.
              </p>
            </div>

            {/* Fast Delivery */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaBolt className="mr-2 text-yellow-400" /> Fast Delivery
              </h4>
              <p className="text-text-muted">
                Agile development methodology ensures quick turnaround times
                without compromising on quality.
              </p>
            </div>

            {/* Reliable & Secure */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaLock className="mr-2 text-accent" /> Reliable & Secure
              </h4>
              <p className="text-text-muted">
                Enterprise-grade security, regular updates, and robust
                infrastructure for peace of mind.
              </p>
            </div>

            {/* Competitive Pricing */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaDollarSign className="mr-2 text-accent" /> Competitive
                Pricing
              </h4>
              <p className="text-text-muted">
                Quality solutions at affordable prices. Best value for your
                investment in technology.
              </p>
            </div>

            {/* Full Support */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaHeadset className="mr-2 text-yellow-400" /> Full Support
              </h4>
              <p className="text-text-muted">
                Dedicated support team available to help you succeed. Training
                and documentation included.
              </p>
            </div>
          </div>
        </div>

        <section className="py-20 bg-[#f8fbff] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight">
      Our <span className="text-secondary">Technical Services</span>
    </h2>
    <p className="text-muted text-base max-w-2xl mx-auto font-medium leading-relaxed">
      Explore our comprehensive range of cutting-edge technological solutions designed to drive innovation and efficiency.
    </p>
  </div>

  {/* Slider Mechanism */}
  <div className="slider-container relative w-full overflow-hidden flex py-4">
    <div className="slider-track flex space-x-10 animate-infinite-scroll">
      {/* Duplicating the set for a seamless loop */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex space-x-10">
          {/* MERN Card */}
          <div className="flex-shrink-0 w-[300px] bg-white p-10 rounded-[32px] shadow-md border border-light-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl">
            <div className="flex space-x-2 mb-6 text-2xl">
              <SiMongodb className="text-[#47A248]" />
              <SiExpress className="text-black" />
              <SiReact className="text-[#61DAFB]" />
              <SiNodedotjs className="text-[#339933]" />
            </div>
            <h3 className="text-lg font-bold text-primary tracking-tight">MERN Stack Development</h3>
          </div>

          {/* Data Analytics Card */}
          <div className="flex-shrink-0 w-[300px] bg-white p-10 rounded-[32px] shadow-md border border-light-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl">
            <div className="mb-6 text-4xl text-blue-500">
              <FaChartBar />
            </div>
            <h3 className="text-lg font-bold text-primary tracking-tight">Data Analytics</h3>
          </div>

          {/* Digital Marketing Card */}
          <div className="flex-shrink-0 w-[300px] bg-white p-10 rounded-[32px] shadow-md border border-light-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl">
            <div className="mb-6 text-4xl text-orange-500">
              <FaBullhorn />
            </div>
            <h3 className="text-lg font-bold text-primary tracking-tight">Digital Marketing</h3>
          </div>

          {/* Cloud Computing Card */}
          <div className="flex-shrink-0 w-[300px] bg-white p-10 rounded-[32px] shadow-md border border-light-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl">
            <div className="mb-6 text-4xl text-blue-400">
              <FaCloud />
            </div>
            <h3 className="text-lg font-bold text-primary tracking-tight">Cloud Computing</h3>
          </div>

          {/* DevOps Card */}
          <div className="flex-shrink-0 w-[300px] bg-white p-10 rounded-[32px] shadow-md border border-light-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl">
            <div className="mb-6 text-4xl text-green-500">
              <FaInfinity />
            </div>
            <h3 className="text-lg font-bold text-primary tracking-tight">DevOps Architecture</h3>
          </div>
        </div>
      ))}
    </div>

    {/* Side Fading Effects */}
    <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#f8fbff] to-transparent z-10 pointer-events-none"></div>
    <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#f8fbff] to-transparent z-10 pointer-events-none"></div>
  </div>
</section>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
            Ready to Transform Your Business?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
          </h2>
          <p className="text-text-secondary text-xl mb-8">
            Let's discuss how we can help you achieve your digital goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+918810338523"
              className="bg-gradient-to-r from-primary-light to-accent text-white px-8 py-4 rounded-full font-semibold btn-hover flex items-center justify-center"
            >
              <FaPhone className="mr-2" /> Call Now: +91 8810338523
            </a>
            <a
              href="mailto:contact@softnexis.in"
              className="bg-white text-primary-light px-8 py-4 rounded-full font-semibold border-2 border-background-gradient hover:bg-background-light hover:border-primary-light hover:text-primary transition-all duration-300 flex items-center justify-center"
            >
              <FaEnvelope className="mr-2" /> Email Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
