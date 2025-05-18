import React from "react";

const SkillsSection = ({ technicalSkills, softSkills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Technical Skills</h3>
        <div className="space-y-4">
          {technicalSkills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-slate-700 font-medium">{skill.name}</span>
                <span className="text-slate-500 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div 
                  className="bg-primary-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, index) => (
            <span 
              key={index}
              className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;