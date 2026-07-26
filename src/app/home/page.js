// import { Metadata } from 'next';
// import { 
//   FaRocket, 
//   FaGlobe, 
//   FaMobileAlt, 
//   FaLaptopCode, 
//   FaChartLine, 
//   FaSearch, 
//   FaShoppingCart, 
//   FaFileAlt,
//   FaHospital,
//   FaSchool,
//   FaPlane,
//   FaBuilding,
//   FaBox,
//   FaTasks,
//   FaCheckCircle,
//   FaLightbulb,
//   FaUserCheck,
//   FaBolt,
//   FaLock,
//   FaDollarSign,
//   FaHeadset,
//   FaPhone,
//   FaEnvelope,
//   FaArrowRight
// } from 'react-icons/fa';

// export const metadata = {
//   title: 'Codevix | Smart IT Solutions',
//   description: 'Codevix - Web Development, App Development, CRM Solutions, Digital Marketing, SEO, Hospital Management, School Management, and more IT services.',
//   keywords: 'IT solutions, web development, app development, CRM, digital marketing, SEO, hospital management, school management',
// };

// export default function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br from-background-light via-background-gradient to-accent pt-24 pb-20 md:pt-32 md:pb-24 text-center px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="inline-block bg-gradient-to-r from-primary-light to-accent text-white px-8 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse-slow shadow-lg">
//             <FaRocket className="inline mr-2" /> Your Technology Partner
//           </div>
          
//           <div className="mb-8">
//             <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
//               Codevix <span className="text-accent">Gentech</span>
//             </div>
//             <div className="text-xl md:text-2xl text-text-secondary font-medium">
//               Smart IT Solutions
//             </div>
//           </div>
          
//           <p className="text-2xl md:text-3xl text-text-secondary font-medium tracking-wide mb-8">
//             INNOVATE â€¢ TRANSFORM â€¢ SUCCEED
//           </p>
          
//           <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
//             <a 
//               href="/services" 
//               className="bg-gradient-to-r from-primary-light to-accent text-white px-8 py-3 rounded-full font-semibold btn-hover"
//             >
//               Explore Services
//             </a>
//             <a 
//               href="/contact" 
//               className="bg-white text-primary px-8 py-3 rounded-full font-semibold border-2 border-background-light hover:bg-background-light hover:border-primary-light transition-all duration-300"
//             >
//               Get Started
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Introduction Section */}
//         <div className="bg-white rounded-2xl shadow-lg border-2 border-background-light p-6 md:p-8 mb-12 animate-on-scroll">
//           <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Building Digital Excellence</h2>
//           <p className="text-text-secondary text-lg leading-relaxed mb-4">
//             Codevix is a leading IT solutions company providing comprehensive software, web, mobile, and digital services to help businesses grow with cutting-edge technology.
//           </p>
//           <p className="text-text-secondary text-lg leading-relaxed mb-4">
//             We deliver reliable, scalable, and innovative technology solutions for startups, SMEs, and enterprises across India and globally. From custom software development to ready-made CRM solutions, we've got everything your business needs to succeed in the digital age.
//           </p>
//           <p className="text-lg leading-relaxed">
//             <strong className="text-primary-light">Our mission:</strong> Empowering businesses with smart technology that drives real results and sustainable growth.
//           </p>
//         </div>

//         {/* Services Section */}
//         <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
//           Our Core IT Services
//           <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
//         </h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {/* Web Development */}
//           <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
//             <div className="text-4xl mb-4 text-primary-light"><FaGlobe /></div>
//             <h3 className="text-xl font-semibold text-primary-light mb-3">Web Development</h3>
//             <p className="text-text-muted">Custom websites, e-commerce platforms, and web applications built with modern technologies for optimal performance.</p>
//           </div>

//           {/* App Development */}
//           <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
//             <div className="text-4xl mb-4 text-primary-light"><FaMobileAlt /></div>
//             <h3 className="text-xl font-semibold text-primary-light mb-3">App Development</h3>
//             <p className="text-text-muted">Native Android & iOS applications with seamless user experience and powerful functionality.</p>
//           </div>

