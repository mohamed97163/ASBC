import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaLandmark, FaHospital, FaShoppingCart, FaRocket, FaGraduationCap, FaUniversity 
} from 'react-icons/fa';
import './SectorsWeServe.css';

const SectorsWeServe = () => {
  const { isArabic } = useLanguage();

  const sectors = [
    {
      Icon: FaLandmark,
      title: 'Government Entities',
      titleAr: 'الجهات الحكومية',
      description: 'Delivering secure and compliant solutions for government organizations',
      descriptionAr: 'تقديم حلول آمنة ومتوافقة للجهات الحكومية'
    },
    {
      Icon: FaHospital,
      title: 'Healthcare Sector',
      titleAr: 'القطاع الصحي',
      description: 'Advanced healthcare management and patient care systems',
      descriptionAr: 'أنظمة متقدمة لإدارة الرعاية الصحية والمرضى'
    },
    {
      Icon: FaShoppingCart,
      title: 'E-Commerce',
      titleAr: 'التجارة الإلكترونية',
      description: 'Complete e-commerce platforms with secure payment integration',
      descriptionAr: 'منصات تجارة إلكترونية متكاملة مع تكامل دفع آمن'
    },
    {
      Icon: FaRocket,
      title: 'Startups',
      titleAr: 'الشركات الناشئة',
      description: 'Scalable technology solutions for growing businesses',
      descriptionAr: 'حلول تقنية قابلة للتطوير للشركات النامية'
    },
    {
      Icon: FaGraduationCap,
      title: 'Education',
      titleAr: 'التعليم',
      description: 'Modern learning management systems and educational platforms',
      descriptionAr: 'أنظمة إدارة التعلم الحديثة والمنصات التعليمية'
    },
    {
      Icon: FaUniversity,
      title: 'Financial Sector',
      titleAr: 'القطاع المالي',
      description: 'Secure financial solutions with regulatory compliance',
      descriptionAr: 'حلول مالية آمنة مع الامتثال التنظيمي'
    }
  ];

  return (
    <section id="sectors" className="sectors-we-serve">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: 'white' , marginTop: '1rem'  }}>{isArabic ? 'القطاعات التي نخدمها' : 'Sectors We Serve'}</h2>
          <p style={{ color: 'white', marginTop: '1rem' }}>
            {isArabic ? 'نقدم حلولنا التقنية لمختلف القطاعات في المملكة' : 'We deliver our technical solutions across various sectors in the Kingdom'}
          </p>
        </div>

        <div className="sectors-grid grid grid-3">
          {sectors.map((sector, index) => {
            const IconComponent = sector.Icon;
            return (
              <div 
                key={index} 
                className="sector-card card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="sector-icon">
                  <IconComponent />
                </div>
                <h3>{isArabic ? sector.titleAr : sector.title}</h3>
                <p className="sector-description">{isArabic ? sector.descriptionAr : sector.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsWeServe;
