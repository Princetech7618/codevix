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
  title: "Our Products | SaaS, E-commerce & Real-time Chat Solutions",
  description:
    "Explore Softnexis Gentech's ready-to-deploy products: B2C Travel CRM, Custom E-commerce websites, and Real-time Chat applications. We provide scalable Hospital, School, and Inventory management systems.",
  keywords: [
    "B2C Travel CRM Software",
    "Real-time Chat Web Application",
    "Custom E-commerce Website Development",
    "Multi-tenant SaaS Travel Solutions",
    "Hospital Management System Software",
    "School ERP & Administration Platform",
    "WebSocket Powered Chat App",
    "Inventory Management SaaS",
    "Secure Payment Integrated E-commerce",
    "Enterprise Software Solutions India"
  ].join(", "),
};

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky via-light-blue to-very-light-blue rounded-2xl p-8 md:p-12 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Our Products
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Ready-to-deploy CRM & management systems for various industries
        </p>
      </div>

      {/* Product Sections */}
      <div className="space-y-16">
        {/* Hospital Management */}
        <section id="hospital-management" className="animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaHospital className="mr-3 text-accent" /> Hospital Management
                System
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                A comprehensive solution for managing all aspects of hospital
                operations efficiently.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Patient registration and records management",
                  "Appointment scheduling",
                  "Billing and insurance processing",
                  "Pharmacy and inventory management",
                  "Lab test management",
                  "Staff scheduling and payroll",
                  "Reporting and analytics dashboard",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Cloud-based
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mobile App
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  24/7 Support
                </span>
              </div>
            </div>

            {/* Icon ki jagah Image Section */}
            <div className="flex justify-center">
              {/* Added h-[600px] to the container to set a fixed large height */}
              <div className="w-full max-w-xl h-[440px] overflow-hidden rounded-2xl shadow-xl border-4 border-white">
                <img
                  src="/hospital-management-software.jpg"
                  alt="Hospital Management System Dashboard"
                  /* Changed h-auto to h-full so the image fills the new height */
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* School Management */}
        <section id="school-management" className="animate-on-scroll py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Responsive Image Container with Professional Infographic */}
            <div className="order-2 lg:order-1 flex justify-center w-full px-4 md:px-0">
              <div className="w-full max-w-2xl h-[200px] md:h-[200px] lg:h-[450px] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/schoolmanage.jpg"
                  alt="School Management Software Infographic"
                  className="w-full h-full object-contain md:object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light mx-4 md:mx-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaSchool className="mr-3 text-accent" /> School Management
                System
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                Complete school administration software for educational
                institutions of all sizes.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Student admission and registration",
                  "Attendance tracking",
                  "Grade and examination management",
                  "Fee management and payment processing",
                  "Parent-teacher communication portal",
                  "Transportation management",
                  "Library management",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Multi-campus
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Parent Portal
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mobile App
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Travel CRM */}
        <section id="travel-crm" className="animate-on-scroll py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Side */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light mx-4 md:mx-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaPlane className="mr-3 text-accent" /> Travel CRM
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                Specialized CRM for travel agencies to manage bookings,
                customers, and operations.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Booking management system",
                  "Itinerary planning and customization",
                  "Customer database management",
                  "Payment tracking and invoicing",
                  "Supplier management",
                  "Commission tracking",
                  "Marketing campaign management",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-accent to-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold">
                  + Free Landing Website
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  API Integration
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mobile Friendly
                </span>
              </div>
            </div>

            {/* Responsive Travel CRM Image Container */}
            <div className="flex justify-center w-full px-4 md:px-0">
              <div className="w-full max-w-xl h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/travelcrm.jpg"
                  className="w-full h-full object-contain md:object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Real Estate CRM */}
        <section id="real-estate-crm" className="animate-on-scroll py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Responsive Real Estate Image Container */}
            <div className="order-2 lg:order-1 flex justify-center w-full px-4 md:px-0">
              <div className="w-full max-w-xl h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/realestate.jpg"
                  className="w-full h-full object-contain md:object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light mx-4 md:mx-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaBuilding className="mr-3 text-accent" /> Real Estate CRM
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                Powerful CRM for real estate businesses to manage properties,
                leads, and sales.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Property listing management",
                  "Lead generation and tracking",
                  "Client database management",
                  "Document management",
                  "Sales pipeline tracking",
                  "Commission calculation",
                  "Marketing tools integration",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Property Portal
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Lead Scoring
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mobile App
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory Management */}
        <section id="inventory-management" className="animate-on-scroll py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Side */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light mx-4 md:mx-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaBox className="mr-3 text-accent" /> Inventory Management
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                Comprehensive inventory control system for retail, wholesale,
                and manufacturing businesses.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Stock tracking and management",
                  "Order processing and fulfillment",
                  "Supplier management",
                  "Purchase order management",
                  "Real-time inventory reports",
                  "Multi-location support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Real-time Sync
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Barcode Support
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Cloud-based
                </span>
              </div>
            </div>

            {/* Responsive Inventory Image Container */}
            <div className="flex justify-center w-full px-4 md:px-0">
              <div className="w-full max-w-xl h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/inventoryimage.jpg"
                  alt="Inventory Management System Dashboard Infographic"
                  className="w-full h-full object-contain md:object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Task Manager */}
        <section id="task-manager" className="animate-on-scroll py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Responsive Task Management Image Container */}
            <div className="order-2 lg:order-1 flex justify-center w-full px-4 md:px-0">
              <div className="w-full max-w-xl h-[200px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/task-management-system-screenshot-1.jpg"
                  alt="Task Management System Dashboard Infographic"
                  className="w-full h-full object-contain md:object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-background-light mx-4 md:mx-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                <FaTasks className="mr-3 text-accent" /> Task Manager
              </h2>
              <p className="text-text-secondary text-lg mb-4">
                Project and task management solution for teams to collaborate
                and stay productive.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Project and task creation",
                  "Team collaboration tools",
                  "Time tracking and reporting",
                  "Deadline management",
                  "File sharing and document management",
                  "Progress tracking and analytics",
                  "Integration with popular tools",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-text-muted">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Team Collaboration
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Time Tracking
                </span>
                <span className="bg-gradient-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mobile App
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="chat-application" className="animate-on-scroll py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Professional Chat App Mockup Image */}
            <div className="order-2 lg:order-1 relative group overflow-hidden rounded-[32px] shadow-2xl border-4 border-white h-[400px] w-full bg-slate-100">
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors z-10"></div>

              <Image
                src="/Team-Chat-Apps.jpg"
                alt="Real-time Chat Application Interface"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={false}
              />

              {/* Real-time Status Badge */}
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-light-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                    Real-time Active
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Content Box */}
            <div className="order-1 lg:order-2 bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-light-100 group hover:border-accent transition-all">
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center tracking-tight">
                <FaComments className="mr-3 text-accent" size={24} /> Real-time
                Chat Solution
              </h4>
              <p className="text-muted text-sm md:text-base mb-6 leading-relaxed font-medium">
                Fast, secure, and scalable chat application for seamless
                communication. Whether it's one-on-one messaging or large group
                collaborations, our solution keeps everyone connected instantly.
              </p>

              <ul className="grid grid-cols-1 gap-3 mb-6">
                {[
                  "Single User & Private Messaging",
                  "Multi-user Group Chat Creation",
                  "Real-time Instant Delivery (Socket.io)",
                  "Contact Management & Buddy Lists",
                  "Media Sharing (Images & Files)",
                  "End-to-End Encryption Support",
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

              {/* Features Tags */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-light-100">
                <span className="bg-linear-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase">
                  Socket.io
                </span>
                <span className="bg-linear-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase">
                  Group Chat
                </span>
                <span className="bg-linear-to-r from-primary-light to-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase">
                  Contact Sync
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom Solutions CTA */}
      <div className="mt-16 bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
          Custom Solutions Available
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <p className="text-text-secondary text-xl mb-8 max-w-3xl mx-auto">
          Need a specialized solution for your industry? We develop custom CRM
          systems tailored to your specific requirements.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+918810338523"
            className="bg-gradient-to-r from-primary-light to-accent text-white px-8 py-4 rounded-full font-semibold btn-hover flex items-center justify-center"
          >
            <FaLaptop className="mr-2" /> Discuss Your Requirements
          </a>
          <a
            href="mailto:contact@softnexis.in"
            className="bg-white text-primary-light px-8 py-4 rounded-full font-semibold border-2 border-background-gradient hover:bg-background-light hover:border-primary-light hover:text-primary transition-all duration-300 flex items-center justify-center"
          >
            <FaCloud className="mr-2" /> Request a Demo
          </a>
        </div>
      </div>
    </div>
  );
}
