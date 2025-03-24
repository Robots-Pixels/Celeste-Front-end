import React, { useState } from 'react'
import bgBlack from "../assets/bgBlack.jpg"
import MenuItem from '../components/MenuItem'
import ShinyButton from './ShinyButton'
export default function MiniMenu() {

    const [menu, setMenu] = useState([
        {
          image: "/menu1.jpg",
          name: "Lobster Tartare",
          price: "22",
          description: "Fresh lobster with citrus zest, avocado cream, and delicate herbs.",
          category: "Starters",
        },
        {
          image: "/menu4.jpg",
          name: "Smoked Salmon Blinis",
          price: "18",
          description: "Mini pancakes topped with smoked salmon and lemon crème fraîche.",
          category: "Starters",
        },
        {
            image: "/menu5.jpeg",
            name: "Herb-Crusted Lamb Chops",
            price: "38",
            description: "Juicy lamb chops with herb crust and rosemary potatoes.",
            category: "Mains",
          },
          {
            image: "/menu6.jpg",
            name: "Seared Duck Breast",
            price: "34",
            description: "Perfectly seared duck breast with orange glaze and seasonal greens.",
            category: "Mains",
          },

          {
            image: "/menu10.jpeg",
            name: "Dark Chocolate Fondant",
            price: "14",
            description: "Rich molten chocolate cake with vanilla ice cream.",
            category: "Desserts",
          },

          {
            image: "/menu12.jpeg",
            name: "Pistachio Panna Cotta",
            price: "13",
            description: "Silky panna cotta with roasted pistachios and berry coulis.",
            category: "Desserts",
          }

      ])

  return (

    <div className="flex flex-col">

        <div className='z-1 bg-center bg-cover py-20' style={{backgroundImage: `url(${bgBlack})`}}>

            <div className='max-w-3xl md:max-w-6xl mx-auto px-4 md:px-8'>

                <div>

                    {
                        <div className='mb-6' id='starters'>

                            <h3 className='text-2xl italic text-[#cd9d4b] mb-1'>Starters</h3>

                            <div className='grid relative w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 px-4'>
                                
                            {
                                menu.filter((dish) => dish.category === "Starters").map((dish) => (
                                    <MenuItem key={dish.name} image={dish.image} name={dish.name} price={dish.price} description={dish.description}/>
                                ))
                            }
                            </div>

                        </div>
                    }

                    {
                        <div className='mb-6' id='mains'>

                            <h3 className='text-2xl italic text-[#cd9d4b] mb-1'>Mains</h3>

                            <div className='grid relative w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 px-4'>
                                
                            {
                                menu.filter((dish) => dish.category === "Mains").map((dish) => (
                                    <MenuItem key={dish.name} image={dish.image} name={dish.name} price={dish.price} description={dish.description}/>
                                ))
                            }
                            </div>

                        </div>
                    }

                    {
                        <div className='mb-4' id='desserts'>

                            <h3 className='text-2xl italic text-[#cd9d4b] mb-1'>Desserts</h3>

                            <div className='grid relative w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 px-4'>
                                
                            {
                                menu.filter((dish) => dish.category === "Desserts").map((dish) => (
                                    <MenuItem key={dish.name} image={dish.image} name={dish.name} price={dish.price} description={dish.description}/>
                                ))
                            }
                            </div>

                        </div>
                    }

                    <div className='w-[200px]'>
                        <ShinyButton destination={"/menu"}>
                            See Complete Menu
                        </ShinyButton>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}
