import React, { lazy } from "react";
import Background from "../assets/backgrounds/bg-pricing.png";
const PriceCard = lazy(() => import("./PriceCard.jsx"));
import InstagramLogo from "../assets/logo/social/instagram.png";
import TikTokLogo from "../assets/logo/social/tiktok.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import YoutubeLogo from "../assets/logo/social/youtube.png";
const CardContainer = () => {
  const content = [
    {
      title: "Instagram",
      price: "$9.99",
      description: ["1,000 followers", "9 Posts"],
      subTitle: "Best value for growing your social presence.",
      color: "#f779be",
      background: InstagramLogo,
      icon: faCheck ,
    },
    {
      title: "Tiktok",
      price: "$9.99",
      description: ["1,000 followers", "1,000 views"],
      subTitle: "Unlock new opportunities with our affordable plans.",
      color: "#6e557f",
      background: TikTokLogo,
      icon: faCheck ,
    },
    {
      title: "Youtube",
      price: "$9.99",
      description: ["1,000 subscribers", "1,000 watch time", "300 likes"],
      subTitle: "Start small, grow big with our scalable pricing.",
      color: "#f29898",
      background: YoutubeLogo,
      icon: faCheck ,
    },
  ];
  return (
    <div className="relative min-h-screen sm:bg-[#212831] xl:bg-transparent flex justify-center items-center py-5">
    <img src={Background} alt="" className="absolute inset-0 -z-20" />
    <div className="mx-auto container my-3 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mt-10">
        {" "}
        &quot; Best<span className="text-primary"> Option</span> Discounted Offers &quot;
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <PriceCard content={content} />
      </div>
    </div>
  </div>
  );
};

export default CardContainer;
