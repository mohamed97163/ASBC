import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import team1 from '../assets/team1.jpeg';
import team2 from '../assets/team2.jpeg';
import team3 from '../assets/team3.jpeg';
import team4 from '../assets/team4.jpeg';
import team5 from '../assets/team5.jpeg';
import team6 from '../assets/team6.jpeg';
import team7 from '../assets/team7.png';
import team8 from '../assets/team8.jpeg';
import team9 from '../assets/team9.jpeg';

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
      bio: 'He has extensive experience in cybersecurity against cyberattacks and in protecting systems and data.',
      bioAr: 'ذو خبره كبيره في مجال الامن السيبراني ضد الهجات الالكترونيه وحمايةالانظمة والبيانات'
    },
    {
      name: 'Ziad Ashraf',
      nameAr: 'زياد اشرف',
      role: 'Cybersecurity Expert',
      roleAr: 'خبير في الأمن السيبراني',
      image: team5,
      bio: 'He has extensive experience in cybersecurity against cyberattacks and in protecting systems and data.',
      bioAr: 'ذو خبره كبيره في مجال الامن السيبراني ضد الهجات الالكترونيه وحمايةالانظمة والبيانات'
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
      name: 'Abdurahman Samir',
      nameAr: 'عبد الرحمن سمير',
      role: 'Senior Frontend Developer',
      roleAr: 'مطور واجهة أمامية أول',
      image: team3,
      bio: 'As a front-end developer, I have experience in designing responsive websites, as well as the ability to collaborate effectively within a team.',
      bioAr: ' بصفتي مطور واجهات أمامية أمتلك خبرة في تصميم مواقع ويب متجاوبة، بالإضافة إلى القدرة على التعاون بفعالية ضمن فريق'
    },
    {
      name: 'Mohamed Issa',
      nameAr:'محمد عيسي',
      role: 'Senior Flutter Developer',
      roleAr: 'مطور تطبيقات موبايل اول',
      image: team4,
      bio: 'I am a mobile application developer, passionate about building seamless, scalable, and cross-platform mobile applications.',
      bioAr: 'أنا مطور تطبيقات الهاتف المحمول ، شغوف ببناء تطبيقات جوال سلسلة وقابلة للتوسع ومتعددة المنصات'
    },
    {
      name: 'Ali Gamal',
      nameAr:'علي جمال',
      role: 'Graphic Designer',
      roleAr: 'مصمم',
      image: team6,
      bio: 'He has extensive experience in social media designs for various fields, including restaurants, medicine, sports, education, real estate, and others.',
      bioAr: 'لدية خبره كبيره في تصميمات السوشيال ميديا مثل المطاعم، المجال الطبي، الرياضي، التعليمي، والعقارات، وغيرها من المجالات.'
    },
    {
      name: 'Muhammad Abd Elnabi',
      nameAr:'محمد عبدالنبي',
      role: 'Digital Marketing Specialist',
      roleAr: 'خبير في التسويق الرقمي',
      image: team7,
      bio: 'He has practical experience in managing paid advertising campaigns on multiple platforms such as Meta, TikTok and Google Ads.',
      bioAr: 'يمتلك خبرة عملية في إدارة الحملات الإعلانية المدفوعة على منصات متعددة مثل Meta وTikTok وGoogle Ads،'
    },
    {
      name: 'Lotfy Abdallah',
      nameAr:'لطفي عبدالله',
      role: 'UI/UX Designer',
      roleAr: 'مصمم واجهة المستخدم',
      image: team9,
      bio: 'UI/UX Designer with over three years of experience in designing user experience-centric mobile applications and websites.',
      bioAr: 'مصمم واجهات وتجربة مستخدم (UI/UX) بخبرة عملية تتجاوز ثلاث سنوات في تصميم تطبيقات الهواتف والمواقع الإلكترونية المعتمدة على تجربة المستخدم'
    },
    {
      name: 'Mohamed Almetwally',
      nameAr:'محمد المتولي',
      role: 'Graphic Designer',
      roleAr: 'مصمم',
      image: team8,
      bio: 'A data analyst and artificial intelligence engineer with experience in developing predictive models and analytical dashboards that support strategic decisions.',
      bioAr: 'محلل بيانات ومهندس ذكاء اصطناعي ذو خبرة في تطوير نماذج تنبؤية ولوحات معلومات تحليلية تدعم القرارات الاستراتيجية.'
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

        <div className="team-grid grid grid-5">
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
