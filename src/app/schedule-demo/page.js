import { Metadata } from 'next';
import { FaCalendarAlt, FaRocket, FaLaptop, FaCloud, FaPhone, FaEnvelope,FaHospital ,FaSchool  } from 'react-icons/fa';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Schedule a Demo | Expert SaaS & Enterprise Software Solutions',
  description: 'Book a live demonstration of Codevix products. See our B2C Travel CRM, Hospital Management Systems, and E-commerce platforms in action. Let’s build your custom IT solution.',
  keywords: [
    'Schedule a Product Demo',
    'Live Software Demonstration',
    'B2C Travel CRM Demo',
    'Hospital Management System Walkthrough',
    'E-commerce Platform Demo',
    'Book a Technical Consultation',
    'Custom SaaS Demo Codevix',
    'Java Spring Boot Project Demo',
    'Real-time Chat App Demonstration',
    'Enterprise ERP Demo India'
  ].join(', '),
};

export default function ScheduleDemo() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 md:p-12 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Schedule a Demo</h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          See our products in action and discover how they can transform your business
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Demo Info */}
        <div className="animate-on-scroll bg-white rounded-2xl p-6 md:p-8 shadow-lg border-t-3 border-b-3 border-accent border-background-light">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Why Schedule a Demo?</h2>
          <p className="text-text-secondary mb-8">
            A demo is the best way to understand how our solutions can address your specific business challenges. Here's what you'll experience:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center flex-shrink-0">
                <FaRocket className="text-primary-light text-xl text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Live Product Walkthrough</h3>
                <p className="text-text-muted">See our software in action with real-world examples.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center flex-shrink-0">
                <FaLaptop className="text-primary-light text-xl text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Interactive Q&A</h3>
                <p className="text-text-muted">Get answers to your specific questions and concerns.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center flex-shrink-0">
                <FaCloud className="text-primary-light text-xl text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Customized Solutions</h3>
                <p className="text-text-muted">See how our products can be tailored to your needs.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center flex-shrink-0">
                <FaCalendarAlt className="text-primary-light text-xl text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Flexible Scheduling</h3>
                <p className="text-text-muted">Choose a time that works best for your team.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-background-light rounded-lg">
            <p className="text-text-secondary text-sm">
              <strong className='text-blue-600'>Note:</strong> Demos typically last 30-60 minutes and can be conducted online or in-person (depending on location).
            </p>
          </div>
        </div>

        {/* Demo Form */}
        <DemoForm />
      </div>

      {/* Products Available for Demo */}
      <section className="animate-on-scroll mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
          Products Available for Demo
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-l-3 border-r-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="text-3xl mb-3 text-accent"><FaHospital /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Hospital Management</h3>
            <p className="text-text-muted">Complete hospital operations system</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-r-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="text-3xl mb-3 text-accent"><FaSchool /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">School Management</h3>
            <p className="text-text-muted">Educational institution administration</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-r-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="text-3xl mb-3 text-accent"><FaLaptop /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Custom Software</h3>
            <p className="text-text-muted">Tailored business solutions</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-r-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="text-3xl mb-3 text-accent"><FaCloud /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Cloud Solutions</h3>
            <p className="text-text-muted">Scalable cloud infrastructure</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-r-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="text-3xl mb-3 text-accent"><FaRocket /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Digital Marketing</h3>
            <p className="text-text-muted">Complete marketing strategies</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-r-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="text-3xl mb-3 text-accent"><FaCalendarAlt /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Task Management</h3>
            <p className="text-text-muted">Team collaboration tools</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
          Ready to See Our Solutions in Action?
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <p className="text-text-secondary text-xl mb-8">
          Schedule your demo today and discover how Codevix can transform your business.
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