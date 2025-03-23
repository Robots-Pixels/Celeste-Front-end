import React from 'react'
import { FaFacebookF, FaHeart, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='relative z-1 py-12 mb-0'>

        <div className='max-w-3xl md:max-w-6xl mx-auto px-4 md:px-8'>

            <div className='h-full md:h-[60vh] flex flex-col justify-center'>
            
                <div className='flex flex-col gap-10 md:gap-20 items-center text-center md:items-start md:text-start md:flex-row border-b-1 border-b-[#cd9d4b] pb-5'>

                    <div className='logo text-4xl sm:text-5xl z-3'>
                        <Link to={"/"} className=''>Celeste</Link>
                    </div>

                    <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-10 md:gap-20 text-center md:items-start md:text-start md:flex-row justify-between'>

                        <div className='flex flex-col items-center md:items-start'>
                            <h3 className='text-[1.4rem] font-bold mb-5 underline text-[#cd9d4b]'>QUICK LINKS</h3>
                            <ul className='flex flex-col gap-3 text-sm mb-2'>
                                <Link className='nav-link' to={"/"}>Home</Link>
                                <Link className='nav-link' to={"/about"}>About</Link>
                                <Link className='nav-link' to={"/menu"}>Menu</Link>
                                <Link className='nav-link' to={"/gallery"}>Gallery</Link>
                                <Link className='nav-link' to={"/contact"}>Contact</Link>
                                <Link className='nav-link' to={"/reservation"}>Reservation</Link>
                            </ul>

                            <div className='flex gap-2 text-2xl'>

                                <Link className='border-[#cd9d4b] rounded-full cta-link' to={"https://facebook.com"}>
                                    <FaFacebookF/>
                                </Link>
                                
                                <Link className='border-[#cd9d4b] rounded-full cta-link' to={"https://facebook.com"}>
                                    <FaInstagram/>
                                </Link>
                                
                                <Link className='border-[#cd9d4b] rounded-full cta-link' to={"https://facebook.com"}>
                                    <FaWhatsapp/>
                                </Link>
                                
                            </div>
                        </div>

                        <div className='flex font-bold flex-col'>
                            <h3 className='text-[1.4rem] font-bold mb-5 underline text-[#cd9d4b]'>OPEN HOURS</h3>

                            <h2 className='text-[#cd9d4b] text-sm'>Monday-Friday:</h2>
                            <h2 className='text-sm mb-5'>08:00 am - 09:00pm</h2>

                            <h2 className='text-[#cd9d4b] text-sm'>Saturday-Sunday:</h2>
                            <h2 className='text-sm mb-5'>11:00 am - 11:00pm</h2>
                        
                            <h2 className='text-[#cd9d4b] text-sm'>Holidays:</h2>
                            <h2 className='text-sm mb-5'>Close</h2>
                        
                        </div>

                        <div className='flex font-bold flex-col'>
                            <h3 className='text-[1.4rem] font-bold mb-5 underline text-[#cd9d4b]'>OUR ADDRESS</h3>

                            <h2 className='text-[#cd9d4b] text-sm'>Location:</h2>
                            <h2 className='text-sm mb-5'>Celeste Restaurant 5th Avenue, 8CX8+X7, Cotonou</h2>

                            <h2 className='text-[#cd9d4b] text-sm'>Email Adress:</h2>
                            <h2 className='text-sm mb-5'>celesteRestaurant@gmail.com</h2>
                        
                            <h2 className='text-[#cd9d4b] text-sm'>Phone & Book table:</h2>
                            <h2 className='text-sm mb-5'>+229 4082-0493</h2>
                        </div>

                    </div>
                </div>

                <div className='flex text-sm md:text-[1rem] items-center justify-center mt-5 gap-2'>
                    Copyright ©2025 All rights reserved | Made with <span className='text-[#cd9d4b]'><FaHeart/></span> by <Link to={"/"}>Otmar</Link>
                </div>

            </div>

        </div>

    </footer>
  )
}
