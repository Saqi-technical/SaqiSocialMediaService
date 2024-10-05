import React from 'react'
import LogoLight from "../assets/logo/logo-light.png";
import { Link } from "react-router-dom";
const SecondaryHeader = () => {
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
        <div className=" bg-dark-background w-100 flex items-center justify-between px-1">
          <Link to={"/"}>
          <img
            src={LogoLight}
            alt="logo"
            className=" w-[160px] max-h-[10%] object-contain"
          />
          </Link>
          <ul className="flex px-2">{
            items && items?.map((item,index)=>(
              <Link to={"/"} key={index} className="mx-2 text-xl font-light text-white hover:underline cursor-pointer hover:text-primary">
                {item.title}
              </Link>
            ))
            }</ul>
        </div>
      );
}

export default SecondaryHeader