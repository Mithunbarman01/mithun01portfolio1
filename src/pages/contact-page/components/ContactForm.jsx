import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;
        
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
        
      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;
        
      default:
        break;
    }
    
    return error;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ""
      });
    }
  };
  
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setFormErrors({
      ...formErrors,
      [name]: error
    });
  };
  
  const validateForm = () => {
    const errors = {};
    let isValid = true;
    
    // Validate each field
    Object.keys(formData).forEach(key => {
      if (key === "name" || key === "email" || key === "message") {
        const error = validateField(key, formData[key]);
        if (error) {
          errors[key] = error;
          isValid = false;
        }
      }
    });
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful submission
      setSubmitStatus({
        type: "success",
        message: "Your message has been sent successfully! I'll get back to you soon."
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "There was an error sending your message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "" &&
      Object.keys(formErrors).length === 0
    );
  };
  
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Status Message */}
      {submitStatus && (
        <div 
          className={`p-4 rounded-md ${
            submitStatus.type === "success" ?"bg-emerald-50 text-emerald-700 border border-emerald-200" :"bg-rose-50 text-rose-700 border border-rose-200"
          } animate-fade-in`}
          role="alert"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Icon 
                name={submitStatus.type === "success" ? "CheckCircle" : "AlertCircle"} 
                className="mt-0.5"
                size={18}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    submitStatus.type === "success" ?"text-emerald-500 hover:bg-emerald-100 focus:ring-emerald-600" :"text-rose-500 hover:bg-rose-100 focus:ring-rose-600"
                  }`}
                  onClick={() => setSubmitStatus(null)}
                >
                  <span className="sr-only">Dismiss</span>
                  <Icon name="X" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name Field */}
        <Input
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formErrors.name}
          required
          icon="User"
          aria-describedby="name-error"
          disabled={isSubmitting}
        />
        
        {/* Email Field */}
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formErrors.email}
          required
          icon="Mail"
          aria-describedby="email-error"
          disabled={isSubmitting}
        />
      </div>
      
      {/* Subject Field (Optional) */}
      <Input
        label="Subject (Optional)"
        id="subject"
        name="subject"
        type="text"
        placeholder="What is this regarding?"
        value={formData.subject}
        onChange={handleChange}
        icon="MessageSquare"
        disabled={isSubmitting}
      />
      
      {/* Message Field */}
      <Input
        label="Message"
        id="message"
        name="message"
        type="textarea"
        placeholder="Your message here..."
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={formErrors.message}
        required
        icon="FileText"
        aria-describedby="message-error"
        disabled={isSubmitting}
      />
      
      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="large"
          fullWidth
          disabled={isSubmitting || !isFormValid()}
          className="relative"
        >
          {isSubmitting ? (
            <>
              <span className="opacity-0">Send Message</span>
              <span className="absolute inset-0 flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
            </>
          ) : (
            <>
              <Icon name="Send" className="mr-2 -ml-1" size={18} />
              Send Message
            </>
          )}
        </Button>
      </div>
      
      <p className="text-sm text-slate-500 text-center mt-4">
        By submitting this form, you agree to our <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
};

export default ContactForm;