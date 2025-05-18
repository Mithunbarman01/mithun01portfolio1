import React from "react";
import Icon from "../../../components/AppIcon";

const EducationSection = ({ education }) => {
  return (
    <div className="space-y-6">
      {education.map((edu) => (
        <div key={edu.id} className="relative pl-8">
          {/* Timeline dot and line */}
          <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary-600"></div>
          {edu.id !== education.length && (
            <div className="absolute left-1.5 top-5 bottom-0 w-0.5 bg-slate-200"></div>
          )}
          
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-slate-900">{edu.degree}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-slate-600 mt-1 mb-2">
              <div className="flex items-center">
                <Icon name="GraduationCap" size={16} className="mr-1 text-primary-600" />
                <span className="font-medium">{edu.institution}</span>
              </div>
              <span className="hidden sm:block mx-2">•</span>
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-1 text-primary-600" />
                <span>{edu.location}</span>
              </div>
            </div>
            <div className="flex items-center text-slate-500 text-sm mb-3">
              <Icon name="Calendar" size={14} className="mr-1" />
              <span>{edu.startDate} — {edu.endDate}</span>
            </div>
            <p className="text-slate-700">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;