import React from "react";
import Icon from "../../../components/AppIcon";
import Card from "../../../components/ui/Card";

const SkillCard = ({ category, icon, competencies }) => {
  return (
    <Card 
      variant="interactive"
      className="h-full transition-transform hover:translate-y-[-5px]"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary-600 bg-opacity-10 p-3 rounded-full mr-3">
            <Icon name={icon} className="text-primary-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">{category}</h3>
        </div>
        
        <ul className="space-y-2 text-slate-600">
          {competencies.map((competency, index) => (
            <li key={index} className="flex items-start">
              <Icon name="Check" className="text-emerald-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>{competency}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default SkillCard;