import React from "react";
import sun from "../assets/sun.png";
import { NavIcons, DarkModeicon } from "../constant/constant";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  const text_style = props.darkMode ? "#0B0C10" : "#EBF2FA";
  const navIcons = NavIcons.map((item) => {
    const [isHover, setIsHover] = React.useState(false);
    const style = {
      color: isHover ? item.theme : text_style,
    };
    const navLinkStyles = ({ isActive }) => {
      return {
        color: isActive ? item.theme : text_style,
      };
    };
    const handleMouseEnter = () => {
      setIsHover(true);
    };

    const handleMouseLeave = () => {
      setIsHover(false);
    };
    return (
      <NavLink
        key={item.id}
        title={item.title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to={`${item.link}`}
      >
        <div
          className="text-xl p-1 my-3  md:my-5 "
          style={{ ...style, ...navLinkStyles }}
        >
          <i className={item.name}></i>
        </div>
      </NavLink>
    );
  });

  return (
    <div className="absolute z-10 p-3 container h-full w-[60px] md:w-[60px] flex flex-col justify-between bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div
        className=" w-[35px] md:w-[45px]  cursor-pointer "
        onClick={props.toggleDarkMode}
      >
        <div>
          {props.darkMode ? (
            <img
              title="Light Mode"
              className="max-w-[45px] w-[35px]"
              src={sun}
              alt="Light Mode"
            />
          ) : (
            <i
              title="Dark Mode"
              style={{ color: text_style }}
              className={`ml-2 text-3xl ${DarkModeicon.toggleOff}`}
            ></i>
          )}
        </div>
      </div>
      <div className=" md:space-y-3 cursor-pointer ">{navIcons}</div>
      <div className=" mt-40"></div>
    </div>
  );
};

export default Navbar;
