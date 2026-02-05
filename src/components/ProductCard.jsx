'use client';

import { useEffect } from 'react';

export default function ProductCard({ icon, title, description, features, id }) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);

  return (
    <div 
      id={id}
      className="bg-white rounded-xl p-6 border-2 border-background-gradient hover:border-accent hover:shadow-lg transition-all duration-300 animate-on-scroll"
    >
      <h4 className="text-xl font-semibold text-primary-light mb-3 flex items-center">
        {icon} {title}
      </h4>
      <p className="text-text-muted mb-4">{description}</p>
      {features && features.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="bg-gradient-to-r from-accent to-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold"
            >
              {feature}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}