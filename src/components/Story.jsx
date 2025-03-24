import React from 'react'
import bgBlack from "../assets/bgBlack.jpg"

export default function Story() {
  return (
          <section>
    
            <div className='bg-cover bg-center flex flex-col-reverse md:flex-row justify-between' style={{backgroundImage: `url(${bgBlack})`}}>

              <div className='bg-cover bg-center md:flex-1 h-[50vh] md:h-[90vh] z-1 relative' style={{backgroundImage: `url(${"/story.jpeg"})`}}>
                <div className='absolute left-0 top-0 w-full h-full bg-black opacity-30'>
                
                </div>  
            
              </div>
    
              <div className='md:flex-1 relative z-1'>
    
                <div className='block md:absolute md:-left-30 md:right-0 md:shadow md:shadow-[#000] md:w-[90%] md:top-1/2 md:-translate-y-1/2'>
    
                    <div className='h-full p-8 flex flex-col justify-between gap-8'>
    
                      <div className='none md:absolute inset-0 bg-black opacity-80 h-full'></div>
    
                      <div className=''>
                        <h2 className="relative text-2xl text-[#cd9d4b] italic">Discover</h2>
                        <h3 className="relative text-3xl md:text-4xl -mt-3">OUR STORY</h3>
                      </div>
    
    
                      <h4 className='relative text-[1rem] text-[#ffffffb7]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A repellendus nisi eaque neque veritatis autem repellat officia molestiae fugit natus eos, ullam cupiditate vel earum officiis tempore ratione rem alias perferendis! Qui laboriosam, aliquam dolore, harum modi recusandae unde officia inventore magni officiis, veritatis quae esse ea eaque quisquam maxime. Mollitia a dolor vel voluptas earum accusantium assumenda fuga dolorem dolores. Nam minima, debitis fuga quis asperiores cupiditate eius itaque!
                      </h4>
    
                    </div>
    
                </div>
    
              </div>
              
            </div>
    
          </section>
  )
}
