import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/AppIcon";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-primary-600">
          <Icon name="FileQuestion" size={64} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/home-page"
          className="btn-primary inline-flex items-center justify-center rounded-md font-medium transition-colors"
        >
          <Icon name="ArrowLeft" className="mr-2" size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;