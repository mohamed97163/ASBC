import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaEye, FaBullhorn, FaHeart } from 'react-icons/fa';
import './VisionMissionValues.css';

const VisionMissionValues = () => {
  const { isArabic } = useLanguage();

  return (
    <section id="vision" className="vision-mission-values">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: 'white', marginTop: '1rem' }}>{isArabic ? 'رؤيتنا، رسالتنا، وقيمنا' : 'Our Vision, Mission & Values'}</h2>
          <p style={{ color: 'white', marginTop: '1rem' }}>
            {isArabic ? 'نلتزم بالتميز والابتكار في كل ما نقدمه' : 'We are committed to excellence and innovation in everything we offer'}
          </p>
        </div>

        <div className="vmv-grid">
          {/* Vision */}
          <div className="vmv-card card">
            <div className="vmv-icon">
              <FaEye />
            </div>
            <h3>{isArabic ? 'الرؤية' : 'Vision'}</h3>
            <p className="vmv-content">
              {isArabic 
                ? 'أن نكون الشريك التقني الأول في دعم التحول الرقمي بالمملكة'
                : 'To be the first technical partner in supporting digital transformation in the Kingdom'
              }
            </p>
          </div>

          {/* Mission */}
          <div className="vmv-card card">
            <div className="vmv-icon">
              <FaBullhorn />
            </div>
            <h3>{isArabic ? 'الرسالة' : 'Mission'}</h3>
            <p className="vmv-content">
              {isArabic 
                ? 'تقديم حلول تقنية مبتكرة وآمنة تدعم نمو أعمال عملائنا وتواكب مستهدفات رؤية 2030'
                : 'Providing innovative and secure technical solutions that support our clients\' business growth and align with Vision 2030 objectives'
              }
            </p>
          </div>

          {/* Values */}
          <div className="vmv-card card vmv-values-card">
            <div className="vmv-icon">
              <FaHeart />
            </div>
            <h3>{isArabic ? 'القيم' : 'Values'}</h3>
            <div className="values-list">
              <div className="value-item">
                <span className="value-bullet">✦</span>
                <span>{isArabic ? 'الاحترافية' : 'Professionalism'}</span>
              </div>
              <div className="value-item">
                <span className="value-bullet">✦</span>
                <span>{isArabic ? 'الابتكار' : 'Innovation'}</span>
              </div>
              <div className="value-item">
                <span className="value-bullet">✦</span>
                <span>{isArabic ? 'الموثوقية' : 'Reliability'}</span>
              </div>
              <div className="value-item">
                <span className="value-bullet">✦</span>
                <span>{isArabic ? 'الالتزام' : 'Commitment'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
