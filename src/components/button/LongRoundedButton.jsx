import React, { memo } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/display-name
const LongRoundedButton = memo(({ children, link = "/" }) => {
  return (
    <Link
      to={link}
      className="py-3 px-28 text-white rounded-full font-bold shadow-lg hover:bg-primary transition ease-in-out duration-500 items-center flex text-xl tracking-wider text-center bg-dark-button lg:mx-5"
    >
      {children}
    </Link>
  );
});

export default LongRoundedButton;
