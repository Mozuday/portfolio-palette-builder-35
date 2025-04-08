
import { useState } from 'react';
import { ExternalLink, Github, Maximize2, ArrowRight, X } from 'lucide-react';

const Projects = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "Instagram Clone",
      description: "A full-stack Instagram clone with core social media features.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["React.js", "Node.js", "MongoDB", "Firebase"],
      detailedDescription: "Developed a full-stack Instagram clone with core social media features. Implemented user authentication, post creation, likes, and comments. Used React.js, Firebase, Node.js, and MongoDB for a scalable backend and responsive UI.",
      features: [
        "User registration and authentication",
        "Post creation with image uploads",
        "Like and comment functionality",
        "Real-time update system",
        "Responsive UI design"
      ]
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with secure payment integration.",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "UPI Payment"],
      detailedDescription: "Built a full-stack e-commerce platform with secure payment integration. Developed features like product listing, search functionality, shopping cart, and checkout. Used React.js, Node.js, Express.js, and MongoDB for smooth performance.",
      features: [
        "Product listing and categorization",
        "Search functionality with filters",
        "Shopping cart and checkout system",
        "UPI payment gateway integration",
        "Order history and tracking"
      ]
    },
    {
      id: 3,
      title: "Property Rental Website",
      description: "A real estate rental platform with search filters and mapping.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["React.js", "Node.js", "MongoDB", "Google Maps API"],
      detailedDescription: "Designed and developed a real estate rental platform with search filters and location-based property listings. Integrated Google Maps API for better user experience. Built a backend system for property management using MongoDB and Node.js.",
      features: [
        "Location-based property search",
        "Advanced filters for property types",
        "Google Maps integration",
        "Property listing management system",
        "User favorites and notifications"
      ]
    },
    {
      id: 4,
      title: "Advertisement-Revenue Website",
      description: "A platform where users earn rewards by watching advertisements.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Web Development", "Ad Integration", "User Authentication", "Reward System"],
      detailedDescription: "Developed a website where users earn rewards by watching ads. Implemented user authentication and a secure account management system. Built a back-end for ad inventory, user data, and reward tracking.",
      features: [
        "User registration and authentication",
        "Ad serving platform",
        "Reward tracking system",
        "Secure payment processing",
        "Analytics dashboard"
      ]
    }
  ];

  const ProjectModal = ({ project, onClose }: { project: typeof projects[0], onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="relative h-64 sm:h-80">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-t-lg"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="skill-tag">{tag}</span>
            ))}
          </div>
          
          <p className="text-gray-700 mb-6">{project.detailedDescription}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex">
                  <ArrowRight size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-end gap-4 pt-4 border-t">
            <button 
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <Github size={18} className="mr-1" />
              <span>View Code</span>
            </button>
            <button 
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <ExternalLink size={18} className="mr-1" />
              <span>Live Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Recent Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow animate-fade-in"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <button 
                    onClick={() => setActiveModal(project.id)}
                    className="text-white flex items-center"
                  >
                    <Maximize2 size={18} className="mr-1" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="skill-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4">
                  <button 
                    className="text-primary flex items-center hover:underline"
                    onClick={() => setActiveModal(project.id)}
                  >
                    View Details
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                  
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {activeModal !== null && (
          <ProjectModal 
            project={projects.find(p => p.id === activeModal)!} 
            onClose={() => setActiveModal(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
