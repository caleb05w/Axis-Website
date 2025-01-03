// import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

//pages
import Home from "../Pages/Home.js";
import About from "../Pages/About.js";
import Test from "../Pages/test.js";
import Clients from "../Pages/Clients.js";
import GetInvolved from "../Pages/GetInvolved.js";
import Resources from "../Pages/Resources.js";

//Componnets
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Clients" element={<Clients />} />
        <Route exact path="/GetInvolved" element={<GetInvolved />} />
        <Route exact path="/Resources" element={<Resources />} />

        <Route exact path="/test" element={<Test />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
