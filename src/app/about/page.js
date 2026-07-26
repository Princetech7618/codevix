import { Metadata } from 'next';
import { 
  FaRocket, 
  FaBullseye, 
  FaEye, 
  FaLightbulb, 
  FaHandshake, 
  FaStar, 
  FaBolt, 
  FaGlobe,
  FaUserCheck,
  FaCheckCircle,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

export const metadata = {
  title: 'About Codevix | Experts in SaaS & Enterprise Software',
  description: 'Codevix is a leading technology partner specializing in Java Spring Boot, Python, and React.js. We deliver scalable SaaS, Fintech, and Healthcare solutions with high-performance cloud architectures.',
  keywords: [
    'Codevix Company Profile',
    'Enterprise Software Experts India',
    'Custom SaaS Development Team',
    'Java Backend Development Agency',
    'Scalable IT Solutions Provider',
    'Fintech Software Specialists',
    'Healthcare IT Innovation',
    'Cloud-Native Application Development'
  ].join(', '),
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 md:p-12 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-xl  text-text-secondary max-w-3xl mx-auto">
          Your trusted technology partner for digital transformation
        </p>
      </div>

     {/* Company Overview Section */}
<section className="animate-on-scroll mb-20 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      
      {/* Left Side: Content Box */}
      <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-6 md:p-10 shadow-xl border-t-3 border-b-3 border-accent relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700"></div>
        
        <div className="relative z-10">
          <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            Our Legacy
          </div>
          {/* Reduced font size for heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 leading-tight">
            Our <span className="text-accent">Story</span>
          </h2>
          
          {/* Reduced font size for body text */}
          <div className="space-y-4 text-sm md:text-base">
            <p className="text-muted leading-relaxed font-medium">
              Codevix was founded with a simple mission: to empower businesses with innovative technology solutions that drive real results. From a small startup, we have evolved into a trusted IT partner for global enterprises.
            </p>
            
            <p className="text-muted leading-relaxed font-medium">
              Our team of passionate developers and strategists build solutions that solve today's complex challenges while preparing you for tomorrow's digital opportunities.
            </p>
            
            <div className="pt-6 flex items-center space-x-4 border-t border-light-100 mt-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white shadow-md">
                <FaRocket size={16} />
              </div>
              <p className="text-primary font-bold text-base italic">
                "We don't just build software; we build success stories."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Premium HD Image */}
      <div className="relative">
        <div className="absolute -inset-4 bg-linear-to-tr from-secondary to-accent opacity-10 blur-xl rounded-[40px]"></div>
        
        <div className="relative rounded-[32px] overflow-hidden shadow-xl border-3 border-accent transform transition-transform duration-500 hover:scale-[1.01]">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Codevix Team Collaboration" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent flex flex-col justify-end p-8">
            <div className="flex items-center space-x-3 text-white">
              <div className="h-0.5 w-8 bg-accent"></div>
              <p className="text-xs font-bold uppercase tracking-[0.2em]">Excellence Defined</p>
            </div>
          </div>
        </div>
        
        {/* Updated Stat Badge to 100+ */}
        <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-light-100 hidden md:block">
          <p className="text-accent font-black text-2xl">100+</p>
          <p className="text-primary font-bold text-[10px] uppercase tracking-tighter">Trusted Clients</p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="animate-on-scroll mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
          Mission & Vision
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-r-3 border-accent border-l-3 border-background-light text-center">
            <div className="text-4xl mb-4 text-primary-light text-accent"><FaBullseye /></div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive efficiency, growth, and competitive advantage.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-r-3 border-accent border-l-3 border-background-light text-center">
            <div className="text-4xl mb-4 text-primary-light text-accent"><FaEye /></div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              To be the most trusted and innovative IT solutions provider, recognized for transforming businesses through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="animate-on-scroll mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
          Our Core Values
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Innovation */}
          <div className="bg-background-light rounded-xl p-6 text-center border-l-3 border-accent border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3 text-accent"><FaLightbulb /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Innovation</h3>
            <p className="text-text-muted">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
          </div>

          {/* Integrity */}
          <div className="bg-background-light rounded-xl p-6 text-center border-l-3 border-accent border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3 text-accent"><FaHandshake /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Integrity</h3>
            <p className="text-text-muted">We build relationships based on trust, transparency, and ethical business practices.</p>
          </div>

          {/* Excellence */}
          <div className="bg-background-light rounded-xl p-6 text-center border-l-3 border-accent border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3 text-accent"><FaStar /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Excellence</h3>
            <p className="text-text-muted">We are committed to delivering the highest quality in every project we undertake.</p>
          </div>

          {/* Collaboration */}
          <div className="bg-background-light rounded-xl p-6 text-center border-l-3 border-accent border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3 text-accent"><FaUserCheck /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Collaboration</h3>
            <p className="text-text-muted">We work closely with clients, treating their success as our own.</p>
          </div>

          {/* Agility */}
          <div className="bg-background-light rounded-xl p-6 text-center border-l-3 border-accent border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3 text-accent"><FaBolt /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Agility</h3>
            <p className="text-text-muted">We adapt quickly to changing needs and deliver solutions efficiently.</p>
          </div>

          {/* Customer Focus */}
          <div className="bg-background-light rounded-xl p-6 text-center border-l-3 border-accent border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3 text-accent"><FaGlobe /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Customer Focus</h3>
            <p className="text-text-muted">Our clients are at the center of everything we do.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="animate-on-scroll mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
          Why Choose Codevix?
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-l-3 border-accent shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-accent" /> Proven Track Record
            </h4>
            <p className="text-text-muted">Successful projects across various industries and business sizes.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-accent shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-accent" /> Technical Expertise
            </h4>
            <p className="text-text-muted">Deep knowledge of current and emerging technologies.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-accent shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-accent" /> Client-Centric Approach
            </h4>
            <p className="text-text-muted">Solutions tailored to your specific needs and goals.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-accent shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-accent" /> Quality Assurance
            </h4>
            <p className="text-text-muted">Rigorous testing and quality control processes.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-accent shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-accent" /> Timely Delivery
            </h4>
            <p className="text-text-muted">Agile methodologies ensure on-time project completion.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-accent shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-accent" /> Competitive Pricing
            </h4>
            <p className="text-text-muted">High-quality solutions at affordable prices.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="mt-16 bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
          Let's Work Together
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <p className="text-text-secondary text-xl mb-8">
          Ready to transform your business with innovative technology solutions?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:+918810338523" 
            className="bg-gradient-to-r from-primary-light to-accent text-white px-8 py-4 rounded-full font-semibold btn-hover flex items-center justify-center"
          >
            <FaPhone className="mr-2" /> Get in Touch
          </a>
          <a 
            href="mailto:contact@codevix.com" 
            className="bg-white text-primary-light px-8 py-4 rounded-full font-semibold border-2 border-background-gradient hover:bg-background-light hover:border-primary-light hover:text-primary transition-all duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" /> Request a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}