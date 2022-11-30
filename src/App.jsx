import React from "react";
import { Navbar,AnimatedRoutes } from "./components";
import { BrowserRouter as Router} from "react-router-dom"
import "./index.css";
const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (    
      <Router>
        
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />   
        <AnimatedRoutes darkMode={darkMode} />   
      </Router>
  );
};

export default App;
