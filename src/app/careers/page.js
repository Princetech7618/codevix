import { Metadata } from 'next';
import { FaBriefcase, FaRocket, FaUsers, FaChartLine, FaEnvelope, FaPhone ,FaUserGraduate} from 'react-icons/fa';
import CareerForm from '@/components/CareerForm';

export const metadata = {
  title: 'Careers at Codevix | Join Our Tech Team',
  description: 'Build your career with Codevix. We are hiring MERN Stack Interns, Java Developers, and Python Enthusiasts to work on scalable SaaS and Fintech projects.',
  keywords: [
    'Careers at Codevix',
    'MERN Stack Internship 2026',
    'Java Spring Boot Jobs India',
    'Python Django Developer Openings',
    'Software Engineering Internships',
    'Full Stack Developer Careers',
    'IT Jobs for Freshers',
    'Work at Codevix',
    'Web Development Internships Noida'
  ].join(', '),
};

export default function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 md:p-12 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Careers at Codevix</h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Join our team of innovators and help shape the future of technology
        </p>
      </div>

      {/* Why Work With Us */}
      <section className="animate-on-scroll mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
          Why Work With Us?
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-l-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="text-4xl mb-4 text-primary-light text-accent"><FaRocket /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Innovative Projects</h3>
            <p className="text-text-muted">Work on cutting-edge technology projects that make a real impact.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="text-4xl mb-4 text-primary-light text-accent"><FaUsers /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Great Team</h3>
            <p className="text-text-muted">Collaborate with talented professionals in a supportive environment.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="text-4xl mb-4 text-primary-light text-accent"><FaChartLine /></div>
            <h3 className="text-xl font-semibold text-primary mb-2">Growth Opportunities</h3>
            <p className="text-text-muted">Continuous learning and career development opportunities.</p>
          </div>
        </div>
      </section>

   
      {/* Current Openings */}
<section className="animate-on-scroll mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
    Current Openings
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Web Developer - Kept as requested */}
    <div className="bg-white rounded-xl p-6 border-l-3 border-r-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-primary mb-2 flex items-center">
        <FaBriefcase className="mr-2 text-accent" /> Web Developer
      </h3>
      <p className="text-text-muted mb-3">We're looking for experienced web developers proficient in React, Next.js, and Node.js.</p>
      <div className="flex flex-wrap gap-2">
        <span className="bg-background-light text-primary px-3 py-1 rounded-full text-sm">Full-time</span>
        <span className="bg-background-light text-primary px-3 py-1 rounded-full text-sm">Remote</span>
      </div>
    </div>

    {/* App Developer - Kept as requested */}
    <div className="bg-white rounded-xl p-6 border-l-3 border-r-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-primary mb-2 flex items-center">
        <FaBriefcase className="mr-2 text-accent" /> App Developer
      </h3>
      <p className="text-text-muted mb-3">Seeking mobile app developers with experience in React Native or Flutter.</p>
      <div className="flex flex-wrap gap-2">
        <span className="bg-background-light text-primary px-3 py-1 rounded-full text-sm">Full-time</span>
        <span className="bg-background-light text-primary px-3 py-1 rounded-full text-sm">Hybrid</span>
      </div>
    </div>

    {/* Sales Executive - Updated */}
    <div className="bg-white rounded-xl p-6 border-l-3 border-r-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-primary mb-2 flex items-center">
        <FaChartLine className="mr-2 text-accent" /> Sales Executive
      </h3>
      <p className="text-text-muted mb-3">Join our sales team to drive revenue growth and build strong relationships with clients.</p>
      <div className="flex flex-wrap gap-2">
        <span className="bg-background-light text-primary px-3 py-1 rounded-full text-sm">Full-time</span>
        <span className="bg-background-light text-primary px-3 py-1 rounded-full text-sm">On-site</span>
      </div>
    </div>

    {/* Internship - Updated */}
    <div className="bg-white rounded-xl p-6 border-l-3 border-r-3 border-accent border-background-light shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-primary mb-2 flex items-center">
        <FaUserGraduate className="mr-2 text-accent" />Internship for Students and Freshers
      </h3>
      <p className="text-text-muted mb-3">Great opportunity for students or freshers to learn and work on real-world  projects.</p>
      <div className="flex flex-wrap gap-2">
        <span className="bg-background-light text-primary px-3 py-1 rounded-full text-sm">Internship</span>
        <span className="bg-background-light text-primary px-3 py-1 rounded-full text-sm">Remote / Hybrid</span>
      </div>
    </div>
  </div>
</section>

      {/* Application Form */}
      <section className="animate-on-scroll mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative pb-4">
          Apply Now
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-t-3 border-b-3 border-accent border-background-light">
            <h3 className="text-2xl font-bold text-primary mb-4">Join Our Team</h3>
            <p className="text-text-secondary mb-6">
              Fill out the form below and we'll review your application. We're always looking for talented individuals to join our growing team.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaBriefcase className="text-primary-light mt-1 text-accent" />
                <div>
                  <p className="text-text-muted font-medium">Open Positions</p>
                  <p className="text-text-secondary">Web Developer, App Developer, Digital Marketer, SEO Specialist</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRocket className="text-primary-light mt-1 text-accent" />
                <div>
                  <p className="text-text-muted font-medium">Work Environment</p>
                  <p className="text-text-secondary">Innovative, collaborative, and growth-focused</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaUsers className="text-primary-light mt-1 text-accent" />
                <div>
                  <p className="text-text-muted font-medium">Team Size</p>
                  <p className="text-text-secondary">Growing team of 20+ professionals</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-background-light rounded-lg">
              <p className="text-text-secondary text-sm">
                <strong className='text-blue-600'>Note:</strong> Please specify your desired position in the application form.
              </p>
            </div>
          </div>
          
          <CareerForm />
        </div>
      </section>

      {/* Contact CTA */}
      <div className="mt-16 bg-gradient-to-br from-background-light via-background-gradient to-accent rounded-2xl p-8 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
          Questions About Careers?
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-light to-accent rounded-full"></span>
        </h2>
        <p className="text-text-secondary text-xl mb-8">
          Contact our HR team for any career-related inquiries.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:+918810338523" 
            className="bg-gradient-to-r from-primary-light to-accent text-white px-8 py-4 rounded-full font-semibold btn-hover flex items-center justify-center"
          >
            <FaPhone className="mr-2" /> Call HR: +91 8810338523
          </a>
          <a 
            href="mailto:careers@codevix.com" 
            className="bg-white text-primary-light px-8 py-4 rounded-full font-semibold border-2 border-background-gradient hover:bg-background-light hover:border-primary-light hover:text-primary transition-all duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" /> Email Careers
          </a>
        </div>
      </div>
    </div>
  );
}