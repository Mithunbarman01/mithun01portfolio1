import React from "react";
import Icon from "../../../components/AppIcon";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/mithun-barman-90b568302/",
      color: "bg-[#0077B5] hover:bg-[#0077B5]/90"
    },
    {
      name: "GitHub",
      icon: "Github",
      url: "https://github.com/Mithunbarman01",
      color: "bg-[#333] hover:bg-[#333]/90"
    },
    {
      name: "Twitter",
      icon: "Twitter",
      url: "https://x.com/MithunBarman321",
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/90"
    },
    {
      name: "Instagram",
      icon: "Instagram",
      url: "https://www.instagram.com/mithun45___/",
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90"
    }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-10 h-10 rounded-full text-white transition-all ${link.color}`}
          aria-label={`Connect on ${link.name}`}
        >
          <Icon name={link.icon} size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;