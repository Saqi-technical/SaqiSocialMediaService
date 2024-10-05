import React, { useState } from 'react'
import RegisterBg from "../assets/backgrounds/bg-signup.png";
import Logo from "../assets/logo/logo-dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { API } from '../lib/api';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slicers/auth';
import { toast } from 'react-toastify';
const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [name, setName] = useState("")
  const handleRegister  = async(e)=>{
    e.preventDefault()
    try {
      const formData = {
        email,
        password,
        phoneNumber,
        name
      }
      const response = await API.userRegister(formData)
      if(response.data.success){
        const loginResponse = await API.userLogin(formData)
        if(loginResponse.data.success){

          dispatch(login(loginResponse.data.data))
          toast.success(response.data.message)
          navigate("/")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="max-h-screen flex">
         {/* RIGHT LOGIN FORM */}
      <div className="col-span-1 min-w-[60%] h-screen flex-col flex  ">
        <div className="  flex justify-between px-4 items-center place-items-center">
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
            className="max-w-48  aspect-[4/3] object-contain"
          />
        </div>
        <form className="flex-col flex  justify-center items-center" >
          <h1 className="text-6xl font-semibold text-center mb-4">
            Keep Your online 🌎<br/> Platforms organized
          </h1>
          <p className="self-center font-light">
            Sign up to start your new world of social media growth
          </p>
          <div className="lg:my-5 flex flex-col flex-end min-w-[50%]">
            <label className="font-light text-md">Name</label>
            <input
              type="text"
              placeholder="Enter the Name"
              required
              onChange={(e)=>setName(e.target.value)}
              className="md:my-2 border py-3 px-3 bg-[#F5F7FA] rounded-lg placeholder:font-light"
            />
            <label className="font-light text-md">Email</label>
            <input
              type="email"
              placeholder="Enter the email"
              required
              onChange={(e)=>setEmail(e.target.value)}
              className="md:my-2 border py-3 px-3 bg-[#F5F7FA] rounded-lg placeholder:font-light"
            />
              <label className="font-light text-md">Phone*</label>
            <input
              type="tel"
              placeholder="Enter the Phone Number"
              onChange={(e)=>setPhoneNumber(e.target.value)}
              className="md:my-2 border py-3 px-3 bg-[#F5F7FA] rounded-lg placeholder:font-light"
            />
            <label className="font-light text-md">Password</label>

            <input
              type="password"
              placeholder="Enter the password"
              onChange={(e)=>setPassword(e.target.value)}
              required
              className="md:my-2 border py-3 px-3 bg-[#F5F7FA] rounded-lg placeholder:font-light "
            />
            <div className="flex justify-between">
            <div className="flex">
              <input type="checkbox" className="rounded-full bg-teal-600" />
              <label className="font-light text-md mx-2">Remember me</label>
            </div>
            <Link to={"/validate/forget-password"} className="font-light text-md text-teal-600">Forget Password?</Link>
            </div>
            <button className="flex bg-teal-700 text-white justify-center my-3 py-3 rounded-lg font-light hover:bg-black" onClick={handleRegister} >Sign up</button>
          </div>
          <div className="flex ">
          <p className="font-light text-md mx-1">Already have an account? </p>
          <Link to={"/validate/sign-in"} className="font-normal text-teal-600">Sign in</Link>
          </div>
        </form>
      </div>
      {/* LEFT ILLUSTRATION */}
      <div className="col-span-1 min-w-[40%] shadow-lg py-1  px-1">
        <img
          src={RegisterBg}
          alt=""
          className="max-w-full min-h-screen  object-cover    rounded-lg shadow-xl"
        />
      </div>

     
    </div>
  )
}

export default Register