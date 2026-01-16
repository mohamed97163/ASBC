import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaGlobe, FaCogs, FaCode, FaLink, FaTools, FaBullseye, FaMobileAlt 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const { isArabic } = useLanguage();
  
  const services = [
    {
      Icon: FaGlobe,
      title: 'Web & Mobile Development',
      titleAr: 'تطوير المواقع والتطبيقات',
      description: 'Custom website and mobile application design and development tailored to your business needs.',
      descriptionAr: 'تصميم وتطوير مواقع الويب والتطبيقات المحمولة حسب احتياجات عملك.'
    },
    {
      Icon: FaCogs,
      title: 'CRM & ERP Systems',
      titleAr: 'أنظمة إدارة العملاء والموارد',
      description: 'Comprehensive CRM and ERP system design and development for all types of departments.',
      descriptionAr: 'تصميم وتطوير أنظمة CRM و ERP شاملة لجميع أنواع الأقسام داخل الشركة.'
    },
    {
      Icon: FaCode,
      title: 'Custom Software',
      titleAr: 'برمجيات مخصصة',
      description: 'Bespoke software development solutions precisely tailored to your specific requirements.',
      descriptionAr: 'حلول تطوير برمجيات مخصصة تتناسب تماماً مع متطلباتك الخاصة.'
    },
    {
      Icon: FaLink,
      title: 'System Integration',
      titleAr: 'تكامل الأنظمة',
      description: 'Seamless integration of APIs, cloud services, and electronic payment platforms.',
      descriptionAr: 'تكامل سلس للـ APIs والخدمات السحابية ومنصات الدفع الإلكتروني.'
    },
    {
      Icon: FaTools,
      title: 'Technical Support',
      titleAr: 'الدعم الفني',
      description: 'Ongoing technical support and maintenance to keep your systems running smoothly.',
      descriptionAr: 'دعم فني وصيانة مستمرة للحفاظ على أنظمتك تعمل بسلاسة.'
    },
    {
      Icon: FaBullseye,
      title: 'Digital Solutions',
      titleAr: 'الحلول الرقمية',
      description: 'Comprehensive digital solutions and technical consulting for your business growth.',
      descriptionAr: 'حلول رقمية شاملة واستشارات فنية لنمو أعمالك.'
    },
    {
      Icon: FaMobileAlt,
      title: 'Digital Marketing',
      titleAr: 'التسويق الرقمي',
      description: 'Strategic digital marketing and content management to boost your online presence.',
      descriptionAr: 'تسويق رقمي استراتيجي وإدارة محتوى لتعزيز تواجدك عبر الإنترنت.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>{isArabic ? 'خدماتنا' : 'Our Services'}</h2>
          <p style={{ color: 'white', marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0' }}>
            {isArabic ? 'نقدم حلولاً تقنية متكاملة لتطوير أعمالك' : 'Comprehensive technology solutions to grow your business'}
          </p>
        </div>

        <div className="services-grid grid grid-3">
          {services.map((service, index) => {
            const IconComponent = service.Icon;
            return (
              <div 
                key={index} 
                className="service-card card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <IconComponent />
                </div>
                <h3>{isArabic ? service.titleAr : service.title}</h3>
                <p className="service-description">{isArabic ? service.descriptionAr : service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
