import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { isArabic } = useLanguage();
  const projects = [
    {
      title: 'E-Commerce Platform',
      titleAr: 'منصة التجارة الإلكترونية',
      description: 'Full-featured online shopping platform with payment integration',
      descriptionAr: 'منصة تسوق إلكترونية متكاملة مع تكامل الدفع',
      category: 'Web Development',
      image: '🛒'
    },
    {
      title: 'Healthcare Management System',
      titleAr: 'نظام إدارة الرعاية الصحية',
      description: 'Comprehensive patient management and appointment scheduling',
      descriptionAr: 'إدارة شاملة للمرضى وجدولة المواعيد',
      category: 'CRM/ERP',
      image: '🏥'
    },
    {
      title: 'Real Estate Portal',
      titleAr: 'بوابة العقارات',
      description: 'Property listing and management platform with advanced search',
      descriptionAr: 'منصة لإدراج وإدارة العقارات مع بحث متقدم',
      category: 'Web Development',
      image: '🏘️'
    },
    {
      title: 'Mobile Banking App',
      titleAr: 'تطبيق الخدمات المصرفية',
      description: 'Secure mobile banking solution with biometric authentication',
      descriptionAr: 'حل مصرفي آمن عبر الجوال مع المصادقة البيومترية',
      category: 'Mobile App',
      image: '💳'
    },
    {
      title: 'Inventory Management',
      titleAr: 'إدارة المخزون',
      description: 'Advanced warehouse and inventory tracking system',
      descriptionAr: 'نظام متقدم لتتبع المستودعات والمخزون',
      category: 'ERP',
      image: '📦'
    },
    {
      title: 'Educational Platform',
      titleAr: 'منصة تعليمية',
      description: 'Online learning management system with video streaming',
      descriptionAr: 'نظام إدارة التعلم عبر الإنترنت مع بث الفيديو',
      category: 'Web Development',
      image: '📚'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>{isArabic ? 'مشاريعنا' : 'Our Projects'}</h2>
        </div>

        <div className="projects-grid grid grid-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{isArabic ? project.titleAr : project.title}</h3>
                <p className="project-description">{isArabic ? project.descriptionAr : project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
