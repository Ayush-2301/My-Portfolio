import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Hero, Skills, Projects, Contact } from "../components";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = (props) => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero darkMode={props.darkMode} />} />
        <Route path="/skill" element={<Skills darkMode={props.darkMode} />} />
        <Route
          path="/projects"
          element={<Projects darkMode={props.darkMode} />}
        />
        <Route
          path="/contact"
          element={<Contact darkMode={props.darkMode} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
