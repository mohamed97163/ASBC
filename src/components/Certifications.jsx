import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaDownload } from 'react-icons/fa';
import iso14001 from '../assets/ARABIAN SOLUTIONS BEACON COMPANY EMS.pdf';
import iso45001 from '../assets/ARABIAN SOLUTIONS BEACON COMPANY OHSMS.pdf';
import iso9001 from '../assets/ARABIAN SOLUTIONS BEACON COMPANY.pdf';
import './Certifications.css';

const Certifications = () => {
  const { isArabic } = useLanguage();
  const certifications = [
    {
      name: 'ISO 14001:2015',
      fullName: 'Environmental Management System',
      fullNameAr: 'نظام إدارة البيئة',
      description: 'Supply and installation projects',
      file: iso14001
    },
    {
      name: 'ISO 45001:2018',
      fullName: 'Occupational Health and Safety Management',
      fullNameAr: 'إدارة الصحة والسلامة المهنية',
      description: 'Occupational health and safety management system',
      file: iso45001
    },
    {
      name: 'ISO 9001:2015',
      fullName: 'Quality Management System',
      fullNameAr: 'نظام إدارة الجودة',
      description: 'Quality management system',
      file: iso9001
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
              
              {cert.file && (
                <a 
                  href={cert.file} 
                  download 
                  className="cert-download-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="download-icon" />
                  <span>{isArabic ? 'تحميل الشهادة' : 'Download Certificate'}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
