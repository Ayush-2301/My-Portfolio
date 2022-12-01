import React from "react";
import { ProjectsDisc } from "../constant/constant";
import { Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import "../index.css";
import {  motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Crousal = (props) => {
  const style = {
    color: props.darkMode ? "#131112" : "#EBF2FA",
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
        delay: 0.5,
      },
    },
  };
  return (
    <div className="max-w-full w-[80%] my-auto">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {ProjectsDisc.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col">
              <img src={item.img} alt="" className="md:w-[100px]" />
              <motion.div
                initial="hidden"
                animate="show"
                variants={variants}
                className={`relative bottom-[-6px] left-0 text-Dark-black-color flex flex-col md:flex-row justify-between items-center`}
              >
                <motion.div
                  variants={items}
                  className={` md:p-3 font-semibold  p-1 text-sm bg-Projects-theme rounded-md m-2 mr-0`}
                >
                  {item.discription}
                </motion.div>
                <motion.a
                  variants={items}
                  href={item.link}
                  target="_blank"
                  className="flex z-10 md:mt-[20px] w-[150px] h-[50px] sourcebtn rounded-2xl p-2 cursor-pointer justify-center items-center"
                >
                  <button
                    className={`z-10 cursor-pointer rounded-md  left-[200px] font-semibold`}
                    style={style}
                  >
                    Source Code
                  </button>
                  <i className="fa-solid fa-angle-right  z-10cursor-pointer text-3xl  text-Projects-theme m-0 p-0 "></i>
                </motion.a>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Crousal;
