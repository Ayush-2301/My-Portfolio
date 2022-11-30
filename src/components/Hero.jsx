import React from "react";
import TypeWriter from "typewriter-effect";
import Icons from "./Icons";
import { motion } from "framer-motion";

const Hero = (props) => {
  const font_color = {
    color: props.darkMode ? "#0B0C10" : "#EBF2FA",
  };
  const bg_color = {
    backgroundColor: !props.darkMode ? "#0B0C10" : "#EDE6F2",
  };
  const [state] = React.useState({
    title: "I'm",
  });
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const items = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="max-w-full home absolute w-full flex flex-col items-center h-full left-0 top-0 border-r-[10px] border-Home-theme border-solid font-standardFont "
      style={bg_color}
    >
      <div className="flex flex-row w-full">
        <div className="p-3 h-screen w-[60px] md:mr-10 mr-4"></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
          className=" w-full flex justify-end flex-col mb-24 "
        >
          <div
            className=" text-3xl md:text-6xl px-3 font-bold md:font-extrabold font-standardFont "
            style={font_color}
          >
            Hi
          </div>
          <div
            className="flex flex-col md:flex-row font-standardFont text-3xl md:text-6xl font-bold md:font-extrabold w-full "
            style={font_color}
          >
            <motion.div
              variants={items}
              className="items-start px-3 pr-[0.15rem]"
            >
              {state.title}
            </motion.div>
            <motion.div variants={items} className=" text-Home-theme px-3 ">
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Ayush Chauhan.",
                    "Frontend Developer.",
                    "Blockchain Developer.",
                    "Tech Enthusiast.",
                  ],
                  pauseFor: 1500,
                }}
              />
            </motion.div>
          </div>
          <motion.div
            variants={items}
            className="w-[97%] h-[3px] mb-2 bg-Home-theme"
          ></motion.div>
          <div className="flex flex-col px-3 mb-3" style={font_color}>
            <motion.div
              variants={items}
              className="text-xl font-standardFont font-bold md:font-extrabold md:text-4xl "
            >
              About
            </motion.div>
            <motion.div variants={items} className=" text-lg md:text-xl">
              <p>
                I am Front-end Developer with decent knowledge about blockchain
                technology. I can provide clean code and stunning designs with
                animation.
              </p>
              <p>
                Intrested in the entire frontend spectrum and working on
                ambitious projects with positive people.
              </p>
            </motion.div>
          </div>
          <Icons darkMode={props.darkMode} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
