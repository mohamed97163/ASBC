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
      clientName: 'Saudi Retail Company',
      clientNameAr: 'شركة التجزئة السعودية',
      projectType: 'Enterprise E-Commerce',
      projectTypeAr: 'تجارة إلكترونية للمؤسسات',
      category: 'Web Development',
      image: '🛒'
    },
    {
      title: 'Healthcare Management System',
      titleAr: 'نظام إدارة الرعاية الصحية',
      description: 'Comprehensive patient management and appointment scheduling',
      descriptionAr: 'إدارة شاملة للمرضى وجدولة المواعيد',
      clientName: 'Ministry of Health',
      clientNameAr: 'وزارة الصحة',
      projectType: 'Government Portal',
      projectTypeAr: 'بوابة حكومية',
      category: 'CRM/ERP',
      image: '🏥'
    },
    {
      title: 'Real Estate Portal',
      titleAr: 'بوابة العقارات',
      description: 'Property listing and management platform with advanced search',
      descriptionAr: 'منصة لإدراج وإدارة العقارات مع بحث متقدم',
      clientName: 'National Housing Company',
      clientNameAr: 'الشركة الوطنية للإسكان',
      projectType: 'Enterprise Solution',
      projectTypeAr: 'حل مؤسسي',
      category: 'Web Development',
      image: '🏘️'
    },
    {
      title: 'Mobile Banking App',
      titleAr: 'تطبيق الخدمات المصرفية',
      description: 'Secure mobile banking solution with biometric authentication',
      descriptionAr: 'حل مصرفي آمن عبر الجوال مع المصادقة البيومترية',
      clientName: 'Saudi Investment Bank',
      clientNameAr: 'البنك السعودي للاستثمار',
      projectType: 'Mobile Application',
      projectTypeAr: 'تطبيق جوال',
      category: 'Mobile App',
      image: '💳'
    },
    {
      title: 'Inventory Management',
      titleAr: 'إدارة المخزون',
      description: 'Advanced warehouse and inventory tracking system',
      descriptionAr: 'نظام متقدم لتتبع المستودعات والمخزون',
      clientName: 'Saudi Logistics Co.',
      clientNameAr: 'شركة اللوجستيات السعودية',
      projectType: 'ERP System',
      projectTypeAr: 'نظام تخطيط موارد',
      category: 'ERP',
      image: '📦'
    },
    {
      title: 'Educational Platform',
      titleAr: 'منصة تعليمية',
      description: 'Online learning management system with video streaming',
      descriptionAr: 'نظام إدارة التعلم عبر الإنترنت مع بث الفيديو',
      clientName: 'King Abdulaziz University',
      clientNameAr: 'جامعة الملك عبدالعزيز',
      projectType: 'Education Platform',
      projectTypeAr: 'منصة تعليمية',
      category: 'Web Development',
      image: '📚'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2 style={{ marginTop: '1rem' , color: 'white' }}>{isArabic ? 'مشاريعنا' : 'Our Projects'}</h2>
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
                <div className="project-client">
                  <strong>{isArabic ? 'العميل: ' : 'Client: '}</strong>
                  {isArabic ? project.clientNameAr : project.clientName}
                </div>
                <div className="project-type">
                  <strong>{isArabic ? 'نوع المشروع: ' : 'Project Type: '}</strong>
                  {isArabic ? project.projectTypeAr : project.projectType}
                </div>
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
