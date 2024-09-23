import React, { lazy } from "react";
const SquaredButton = lazy(()=>import("./button/SquaredButton"))
const LongRoundedButton = lazy(()=>import("./button/LongRoundedButton"))
const Views = lazy(()=>import("./ContainerSections/Views.jsx"))
const RatingContainer = () => {
  const pricingContent = [
    {
      heading: "All in one Tiktok Follower Compaign",
      pricing: "$68.00",
      description:
        "Elevate your Tiktok game with real followers from SaqiSocial Media Service! Grab our exclusive package that includes likes and engagement boosters for your posts. Instantly enhance your profile’s performance, and enjoy 24/7 customer support to ensure everything runs smoothly!",
    },
  ];
  return (
    <div className="min-w-screen min-h-screen items-center flex ">
      <div className="bg-graySecondary container rounded-xl mx-auto shadow-xl lg:px-32 lg:py-28">
        <div className="grid-cols-2 grid min-w-full lg:gap-32">
          {/* Pricing */}
          {pricingContent &&
            pricingContent?.map((item, index) => (
              <div className=" col-span-1" key={index}>
                <h1 className="text-4xl font-semibold ">{item.heading}</h1>
                <div className="flex lg:my-8 ">
                  <SquaredButton>{item.pricing}</SquaredButton>
                  <LongRoundedButton>Buy now</LongRoundedButton>
                </div>
                <p className=" tracking-wide text-xl  font-light text-left">
                  {item.description}
                </p>
              </div>
            ))}
          {/* Views */}
          <div className="col-span-1 lg:py-5 ">
            <Views/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingContainer;
