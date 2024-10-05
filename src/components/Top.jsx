import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Top = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full bg-primary min-h-12 px-3 flex !justify-between items-center absolute top-[95dvh] lg:relative lg:top-0">
      <span className="text-white font-semibold tracking-wider text-[15px]">
        <FontAwesomeIcon icon={faPhone} /> +92 303 4561671
      </span>
      <div className="text-white font-semibold items-center flex text-center selection:file: !text-[15px] px-2">
        {user ? (
          <>
            <FontAwesomeIcon icon={faCartShopping} className="mx-2" />
            {user._doc.name}
          </>
        ) : (
          <>
            {" "}
            <FontAwesomeIcon icon={faCartShopping} className="mx-2" />
            <Link to={"/validate/sign-in"}>Login</Link>
            <span className="mx-1">/</span>
            <Link to={"/validate/sign-up"}>Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Top;
