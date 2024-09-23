/* eslint-disable react/display-name */
import React, { memo } from 'react'

const SquaredButton = memo(({children}) => {
  return (
    <button className='flex max-w-fit px-5 py-2 font-bold text-white bg-red-tiktok rounded-lg text-3xl shadow-lg transition ease-in-out duration-500 items-center' >
       {children}
    </button>
  )
})

export default SquaredButton