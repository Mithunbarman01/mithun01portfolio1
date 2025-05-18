import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/home-page";
import ResumePage from "./pages/resume-page";
import ContactPage from "./pages/contact-page";
import ErrorPage from "./pages/404-error-page";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/resume-page" element={<ResumePage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/404-error-page" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;