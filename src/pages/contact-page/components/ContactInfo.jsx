import React from "react";
import Icon from "../../../components/AppIcon";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "Mail",
      label: "Email",
      value: "mittunbarman91@gmail.com",
      link: "mailto:mithunbarman0409@gmail.com"
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "+91 9883463542",
      link: "tel:+919883463542"
    },
    {
      icon: "MapPin",
      label: "Location",
      value: "West Bengal, IND",
      link: null
    }
  ];

  return (
    <div className="space-y-6">
      {contactDetails.map((item, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <Icon name={item.icon} size={20} className="text-white" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-white text-opacity-80">{item.label}</p>
            {item.link ? (
              <a 
                href={item.link} 
                className="text-white hover:underline transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-white">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;