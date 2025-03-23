import React, { useState } from 'react'
import bgBlack from "../assets/bgBlack.jpg"
import MenuItem from '../components/MenuItem'
import { Link } from 'react-scroll'
import ShinyButton from './ShinyButton'
export default function MiniMenu() {

    const [menu, setMenu] = useState([
        {
          image: "https://olivesetgourmandises.com/cdn/shop/articles/tartare-homard.jpg",
          name: "Lobster Tartare",
          price: "22",
          description: "Fresh lobster with citrus zest, avocado cream, and delicate herbs.",
          category: "Starters",
        },
        {
          image: "https://img.delicious.com.au/fyQQIMGY/del/2019/07/mushroom-and-truffle-soup-110674-2.jpg",
          name: "Truffle Mushroom Velouté",
          price: "16",
          description: "Smooth wild mushroom soup drizzled with white truffle oil.",
          category: "Starters",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWZGfZ3DTPMjMo4wyOac-vVDgEqX0Cybg0Q&s",
            name: "Herb-Crusted Lamb Chops",
            price: "38",
            description: "Juicy lamb chops with herb crust and rosemary potatoes.",
            category: "Mains",
          },
          {
            image: "https://omnivorescookbook.com/wp-content/uploads/2015/12/1512_Pan-Seared-Duck-Breast-with-Persimmon-Grapefruit-Sauce_005.jpg",
            name: "Seared Duck Breast",
            price: "34",
            description: "Perfectly seared duck breast with orange glaze and seasonal greens.",
            category: "Mains",
          },
          {
            image: "https://images.unsplash.com/photo-1601979031925-9d7f84f6e1e3",
            name: "Vanilla Crème Brûlée",
            price: "12",
            description: "Classic vanilla custard with a caramelized sugar crust.",
            category: "Desserts",
          },
          {
            image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
            name: "Lemon & Basil Sorbet",
            price: "10",
            description: "Refreshing sorbet with bright lemon and fresh basil.",
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
                                    <MenuItem image={dish.image} name={dish.name} price={dish.price} description={dish.description}/>
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
                                    <MenuItem image={dish.image} name={dish.name} price={dish.price} description={dish.description}/>
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
                                    <MenuItem image={dish.image} name={dish.name} price={dish.price} description={dish.description}/>
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
