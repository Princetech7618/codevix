'use client';

import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { sendContactEmail } from '@/lib/emailjs';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setStatus({ type: 'success', message: 'Thank you for your inquiry! We will get back to you soon.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-t-3 border-b-3 border-accent border-background-light">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
      <p className="text-text-secondary mb-8">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 border-b-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent border-background-light rounded-lg form-input transition-all duration-300"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 border-b-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent border-background-light rounded-lg form-input transition-all duration-300"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 "
            className="w-full px-4 py-3 border-b-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent border-background-light rounded-lg form-input transition-all duration-300"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Tell us about your project or inquiry..."
            className="w-full px-4 py-3 border-b-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent border-background-light rounded-lg form-input transition-all duration-300 resize-y"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-primary-light to-accent text-white px-6 py-4 rounded-lg font-semibold btn-hover flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="mr-2">Sending...</span>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </>
          ) : (
            <>
              <FaPaperPlane className="mr-2" /> Send Message
            </>
          )}
        </button>
        
        {status.message && (
          <div className={`mt-4 p-4 rounded-lg font-medium text-center ${
            status.type === 'success' 
              ? 'bg-accent/10 border-2 border-accent text-accent' 
              : 'bg-red-100 border-2 border-red-400 text-red-600'
          }`}>
            {status.type === 'success' ? (
              <FaCheckCircle className="inline mr-2" />
            ) : (
              <FaExclamationCircle className="inline mr-2" />
            )}
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}