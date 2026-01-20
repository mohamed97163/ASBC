import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './SuccessPartners.css';

const SuccessPartners = () => {
  const { isArabic } = useLanguage();

  // Placeholder partners - user should replace with actual client logos
  const partners = [
    { name: 'Ministry of Health', nameAr: 'وزارة الصحة', logo: '🏥' },
    { name: 'STC', nameAr: 'الاتصالات السعودية', logo: '📱' },
    { name: 'Al Rajhi Trading', nameAr: 'الراجحي التجارية', logo: '🏢' },
    { name: 'Tamimi Markets', nameAr: 'أسواق التميمي', logo: '🛒' },
    { name: 'Jarir Bookstore', nameAr: 'مكتبة جرير', logo: '📚' },
    { name: 'Extra Stores', nameAr: 'إكسترا', logo: '🔌' },
    { name: 'Danube Company', nameAr: 'شركة الدانوب', logo: '🏗️' },
    { name: 'Al-Othaim Markets', nameAr: 'أسواق العثيم', logo: '🛍️' },
    { name: 'Panda Retail', nameAr: 'بنده', logo: '🐼' },
    { name: 'Almarai Company', nameAr: 'المراعي', logo: '🥛' }
  ];

  return (
    <section id="success-partners" className="success-partners">
      <div className="container"  style={{ marginBottom: '2rem' }}>
        <div className="section-title" >
          <h2 style={{ marginTop: '1rem' , color: 'white' }}>{isArabic ? 'شركاء النجاح' : 'Success Partners'}</h2>
          <p style={{ color: 'white', marginTop: '1rem' }}>
            {isArabic 
              ? 'نفخر بثقة عملائنا من الجهات الحكومية والشركات الرائدة في المملكة'
              : 'We are proud of the trust of our clients from government entities and leading companies in the Kingdom'
            }
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="partner-logo">
                {partner.logo}
              </div>
              <div className="partner-name">
                {isArabic ? partner.nameAr : partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessPartners;
