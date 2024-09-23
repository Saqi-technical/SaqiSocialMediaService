import React from "react";
import ConnectBackground from "../assets/backgrounds/bg-connect.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faLinkedin,
  faDailymotion,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const ConnectView = () => {
  const icons = [
    {
      icon: faInstagram,
      link: "https://www.instagram.com/saqitechnical/",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/company/77046268",
    },
    {
      icon: faYoutube,
      link: "https://www.youtube.com/@saqitechnical2526",
    },
    {
      icon: faDailymotion,
      link: "https://www.dailymotion.com/saqitechnical2526",
    },
    {
      icon: faTiktok,
      link: "https://www.tiktok.com/@saqitechnical_2526?lang=en",
    },
    {
      icon: faFacebook,
      link: "https://www.facebook.com/saqitechnical2526/?locale=en_GB",
    },
  ];
  return (
    <div className="min-w-screen my-0 min-h-screen relative  flex flex-col items-center justify-center">
      <img src={ConnectBackground} alt="" className="absolute inset-auto" />
      <h1 className="font-extrabold  text-primary text-8xl  my-2">
        Connect with <span className="text-white"> Saqi Solutions </span>on{" "}
      </h1>
      <h1 className="font-extrabold  text-white text-8xl  my-2">
        social media to see all updates
      
      </h1>
      <h1 className="text-5xl  lg:my-10 text-primary">
        {icons &&
          icons?.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className=" hover:text-white mx-10 "
            >
              <FontAwesomeIcon icon={item.icon}  />
            </a>
          ))}
      </h1>
      
    </div>
  );
};

export default ConnectView;
