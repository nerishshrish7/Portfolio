import React from 'react'
import vite from "../assets/vite.svg"

const ServiceCard = ({description, price, provider, service}) => {
  return (
    
    <div className='h-[100%] w-[30%] mt-[3vh] gap-[3vh] flex flex-col justify-center items-center border-white border-2'>
          <div className='h-[25vh] w-[11vw] mt-[2vh] border-white border-2 flex justify-center items-center rounded-full'>
            <img src={vite} alt="Vite" height={120} width={120}/>
          </div>
          <div className='h-[10vh] w-[100%] text-[2.6vw] font-semibold leading-9 text-white text-center flex justify-center items-center'>
            <p>{service}</p>
          </div>
          <div className='h-[5vh] w-[100%] text-[1.3vw] text-white flex justify-center items-center text-center'>
            {description}
          </div>
          <div className='h-[12vh] w-[90%] text-[1.3vw] text-center flex flex-col justify-center items-center border-white border-2'>
            <p className='text-white'>Provider:{provider}</p>
            <p className='text-yellow-400'>Starting from {price}</p>
          </div>
          <div className='w-[100%]'></div>
        </div>
  )
}

export default ServiceCard
