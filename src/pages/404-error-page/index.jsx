import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ErrorMessage from "./components/ErrorMessage";
import ReturnHomeButton from "./components/ReturnHomeButton";

const ErrorPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Personal Portfolio</title>
        <meta name="description" content="The page you are looking for cannot be found. Please return to the homepage." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header variant="default" />
        
        <main id="main-content" className="flex-grow flex items-center justify-center px-4 py-16">
          <div className="max-w-md w-full text-center">
            <ErrorMessage />
            <ReturnHomeButton />
          </div>
        </main>
        
        <Footer variant="minimal" />
      </div>
    </>
  );
};

export default ErrorPage;