import React from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";
import ContactInfo from "./components/ContactInfo";
import Icon from "../../components/AppIcon";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main id="main-content" className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Page Header */}
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Get in Touch
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Have a question or want to work together? Feel free to reach out using the form below or through any of my social channels.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  {/* Contact Information */}
                  <div className="md:col-span-2 p-6 md:p-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                    <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                    <p className="mb-8 text-white text-opacity-90">
                      I'd love to hear from you. Here's how you can reach me directly:
                    </p>
                    
                    <ContactInfo />
                    
                    <div className="mt-12">
                      <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                      <SocialLinks />
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
                      <Icon name="MessageCircle" size={180} />
                    </div>
                  </div>
                  
                  {/* Contact Form */}
                  <div className="md:col-span-3 p-6 md:p-8">
                    <h2 className="text-xl font-semibold text-slate-900 mb-6">Send a Message</h2>
                    <ContactForm />
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg border border-slate-200 p-5">
                      <h3 className="text-lg font-medium text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Mock data for FAQs
const faqs = [
  {
    question: "What is your typical response time?",
    answer: "I typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate so in your message subject."
  },
  {
    question: "Do you take on freelance projects?",
    answer: "Yes, I\'m open to freelance opportunities that align with my skills and interests. Please provide project details in your message for consideration."
  },
  {
    question: "What information should I include in my message?",
    answer: "For the most effective communication, please include your name, contact details, the purpose of your message, any relevant deadlines, and specific details about your inquiry or project."
  }
];

export default ContactPage;