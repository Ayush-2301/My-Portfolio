import React from "react";
import { motion } from "framer-motion";
import { IconsList } from "../constant/constant";
const Icons = (props) => {
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
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const text_style = props.darkMode ? "#0B0C10" : "#EBF2FA";

  const icon = IconsList.map((item) => {
    const [isHover, setIsHover] = React.useState(false);
    const style = {
      color: isHover ? item.theme : text_style,
    };

    const handleMouseEnter = () => {
      setIsHover(true);
    };

    const handleMouseLeave = () => {
      setIsHover(false);
    };
    return (
      <motion.a
        variants={items}
        href={item.link}
        target="_blank"
        key={item.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-3xl p-1 mx-2 md:mx-5"
        style={style}
      >
        <i className={item.name}></i>
      </motion.a>
    );
  });
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className="flex flex-row justify-center items-center"
    >
      {icon}
    </motion.div>
  );
};

export default Icons;
