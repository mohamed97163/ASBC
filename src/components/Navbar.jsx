import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, isArabic } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', nameAr: 'الرئيسية', href: '#hero' },
    { name: 'Services', nameAr: 'الخدمات', href: '#services' },
    { name: 'Projects', nameAr: 'المشاريع', href: '#projects' },
    { name: 'Partners', nameAr: 'الشركاء', href: '#partners' },
    { name: 'Contact', nameAr: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="#hero" className="navbar-logo">
            <img src={logo} alt="ASBC Logo" />
          </a>

          <button 
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="navbar-right">
            <button 
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <span className="flag">{isArabic ? '🇬🇧' : '🇸🇦'}</span>
              <span className="lang-text">{isArabic ? 'EN' : 'AR'}</span>
            </button>

            <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {isArabic ? item.nameAr : item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
