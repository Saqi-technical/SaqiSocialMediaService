import React, { lazy } from "react";
import Instagram from "../assets/social/instagram.svg";
import Youtube from "../assets/social/youtube.svg";
import Dailymotion from "../assets/social/dailymotion.svg";
import TikTok from "../assets/social/tiktok.svg";
import Linkedin from "../assets/social/linkedin.svg";
const LogoCloud = () => {
  return (
    <div className="bg-white    max-h-[200px]">
      <div className="mx-auto max-w-7xl px-1 lg:px-8 ">
     
        <div className="mx-auto  grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-6 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src={Instagram}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src={Youtube}
            width={208}
            height={88}
            className="col-span-2 max-h-22 w-full object-contain lg:col-span-1 "
          />
          <img
            alt="Tuple"
            src={Dailymotion}
            width={208}
            height={88}
            className="col-span-2 max-h-30 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src={TikTok}
            width={208}
            height={88}
            className="col-span-2 max-h-30 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src={Linkedin}
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-30 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
