import React, { useState } from "react";
import LoginBg from "../assets/backgrounds/bg-signin.png";
import Logo from "../assets/logo/logo-dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const navigate = useNavigate()
  const [nextStep, setNextStep] = useState(false);
  const handleStep = () => {
    setNextStep(!nextStep);
  };
  const handleSubmit=()=>{
      navigate("/validate/sign-in")
  }
  return (
    <div className="max-h-screen flex">
      {/* LEFT ILLUSTRATION */}
      <div className="col-span-1 min-w-[40%] h-screen py-2 px-2">
        <img
          src={LoginBg}
          alt=""
          className="max-w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* RIGHT LOGIN FORM */}
      <div className="col-span-1 min-w-[60%] h-screen flex-col flex  ">
        <div className=" my-5 flex justify-between items-center place-items-center">
          <Link to={"/"} className=" hover:cursor-pointer">
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className=" self-center  hover:text-black"
              size="2x"
              color="teal"
            />
          </Link>
          <img
            src={Logo}
            alt=""
            className="max-w-52  aspect-[4/3] object-contain"
          />
        </div>
        <form className="flex-col flex  justify-center items-center">
          <h1 className="text-5xl font-semibold text-center mb-4">
            Don't Panic Fork 😉
          </h1>
          <p className="self-center font-light">
            Few Step and you get your new password
          </p>
          {!nextStep && (
            <div className="lg:my-10 flex flex-col flex-end min-w-[50%]">
              <label className="font-light text-md">Email</label>
              <input
                type="email"
                placeholder="Enter the email"
                className="md:my-5 border py-3 px-3 bg-[#F5F7FA] rounded-lg placeholder:font-light"
                required
              />

              <button
                className="flex bg-teal-700 text-white justify-center my-3 py-3 rounded-lg font-light hover:bg-black"
                type="submit"
                onClick={handleStep}
              >
                Proceed To Next Step
              </button>
            </div>
          )}
          {nextStep && (
            <div className="lg:my-10 flex flex-col flex-end min-w-[50%]">
              <label className="font-light text-md">Old Password</label>
              <input
                type="password"
                placeholder="Enter Previous Password"
                className="md:my-5 border py-3 px-3 bg-[#F5F7FA] rounded-lg placeholder:font-light"
                required
              />
                 <label className="font-light text-md">New Password</label>
              <input
                type="password"
                placeholder="Enter New Password"
                className="md:my-5 border py-3 px-3 bg-[#F5F7FA] rounded-lg placeholder:font-light"
                required
              />

              <button
                className="flex bg-teal-700 text-white justify-center my-3 py-3 rounded-lg font-light hover:bg-black"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
