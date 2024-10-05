import React, { useState } from "react";
import LoginBg from "../assets/backgrounds/bg-signin.png";
import Logo from "../assets/logo/logo-dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API } from "../lib/api";
import { login } from "../redux/slicers/auth";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email,
        password,
      };
      const response = await API.userLogin(formData);
      if (response.data.success) {
        dispatch(login(response.data.data));
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
            Welcome Back 😎
          </h1>
          <p className="self-center font-light">
            Enter your email and password to access your account
          </p>
          <div className="lg:my-10 flex flex-col flex-end min-w-[50%]">
            <label className="font-light text-md">Email</label>
            <input
              type="email"
              placeholder="Enter the email"
              onChange={(e) => setEmail(e.target.value)}
              className="md:my-5 border py-3 px-3 bg-[#F5F7FA] rounded-lg placeholder:font-light"
              required
            />
            <label className="font-light text-md">Password</label>

            <input
              type="password"
              placeholder="Enter the password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="md:my-5 border py-3 px-3 bg-[#F5F7FA] rounded-lg placeholder:font-light "
            />
            <div className="flex justify-between">
              <div className="flex">
                <input type="checkbox" className="rounded-full bg-teal-600" />
                <label className="font-light text-md mx-2">Remember me</label>
              </div>
              <Link
                to={"/validate/forget-password"}
                className="font-light text-md text-teal-600"
              >
                Forget Password?
              </Link>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="flex bg-teal-700 text-white justify-center my-3 py-3 rounded-lg font-light hover:bg-black"
            >
              Sign in
            </button>
          </div>
          <div className="flex ">
            <p className="font-light text-md mx-1">Don't have an account? </p>
            <Link
              to={"/validate/sign-up"}
              className="font-normal text-teal-600"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
