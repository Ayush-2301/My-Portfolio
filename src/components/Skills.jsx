import React from "react";
import { SkillIcon, skillSvg } from "../constant/constant";
import { motion } from "framer-motion";
import "../index.css";
const Skills = (props) => {
  const bg_color = {
    backgroundColor: !props.darkMode ? "#0B0C10" : "#F3F7F0",
  };
  const style = {
    color: props.darkMode ? "#0B0C10" : "#EBF2FA",
  };
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
  const skillIcons = SkillIcon.map((item) => {
    const skillIconColor = {
      color: item.theme,
    };
    return (
      <motion.div variants={items} title={item.title} key={item.id}>
        <i
          className={`md:text-7xl m-1 text-5xl ${item.name} `}
          style={skillIconColor}
        ></i>
      </motion.div>
    );
  });
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className=" h-screen skill absolute left-0 top-0  w-full border-r-[10px] border-Skill-theme border-solid"
      style={bg_color}
    >
      <div className="flex flex-row w-full ">
        <div className=" p-3 h-screen w-[60px] "></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
          className="flex flex-col  mx-auto md:ml-20 my-auto w-[70%] md:max-w-[80%] "
        >
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            style={style}
            className="text-3xl md:text-5xl uppercase  mb-3 justify-start text-start font-bold md:font-extrabold ml-2 font-standardFont flex items-center "
          >
            <p className="underline decoration-8 underline-offset-4 decoration-Skill-theme ">
            Skills 
            </p>
            <i className="fa-solid fa-gears ml-1 text-Skill-theme"></i>
          </motion.h2>
          <div className="bg-gray-400 backdrop-filter rounded-md backdrop-blur-sm bg-opacity-10 p-5 ">
            <div className="grid md:grid-cols-3 grid-cols-2 grid-flow-row gap-x-[50px] md:gap-x-[120px] md:gap-y-[50px] p-5 md:p-2 lg:grid-cols-4 ">
              {skillIcons}
              <motion.img
                variants={items}
                src={skillSvg.imgTailwind}
                alt=""
                title="Tailwindcss"
                className="md:w-[80px] w-[50px] "
              />
              <motion.img
                variants={items}
                src={skillSvg.imgEther}
                alt=""
                title="Ether.js"
                className="md:w-[90px] w-[60px]"
              />
              <motion.img
                variants={items}
                src={skillSvg.imgHardhat}
                alt=""
                title="Hardhat"
                className="md:w-[80px] w-[50px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
