
import { BookOpen, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BACHELOR OF SCIENCE (CHEMISTRY & BOTANY)",
      institution: "MS University, Saharanpur, Uttar Pradesh",
      period: "June 2022 - July 2025",
      icon: <BookOpen size={20} />
    },
    {
      degree: "FULL-STACK DEVELOPMENT CERTIFICATION",
      institution: "MIMO.org",
      period: "March 2025",
      icon: <Award size={20} />
    },
    {
      degree: "MERN-STACK DEVELOPMENT CERTIFICATION",
      institution: "Mind Luster & CodeHelp by Babbar",
      period: "February 2025",
      icon: <Award size={20} />
    },
    {
      degree: "SENIOR SECONDARY EDUCATION (12TH - PCM)",
      institution: "The Doon Valley Public School, CBSE",
      period: "July 2021 - 70%",
      icon: <BookOpen size={20} />
    },
    {
      degree: "SECONDARY EDUCATION (10TH)",
      institution: "The Doon Valley Public School, CBSE",
      period: "July 2020 - 80%",
      icon: <BookOpen size={20} />
    }
  ];
  
  const certifications = [
    "Course of Computer Concepts (CCC) - Government Exam",
    "Artificial Intelligence - Betax & Freedom with AI",
    "Ethical Hacking - Mind Luster",
    "Power BI Certification - OfficeMaster"
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 animate-fade-in">
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-10 border-l-2 border-gray-200 pb-8 last:pb-0">
                    <div className="absolute left-[-10px] top-0 bg-white p-1">
                      <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800">{item.degree}</h3>
                    <p className="text-primary mt-1">{item.institution}</p>
                    <div className="flex items-center mt-2 text-gray-500 text-sm">
                      <Calendar size={14} className="mr-2" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 h-full animate-fade-in">
              <h3 className="text-xl font-semibold text-primary mb-6">Certifications</h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                    <p className="text-gray-700">{cert}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-primary mb-6">Hobbies & Interests</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Writing stories & poetry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Traveling & cycling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Home workouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">Learning about new technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