//           {/* Software Development */}
//           <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
//             <div className="text-4xl mb-4 text-primary-light"><FaLaptopCode /></div>
//             <h3 className="text-xl font-semibold text-primary-light mb-3">Software Development</h3>
//             <p className="text-text-muted">Enterprise-grade custom software solutions tailored to your unique business requirements.</p>
//           </div>

//           {/* CRM Solutions */}
//           <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
//             <div className="text-4xl mb-4 text-primary-light"><FaChartLine /></div>
//             <h3 className="text-xl font-semibold text-primary-light mb-3">CRM Solutions</h3>
//             <p className="text-text-muted">Ready-to-deploy CRM systems for various industries - Hospital, School, Travel, Real Estate & more.</p>
//           </div>

//           {/* Digital Marketing */}
//           <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
//             <div className="text-4xl mb-4 text-primary-light"><FaChartLine /></div>
//             <h3 className="text-xl font-semibold text-primary-light mb-3">Digital Marketing</h3>
//             <p className="text-text-muted">Complete digital marketing strategies including social media, content marketing, and online advertising.</p>
//           </div>

//           {/* SEO Services */}
//           <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
//             <div className="text-4xl mb-4 text-primary-light"><FaSearch /></div>
//             <h3 className="text-xl font-semibold text-primary-light mb-3">SEO Services</h3>
//             <p className="text-text-muted">Search engine optimization to boost your online visibility and drive organic traffic to your business.</p>
//           </div>

//           {/* E-Commerce Solutions */}
//           <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
//             <div className="text-4xl mb-4 text-primary-light"><FaShoppingCart /></div>
//             <h3 className="text-xl font-semibold text-primary-light mb-3">E-Commerce Solutions</h3>
//             <p className="text-text-muted">Full-featured online stores with payment integration, inventory management, and analytics.</p>
//           </div>

//           {/* Static Websites */}
//           <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
//             <div className="text-4xl mb-4 text-primary-light"><FaFileAlt /></div>
//             <h3 className="text-xl font-semibold text-primary-light mb-3">Static Websites</h3>
//             <p className="text-text-muted">Fast, secure, and professional static websites perfect for portfolios, landing pages, and business sites.</p>
//           </div>
//         </div>

//         {/* CRM Section */}
//         <div className="bg-accent/10 rounded-2xl border-2 border-accent p-6 md:p-8 mb-12 animate-on-scroll">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6 relative pb-4">
//             Ready-Made CRM & Management Systems
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent to-primary-light rounded-full"></span>
//           </h2>
//           <p className="text-text-secondary text-center text-lg mb-8 font-medium">
//             Pre-built, tested, and ready to deploy. Customize according to your needs!
//           </p>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Hospital Management */}
//             <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
//                 <FaHospital className="mr-2 text-sky-500" /> Hospital Management System
//               </h4>
//               <p className="text-text-muted">Complete hospital operations - patient records, appointments, billing, inventory, and staff management.</p>
//             </div>

//             {/* School Management */}
//             <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
//                 <FaSchool className="mr-2 text-sky-500" /> School Management System
//               </h4>
//               <p className="text-text-muted">Student admissions, attendance, grades, fee management, and parent-teacher communication portal.</p>
//             </div>

//             {/* Travel CRM */}
//             <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
//                 <FaPlane className="mr-2 text-sky-500" /> Travel CRM
//               </h4>
//               <p className="text-text-gray">Booking management, itinerary planning, customer management, and payment tracking for travel agencies.</p>
//               <span className="inline-block bg-gradient-to-r from-accent to-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold mt-3">
//                 + Free Landing Website
//               </span>
//             </div>

//             {/* Real Estate CRM */}
//             <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
//                 <FaBuilding className="mr-2 text-sky-500" /> Real Estate CRM
//               </h4>
//               <p className="text-text-muted">Property listings, lead management, client database, document management, and sales tracking.</p>
//             </div>

//             {/* Inventory Management */}
//             <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
//                 <FaBox className="mr-2 text-sky-500" /> Inventory Management
//               </h4>
//               <p className="text-text-muted">Stock tracking, order management, supplier management, and real-time inventory reports.</p>
//             </div>

//             {/* Task Manager */}
//             <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
//                 <FaTasks className="mr-2 text-sky-500" /> Task Manager
//               </h4>
//               <p className="text-text-muted">Project management, task assignment, team collaboration, and productivity tracking tools.</p>
//             </div>
//           </div>
          
