'use client';

import { useEffect } from 'react';

export default function ServiceCard({ icon, title, description, id }) {
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
      className="bg-background-light rounded-2xl p-6 text-center border-2 border-background-light hover:border-primary-light hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
    >
      <div className="text-4xl mb-4 text-primary-light">{icon}</div>
      <h3 className="text-xl font-semibold text-primary-light mb-3">{title}</h3>
      <p className="text-text-muted">{description}</p>
    </div>
  );
}