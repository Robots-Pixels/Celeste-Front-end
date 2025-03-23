import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ShinyButton({destination, children}) {
  
  const navigate = useNavigate();
  
  return (
    <div 
    onClick={() => {
      navigate(destination);
    }}
     className='cursor-pointer cta-link border-1 relative overflow-hidden w-full h-full flex items-center justify-center' to={destination}>

        {children}

        <span className='dot dot1 absolute w-1 h-1 bg-white rounded-full -top-1 -right-1 opacity-90'></span>
        <span className='dot dot2 absolute w-2 h-2 bg-white rounded-full -top-2 -left-2 opacity-70'></span>
        <span className='dot dot3 absolute w-1 h-1 bg-white rounded-full -top-2 left-6/11 opacity-90'></span>
        <span className='dot dot4 absolute w-2 h-2 bg-white rounded-full -bottom-1 left-5/11 opacity-70'></span>
        <span className='dot dot5 absolute w-3 h-3 bg-white rounded-full -top-2 left-2/11 opacity-50'></span>
        <span className='dot dot6 absolute w-4 h-4 bg-white rounded-full -bottom-1 left-0 opacity-50'></span>

        {/* <button class="relative px-6 py-3 text-white font-semibold text-lg bg-red-600 overflow-hidden rounded-lg shadow-lg">
                            Click Me 
                                <span class="absolute inset-0 flex items-center justify-center">
                                    <span class="relative w-full h-full">
                                    <span class="dot absolute w-1 h-1 bg-white rounded-full opacity-70"></span>
                                    <span class="dot absolute w-1 h-1 bg-white rounded-full opacity-70"></span>
                                    <span class="dot absolute w-1 h-1 bg-white rounded-full opacity-70"></span>
                                </span>
                                </span>
                            </button> */}

    </div>
  )
}
