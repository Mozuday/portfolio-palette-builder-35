
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-10">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Affiliate Marketer</h3>
                <div className="flex items-center mt-2 text-gray-600">
                  <Briefcase size={18} className="mr-2" />
                  <span>Amazon India</span>
                </div>
              </div>
              <div className="flex items-center mt-3 md:mt-0 text-gray-500">
                <Calendar size={18} className="mr-2" />
                <span>November 2024 - Present</span>
              </div>
            </div>
            
            <div className="text-gray-700">
              <p className="mb-4">Working as an Affiliate Marketer at Amazon India, focusing on product promotion and implementing effective marketing strategies.</p>
              
              <ul className="mt-4 space-y-3">
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Promoted and reviewed products to drive affiliate sales and engagement.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Analyzed performance metrics using Amazon Associates Dashboard and Google Analytics.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Implemented SEO strategies to maximize product visibility and conversion rates.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="skill-tag">Digital Marketing</span>
              <span className="skill-tag">SEO</span>
              <span className="skill-tag">Analytics</span>
              <span className="skill-tag">Content Creation</span>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-primary mb-6">Projects Experience</h3>
            
            <div className="space-y-8">
              <div className="timeline-item">
                <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 animate-fade-in">
                  <h4 className="text-lg font-semibold text-gray-800">Instagram Clone</h4>
                  <p className="text-gray-700 mt-2">
                    Developed a full-stack Instagram clone with core social media features including user authentication, post creation, likes, and comments.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Firebase</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">MongoDB</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 animate-fade-in">
                  <h4 className="text-lg font-semibold text-gray-800">E-Commerce Website</h4>
                  <p className="text-gray-700 mt-2">
                    Built a full-stack e-commerce platform with secure payment integration, product listing, search functionality, shopping cart, and checkout features.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">UPI Payment</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 animate-fade-in">
                  <h4 className="text-lg font-semibold text-gray-800">Property Rental Website</h4>
                  <p className="text-gray-700 mt-2">
                    Designed and developed a real estate rental platform with search filters and location-based property listings. Integrated Google Maps API for better user experience.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">Google Maps API</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 animate-fade-in">
                  <h4 className="text-lg font-semibold text-gray-800">Advertisement-Revenue Website</h4>
                  <p className="text-gray-700 mt-2">
                    Developed a website where users earn rewards by watching ads. Implemented user authentication and a secure account management system with a back-end for ad inventory, user data, and reward tracking.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="skill-tag">Web Development</span>
                    <span className="skill-tag">Ad Integration</span>
                    <span className="skill-tag">User Authentication</span>
                    <span className="skill-tag">Reward System</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
