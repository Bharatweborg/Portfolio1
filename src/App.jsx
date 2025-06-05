import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy-loaded components
const Header = React.lazy(() => import("./Components/Header"));
const HeroSection = React.lazy(() => import("./Components/HeroSection"));
const Footer = React.lazy(() => import("./Components/Footer"));
const About = React.lazy(() => import("./Components/About"));
const Projects = React.lazy(() => import("./Components/Projects"));
const CustomCursor = React.lazy(() => import("./Components/CustomCursor"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
        <CustomCursor />
      </Suspense>
    </Router>
  );
}