//           <div className="mt-8 bg-white rounded-xl p-6 text-center border-2 border-background-gradient">
//             <p className="text-accent font-bold text-lg mb-2">
//               <FaCheckCircle className="inline mr-2" /> Special Offer:
//             </p>
//             <p className="text-text-secondary">Get a free landing website with Travel CRM!</p>
//             <p className="text-text-muted mt-2">Deploy our solutions on your own domain instantly.</p>
//           </div>
//         </div>
    
        

//         {/* Why Choose Section */}
//         <div className="bg-background-light rounded-2xl p-6 md:p-8 mb-12 animate-on-scroll">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
//             Why Choose Codevix?
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
//           </h2>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Innovation First */}
//             <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
//                 <FaLightbulb className="mr-2 text-yellow-400" /> Innovation First
//               </h4>
//               <p className="text-text-muted">We use the latest technologies and best practices to build future-ready solutions that scale with your business.</p>
//             </div>

//             {/* Client-Focused Approach */}
//             <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
//                 <FaUserCheck className="mr-2 text-accent" /> Client-Focused Approach
//               </h4>
//               <p className="text-text-muted">Your success is our priority. We work closely with you at every step to ensure the perfect solution.</p>
//             </div>

//             {/* Fast Delivery */}
//             <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
//                 <FaBolt className="mr-2 text-yellow-400" /> Fast Delivery
//               </h4>
//               <p className="text-text-muted">Agile development methodology ensures quick turnaround times without compromising on quality.</p>
//             </div>

//             {/* Reliable & Secure */}
//             <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
//                 <FaLock className="mr-2 text-accent" /> Reliable & Secure
//               </h4>
//               <p className="text-text-muted">Enterprise-grade security, regular updates, and robust infrastructure for peace of mind.</p>
//             </div>

//             {/* Competitive Pricing */}
//             <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
//                 <FaDollarSign className="mr-2 text-accent" /> Competitive Pricing
//               </h4>
//               <p className="text-text-muted">Quality solutions at affordable prices. Best value for your investment in technology.</p>
//             </div>

//             {/* Full Support */}
//             <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
//               <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
//                 <FaHeadset className="mr-2 text-yellow-400" /> Full Support
//               </h4>
//               <p className="text-text-muted">Dedicated support team available to help you succeed. Training and documentation included.</p>
//             </div>
//           </div>
//         </div>

//         {/* Contact CTA */}
//         <div className="bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 text-center animate-on-scroll">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
//             Ready to Transform Your Business?
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
//           </h2>
//           <p className="text-text-secondary text-xl mb-8">Let's discuss how we can help you achieve your digital goals.</p>
          
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a 
//               href="tel:+918810338523" 
//               className="bg-gradient-to-r from-primary-light to-accent text-white px-8 py-4 rounded-full font-semibold btn-hover flex items-center justify-center"
//             >
//               <FaPhone className="mr-2" /> Call Now: +91 8810338523
//             </a>
//             <a 
//               href="mailto:contact@codevix.com" 
//               className="bg-white text-primary-light px-8 py-4 rounded-full font-semibold border-2 border-background-gradient hover:bg-background-light hover:border-primary-light hover:text-primary transition-all duration-300 flex items-center justify-center"
//             >
//               <FaEnvelope className="mr-2" /> Email Us
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { Metadata } from 'next';
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
  FaComments // Naya icon add kiya
} from 'react-icons/fa';

