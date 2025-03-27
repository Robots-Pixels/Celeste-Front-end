import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import bgBlack from "../assets/bgBlack.jpg"
import MenuItem from '../components/MenuItem'
import { Link } from 'react-scroll'

export default function Menu() {

  useEffect(() => {
    window.scrollTo(0, 0); // Remonte tout en haut
  }, []);


    const [menu, setMenu] = useState([
        {
          image: "/menu1.jpg",
          name: "Lobster Tartare",
          price: "22",
          description: "Fresh lobster with citrus zest, avocado cream, and delicate herbs.",
          category: "Starters",
        },
        {
          image: "/menu2.jpg",
          name: "Truffle Mushroom Velouté",
          price: "16",
          description: "Smooth wild mushroom soup drizzled with white truffle oil.",
          category: "Starters",
        },
        {
          image: "/menu3.jpg",
          name: "Caramelized Onion & Goat Cheese Tart",
          price: "14",
          description: "Flaky tart with sweet onions, goat cheese, and balsamic glaze.",
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
            image: "/menu7.jpeg",
            name: "Grilled Sea Bass",
            price: "30",
            description: "Fresh sea bass with lemon butter sauce and sautéed vegetables.",
            category: "Mains",
          },
          {
            image: "/menu8.jpeg",
            name: "Filet Mignon",
            price: "42",
            description: "Tender filet mignon with red wine reduction and creamy mash.",
            category: "Mains",
          },
          {
            image: "/menu9.jpeg",
            name: "Vanilla Crème Brûlée",
            price: "12",
            description: "Classic vanilla custard with a caramelized sugar crust.",
            category: "Desserts",
          },
          {
            image: "/menu10.jpeg",
            name: "Dark Chocolate Fondant",
            price: "14",
            description: "Rich molten chocolate cake with vanilla ice cream.",
            category: "Desserts",
          },
          {
            image: "/menu11.jpeg",
            name: "Lemon & Basil Sorbet",
            price: "10",
            description: "Refreshing sorbet with bright lemon and fresh basil.",
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

        <Hero image={"/menu.jpeg"} title={"MENU"} subtitle={"Explore our menu and experience gourmet cuisine — carefully prepared dishes that delight every palate."}/>
        
        <section className='z-1 bg-center bg-cover py-30' style={{backgroundImage: `url(${bgBlack})`}}>

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


                    <div className='fixed bottom-0 left-0 flex flex-col gap-4 bg-black/50 p-3'>

                        <h4>Navigate Menu to:</h4>

                        <div className='flex gap-2'>
                            <Link  
                            to="starters" 
                            smooth={true} 
                            duration={800} 
                            offset={-110}
                            className='bg-[#cd9d4b] p-1 text-sm cursor-pointer'>Starters
                            </Link>


                            <Link
                            to="mains" 
                            smooth={true} 
                            duration={800} 
                            offset={-110}
                            className='bg-[#cd9d4b] p-1 text-sm cursor-pointer'>Mains</Link>


                            <Link 
                            to="desserts" 
                            smooth={true} 
                            duration={800} 
                            offset={-110}
                            className='bg-[#cd9d4b] p-1 text-sm cursor-pointer'>Desserts</Link>
                        </div>

                    </div>
                </div>


            </div>

        </section>

    </div>
  )
}
