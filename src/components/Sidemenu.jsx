import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import ShinyButton from './ShinyButton.jsx'

export default function Sidemenu({handleClick}) {
  return (
    <div className='absolute left-0 top-0 bg-[#242220] w-[80%] min-h-[100vh] p-10 z-1'>

        <button 
        onClick={handleClick}
        className='font-bold text-3xl float-right text-[#cd9d4b]'>
            <FontAwesomeIcon icon={faXmark}/>
        </button>

        <div className='flex flex-col gap-6'>

            <div className='logo text-4xl mb-4'>
                <Link to={"/"} className=''>Celeste</Link>
            </div>

            <div className='nav-menu-links items-center'>
                <div className='flex flex-col items-start justify-between gap-6 h-full'>

                    <div className='h-full flex items-center justify-center cursor-pointer nav-link'>
                        <Link to={"/"}>HOME</Link>
                    </div>

                    <div className='h-full flex items-center justify-center cursor-pointer nav-link'>
                        <Link to={"/about"}>ABOUT</Link>
                    </div>

                    <div className='h-full flex items-center justify-center cursor-pointer nav-link'>
                        <Link to={"/menu"}>MENU</Link>
                    </div>

                    <div className='h-full flex items-center justify-center cursor-pointer nav-link'>
                        <Link to={"/gallery"}>GALLERY</Link>
                    </div>

                    <div className='h-full flex items-center justify-center cursor-pointer nav-link'>
                        <Link to={"/CONTACT"}>CONTACT</Link>
                    </div>
                </div>
            </div>
            
            <ShinyButton destination={"/reservation"}>
                BOOK A TABLE
            </ShinyButton>


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
