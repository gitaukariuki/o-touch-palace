import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Club from "./pages/Club";
import Restaurant from "./pages/Restaurant";
import Rooms from "./pages/Rooms";
import GalleryPage from "./pages/Gallery"; // renamed for clarity
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";

const AppRouter = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/club" element={<Club />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
