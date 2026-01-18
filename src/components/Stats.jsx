import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Stats.css';

const Stats = () => {
  const { isArabic } = useLanguage();
  const [counts, setCounts] = useState({
    projects: 0,
    services: 0,
    employees: 0,
    clients: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { key: 'projects', icon: '🚀', target: 50, label: 'Projects Completed', labelAr: 'مشروع منجز', suffix: '+' },
    { key: 'services', icon: '⚡', target: 15, label: 'Services Offered', labelAr: 'خدمة مقدمة', suffix: '+' },
    { key: 'employees', icon: '👥', target: 10, label: 'Team Members', labelAr: 'عضو فريق', suffix: '+' },
    { key: 'clients', icon: '🤝', target: 50, label: 'Satisfied Clients', labelAr: 'عميل راضٍ', suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          setCounts(prev => ({ ...prev, [stat.key]: stat.target }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [stat.key]: Math.floor(current) }));
        }
      }, 30);
    });
  };

  return (
    <section className="stats" ref={statsRef}>
      <div className="container">
        <div className="section-title">
          <h2>{isArabic ? 'تأثيرنا بالأرقام' : 'Our Impact in Numbers'}</h2>
        </div>

        <div className="stats-grid grid grid-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.key} 
              className="stat-card card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {counts[stat.key]}{stat.suffix}
              </div>
              <h3>{isArabic ? stat.labelAr : stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
