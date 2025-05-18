import React from "react";
import Icon from "../../../components/AppIcon";

const ProjectsSection = ({ projects }) => {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
          <p className="text-slate-700 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-primary-400 bg-opacity-10 text-primary-800 px-2.5 py-1 rounded text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
          >
            View Project <Icon name="ExternalLink" size={16} className="ml-1" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;