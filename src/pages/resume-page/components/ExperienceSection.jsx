import React from "react";
import Icon from "../../../components/AppIcon";

const ExperienceSection = ({ experiences }) => {
  return (
    <div className="space-y-8">
      {experiences.map((job) => (
        <div key={job.id} className="relative pl-8 pb-1">
          {/* Timeline dot and line */}
          <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary-600"></div>
          {job.id !== experiences.length && (
            <div className="absolute left-1.5 top-5 bottom-0 w-0.5 bg-slate-200"></div>
          )}
          
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-slate-900">{job.position}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-slate-600 mt-1 mb-2">
              <div className="flex items-center">
                <Icon name="Building2" size={16} className="mr-1 text-primary-600" />
                <span className="font-medium">{job.company}</span>
              </div>
              <span className="hidden sm:block mx-2">•</span>
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-1 text-primary-600" />
                <span>{job.location}</span>
              </div>
            </div>
            <div className="flex items-center text-slate-500 text-sm mb-4">
              <Icon name="Calendar" size={14} className="mr-1" />
              <span>{job.startDate} — {job.endDate}</span>
            </div>
          </div>
          
          <ul className="space-y-2">
            {job.achievements.map((achievement, index) => (
              <li key={index} className="flex">
                <Icon name="CheckCircle" size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-slate-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;