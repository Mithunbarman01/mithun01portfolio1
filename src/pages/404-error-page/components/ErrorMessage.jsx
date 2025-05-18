import React from "react";
import Icon from "../../../components/AppIcon";


const ErrorMessage = () => {
  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="text-primary-600 mb-4">
            <Icon name="FileQuestion" size={80} />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
            <Icon name="Search" size={24} className="text-slate-600" />
          </div>
        </div>
      </div>
      
      <h1 className="text-6xl font-bold text-slate-900 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-4">Page Not Found</h2>
      
      <p className="text-slate-600 mb-2">
        We couldn't find the page you're looking for.
      </p>
      <p className="text-slate-600 mb-6">
        It might have been moved, deleted, or perhaps never existed.
      </p>
      
      <div className="border-t border-slate-200 w-24 mx-auto my-6"></div>
      
      <p className="text-slate-500 text-sm">
        If you believe this is an error, please contact us.
      </p>
    </div>
  );
};

export default ErrorMessage;