export const metadata = {
  title: 'Codevix | Smart IT Solutions',
  description: 'Codevix - Web Development, App Development, CRM Solutions, Digital Marketing, SEO, Hospital Management, School Management, and more IT services.',
  keywords: 'IT solutions, web development, app development, CRM, digital marketing, SEO, hospital management, school management',
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
              Codevix <span className="text-accent">Gentech</span>
            </div>
            <div className="text-xl md:text-2xl text-text-secondary font-medium">
              Smart IT Solutions
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-text-secondary font-medium tracking-wide mb-8">
            INNOVATE â€¢ TRANSFORM â€¢ SUCCEED
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Building Digital Excellence</h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            Codevix is a leading IT solutions company providing comprehensive software, web, mobile, and digital services to help businesses grow with cutting-edge technology.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            We deliver reliable, scalable, and innovative technology solutions for startups, SMEs, and enterprises across India and globally. From custom software development to ready-made CRM solutions, we've got everything your business needs to succeed in the digital age.
          </p>
          <p className="text-lg leading-relaxed">
            <strong className="text-primary-light">Our mission:</strong> Empowering businesses with smart technology that drives real results and sustainable growth.
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
            <div className="text-4xl mb-4 text-primary-light"><FaGlobe /></div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">Web Development</h3>
            <p className="text-text-muted">Custom websites, e-commerce platforms, and web applications built with modern technologies for optimal performance.</p>
          </div>

          {/* App Development */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light"><FaMobileAlt /></div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">App Development</h3>
            <p className="text-text-muted">Native Android & iOS applications with seamless user experience and powerful functionality.</p>
          </div>

          {/* Software Development */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light"><FaLaptopCode /></div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">Software Development</h3>
            <p className="text-text-muted">Enterprise-grade custom software solutions tailored to your unique business requirements.</p>
          </div>

          {/* CRM Solutions */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light"><FaChartLine /></div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">CRM Solutions</h3>
            <p className="text-text-muted">Ready-to-deploy CRM systems for various industries - Hospital, School, Travel, Real Estate & more.</p>
          </div>

          {/* Digital Marketing */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light"><FaChartLine /></div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">Digital Marketing</h3>
            <p className="text-text-muted">Complete digital marketing strategies including social media, content marketing, and online advertising.</p>
          </div>

          {/* SEO Services */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light"><FaSearch /></div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">SEO Services</h3>
            <p className="text-text-muted">Search engine optimization to boost your online visibility and drive organic traffic to your business.</p>
          </div>

          {/* E-Commerce Solutions */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light"><FaShoppingCart /></div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">E-Commerce Solutions</h3>
            <p className="text-text-muted">Full-featured online stores with payment integration, inventory management, and analytics.</p>
          </div>

          {/* Static Websites */}
          <div className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
            <div className="text-4xl mb-4 text-primary-light"><FaFileAlt /></div>
            <h3 className="text-xl font-semibold text-primary-light mb-3">Static Websites</h3>
            <p className="text-text-muted">Fast, secure, and professional static websites perfect for portfolios, landing pages, and business sites.</p>
          </div>
        </div>

        {/* CRM Section */}
        <div className="bg-accent/10 rounded-2xl border-2 border-accent p-6 md:p-8 mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6 relative pb-4">
            Ready-Made CRM & Management Systems
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent to-primary-light rounded-full"></span>
          </h2>
          <p className="text-text-secondary text-center text-lg mb-8 font-medium">
            Pre-built, tested, and ready to deploy. Customize according to your needs!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hospital Management */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaHospital className="mr-2 text-sky-500" /> Hospital Management System
              </h4>
              <p className="text-text-muted">Complete hospital operations - patient records, appointments, billing, inventory, and staff management.</p>
            </div>

            {/* School Management */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaSchool className="mr-2 text-sky-500" /> School Management System
              </h4>
              <p className="text-text-muted">Student admissions, attendance, grades, fee management, and parent-teacher communication portal.</p>
            </div>

            {/* Travel CRM */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaPlane className="mr-2 text-sky-500" /> Travel CRM
              </h4>
              <p className="text-text-gray">Booking management, itinerary planning, customer management, and payment tracking for travel agencies.</p>
              <span className="inline-block bg-gradient-to-r from-accent to-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold mt-3">
                + Free Landing Website
              </span>
            </div>

            {/* Real Estate CRM */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaBuilding className="mr-2 text-sky-500" /> Real Estate CRM
              </h4>
              <p className="text-text-muted">Property listings, lead management, client database, document management, and sales tracking.</p>
            </div>

            {/* Inventory Management */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaBox className="mr-2 text-sky-500" /> Inventory Management
              </h4>
              <p className="text-text-muted">Stock tracking, order management, supplier management, and real-time inventory reports.</p>
            </div>

            {/* Task Manager */}
            <div className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
                <FaTasks className="mr-2 text-sky-500" /> Task Manager
              </h4>
              <p className="text-text-muted">Project management, task assignment, team collaboration, and productivity tracking tools.</p>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-xl p-6 text-center border-2 border-background-gradient">
            <p className="text-accent font-bold text-lg mb-2">
              <FaCheckCircle className="inline mr-2" /> Special Offer:
            </p>
            <p className="text-text-secondary">Get a free landing website with Travel CRM!</p>
            <p className="text-text-muted mt-2">Deploy our solutions on your own domain instantly.</p>
          </div>
        </div>

        {/* Naya Chatting Application Section */}
        <section className="py-12 animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl border-2 border-background-light shadow-xl p-8 md:p-12">
            
            {/* Left Side: Image Holder */}
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="bg-gradient-to-tr from-primary-light/20 to-accent/20 absolute inset-0 pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop" 
                alt="Real-time Chatting App" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-accent text-white px-5 py-2 rounded-xl font-bold shadow-lg animate-bounce">
                Free Installation ðŸš€
              </div>
            </div>

            {/* Right Side: Detailed Content */}
            <div className="space-y-6">
              <div className="inline-block bg-primary-light/10 text-primary-light px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                Premium Launch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Real-Time <span className="text-accent">Web Chat Application</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Aapke business aur personal use ke liye WhatsApp ke jaisa advanced real-time chatting platform. Ab baat hogi fast aur secure!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Single Chat", desc: "Private 1-to-1 conversation" },
                  { title: "Multi-User", desc: "Interactive group chats" },
                  { title: "Group Create", desc: "Create unlimited groups" },
                  { title: "Privacy", desc: "Fully secure & private chats" },
                  { title: "Contacts", desc: "Easily add and manage users" }
                ].map((feat, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <FaCheckCircle className="mt-1 text-accent shrink-0" size={16} />
                    <div>
                      <h4 className="text-primary font-bold text-base">{feat.title}</h4>
                      <p className="text-text-muted text-xs">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-background-light">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl font-black text-primary">â‚¹25,000</span>
                  <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                    All Inclusive
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-primary-light to-accent text-white px-8 py-4 rounded-full font-semibold btn-hover text-center"
                  >
                    Request Live Demo
                  </a>
                  <a 
                    href="https://wa.me/918810338523" 
                    className="bg-white border-2 border-background-light text-primary px-8 py-4 rounded-full font-semibold text-center hover:bg-background-light transition-all"
                  >
                    Buy Now & Setup
                  </a>
                </div>
                <p className="text-xs text-text-muted mt-4 font-medium italic">
                  * Note: Hum aapko full application setup aur installation **Free of Cost** karke denge.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Why Choose Section */}
        <div className="bg-background-light rounded-2xl p-6 md:p-8 mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
            Why Choose Codevix?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Innovation First */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-yellow-400" /> Innovation First
              </h4>
              <p className="text-text-muted">We use the latest technologies and best practices to build future-ready solutions that scale with your business.</p>
            </div>

            {/* Client-Focused Approach */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaUserCheck className="mr-2 text-accent" /> Client-Focused Approach
              </h4>
              <p className="text-text-muted">Your success is our priority. We work closely with you at every step to ensure the perfect solution.</p>
            </div>

            {/* Fast Delivery */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaBolt className="mr-2 text-yellow-400" /> Fast Delivery
              </h4>
              <p className="text-text-muted">Agile development methodology ensures quick turnaround times without compromising on quality.</p>
            </div>

            {/* Reliable & Secure */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaLock className="mr-2 text-accent" /> Reliable & Secure
              </h4>
              <p className="text-text-muted">Enterprise-grade security, regular updates, and robust infrastructure for peace of mind.</p>
            </div>

            {/* Competitive Pricing */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaDollarSign className="mr-2 text-accent" /> Competitive Pricing
              </h4>
              <p className="text-text-muted">Quality solutions at affordable prices. Best value for your investment in technology.</p>
            </div>

            {/* Full Support */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-light shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaHeadset className="mr-2 text-yellow-400" /> Full Support
              </h4>
              <p className="text-text-muted">Dedicated support team available to help you succeed. Training and documentation included.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
            Ready to Transform Your Business?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
          </h2>
          <p className="text-text-secondary text-xl mb-8">Let's discuss how we can help you achieve your digital goals.</p>
          
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
    </>
  );
}

