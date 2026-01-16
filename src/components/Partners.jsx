import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaIndustry, FaMobileAlt, FaBuilding, FaShoppingCart, FaCar, FaUtensils,
  FaBox, FaBriefcase, FaShieldAlt, FaCreditCard, FaMoneyBillWave, FaCarSide
} from 'react-icons/fa';
import './Partners.css';

const Partners = () => {
  const { isArabic } = useLanguage();
  const partners = [
    { 
      name: 'Saudi Aramco', 
      nameAr: 'أرامكو السعودية',
      Icon: FaIndustry,
      category: 'Energy'
    },
    { 
      name: 'STC',
      nameAr: 'الاتصالات السعودية', 
      Icon: FaMobileAlt,
      category: 'Telecom'
    },
    { 
      name: 'SABIC', 
      nameAr: 'سابك',
      Icon: FaBuilding,
      category: 'Manufacturing'
    },
    { 
      name: 'Noon', 
      nameAr: 'نون',
      Icon: FaShoppingCart,
      category: 'E-Commerce'
    },
    { 
      name: 'Careem',
      nameAr: 'كريم',
      Icon: FaCar,
      category: 'Transportation'
    },
    { 
      name: 'Jahez', 
      nameAr: 'جاهز',
      Icon: FaUtensils,
      category: 'Food Delivery'
    },
    { 
      name: 'Mrsool',
      nameAr: 'مرسول',
      Icon: FaBox,
      category: 'Delivery'
    },
    { 
      name: 'Elm', 
      nameAr: 'علم',
      Icon: FaBriefcase,
      category: 'Digital Solutions'
    },
    { 
      name: 'Tahakom',
      nameAr: 'تحاكم',
      Icon: FaShieldAlt,
      category: 'Cybersecurity'
    },
    { 
      name: 'Lean',
      nameAr: 'لين',
      Icon: FaCreditCard,
      category: 'Fintech'
    },
    { 
      name: 'Tamara',
      nameAr: 'تمارا',
      Icon: FaMoneyBillWave,
      category: 'Payment'
    },
    { 
      name: 'Seez',
      nameAr: 'سيز',
      Icon: FaCarSide,
      category: 'Automotive'
    }
  ];

  return (
    <section id="partners" className="partners">
      <div className="container">
        <div className="section-title">
          <h2>{isArabic ? 'شركاؤنا الموثوقون' : 'Our Trusted Partners'}</h2>
          <p style={{ color: 'white', marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0' }}>
            {isArabic 
              ? 'نتعاون مع كبرى الشركات السعودية والإقليمية لقيادة الابتكار الرقمي'
              : 'Collaborating with leading Saudi and regional enterprises to drive digital innovation'
            }
          </p>
        </div>

        <div className="partners-grid grid grid-4">
          {partners.map((partner, index) => {
            const IconComponent = partner.Icon;
            return (
              <div 
                key={index} 
                className="partner-card card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <IconComponent className="partner-logo" />
                <div className="partner-info">
                  <h4>{isArabic ? partner.nameAr : partner.name}</h4>
                  <span className="partner-category">{partner.category}</span>
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
