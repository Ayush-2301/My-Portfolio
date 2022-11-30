import React from "react";
import { motion } from "framer-motion";
const Contact = (props) => {
  const bg_color = {
    backgroundColor: !props.darkMode ? "#0B0C10" : "#EDE6F2",
  };
  const style = {
    color: props.darkMode ? "#0B0C10" : "#EBF2FA",
  };
  const Inversestyle = {
    color: props.darkMode ? "#0B0C10" : "#EBF2FA",
  };
  const UserInput = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 mt-0 w-full rounded-md p-2 outline-none border-gray-700 text-sm border border-solid "
      style={style}
      id="white-glassmorphism"
    />
  );
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
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full contact absolute left-0 top-0 w-full border-r-[10px] border-Contact-theme border-solid font-standardFont"
      style={bg_color}
    >
      <div className="flex flex-row w-full ">
        <div className="p-3 h-screen w-[60px] mr-2 "></div>
        <div className="flex flex-col w-full md:flex-row " style={style}>
          <motion.div
            initial="hidden"
            animate="show"
            variants={variants}
            className="p-3 flex flex-col justify-center  w-full h-[100%] md:w-[100%] md:h-screen "
          >
            <motion.h1
              variants={items}
              className="md:text-6xl text-3xl font-bold md:mb-10 mb-2 capitalize font-standardFont underline decoration-[20px] underline-offset-4 decoration-Contact-theme"
            >
              Contact me!
            </motion.h1>
            <motion.div
              variants={items}
              className="flex flex-col md:flex-row md:gap-x-2 "
            >
              <UserInput
                placeholder="Name"
                name="name"
                type="text"
                handlechange={() => {}}
              />
              <UserInput
                placeholder="Email"
                name="email"
                type="email"
                handlechange={() => {}}
              />
            </motion.div>
            <motion.div variants={items}>
              <UserInput
                placeholder="Subject"
                name="subject"
                type="text"
                handlechange={() => {}}
              />
            </motion.div>
            <motion.textarea
              variants={items}
              name="Message"
              id="white-glassmorphism"
              className="my-2 mt-0 w-full rounded-md p-2 outline-none   border-gray-700 text-sm border border-solid"
              style={style}
              placeholder="Enter Message"
              cols="30"
              rows="5"
            ></motion.textarea>
            <motion.button
              variants={items}
              className="  bg-Contact-theme capitalize py-1 rounded-sm "
              style={Inversestyle}
            >
              Send Message
            </motion.button>
          </motion.div>
          <motion.iframe
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            id="map-kiet"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=28.752440436127902,77.49862051892788+(Ayush%20Chauhan)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            className=" w-full p-2 md:w-[100%] h-[90%] md:h-screen border-none"
            allowFullScreen=""
          ></motion.iframe>
        </div>
      </div>
    </motion.div>
  );
};
<div style="width: 100%"></div>;
export default Contact;
