import React, { lazy, useState } from "react";


const Rating = lazy(()=>import("./Rating"))
const Review = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0)
  return (
    <div className="mx-auto lg:mb-10 lg:min-h-[60vh] min-w-screen bg-dark-background items-center justify-center flex">
      <div className="container mx-auto shadow-xl  lg:px-10 bg-white lg:py-10 rounded-xl  lg:max-w-[60%]">
        <h1 className="text-center font-medium text-3xl text-black">
          Leave a review
        </h1>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-5">
          {/* Left */}

          <div className="my-5">
            <input
              type="text"
              placeholder="Your Name *"
              required
              className="font-extralight text-black min-w-full px-5 py-3 rounded-full border-[0.27px] text-lg bg-gray-100"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Order Email *"
              required
              className="font-extralight text-black min-w-full px-5 py-3 rounded-full my-5 border-[0.27px] text-lg bg-gray-100"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex items-center mt-5">
              <span className="text-lg font-light text-black me-2">Rating * </span>
              <Rating rating={rating} setRating={setRating
            } />
              <span className="mx-5 text-white bg-red-tiktok font-light text-xl px-4 py-2 rounded-lg shadow-lg ">{rating}/5</span>
            </div>
          </div>
          {/* Right */}
          <div>
          <textarea
              type="text"
              placeholder="Order Email *"
              required
              rows={4}
              className="font-extralight text-black min-w-full px-5 py-2 rounded-lg my-5 border-[0.27px] text-lg bg-gray-100"
              onChange={(e) => setEmail(e.target.value)}
            />
          <button className=" text-center min-w-full  bg-dark-background py-4 rounded-full text-lg font-medium transition delay-75 hover:bg-red-tiktok text-white">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
