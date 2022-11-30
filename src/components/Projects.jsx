import React from "react";
import { motion } from "framer-motion";
import { Crousal } from "../components";

const Projects = (props) => {
  const bg_color = {
    backgroundColor: !props.darkMode ? "#0B0C10" : "#EDE6F2",
  };
  const style = {
    color: props.darkMode ? "#131112" : "#EBF2FA",
  };
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className=" h-screen project  left-0 top-0  w-full border-r-[10px] border-Projects-theme border-solid font-standardFont"
      style={bg_color}
    >
      <div className="flex flex-row w-full">
        <div className="p-3 h-screen w-[60px] md:mr-10 mr-1"></div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="absolute  left-[58px] md:left-[160px] uppercase underline decoration-8 underline-offset-4 decoration-Projects-theme top-[25px] md:top-[2px] ml-5 mb-0 md:mb-2  text-3xl md:text-5xl my-5 font-bold font-standardFont"
          style={style}
        >
          Projects
        </motion.div>
        <>
          <Crousal darkMode={props.darkMode} />
        </>
      </div>
    </motion.div>
  );
};

export default Projects;
