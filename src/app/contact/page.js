import { Metadata } from 'next';
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Softnexis Gentech | Hire Expert Java & Python Developers',
  description: 'Get a free consultation for your next IT project. Contact Softnexis Gentech for custom SaaS, CRM, and Enterprise software development using Java, Spring Boot, and React.js.',
  keywords: [
    'Contact Softnexis Gentech',
    'Hire Java Spring Boot Developers',
    'Python Django Consulting India',
    'Software Development Inquiry',
    'Custom SaaS Project Consultation',
    'IT Solutions Support Noida',
    'Request a Demo Softnexis',
    'Enterprise Software Development Quote',
    'Hire MERN Stack Development Team'
  ].join(', '),
};

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 md:p-12 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Let's discuss how we can help transform your business
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Contact Info */}
        <div className="animate-on-scroll bg-white rounded-2xl p-6 md:p-8 shadow-lg border-b-3 border-t-3 border-accent border-background-light">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Get In Touch</h2>
          <p className="text-text-secondary mb-8">
            We'd love to hear from you. Reach out to us through any of the following channels:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-primary-light text-xl text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Phone</h3>
                <a href="tel:+918810338523" className="text-text-muted hover:text-primary-light transition-colors duration-300">
                  +91 8810338523
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-primary-light text-xl text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Email</h3>
                <a href="mailto:contact@softnexis.in" className="text-text-muted hover:text-primary-light transition-colors duration-300">
                  contact@softnexis.in
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center flex-shrink-0">
                <FaGlobe className="text-primary-light text-xl text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Website</h3>
                <a href="https://softnexis.in" className="text-text-muted hover:text-primary-light transition-colors duration-300">
                  softnexis.in
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-primary-light text-xl text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Address</h3>
                <p className="text-text-muted">India (Location available on request)</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <a 
              href="https://instagram.com/softnexis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-background-light text-accent  border-3 border-accent border-background-gradient flex items-center justify-center text-primary-light hover:bg-gradient-to-r hover:from-primary-light hover:to-accent hover:text-white hover:border-accent transition-all duration-300"
              title="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a 
              href="https://linkedin.com/company/softnexis-gentech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-background-light text-accent border-3 border-accent border-background-gradient flex items-center justify-center text-primary-light hover:bg-gradient-to-r hover:from-primary-light hover:to-accent hover:text-white hover:border-accent transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="https://facebook.com/softnexis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-background-light text-accent border-3 border-accent border-background-gradient flex items-center justify-center text-primary-light hover:bg-gradient-to-r hover:from-primary-light hover:to-accent hover:text-white hover:border-accent transition-all duration-300"
              title="Facebook"
            >
              <FaFacebook size={18} />
            </a>
            <a 
              href="https://twitter.com/softnexis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-background-light border-3 border-accent text-accent border-background-gradient flex items-center justify-center text-primary-light hover:bg-gradient-to-r hover:from-primary-light hover:to-accent hover:text-white hover:border-accent transition-all duration-300"
              title="Twitter"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* FAQ Section */}
      <section className="animate-on-scroll mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
          Frequently Asked Questions
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border-r-3 border-l-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <FaEnvelope className="mr-2 text-primary-light" /> What industries do you serve?
            </h3>
            <p className="text-text-muted">
              We serve various industries including healthcare, education, real estate, travel, retail, and more. Our solutions are tailored to specific industry needs.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border-r-3 border-l-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <FaEnvelope className="mr-2 text-primary-light" /> How long does a typical project take?
            </h3>
            <p className="text-text-muted">
              Project timelines vary based on complexity. Simple websites take 2-4 weeks, while custom software can take 2-6 months. We provide detailed timelines during consultation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border-r-3 border-l-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <FaEnvelope className="mr-2 text-primary-light" /> Do you provide ongoing support?
            </h3>
            <p className="text-text-muted">
              Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance for all our solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border-r-3 border-l-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <FaEnvelope className="mr-2 text-primary-light" /> What technologies do you use?
            </h3>
            <p className="text-text-muted">
              We use modern technologies including React, Next.js, Node.js, Python, and various cloud platforms to build scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
          Ready to Start Your Project?
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <p className="text-text-secondary text-xl mb-8">
          Contact us today for a free consultation and project estimate.
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
  );
}