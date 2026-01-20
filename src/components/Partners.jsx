import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaCreditCard, FaMobileAlt, FaFileInvoice, FaCloud, FaLock, 
  FaDatabase, FaMapMarkedAlt, FaChartLine, FaEnvelope, 
  FaServer, FaUserShield, FaShippingFast
} from 'react-icons/fa';
import './Partners.css';

const Partners = () => {
  const { isArabic } = useLanguage();
  const integrations = [
    { 
      name: 'Mada Payment Gateway', 
      nameAr: 'بوابة مدى للدفع',
      Icon: FaCreditCard,
      category: 'Payment',
      description: 'Local payment processing'
    },
    { 
      name: 'SMS Gateway',
      nameAr: 'بوابة الرسائل القصيرة', 
      Icon: FaMobileAlt,
      category: 'Communications',
      description: 'OTP & notifications'
    },
    { 
      name: 'E-Invoice Platform', 
      nameAr: 'منصة الفوترة الإلكترونية',
      Icon: FaFileInvoice,
      category: 'E-Invoice',
      description: 'ZATCA integration'
    },
    { 
      name: 'Cloud Storage', 
      nameAr: 'التخزين السحابي',
      Icon: FaCloud,
      category: 'Storage',
      description: 'Secure file storage'
    },
    { 
      name: 'Nafath Authentication',
      nameAr: 'نفاذ الوطني',
      Icon: FaLock,
      category: 'Authentication',
      description: 'National SSO'
    },
    { 
      name: 'Database Service', 
      nameAr: 'خدمة قواعد البيانات',
      Icon: FaDatabase,
      category: 'Database',
      description: 'Managed databases'
    },
    { 
      name: 'Maps & Location API',
      nameAr: 'خدمة الخرائط والموقع',
      Icon: FaMapMarkedAlt,
      category: 'Location',
      description: 'Geolocation services'
    },
    { 
      name: 'Analytics Platform', 
      nameAr: 'منصة التحليلات',
      Icon: FaChartLine,
      category: 'Analytics',
      description: 'Business intelligence'
    },
    { 
      name: 'Email Service',
      nameAr: 'خدمة البريد الإلكتروني',
      Icon: FaEnvelope,
      category: 'Email',
      description: 'Email delivery'
    },
    { 
      name: 'CDN Service',
      nameAr: 'شبكة توزيع المحتوى',
      Icon: FaServer,
      category: 'CDN',
      description: 'Content delivery'
    },
    { 
      name: 'Social Login',
      nameAr: 'تسجيل الدخول الاجتماعي',
      Icon: FaUserShield,
      category: 'OAuth',
      description: 'Social authentication'
    },
    { 
      name: 'Delivery API',
      nameAr: 'واجهة خدمات التوصيل',
      Icon: FaShippingFast,
      category: 'Logistics',
      description: 'Shipping integration'
    }
  ];

  return (
    <section id="partners" className="partners">
      <div className="container">
        <div className="section-title">
          <h2 style={{ marginTop: '1rem' }}>{isArabic ? 'التكاملات التقنية' : 'Technology Integrations'}</h2>
          <p style={{ color: 'white', marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0' }}>
            {isArabic 
              ? 'نتكامل مع أفضل الخدمات والمنصات التقنية العالمية لتقديم حلول متطورة وموثوقة'
              : 'Seamlessly integrating with world-class platforms and services to deliver powerful, reliable solutions'
            }
          </p>
        </div>

        <div className="partners-grid grid grid-4">
          {integrations.map((integration, index) => {
            const IconComponent = integration.Icon;
            return (
              <div 
                key={index} 
                className="partner-card card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <IconComponent className="partner-logo" />
                <div className="partner-info">
                  <h4>{isArabic ? integration.nameAr : integration.name}</h4>
                  <span className="partner-category">{integration.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
