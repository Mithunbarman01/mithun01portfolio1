import React from "react";

import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const HeroSection = () => {
  const personalInfo = {
    name: "Mithun Barman",
    title: "Full Stack Developer",
    summary: "Passionate developer with  creating intuitive web applications and solving complex problems with clean, efficient code."
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-600 opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-slate-900 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-white text-opacity-90 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {personalInfo.title}
          </h2>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-white text-opacity-90 text-lg">
              {personalInfo.summary}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              to="/resume-page" 
              variant="primary" 
              size="large" 
              icon="FileText" 
              className=" text-primary-600 hover:bg-blue-700 border border-white"
            >
              View Resume
            </Button>
            
            <Button 
              to="/contact-page" 
              variant="outline" 
              size="large" 
              icon="Mail"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a 
              href="#skills" 
              aria-label="Scroll to skills section"
              className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity"
            >
              <Icon name="ChevronDown" size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;