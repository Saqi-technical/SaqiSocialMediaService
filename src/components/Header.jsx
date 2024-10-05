import React from "react";
import LogoLight from "../assets/logo/logo-light.png";
import { Link } from "react-router-dom";
const Header = () => {
  const items = [
    {
      title: "Explore",
      route:"/explore"
    },
    {
      title: "Packages",
      route:"/all-packages"
    },
    {
      title: "About Us",
      route:"/about-us"
    },
    {
      title: "Contact Us?",
      route:"/contact-us"
    },
  ];
  return (
    <div className="bg-transparent w-100 flex items-center justify-between px-1">
      <Link to={"/"}>
      <img
        src={LogoLight}
        alt="logo"
        className=" w-[200px] max-h-[20%] object-cover"
      />
      </Link>
      <ul className="flex px-2">{
        items && items?.map((item,index)=>(
          <Link to={item.route} key={index} className="mx-2 text-xl font-light text-white hover:underline cursor-pointer hover:text-primary">
            {item.title}
          </Link>
        ))
        }</ul>
    </div>
  );
};

export default Header;
//use dropdown 