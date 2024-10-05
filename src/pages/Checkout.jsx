import {
  faArrowLeftLong,
  faBriefcase,
  faCheck,
  faCircleExclamation,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutBg from "../assets/backgrounds/bg-checkout.png";
import Logo from "../assets/logo/logo-light.png";

import  { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { roundPrice } from "../lib/roundoffValue";
import { API } from "../lib/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { convertDollarToPkr } from "../lib/DollarIntoPkr";

const Checkout = () => {
  const [file, setFile] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const { order } = useSelector((state) => state.order);

  const phoneNumber = "923034561671"; // Replace with your WhatsApp number
  const pkPrice = convertDollarToPkr(roundPrice(order?.price || ""));
  const navigate = useNavigate();

  useEffect(() => {
      // Redirect to home if user is not authenticated or order is not available
      if (!user || !order) {
          navigate("/");
      }
  }, [user, order, navigate]); 
  const handleWhatsapp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    if (setFile != null) {
      setButtonVisibility(true);
    }
  };
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload Screenshot");
    }
    const formData = new FormData();
    const imageFile = document.querySelector('input[type="file"]').files[0];
    formData.append("image", imageFile);
    formData.append("price", roundPrice(order.price));
    formData.append("userId", user._doc._id);
    formData.append("name", order.title);
    formData.append("isPaid", true);
    try {
      const response = await API.createOrder(formData);
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.message);
        handleWhatsapp();
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="checkout">
      {/* LEFT - Checkout Information */}
      <div className="checkout-info flex flex-col  relative min-h-full  ">
        <img
          src={CheckoutBg}
          alt="checkout-bg"
          className="absolute aspect-square object-cover min-h-full min-w-full  -z-20"
        />
        <div className="flex items-center text-white lg:mt-20 lg:mx-5">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faArrowLeftLong} size="xl" />
          </Link>
          <img
            src={Logo}
            alt="logo"
            className=" aspect-[7/2] max-w-48 object-cover"
          />
        </div>
        <div className="lg:mx-5 text-white lg:my-8">
          <h2 className="text-md font-extralight">
            Subscribed to {order?.title?order.title:""} Standard Plan
          </h2>
          <div className="flex items-center my-3">
            <h1 className="font-medium text-6xl">
              US{order?.price?order.price:""} / Pkr {pkPrice?pkPrice:""}
            </h1>
            <div className="mx-2 font-light">
              <h2>Per</h2>
              <h2>Month</h2>
            </div>
          </div>
          <h2 className="text-md font-extralight">
            Unlimited Revision per month
          </h2>
        </div>
        <div className="lg:mx-5 flex justify-between text-lg text-white my-4">
          <h1 className="">Subtotal</h1>
          <h2>{order?.price?order.price:""}</h2>
        </div>
        <hr className="my-3 opacity-20 mx-5" />
        <div className="lg:mx-5 flex justify-between text-lg text-white my-4">
          <h1 className="">Discount Coupons</h1>
          <h2>Not Available</h2>
        </div>
        <hr className="my-3  mx-5" />
        <div className="lg:mx-5 flex justify-between text-lg text-white my-4  ">
          <h1 className="">
            Offering In Package <FontAwesomeIcon icon={faBriefcase} />
          </h1>
          <div>
            {order?.description?.map((item, index) => (
              <h1 key={index}>
                <FontAwesomeIcon
                  icon={faCheck}
                  color="green"
                  className="mx-2"
                />
                {item}
              </h1>
            ))}
          </div>
        </div>
        <hr className="my-3 opacity-20 mx-5" />
        <div className="lg:mx-5 flex justify-between text-lg text-white my-4  opacity-20">
          <h1 className="">
            Tax <FontAwesomeIcon icon={faCircleExclamation} />
          </h1>
          <h2>US$0.00</h2>
        </div>
        <hr className="my-3 opacity-20 mx-5" />
        <div className="lg:mx-5 flex justify-between text-lg text-white my-4">
          <h1 className="">Total due today</h1>
          <h2>US{order?.price?order.price:""}</h2>
        </div>
        <div className=" self-center font-light text-lg text-white mx-5">
          <h2> 2024 All Rights Reserved (saqitechnical)</h2>
        </div>
      </div>
      {/*  RIGHT- Checkout Form */}
      <div className="checkout-form flex flex-col items-center lg:my-20 lg:mx-5">
        <div className="lg:my-5">
          <h1 className="font-semibold uppercase text-5xl my-2">
            Pay with online Banking
          </h1>
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              color="red"
              className="mx-1"
            />
            After uploading Screenshot send screenshot on{" "}
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              className="bg-teal-500 mx-2 px-2 py-1 rounded"
            >
              {" "}
              +92 303 4561671{" "}
            </a>
            whatsapp number
          </p>
        </div>
        <div className="font-semibold text-lg lg:min-w-[90%]">
          <div className="flex justify-between font-normal items-center">
            <b className="uppercase"> Muhammad Saqib Zafar</b>

            <div className="self-end">
              <h2 className="text-lg">
                {" "}
                Bank Name: <b> Alfalah </b>{" "}
              </h2>
              <h2 className="text-lg">
                Branch Code: <b> 0065</b>
              </h2>
              <h2 className="text-lg">
                Account Number: <b> 00651007791238</b>
              </h2>
              <h2 className="text-lg">
                IBAN Number: <b> PK56ALFH0065001007791238</b>
              </h2>
            </div>
          </div>{" "}
          <hr className="my-5" />
          <div className="flex justify-between font-normal items-center">
            <b className="uppercase"> Muhammad Saqib Zafar</b>

            <div className="self-end">
              <h2 className="text-lg">
                {" "}
                Bank Name: <b> Al Rajhi Bank </b>{" "}
              </h2>

              <h2 className="text-lg">
                Account Number: <b> 640000010006083638966</b>
              </h2>
              <h2 className="text-lg">
                IBAN Number: <b> SA7380000640608013638966</b>
              </h2>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between font-normal items-center">
            <b className="uppercase"> Muhammad Saqib Zafar (ASAAN AC)</b>

            <div className="self-end">
              <h2 className="text-lg">
                {" "}
                Bank Name: <b> Meezan Bank</b>{" "}
              </h2>

              <h2 className="text-lg">
                Account Number: <b> 02750105961632</b>
              </h2>
              <h2 className="text-lg">
                IBAN Number: <b> PK83MEZN0002750105961632</b>
              </h2>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between font-normal items-center">
            <b className="uppercase"> Muhammad Saqib Zafar </b>

            <div className="self-end">
              <h2 className="text-lg">
                {" "}
                Jazzcash Number: <b> 03034561671</b>{" "}
              </h2>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between font-normal items-center">
            <b className="uppercase"> Muhammad Zafar Iqbal </b>

            <div className="self-end">
              <h2 className="text-lg">
                {" "}
                Easypaisa Number: <b> 03404474994</b>{" "}
              </h2>
            </div>
          </div>
          <form className="my-3   flex justify-between" onSubmit={handleUpload}>
            <input type="file" onChange={handleFileChange} />
            <button className="bg-black text-white px-5 rounded hover:bg-primary py-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
