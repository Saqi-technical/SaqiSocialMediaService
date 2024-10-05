import React from "react";
import YoutubeLogo from "../assets/logo/social/youtube.png";
import TiktokLogo from "../assets/logo/social/tiktok.png";
import LinkedinLogo from "../assets/logo/social/linkedIn.png";
import InstaLogo from "../assets/logo/social/instagram.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkoutOrder } from "../redux/slicers/order.js";

const BestOfferWeekly = () => {
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
  const bestGoingCategory = [
    {
      title: "Youtube",
      subTile: "Youtube Best plan",
      styles: "youtube-card",
      textstyles: "text-gray-800",
      hugePrice: "$15",
      offer: ["1,000,000 views", "100,000 likes"],
      link: "/",
      price: "$10.99",
      logo: YoutubeLogo,
    },
    {
      title: "Instagram",
      subTile: "Instagram Best plan",
      textstyles: "text-gray-800",
      styles: "instagram-card",
      hugePrice: "$15",
      offer: ["1,000,000 views", "100,000 likes"],
      link: "/",
      price: "$10.99",
      logo: InstaLogo,
    },
    {
      title: "TikTok",
      subTile: "Tiktok Best plan",
      textstyles: "text-white",
      hugePrice: "$15",
      price: "$10.99",
      offer: ["1,000,000 views", "100,000 likes"],
      link: "/",
      styles: " tiktok-card flex-col flex justify-between bg-dark-background",
      logo: TiktokLogo,
    },
    {
      title: "LinkedIn",
      subTile: "Linkedin Best plan",
      hugePrice: "$15",
      textstyles: "text-white",
      price: "$10.99",
      offer: ["1,000,000 views", "100,000 likes"],
      link: "/",
      styles: " linkedIn-card flex-col flex justify-between bg-blue-linkedin ",
      logo: LinkedinLogo,
    },
  ];
  return (
    <>
      {bestGoingCategory &&
        bestGoingCategory?.map((item, index) => (
          <div
            className={` rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105 youtube-card px-4 mx-4 relative ${item.styles}`}
            key={index}
          >
            <div className="p-1 bg-red-400 rounded-full"></div>
            <img
              src={item.logo}
              alt=""
              className="absolute right-3 opacity-20 max-w-48"
            />
            <div className="p-8">
              <h2 className={`text-3xl font-bold  mb-4 ${item.textstyles}`}>
                {item.subTile}
              </h2>
              <p className={`text-gray-600 mb-6 ${item.textstyles}`}>
                Perfect for growing businesses
              </p>
              <div className="flex items-center my-2">
                <p className={`text-4xl font-bold  me-4 ${item.textstyles}`}>
                  $10.99
                </p>
                <p
                  className={`text-2xl font-normal ${item.textstyles} line-through decoration-3 rotate-3 `}
                >
                  $15.99
                </p>
              </div>
              <ul className="text-sm text-gray-600 mb-6">
                {item.offer &&
                  item.offer?.map((items, secondIndex) => (
                    <li
                      className={`mb-2 flex items-center ${item.textstyles}`}
                      key={secondIndex}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className={`w-4 h-4 mr-2 text-green-500 ${item.textstyles}`}
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeWidth="2"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      {items}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="p-4">
              <button
                onClick={(e) => handleClick(e, item)}
                className=" flex justify-center w-full bg-red-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
              >
                Select Plan
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default BestOfferWeekly;
