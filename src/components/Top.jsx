import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="w-full bg-primary min-h-12 px-3 flex !justify-between items-center absolute top-[95dvh] lg:relative lg:top-0">
      <span className="text-white font-semibold tracking-wider text-[15px]">
        <FontAwesomeIcon icon={faPhone} /> +92 321 6968609
      </span>
      <div className="text-white font-semibold items-center flex text-center selection:file: !text-[15px] px-2">
      <FontAwesomeIcon icon={faCartShopping} className="mx-2"/>
        <Link to={"/"}>Login</Link>
        <span className="mx-1">/</span>
        <Link to={"/"}>Register</Link>
      </div>
    </div>
  );
};

export default Top;
