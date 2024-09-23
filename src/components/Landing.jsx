import React, { lazy, useEffect, useMemo, useState } from "react";

const Header = lazy(() => import("./Header.jsx"));
import LandingBackground from "../assets/backgrounds/bg-landing.png";
import LandingBackgroundSecond from "../assets/backgrounds/bg-landing-second.png";
import LandingBackgroundThird from "../assets/backgrounds/bg-landing-third.png";
import MobilePotrait from "../assets/elements/mobile.png"
const Landing = () => {
  // Create an array of images using useMemo
  const images = useMemo(
    () => [LandingBackground, LandingBackgroundSecond, LandingBackgroundThird],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);
  return (

    <div className=" relative min-h-[100dvh] max-h-[100dvh] ">
      <Header />
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`slide absolute top-0 -z-30 opacity-90 max-h-[100dvh] min-h-[100dvh] min-w-full  ${
            index === currentIndex ? "activeSlide" : ""
          }`}
          style={{ display: index === currentIndex ? "block" : "none" }}
        />
      ))}
      <div className="min-w-full flex flex-col items-center !justify-center text-center min-h-full ">
        <h1 className=" font-extralight text-7xl text-white  ">Explore our </h1>
        <h1 className="font-extralight text-7xl text-white ">
          Evident Services{" "}
        </h1>
        <h1 className="font-semibold text-7xl text-white ">Social Media is</h1>
        <h1 className="font-semibold text-7xl text-white "> Gasoline</h1>
        <p className="font-extralight text-3xl max-w-md text-white">
          Elevate your brand’s online presence with our expert social media
          solutions
        </p>
        <button className=" px-7 py-3 text-lg  bg-primary font-light text-white  shadow-lg  hover:bg-dark-button  my-2 transition ease-in-out duration-500 ">
          Get A Package
        </button>
        <img src={MobilePotrait} alt="" className=" -z-20 " />
      </div>

    </div>
  );
};

export default Landing;
