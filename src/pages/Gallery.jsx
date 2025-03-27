import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import bgBlack from "../assets/bgBlack.jpg"
import Testimonials from '../components/Testimonials'

export default function Gallery() {

    useEffect(() => {
        window.scrollTo(0, 0); // Remonte tout en haut
      }, []);
    

    const [gallery, setGallery] = useState([
        "/gallery1.jpeg",
        "/gallery6.jpeg",
        "/gallery2.jpeg",
        "/gallery3.jpeg",
        "/gallery4.jpeg",
        "/gallery5.jpeg",
    ])

  return (
    <div className='flex flex-col'>
        <Hero image={"/gallery.webp"} title={"GALLERY"} subtitle={"Browse our gallery and discover the art of fine dining at Celeste — exquisite dishes and serene ambiance."}/>

        <section className='z-1 bg-center bg-cover py-30' style={{backgroundImage: `url(${bgBlack})`}}>

            <div className='max-w-3xl md:max-w-6xl mx-auto px-4 md:px-8 mb-30'>

                <div className='grid relative w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 px-4'>

                    {
                        gallery.map((image) => (
                            <div className='bg-cover bg-center h-120 hover:scale-110' style={{backgroundImage: `url(${image})`, transition: "all 0.5s" }}/>
                        ))
                    }

                </div>


            </div>

            <Testimonials/>


        </section>
        

    </div>
  )
}
