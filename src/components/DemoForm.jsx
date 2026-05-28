'use client';

import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaCalendarAlt } from 'react-icons/fa';
import { sendDemoEmail } from '@/lib/emailjs';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    time: '',
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
      const result = await sendDemoEmail(formData);
      
      if (result.success) {
        setStatus({ type: 'success', message: 'Demo request submitted successfully! We will contact you shortly to confirm.' });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          date: '',
          time: '',
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
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Schedule a Demo</h2>
      <p className="text-text-secondary mb-8">
        Fill out the form below to request a product demonstration.
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
          <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Your Company Name"
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
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 "
            className="w-full px-4 py-3 border-b-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent border-background-light rounded-lg form-input transition-all duration-300"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-primary mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-b-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent border-background-light rounded-lg form-input transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-primary mb-2">
              Preferred Time *
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-b-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent border-background-light rounded-lg form-input transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about your requirements or questions..."
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
              <span className="mr-2">Submitting...</span>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </>
          ) : (
            <>
              <FaCalendarAlt className="mr-2" /> Schedule Demo
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