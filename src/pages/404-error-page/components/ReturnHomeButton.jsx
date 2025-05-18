import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

const ReturnHomeButton = () => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <Button 
        to="/home-page" 
        variant="primary" 
        size="large" 
        icon="Home" 
        iconPosition="left"
        className="shadow-md hover:shadow-lg transition-shadow"
      >
        Return to Home
      </Button>
      
      <div className="mt-4">
        <Link 
          to="/contact-page" 
          className="text-sm text-primary-600 hover:text-primary-800 hover:underline transition-colors"
        >
          Need help? Contact us
        </Link>
      </div>
    </div>
  );
};

export default ReturnHomeButton;