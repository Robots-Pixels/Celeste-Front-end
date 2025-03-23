import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItem({image, name, price, description}) {
  return (
    <Link to={"/reservation"} className='group flex items-center justify-between gap-4 md:gap-8 p-4 md:p-8 bg-black/40 hover:bg-black/50' style={{transition: "all 0.5s"}}>           
        <div 
        className='w-[8rem] group-hover:scale-150 aspect-square bg-center bg-cover rounded-sm '
        style={{backgroundImage: `url(${image})`, transition: "all 0.5s"}}>
        </div>

        <div className='flex w-full flex-col justify-between gap-4'>
            <div className='flex flex-row gap-1 md:gap-3 items-center justify-between'>
                <h3 className='text-[1rem] md:text-[1.1rem] font-bold'>{name}</h3>
                <div className='bg-[#cd9d4b] h-[1px] flex-1'/>
                <h3 className='text-[1rem] md:text-[1.1rem] font-bold text-[#fff]'>${price}</h3>
            </div>

            <div className='text-[#ffffffb7] text-xs md:text-sm'>
                {description}
            </div>
        </div>

    </Link>
  )
}
