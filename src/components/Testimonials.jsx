import React from 'react'

export default function Testimonials() {
  return (

      <div className='relative z-2'>

      <section className="w-full bg-[#2b2b2b] z-1">
          
          <div 
            className={`h-160 md:h-100 bg-cover bg-no-repeat flex items-center`}
            style={{backgroundImage: "url('/waves.svg')", backgroundAttachment: "fixed"}}
          >

            <div className="max-w-3xl md:max-w-6xl w-full mx-auto px-4 md:px-8">

            <div className="flex flex-col gap-12">

      <div>
        <h2 className="relative text-2xl text-[#cd9d4b] italic">Let's Check</h2>
        <h3 className="relative text-3xl md:text-4xl -mt-3">OUR CUSTOMERS REVIEW</h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-6">

        <div className="bg-red-100 w-30 bg-center bg-cover md:w-48 aspect-square border-1 border-[#cd9d4b]" style={{backgroundImage:`url("/profile.jpg")`}}/>

        <div className="bg-[#ffffffb7] w-[0.1rem]"/>

        <div className="w-full flex flex-col gap-4 justify-between">
            
          <h3 className="text-[1rem] md:text-xl italic text-[#ffffffb7]">An unforgettable experience. From the moment we entered Celeste, we were immersed in refinement and warmth. Every dish was a discovery, beautifully presented and perfectly balanced in flavor. Service was attentive without being intrusive. Truly the finest dining experience we've had in Benin.</h3>
          <h4 className="text-xl font-bold">Jake L. Michel,  <span className="text-sm font-thin">Food Critic & Culinary Author</span></h4>

        </div>

      </div>
      </div>

            </div>

          </div>

        </section>

      </div>

  )
}
