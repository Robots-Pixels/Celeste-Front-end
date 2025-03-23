import React, { useState } from 'react'
import ShinyButton from './ShinyButton'

export default function HomeHero() {

  const [sliderContent, setSliderContent] = useState([
    {
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
      headtitle: "Welcome to the Celeste Luxury Restaurant",
      title: ["Savor the Extraordinary,", "Embrace the Celestial"],
      subtitle: "Experience world-class fine dining at Celeste, where gourmet flavors meet celestial elegance in Benin.",
      button: "BOOK A TABLE",
      destination: "/reservation"
    },
    {
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      headtitle: "Welcome to the Celeste Luxury Restaurant",
      title: ["A Symphony of Flavors", "in Timeless Luxury"],
      subtitle: "Experience world-class fine dining at Celeste, where gourmet flavors meet celestial elegance in Benin.",
      button: "DISCOVER MENU",
      destination: "/menu"
    },
    {
      image: "https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg",
      headtitle: "Welcome to the Celeste Luxury Restaurant",
      title: ["Dine Beneath the Stars,", "Indulge in Perfection"],
      subtitle: "Experience world-class fine dining at Celeste, where gourmet flavors meet celestial elegance in Benin.",
      button: "SEE GALLERY",
      destination: "/gallery"
    }
  ])
  const [sliderTransform, setSliderTransform] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleSlide = (sliderIndex) => {
    if (sliderIndex === 1){
      setSliderTransform(`translateX(0%)`);
      setCurrentIndex(1);
    }
    else if (sliderIndex === 2){
      setSliderTransform(`translateX(-100%)`);
      setCurrentIndex(2);
    }
    else if (sliderIndex === 3){
      setSliderTransform(`translateX(-200%)`);
      setCurrentIndex(3);
    }
      
  }

  return (
    <div className='flex w-full h-[35rem] md:h-[41rem] overflow-x-hidden relative'>
      {
        sliderContent.map((content, index) => (

          <div className='min-w-full relative' key={index} style={{transform: `${sliderTransform}`, transition: "all 0.8s ease"}}>

          <div className='absolute bg-[#161616] opacity-60 w-full h-full left-0 top-0'></div>
  
          <div className='flex overflow-x-hidden h-full'>
  
            <div className='bg-cover bg-center h-full w-full flex flex-col justify-center' style={{backgroundImage: `url(${content.image})`}}>
  
              <div className='relative max-w-3xl md:max-w-6xl mx-auto px-4 md:px-8 text-white z-2'>
  
                <div className='flex flex-col gap-3 md:gap-5 mb-10'>
  
                  <h2 className='text-xl md:text-2xl tracking-wider italic text-[#cd9d4b]'>{content.headtitle}</h2>
                  <h1 className='uppercase tracking-wide text-3xl md:text-6xl oswald'>{content.title[0]} <br /> {content.title[1]}</h1>
                  <h3 className='text-sm md:text-xl tracking-wider'>{content.subtitle}</h3>
  
                </div>
  
                <div className='inline-block mb-15'>
                  <ShinyButton destination={content.destination}>
                    {content.button}
                  </ShinyButton>
                </div>
  
                <div className='flex w-42 justify-between border-b-white border-b-1'>
  

                  <div className= {`flex w-full py-1 justify-start relative after:absolute after:bg-[#cd9d4b] after:h-[2px] after:bottom-[-1px] ${currentIndex === 1 ? "after:w-full" : "after:w-0"}`}>
                    <button onClick={() => {handleSlide(1)}} className='w-full flex justify-center'>1</button>
                  </div>
  
                  <div className={`flex w-full py-1 justify-start relative after:absolute after:bg-[#cd9d4b] after:h-[2px] after:bottom-[-1px] ${currentIndex === 2 ? "after:w-full" : "after:w-0"}`}>
                    <button onClick={() => {handleSlide(2)}} className='w-full flex justify-center'>2</button>
                  </div>
  
                  <div className={`flex w-full py-1 justify-start relative after:absolute after:bg-[#cd9d4b] after:h-[2px] after:bottom-[-1px] ${currentIndex === 3 ? "after:w-full" : "after:w-0"}`}>
                    <button onClick={() => {handleSlide(3)}} className='w-full flex justify-center'>3</button>
                  </div>
  
                </div>
  
              </div>
            
            </div>
            
          </div>
          </div>
        ))
      }
    </div>
  )
}
