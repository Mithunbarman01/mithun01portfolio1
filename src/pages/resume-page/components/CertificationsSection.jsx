import React from "react";
import Icon from "../../../components/AppIcon";

const CertificationsSection = ({ certifications }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certifications.map((cert) => (
        <div 
          key={cert.id} 
          className="border border-slate-200 rounded-lg p-4 flex items-start"
        >
          <div className="mr-4 mt-1 text-primary-600">
            <Icon name="Award" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">{cert.name}</h3>
            <p className="text-slate-600 text-sm mb-1">
              {cert.issuer} • {cert.date}
            </p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-800 inline-flex items-center"
            >
              View Certificate <Icon name="ExternalLink" size={14} className="ml-1" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsSection;