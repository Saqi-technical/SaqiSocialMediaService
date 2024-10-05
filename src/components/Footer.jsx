import React from "react";
import LogoLight from "../assets/logo/logo-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faLinkedin,
  faDailymotion,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
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
  const linksToPages = [
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Explore",
      link: "/explore",
    },
    {
      title: "Packages",
      link: "/packages",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
    {
      title: "Privacy Policies",
      link: "/privacy-policies",
    },
  ];
  return (
    <div className="bg-black min-w-full px-auto flex items-center justify-center text-white">
      <div className="container relative grid grid-cols-4 items-center gap-1 ">
        {/* LEFT */}
        <div className="items-center  justify-center flex-col flex col-span-1">
          <div className="w-60 h-40 flex items-start justify-start overflow-hidden">
            <img src={LogoLight} alt="logo" className="object-contain" />
          </div>
          <div className=" px-5 font-extralight text-lg text-center">
            <p className=" my-1">
              153-B Hafiz Street Model Town <br /> Lahore, Pakistan
            </p>
            <a
              href="https://saqisolutions.com/"
              target="_blank"
              className="text-primary my-1"
            >
              @SAQISOLUTIONS.COM
            </a>
            <p className="my-1">+92 303 4561671</p>
            {/* SOCIAL ICONS */}
            <div>
              {icons &&
                icons?.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    className=" hover:text-primary mx-2"
                  >
                    <FontAwesomeIcon icon={item.icon}  />
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col   col-span-1">
          {linksToPages &&
            linksToPages?.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="hover:text-primary font-light text-lg py-2"
              >
                {item.title}
              </Link>
            ))}
        </div>

        {/* RIGHT */}
        <div className=" col-span-2  min-h-[70%]">
          <form className="flex-col flex">
            {/* You can add content for the right side here */}
            <label className="font-extralight uppercase tracking-wider">
              Subscribe to our membership
            </label>
            <label className="font-extralight  mt-2">First Name*</label>
            <input
              type="text"
              className="my-1 py-2 rounded-sm lg:max-w-[70%]"
            />
            <label className="font-extralight  ">Email*</label>

            <input
              type="text"
              className="my-2 py-2 rounded-sm lg:max-w-[70%]"
            />
          </form>
          <button className="bg-primary text-white px-4 my-1  py-2  font-extralight">
            Submit
          </button>
        </div>
        <div className=" font-extralight text-lg text-center min-w-full items-center justify-center  col-span-4">
          <p>© 2024 <span className="text-primary"> Saqi Technical. </span>All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
