
import { BookOpen, Briefcase, Code, Database, Cpu, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="animate-fade-in">
            <p className="text-gray-700 mb-6">
              Passionate Full-Stack Developer with expertise in MERN Stack and a strong background in front-end and back-end development, database management, and API integration. Committed to continuous learning and delivering scalable, user-friendly web applications with optimized performance and seeking an opportunity to contribute my skills in building high-performance digital solutions.
            </p>
            <p className="text-gray-700 mb-6">
              Proficient in various programming languages, with experience in developing and maintaining responsive, user-friendly, and visually appealing websites using modern web development frameworks and tools.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="skill-tag">MERN Stack</span>
              <span className="skill-tag">Full-Stack Development</span>
              <span className="skill-tag">API Integration</span>
              <span className="skill-tag">Database Management</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Front-End</h3>
              <p className="text-gray-600 text-sm">HTML, CSS, JavaScript, React.js, Vue.js, Bootstrap, Tailwind</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Server className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Back-End</h3>
              <p className="text-gray-600 text-sm">Node.js, Express.js, PHP, Python, RESTful APIs, Authentication</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Database className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Databases</h3>
              <p className="text-gray-600 text-sm">MongoDB, MySQL, PostgreSQL, Database Design</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Cpu className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Others</h3>
              <p className="text-gray-600 text-sm">Git, GitHub, Docker, AI Tools, Ethical Hacking, Power BI</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-500 text-sm">Amazon India & Projects</p>
              </div>
            </div>
            <p className="text-gray-700">Working as an Affiliate Marketer at Amazon India with experience in product promotion and SEO strategies.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Education</h3>
                <p className="text-gray-500 text-sm">BS in Chemistry & Botany</p>
              </div>
            </div>
            <p className="text-gray-700">Bachelor of Science from MS University, with additional certifications in Full-Stack and MERN development.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Code className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Projects</h3>
                <p className="text-gray-500 text-sm">4+ Full-Stack Applications</p>
              </div>
            </div>
            <p className="text-gray-700">Developed multiple full-stack applications including Instagram clone, e-commerce platform, and rental website.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
