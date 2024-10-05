import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkoutOrder } from "../redux/slicers/order.js";
const PriceCard = ({ content }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e, item) => {
    e.preventDefault();

    if (isAuthenticated) {
      dispatch(checkoutOrder(item));
      navigate("/checkout");
    } else {
      navigate("/validate/sign-in");
    }
  };
  return (
    <>
      {content &&
        content?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg border col-span-1 w-full bg-white p-4"
          >
            <h1
              className="font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-wide min-h-20 sm:min-h-24 lg:min-h-32 w-full text-center flex items-center justify-center rounded-lg shadow-lg text-white relative"
              style={{ backgroundColor: item.color }}
            >
              {item.title}
              <img
                src={item.background}
                alt=""
                className="absolute -z-10 right-0 inset-auto opacity-20 max-h-full"
              />
            </h1>
            <h4 className="my-5 text-gray-400 px-2 text-sm sm:text-md lg:text-lg font-light">
              {item.subTitle}
            </h4>
            <h3 className="px-2 font-extrabold text-2xl sm:text-3xl lg:text-4xl my-3">
              {item.price}
              <span className="text-lg font-semibold">/month</span>
            </h3>
            <ul className="text-gray-500 px-2 min-h-[100px] sm:min-h-[120px] lg:min-h-[150px]">
              {item.description.map((desc, i) => (
                <li key={i} className="my-2 font-light text-sm sm:text-md">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-green-500 mr-2"
                  />
                  {desc}
                </li>
              ))}
            </ul>
            <button
              onClick={(e) => handleClick(e, item)}
              className="my-2 flex text-center items-center justify-center rounded-lg bg-dark-button hover:bg-primary py-2 text-white mx-2 transition ease-in-out duration-500 "
            >
              Order Now{" "}
            </button>
          </div>
        ))}
    </>
  );
};

export default PriceCard;
