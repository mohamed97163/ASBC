import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.png';
import './Hero.css';

const Hero = () => {
  const { isArabic } = useLanguage();
  
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="geometric-pattern"></div>
        <div className="arabian-pattern arabian-pattern-left"></div>
        <div className="arabian-pattern arabian-pattern-right"></div>
      </div>
      
      <div className="hero-container-wide">
        <div className="hero-content">
          <div className="hero-text animate-fadeInUp">
            {/* Saudi Identity Statement */}
            <div className="hero-identity">
              <span className="identity-badge">
                {isArabic ? '🇸🇦 شركة سعودية رائدة في حلول التحول الرقمي' : '🇸🇦 A Leading Saudi Company in Digital Transformation Solutions'}
              </span>
            </div>

            <h1>
              <span className="hero-title-main">
                {isArabic ? 'منارة الحلول العربية' : 'Arabian Solutions Beacon'}
              </span>
              <span className="hero-title-gradient">
                {isArabic ? 'نقود التحول الرقمي في المملكة' : 'Leading Digital Transformation in the Kingdom'}
              </span>
            </h1>
            
            <p className="hero-description">
              {isArabic 
                ? 'نمكّن الجهات الحكومية والشركات السعودية بحلول تقنية مبتكرة وآمنة'
                : 'Empowering Saudi government entities and companies with innovative and secure technical solutions'
              }
            </p>
            
            <p className="hero-subtext">
              {isArabic 
                ? 'خبرة محلية، معايير عالمية، نتائج موثوقة - نواكب مستهدفات التحول الرقمي في رؤية السعودية 2030'
                : 'Local expertise, global standards, trusted results - Aligning with Saudi Vision 2030 digital transformation goals'
              }
            </p>

            <div className="hero-stats-mini">
              <div className="mini-stat">
                <span className="mini-stat-number">50+</span>
                <span className="mini-stat-label">{isArabic ? 'مشروع' : 'Projects'}</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-number">10+</span>
                <span className="mini-stat-label">{isArabic ? 'سنة' : 'Years'}</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-number">50+</span>
                <span className="mini-stat-label">{isArabic ? 'عميل' : 'Clients'}</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-number">100%</span>
                <span className="mini-stat-label">{isArabic ? 'رضا' : 'Satisfaction'}</span>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-hero-primary">
                <span>{isArabic ? 'ابدأ مشروعك' : 'Start Your Project'}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#services" className="btn btn-hero-secondary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 10L10 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{isArabic ? 'استكشف الخدمات' : 'Explore Services'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
