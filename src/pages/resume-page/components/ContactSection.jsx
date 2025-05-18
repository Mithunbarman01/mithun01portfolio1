import React from "react";
import Icon from "../../../components/AppIcon";

const ContactSection = ({ contact }) => {
  const contactItems = [
    { icon: "Mail", label: "Email", value: contact.email, link: `mailto:${contact.email}` },
    { icon: "Phone", label: "Phone", value: contact.phone, link: `tel:${contact.phone}` },
    { icon: "MapPin", label: "Location", value: contact.location },
    { icon: "Globe", label: "Website", value: contact.website, link: `https://${contact.website}` },
    { icon: "Linkedin", label: "LinkedIn", value: contact.linkedin, link: `https://${contact.linkedin}` },
    { icon: "Github", label: "GitHub", value: contact.github, link: `https://${contact.github}` },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-start">
          <div className="mr-3 mt-1 text-primary-600">
            <Icon name={item.icon} size={18} />
          </div>
          <div>
            <p className="text-sm text-slate-500">{item.label}</p>
            {item.link ? (
              <a 
                href={item.link} 
                target={item.icon !== "Mail" && item.icon !== "Phone" ? "_blank" : undefined}
                rel={item.icon !== "Mail" && item.icon !== "Phone" ? "noopener noreferrer" : undefined}
                className="text-slate-700 hover:text-primary-600 transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-slate-700">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactSection;