import React from 'react'
import bgBlack from "../assets/bgBlack.jpg"
import { FaStar } from 'react-icons/fa'
import ShinyButton from './ShinyButton'

export default function Signature() {
  return (
          <section>
    
            <div className='bg-cover bg-center flex flex-col md:flex-row-reverse justify-between' style={{backgroundImage: `url(${bgBlack})`}}>

              <div className='bg-cover bg-center md:flex-1 h-[50vh] md:h-[90vh] z-1 relative' style={{backgroundImage: `url(${"/signature.jpeg"})`}}>
                <div className='absolute left-0 top-0 w-full h-full bg-black opacity-30'>
                
                </div>  
            
              </div>
    
              <div className='md:flex-1 relative z-1'>
    
                <div className='block md:absolute md:left-50 md:right-0 md:shadow md:shadow-[#000] md:w-[90%] md:top-1/2 md:-translate-y-1/2'>
    
                    <div className='h-full p-8 flex flex-col justify-between gap-8'>
    
                      <div className='none md:absolute inset-0 bg-black opacity-80 h-full'></div>
    
                      <div className=''>
                        <h2 className="relative text-2xl text-[#cd9d4b] italic">Discover</h2>
                        <h3 className="relative text-3xl md:text-4xl -mt-3">OUR SIGNATURE CREATION</h3>
                      </div>

                      <div className='flex flex-col gap-3'>
                        
                        <div className='relative text-xs flex gap-1 text-[#cd9d4b]'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                            
                        <h4 className='relative text-[1rem] text-[#ffffffb7]'>
                          Lobster Médallion with Saffron-Infused Champagne Foam
                        </h4>

                        <h4 className='relative text-[0.7rem] text-[#ffffffb7]'>
                          Delicate medallions of freshly poached lobster, glazed with a beurre blanc reduction, crowned with a light saffron-champagne foam and finished with 24-karat edible gold leaf — served alongside a micro-herb garden and pearl caviar.
                        </h4>

                        <div className='w-[50%] md:w-[30%]'>
                          <ShinyButton destination={"/reservation"}>
                            ORDER NOW
                          </ShinyButton>
                        </div>
 

                      </div>

    
                    </div>
    
                </div>
    
              </div>
              
            </div>
    
          </section>
  )
}
