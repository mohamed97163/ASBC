import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import team1 from '../assets/team1.jpeg';
import team2 from '../assets/team2.jpeg';
import team3 from '../assets/team3.jpeg';
import team4 from '../assets/team4.jpeg';
import './Team.css';

const Team = () => {
  const { isArabic } = useLanguage();
  const teamMembers = [
    {
      name: 'Fahd Mahmoud',
      nameAr: 'فهد محمود',
      role: 'Cybersecurity Expert',
      roleAr: 'خبير في الأمن السيبراني',
      image: team1,
      bio: 'Visionary leader with 15+ years in tech',
      bioAr: 'قائد ذو رؤية مع أكثر من 15 عامًا في مجال التقنية'
    },
    {
      name: 'Mohamed Elgamal',
      nameAr: 'محمد الجمل',
      role: 'Senior Backend Developer',
      roleAr: 'مطور واجهة خلفية أول',
      image: team2,
      bio: 'Expert in enterprise solutions & innovation',
      bioAr: 'خبيرة في الحلول المؤسسية والابتكار'
    },
    {
      name: 'Nabil Mohamed',
      nameAr: 'نبيل محمد',
      role: 'Senior Frontend Developer',
      roleAr: 'مطور واجهة أمامية أول',
      image: team3,
      bio: 'Full-stack developer & architecture specialist',
      bioAr: 'مطور واجهة أمامية أول'
    },
    {
      name: 'Mohamed Iissa',
      nameAr:'محمد عيسي',
      role: 'Senior Flutter Developer',
      roleAr: 'مطور تطبيقات موبايل اول',
      image: team4,
      bio: 'Strategic partnerships & growth expert',
      bioAr: 'خبير في الشراكات الاستراتيجية والنمو'
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h2>{isArabic ? 'تعرف على فريقنا' : 'Meet Our Team'}</h2>
          <p style={{ color: 'white', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            {isArabic 
              ? 'فريقنا المتنوع من المحترفين يجلب الخبرة والابتكار والتفاني لكل مشروع'
              : 'Our diverse team of professionals brings expertise, innovation, and dedication to every project'
            }
          </p>
        </div>

        <div className="team-grid grid grid-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-card card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-overlay">
                  <p className="team-bio">{isArabic ? member.bioAr : member.bio}</p>
                </div>
              </div>
              <div className="team-info">
                <h3>{isArabic ? member.nameAr : member.name}</h3>
                <p className="team-role">{isArabic ? member.roleAr : member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
