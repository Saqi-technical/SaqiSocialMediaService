import React from "react";
import LogoLight from "../assets/logo/logo-light.png";
import { Link } from "react-router-dom";
const Header = () => {
  const items = [
    {
      title: "Explore",
    },
    {
      title: "Packages",
    },
    {
      title: "About Us",
    },
    {
      title: "Contact Us?",
    },
  ];
  return (
    <div className="bg-transparent w-100 flex items-center justify-between px-1">
      <img
        src={LogoLight}
        alt="logo"
        className=" w-[200px] max-h-[20%] object-cover"
      />
      <ul className="flex px-2">{
        items && items?.map((item,index)=>(
          <Link to={"/"} key={index} className="mx-2 text-xl font-light text-white hover:underline cursor-pointer hover:text-primary">
            {item.title}
          </Link>
        ))
        }</ul>
    </div>
  );
};

export default Header;
//use dropdown 