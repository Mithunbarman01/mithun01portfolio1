import React from "react";
import Image from "../../../components/AppImage";

const ResumeHeader = ({ name, title, photo, summary }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-400 flex-shrink-0 mx-auto md:mx-0">
        <Image 
          src={photo} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-slate-900 mb-1 text-center md:text-left">{name}</h2>
        <p className="text-xl text-primary-600 font-medium mb-4 text-center md:text-left">{title}</p>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
          <p className="text-slate-700 leading-relaxed">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;