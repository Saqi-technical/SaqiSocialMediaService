import React from 'react'
import "./styles/InfiniteScrollText.css"
const InfiniteScrollText = () => {
  return (
    <div className='min-w-screen min-h-fit'>
    <div className=' flex items-center min-h-full overflow-hidden'>
        <div className=' whitespace-nowrap my-8'>
            {/*  right to  Left*/}
            <div className='infinite-scroll-RightToLeft flex gap-8'>
                <p className='text-9xl font-semibold mb-0 '>Best <span className='text-primary'> ✨Social Media✨</span> Growth Provider</p>
                <p className='text-9xl  font-semibold mb-0 '>Best <span className='text-insta'> ✨Social Media✨</span> Growth Provider</p>
            </div>
            {/* Left to right */}
            <div className='infinite-scroll-LeftToRight flex gap-8'>
            <p className='text-9xl font-semibold mb-0 '>Best <span className='text-red-tiktok'> ✨Social Media ✨ </span> Growth Provider</p>
            <p className='text-9xl font-semibold mb-0 '>Best <span className=' text-blue-400'> ✨Social Media✨</span> Growth Provider</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default InfiniteScrollText