// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";

import AnimatedRoutes from "./Components/AnimatedRoutes.js";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div className="Axis Consulting">
      {/* <link rel="stylesheet" href="//input.css"></link> */}
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
