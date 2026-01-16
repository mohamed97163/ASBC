import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Testimonials.css';

const Testimonials = () => {
  const { isArabic } = useLanguage();
  const testimonials = [
    {
      text: 'Working with ASBC was a game-changer for our business. Their expertise and dedication delivered exceptional results.',
      textAr: 'العمل مع منارة الحلول العربية كان تغييرًا جذريًا لأعمالنا. خبرتهم وتفانيهم حققا نتائج استثنائية.',
      author: 'Mohammed Al-Khalidi',
      authorAr: 'محمد الخالدي',
      company: 'Tech Innovations KSA',
      companyAr: 'الابتكارات التقنية السعودية',
      rating: 5
    },
    {
      text: 'Outstanding service and support! The team went above and beyond to ensure our project success.',
      textAr: 'خدمة ودعم متميزان! الفريق بذل جهدًا إضافيًا لضمان نجاح مشروعنا.',
      author: 'Sara Al-Zahrani',
      authorAr: 'سارة الزهراني',
      company: 'Digital Solutions Co.',
      companyAr: 'شركة الحلول الرقمية',
      rating: 5
    },
    {
      text: 'Professional, reliable, and innovative. ASBC transformed our digital presence completely.',
      textAr: 'محترفون وموثوقون ومبتكرون. غيّرت منارة الحلول العربية تواجدنا الرقمي بالكامل.',
      author: 'Faisal Al-Otaibi',
      authorAr: 'فيصل العتيبي',
      company: 'Kingdom Enterprises',
      companyAr: 'مؤسسات المملكة',
      rating: 5
    },
    {
      text: 'Excellent communication and impressive technical skills. Highly recommend!',
      textAr: 'تواصل ممتاز ومهارات تقنية مذهلة. نوصي بشدة!',
      author: 'Layla Al-Mansour',
      authorAr: 'ليلى المنصور',
      company: 'Smart Business Hub',
      companyAr: 'مركز الأعمال الذكية',
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>{isArabic ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}</h2>
        </div>

        <div className="testimonials-grid grid grid-2">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{isArabic ? testimonial.textAr : testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.author.charAt(0)}</div>
                <div className="author-info">
                  <h4>{isArabic ? testimonial.authorAr : testimonial.author}</h4>
                  <p className="author-company">{isArabic ? testimonial.companyAr : testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
