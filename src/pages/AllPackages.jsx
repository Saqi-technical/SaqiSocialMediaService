import React, { lazy } from "react";


const BestOfferWeekly = lazy(()=>import("../components/BestOfferWeekly"))
const SecondaryHeader = lazy(() => import("../components/SecondaryHeader"));
const AllPackages = () => {
 
  return (
    <div className="min-h-screen min-w-screen">
      <SecondaryHeader />
      <div className="package-layout-grid">
        <div className="package-discount-card ">
          <section className="px-4 ">
            <div className="bg-gradient-to-br from-primary via-white-400 to-red-tiktok p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-full mx-auto">
              <div className="flex justify-between items-center min-w-full gap-6">
                <div className="">
                  <span className="text-white">Big sale then ever </span>
                  <br />
                  <span className=" text-4xl text-white font-semibold">
                    Get 35% off
                  </span>
                  <span className=" block text-2xl text-white font-semibold">
                    On your next order over $100
                  </span>
                </div>
                <button className="text-black bg-white hover:bg-gray-50 px-6 py-4 rounded-lg  ease duration-300 flex gap-1 items-center group max-h-16 ">
                  <span>Get Discount</span>
                  <svg
                    viewBox="0 0 256 256"
                    height="1em"
                    width="1em"
                    className="group-hover:translate-x-1 transition-transform ease duration-200"
                    role="img"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-e660a7a7=""
                  >
                    <path
                      d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
         <BestOfferWeekly/>
      </div>
    </div>
  );
};

export default AllPackages;
