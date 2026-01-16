import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaTiktok, FaSnapchatGhost 
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { isArabic } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactMethods = [
    {
      Icon: FaPhone,
      title: 'Call Us',
      titleAr: 'اتصل بنا',
      value: '00966541120717',
      link: 'tel:+966541120717',
      description: 'Mon-Fri 9AM-5PM'
    },
    {
      Icon: FaEnvelope,
      title: 'Email Us',
      titleAr: 'راسلنا',
      value: 'info@asbc-sa.net',
      link: 'mailto:info@asbc-sa.net',
      description: '24/7 Support',
      descriptionAr: '24/7 دعم'
    },
    {
      Icon: FaMapMarkerAlt,
      title: 'Visit Us',
      titleAr: 'زُرنا',
      value: 'Riyadh, Saudi Arabia',
      link: '#',
      description: 'King Fahd Road',
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>{isArabic ? 'تواصل معنا' : 'Get In Touch'}</h2>
          <p style={{ color: 'white', marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0' }}>
            {isArabic 
              ? 'دعنا نناقش كيف يمكننا مساعدتك في تحويل عملك بحلول تقنية مبتكرة'
              : "Let's discuss how we can help transform your business with innovative technology solutions"
            }
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-grid">
            {contactMethods.map((method, index) => {
              const IconComponent = method.Icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  className="contact-method-card card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="method-icon" />
                  <div className="method-content">
                    <h4>{isArabic ? method.titleAr : method.title}</h4>
                    <p className="method-value">{method.value}</p>
                    <span className="method-description">{method.description}</span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="contact-form-section">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3>{isArabic ? 'أرسل لنا رسالة' : 'Send us a message'}</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{isArabic ? 'اسمك *' : 'Your Name *'}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={isArabic ? 'أحمد محمد' : 'John Doe'}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{isArabic ? 'البريد الإلكتروني *' : 'Email Address *'}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={isArabic ? 'example@email.com' : 'john@example.com'}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+966 XXX XXX XXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="crm">CRM/ERP Systems</option>
                    <option value="custom">Custom Software</option>
                    <option value="consulting">Technical Consulting</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                <span>{isArabic ? 'إرسال الرسالة' : 'Send Message'}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 10L18 2L10 18L8 11L2 10Z" fill="currentColor"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
