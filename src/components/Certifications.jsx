import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Certifications.css';

const Certifications = () => {
  const { isArabic } = useLanguage();
  const certifications = [
    {
      name: 'ISO 9001:2015',
      fullName: 'Quality Management System',
      fullNameAr: 'نظام إدارة الجودة',
      description: 'International standard for quality excellence'
    },
    {
      name: 'ISO 27001:2013',
      fullName: 'Information Security Management',
      fullNameAr: 'إدارة أمن المعلومات',
      description: 'Certified information security practices'
    },
    {
      name: 'ISO 20000-1:2018',
      fullName: 'IT Service Management',
      fullNameAr: 'إدارة خدمات تقنية المعلومات',
      description: 'Excellence in IT service delivery'
    },
    {
      name: 'Microsoft Gold Partner',
      fullName: 'Certified Microsoft Partner',
      fullNameAr: 'شريك مايكروسوفت المعتمد',
      description: 'Official Microsoft technology partner'
    },
    {
      name: 'AWS Advanced Partner',
      fullName: 'Amazon Web Services Partner',
      fullNameAr: 'شريك أمازون ويب سيرفس',
      description: 'Certified AWS solutions provider'
    },
    {
      name: 'Google Cloud Partner',
      fullName: 'Google Cloud Partner',
      fullNameAr: 'شريك جوجل كلاود',
      description: 'Authorized Google Cloud partner'
    }
  ];

  return (
    <section className="certifications">
      <div className="container">
        <div className="section-title">
          <h2>{isArabic ? 'الشهادات والشراكات' : 'Certifications & Partnerships'}</h2>
          <p style={{ color: 'white', marginTop: '1rem' }}>
            {isArabic 
              ? 'تميز معترف به وشراكات موثوقة تقود الابتكار'
              : 'Recognized excellence and trusted partnerships driving innovation'
            }
          </p>
        </div>

        <div className="certifications-grid grid grid-3">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="certification-card card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-header">
                <h4 className="cert-number">{cert.name}</h4>
              </div>
              <h3>{isArabic ? cert.fullNameAr : cert.fullName}</h3>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
