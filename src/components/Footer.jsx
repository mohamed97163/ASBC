import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaTiktok, FaSnapchatGhost 
} from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const { isArabic } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      titleAr: 'روابط سريعة',
      links: [
        { name: 'Home', nameAr: 'الرئيسية', href: '#hero' },
        { name: 'Services', nameAr: 'الخدمات', href: '#services' },
        { name: 'Projects', nameAr: 'المشاريع', href: '#projects' },
        { name: 'About Us', nameAr: 'من نحن', href: '#team' },
        { name: 'Contact', nameAr: 'تواصل معنا', href: '#contact' }
      ]
    },
    {
      title: 'Our Services',
      titleAr: 'خدماتنا',
      links: [
        { name: 'Web Development', nameAr: 'تطوير المواقع', href: '#services' },
        { name: 'Mobile Apps', nameAr: 'تطبيقات الجوال', href: '#services' },
        { name: 'Cloud Solutions', nameAr: 'الحلول السحابية', href: '#services' },
        { name: 'CRM/ERP Systems', nameAr: 'أنظمة إدارة الموارد', href: '#services' },
        { name: 'Consulting', nameAr: 'الاستشارات', href: '#services' }
      ]
    },
    {
      title: 'Resources',
      titleAr: 'الموارد',
      links: [
        { name: 'Blog', nameAr: 'المدونة', href: '#' },
        { name: 'Case Studies', nameAr: 'دراسات الحالة', href: '#' },
        { name: 'Careers', nameAr: 'الوظائف', href: '#' },
        { name: 'Privacy Policy', nameAr: 'سياسة الخصوصية', href: '#' },
        { name: 'Terms of Service', nameAr: 'الشروط والأحكام', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', Icon: FaFacebookF, url: 'https://web.facebook.com/profile.php?id=61584469807922', color: '#1877f2' },
    // { name: 'Instagram', Icon: FaInstagram, url: 'https://instagram.com', color: '#e4405f' },
    { name: 'LinkedIn', Icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/arabian-solutions-beacon', color: '#0077b5' },
    // { name: 'Twitter', Icon: FaTwitter, url: 'https://twitter.com', color: '#1da1f2' },
    // { name: 'TikTok', Icon: FaTiktok, url: 'https://tiktok.com', color: '#000000' },
    // { name: 'Snapchat', Icon: FaSnapchatGhost, url: 'https://snapchat.com', color: '#fffc00' }
  ];



  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>{isArabic ? 'منارة الحلول العربية' : 'Arabian Solutions Beacon'}</h3>
              <p className="footer-tagline">
                {isArabic 
                  ? 'نُضيء طريق التميز الرقمي في السعودية وما بعدها'
                  : 'Illuminating the path to digital excellence in Saudi Arabia and beyond.'
                }
              </p>
              
              <div className="footer-certifications">
                <div className="cert-badge">
                  <span className="cert-text">🇸🇦 Vision 2030</span>
                </div>
                <div className="cert-badge">
                  <span className="cert-text">ISO Certified</span>
                </div>
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div key={index} className="footer-section">
                <h4>{isArabic ? section.titleAr : section.title}</h4>
                <ul className="footer-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>
                        <span className="link-text">{isArabic ? link.nameAr : link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-social">
        <div className="container">
          <h4>{isArabic ? 'تابعنا' : 'Follow Us'}</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => {
              const IconComponent = social.Icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                  aria-label={social.name}
                  style={{ '--social-color': social.color }}
                >
                  <IconComponent className="social-icon" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                {isArabic 
                  ? `جميع الحقوق محفوظة © ${currentYear} منارة الحلول العربية (ASBC)`
                  : `© ${currentYear} Arabian Solutions Beacon (ASBC). All rights reserved.`
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
