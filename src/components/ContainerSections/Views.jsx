import React from 'react'

const Views = () => {
  return (
    <div className="grid grid-cols-2">
    {/* LEFT */}
    <div className=" col-span-1 flex items-center text-left flex-col ">
      <div className="my-5 min-w-full">
        <h1 className="font-bold text-6xl text-red-tiktok ">1000</h1>
        <div className="px-3">
          <p className="font-light ">New active</p>
          <p className="font-light ">Subscribe on one go</p>
        </div>
      </div>
      <div className="min-w-full">
        <h1 className="font-bold text-6xl text-red-tiktok px-1">
          500
        </h1>
        <div className="px-3">
          <p className="font-light ">Likes for</p>
          <p className="font-light ">Videos on one go</p>
        </div>
      </div>
    </div>
    {/* RIGHT */}
    <div className="col-span-1">
      <div className="my-5 min-w-full">
        <h1 className="font-bold text-6xl text-red-tiktok ">5000</h1>
        <div className="px-3">
          <p className="font-light ">New active</p>
          <p className="font-light ">Followers on one go</p>
        </div>
      </div>
      <div className="min-w-full">
        <h1 className="font-bold text-6xl text-red-tiktok px-1">
          24/7
        </h1>
        <div className="px-3">
          <p className="font-light ">Customer</p>
          <p className="font-light ">Service on one go</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Views