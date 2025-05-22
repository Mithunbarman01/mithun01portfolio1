import React, { useState } from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import SideBar from "../../components/ui/SideBar";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";
import Image from "../../components/AppImage";

const ResumePage = () => {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main id="main-content" className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar for navigation */}
            <aside className="md:w-64 flex-shrink-0">
              <div className="hidden md:block sticky top-24">
                <SideBar 
                  variant="sticky" 
                  onItemClick={scrollToSection}
                  items={[
                    { id: "about", label: "About Me", icon: "User" },
                    { id: "experience", label: "Experience", icon: "Briefcase" },
                    { id: "education", label: "Education", icon: "GraduationCap" },
                    { id: "skills", label: "Skills", icon: "Code" },
                    { id: "projects", label: "Projects", icon: "FolderKanban" },
                    { id: "certifications", label: "Certifications", icon: "Award" },
                    { id: "contact", label: "Contact", icon: "Mail" }
                  ]}
                />
              </div>
              
              {/* Mobile sidebar */}
              <SideBar 
                variant="mobile-drawer" 
                onItemClick={scrollToSection}
                items={[
                  { id: "about", label: "About Me", icon: "User" },
                  { id: "experience", label: "Experience", icon: "Briefcase" },
                  { id: "education", label: "Education", icon: "GraduationCap" },
                  { id: "skills", label: "Skills", icon: "Code" },
                  { id: "projects", label: "Projects", icon: "FolderKanban" },
                  { id: "certifications", label: "Certifications", icon: "Award" },
                  { id: "contact", label: "Contact", icon: "Mail" }
                ]}
              />
            </aside>
            
            {/* Main content */}
            <div className="flex-1 max-w-3xl">
              {/* Resume Header */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-400 flex-shrink-0">
                    <Image 
                      src="https://avatars.githubusercontent.com/u/209543225?v=4" 
                      alt="Profile Photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Mithun Barman</h1>
                    <p className="text-lg text-primary-600 font-medium mb-3">Full Stack Developer</p>
                    
                    <p className="text-slate-600 mb-4">
                      Passionate frontend and backend developer creating responsive, 
                      user-friendly web applications with modern JavaScript frameworks.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <Button 
                        variant="primary" 
                        icon="Download" 
                        href="/resume.pdf" 
                        target="_blank"
                      >
                        Download CV
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        icon="Mail" 
                        to="/contact-page"
                      >
                        Contact Me
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Resume Sections */}
              <div className="space-y-8">
                {/* About Section */}
                <section id="about" className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">About Me</h2>
                  <p className="text-slate-600">
                    I'm a passionate software engineer specializing in frontend development. 
                    My journey in technology began with a fascination for building things that people interact with daily. 
                    This curiosity led me to pursue a degree in Computer Science and eventually specialize in creating intuitive, 
                    efficient, and beautiful web applications.
                  </p>
                  <p className="text-slate-600 mt-4">
                    What drives me is the intersection of technology and human experience – finding ways to make complex systems 
                    feel simple and intuitive for users while maintaining technical excellence behind the scenes.
                  </p>
                </section>
                
                {/* Experience Section */}
                {/* <section id="experience" className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Work Experience</h2>
                  
                  <div className="space-y-6">
                    {resumeData.experience.map((job, index) => (
                      <div key={index} className="border-l-2 border-primary-400 pl-4 ml-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                          <span className="text-sm text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded">
                            {job.period}
                          </span>
                        </div>
                        <p className="text-slate-700 font-medium mb-2">{job.company}</p>
                        <p className="text-slate-600 mb-3">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mt-2">
                          {job.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex} 
                              className="bg-slate-100 text-slate-700 text-sm px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section> */}
                
                {/* Education Section */}
                {/* <section id="education" className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Education</h2>
                  
                  <div className="space-y-6">
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary-400 pl-4 ml-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">{edu.degree}</h3>
                          <span className="text-sm text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-slate-700 font-medium mb-2">{edu.institution}</p>
                        <p className="text-slate-600">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </section> */}
                
                {/* Skills Section */}
                <section id="skills" className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Skills</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resumeData.skillCategories.map((category, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">{category.name}</h3>
                        <div className="space-y-3">
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex}>
                              <div className="flex justify-between mb-1">
                                <span className="text-slate-700">{skill.name}</span>
                                <span className="text-slate-500 text-sm">{skill.level}</span>
                              </div>
                              <div className="w-full bg-slate-200 rounded-full h-2">
                                <div 
                                  className="bg-primary-600 h-2 rounded-full" 
                                  style={{ width: `${skill.percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                
                {/* Projects Section */}
                <section id="projects" className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Projects</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resumeData.projects.map((project, index) => (
                      <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="h-40 overflow-hidden">
                          <Image 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-slate-900 mb-1">{project.title}</h3>
                          <p className="text-slate-600 text-sm mb-3">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex gap-2">
                            {project.demoUrl && (
                              <a 
                                href={project.demoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-primary-600 hover:text-primary-800 flex items-center"
                              >
                                <Icon name="ExternalLink" size={14} className="mr-1" />
                                Live Demo
                              </a>
                            )}
                            
                            {project.codeUrl && (
                              <a 
                                href={project.codeUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-primary-600 hover:text-primary-800 flex items-center ml-3"
                              >
                                <Icon name="Github" size={14} className="mr-1" />
                                Code
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                
                {/* Certifications Section */}
                {/* <section id="certifications" className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Certifications</h2>
                  
                  <div className="space-y-4">
                    {resumeData.certifications.map((cert, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <Icon name="Award" size={20} className="text-primary-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-slate-900">{cert.name}</h3>
                          <p className="text-slate-600">{cert.issuer} • {cert.date}</p>
                          {cert.url && (
                            <a 
                              href={cert.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm text-primary-600 hover:text-primary-800 flex items-center mt-1"
                            >
                              <Icon name="ExternalLink" size={14} className="mr-1" />
                              View Certificate
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section> */}
                
                {/* Contact Section */}
                <section id="contact" className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
                  
                  <p className="text-slate-600 mb-6">
                    Interested in working together or have any questions? Feel free to reach out to me directly or use the contact form on my website.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Icon name="Mail" size={20} className="text-primary-600 mr-3" />
                      <a href="mailto:mittunbarman91@gmail.com" className="text-slate-700 hover:text-primary-600">
                        mittunbarman91@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Icon name="Phone" size={20} className="text-primary-600 mr-3" />
                      <a href="tel:+919883463542" className="text-slate-700 hover:text-primary-600">
                        +91 9883463542
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Icon name="MapPin" size={20} className="text-primary-600 mr-3" />
                      <span className="text-slate-700">west Bengal, India</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      variant="primary" 
                      icon="Mail" 
                      to="/contact-page"
                      fullWidth
                    >
                      Send Me a Message
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer variant="minimal" />
    </div>
  );
};

// Mock resume data
const resumeData = {
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc., San Francisco",
      period: "2020 - Present",
      description: "Lead frontend development for enterprise SaaS platform. Architected and implemented new features, improved performance by 40%, and mentored junior developers.",
      skills: ["React", "TypeScript", "Redux", "GraphQL", "Webpack"]
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions LLC, New York",
      period: "2017 - 2020",
      description: "Developed responsive web applications for clients across various industries. Collaborated with designers and backend developers to deliver high-quality products.",
      skills: ["JavaScript", "Vue.js", "CSS3", "REST APIs", "Jest"]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency, Boston",
      period: "2015 - 2017",
      description: "Created and maintained websites for small to medium businesses. Implemented responsive designs and integrated CMS solutions.",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress"]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2013 - 2015",
      description: "Specialized in Human-Computer Interaction and Web Technologies. Thesis on improving web accessibility for users with disabilities."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2009 - 2013",
      description: "Graduated with honors. Coursework included Data Structures, Algorithms, Software Engineering, and Web Development."
    }
  ],
  skillCategories: [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: "Expert", percentage: 95 },
        { name: "JavaScript", level: "Expert", percentage: 90 },
        { name: "TypeScript", level: "Advanced", percentage: 85 },
        { name: "HTML5/CSS3", level: "Expert", percentage: 95 },
        { name: "Redux", level: "Advanced", percentage: 80 }
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: "Advanced", percentage: 85 },
        { name: "Webpack", level: "Intermediate", percentage: 75 },
        { name: "Jest/Testing Library", level: "Advanced", percentage: 80 },
        { name: "GraphQL", level: "Intermediate", percentage: 70 },
        { name: "CI/CD", level: "Intermediate", percentage: 65 }
      ]
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with product catalog, cart, and checkout functionality.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      demoUrl: "https://example.com/demo",
      codeUrl: "https://github.com/example/project"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      technologies: ["Vue.js", "Vuex", "Firebase"],
      demoUrl: "https://example.com/demo",
      codeUrl: "https://github.com/example/project"
    },
    {
      title: "Hostel webapp",
      description: "this website  is used for hostels To promote in theirs areas ",
      image: "https://unsplash.com/photos/the-roof-of-a-building-with-a-number-on-it-2fpLRf6fJ8o",
      technologies: ["React", "tailwind css", "typescript"],
      demoUrl: "https://webapp-amber-iota.vercel.app/",
      codeUrl: "https://github.com/Mithunbarman01/webapp"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with a modern design.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      technologies: ["React", "Tailwind CSS", "Next js" ,"JavaScript"],
      demoUrl: "https://myportfolio-azure-seven.vercel.app/",
      codeUrl: "https://github.com/Mithunbarman01/mithun01portfolio1"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2022",
      url: "https://example.com/cert"
    },
    {
      name: "Professional Frontend Developer",
      issuer: "Meta",
      date: "2021",
      url: "https://example.com/cert"
    },
    {
      name: "React Certification",
      issuer: "React Training",
      date: "2020",
      url: "https://example.com/cert"
    }
  ]
};

export default ResumePage;