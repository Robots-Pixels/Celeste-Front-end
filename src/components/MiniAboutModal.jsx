import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function MiniAboutModal({handleClick}) {
  return (
    <div className='absolute right-0 top-[100%] bg-[#242220] w-110 h-[80vh] p-10'>

        <button 
        onClick={handleClick}
        className='font-bold text-3xl float-right text-[#cd9d4b]'>
            <FontAwesomeIcon icon={faXmark}/>
        </button>

        <div className='flex flex-col gap-6 text-center'>

            <div className='logo text-5xl'>
                <Link to={"/"} className=''>Celeste</Link>
            </div>

            <p>
                A sanctuary of culinary artistry, where exquisite flavors meet celestial elegance in timeless luxury.
            </p>

            <i className='italic text-2xl text-[#cd9d4b]'>+229 40 82 04 93</i>

            <p>
                Celeste Restaurant 5th Avenue, 8CX8+X7, Cotonou
                <br />
                celesteRestaurant@gmail.com
            </p>

            <p>
                Opening Hour:
                <br />
                Mon - Fri : 9:00 AM - 10:00 PM, 
                Holidays : 10:00 AM - 8:00 PM
            </p>

            <div className='flex gap-3 justify-center'>

                <Link to={"https://github.com/Robots-Pixels"} className='p-3 border-1 border-[#cd9d4b] rounded-full hover:bg-[#cd9d4b] transition-colors'>
                    <FaFacebookF/>
                </Link>

                <Link to={"https://github.com/Robots-Pixels"} className='p-3 border-1 border-[#cd9d4b] rounded-full hover:bg-[#cd9d4b] transition-colors'>
                    <FaInstagram/>
                </Link>

                <Link to={"https://github.com/Robots-Pixels"} className='p-3 border-1 border-[#cd9d4b] rounded-full hover:bg-[#cd9d4b] transition-colors'>
                    <FaWhatsapp/>
                </Link>

            </div>

        </div>

    </div>
  )
}
