import React from 'react'
import InformationImage from "../assets/Information /information.png"
const BestServiceInformation = () => {
    const serviceInformation = [
        {
            title:"The Best Social Media Service in the World!",
            description:"Just click to buy social media followers. If you start purchasing followers for your preferred platform right now, your engagement will see a boost. These followers will act as social proof, increasing your credibility and attracting a larger organic audience.",
            serviceImage:InformationImage
        }
    ]
  return (
    <div className='min-w-screen min-h-screen  bg-dark-background flex flex-col justify-center items-center  sm:py-5 lg:py-20 mx-auto text-white'>
        <div className=' container mx-auto text-center '> 
        {
            serviceInformation&& serviceInformation?.map((item,index)=>(
                <div key={index} className='flex flex-col text-center items-center lg:py-5'>
                    <h1 className=' font-extrabold  text-white text-5xl '>{item.title}</h1>
                    <p className='max-w-[50rem] text-xl my-6 font-light'>{item.description}</p>
                    <img src={item.serviceImage} alt="" className='max-w-[50rem] hover:bg-black '/>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default BestServiceInformation