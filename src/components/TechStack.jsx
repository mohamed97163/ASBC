import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaPhp, FaJava,
  FaApple, FaAndroid, FaAws, FaDocker, FaFigma, FaMicrosoft 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiDjango,
  SiFlutter, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiFirebase,
  SiGooglecloud, SiKubernetes, SiAdobexd, SiSketch, 
  SiAdobephotoshop
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { MdIntegrationInstructions } from 'react-icons/md';
import './TechStack.css';

const TechStack = () => {
  const { isArabic } = useLanguage();
  const technologies = [
    {
      category: 'Frontend Development',
      categoryAr: 'تطوير الواجهة الأمامية',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      techs: [
        { name: 'React', Icon: FaReact },
        { name: 'Vue.js', Icon: FaVuejs },
        { name: 'Angular', Icon: FaAngular },
        { name: 'Next.js', Icon: SiNextdotjs },
        { name: 'TypeScript', Icon: SiTypescript },
        { name: 'Tailwind CSS', Icon: SiTailwindcss }
      ]
    },
    {
      category: 'Backend Development',
      categoryAr: 'تطوير الخلفية',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      techs: [
        { name: 'Node.js', Icon: FaNodeJs },
        { name: 'Python', Icon: FaPython },
        { name: 'PHP', Icon: FaPhp },
        { name: 'Java', Icon: FaJava },
        { name: 'Express.js', Icon: SiExpress },
        { name: 'Django', Icon: SiDjango }
      ]
    },
    {
      category: 'Mobile Development',
      categoryAr: 'تطوير تطبيقات الجوال',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      techs: [
        { name: 'Flutter', Icon: SiFlutter },
        { name: 'React Native', Icon: TbBrandReactNative },
        { name: 'iOS (Swift)', Icon: FaApple },
        { name: 'Android (Kotlin)', Icon: FaAndroid }
      ]
    },
    {
      category: 'Database & Storage',
      categoryAr: 'قواعد البيانات والتخزين',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      techs: [
        { name: 'MongoDB', Icon: SiMongodb },
        { name: 'MySQL', Icon: SiMysql },
        { name: 'PostgreSQL', Icon: SiPostgresql },
        { name: 'Redis', Icon: SiRedis },
        { name: 'Firebase', Icon: SiFirebase }
      ]
    },
    {
      category: 'Cloud & DevOps',
      categoryAr: 'السحابة والعمليات',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      techs: [
        { name: 'AWS', Icon: FaAws },
        { name: 'Azure', Icon: FaMicrosoft },
        { name: 'Google Cloud', Icon: SiGooglecloud },
        { name: 'Docker', Icon: FaDocker },
        { name: 'Kubernetes', Icon: SiKubernetes },
        { name: 'CI/CD', Icon: MdIntegrationInstructions }
      ]
    },
    {
      category: 'UI/UX Design',
      categoryAr: 'تصميم واجهة المستخدم',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      techs: [
        { name: 'Figma', Icon: FaFigma },
        { name: 'Adobe XD', Icon: SiAdobexd },
        { name: 'Sketch', Icon: SiSketch },
        { name: 'Photoshop', Icon: SiAdobephotoshop }
      ]
    }
  ];

  return (
    <section className="tech-stack">
      <div className="container">
        <div className="section-title">
          <h2>{isArabic ? 'التقنيات التي نتقنها' : 'Technologies We Master'}</h2>
          <p style={{ color: 'white', marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0' }}>
            {isArabic 
              ? 'مجموعة تقنية حديثة تدعم الحلول الرقمية المبتكرة'
              : 'Cutting-edge technology stack powering innovative digital solutions'
            }
          </p>
        </div>

        <div className="tech-grid grid grid-3">
          {technologies.map((category, index) => (
            <div 
              key={index} 
              className="tech-category-card card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-header" style={{ background: category.gradient }}>
                <h3>{isArabic ? category.categoryAr : category.category}</h3>
              </div>
              
              <div className="tech-list">
                {category.techs.map((tech, techIndex) => {
                  const IconComponent = tech.Icon;
                  return (
                    <div 
                      key={techIndex} 
                      className="tech-item"
                      style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                    >
                      <IconComponent className="tech-logo" />
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
