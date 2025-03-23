import React, { useState } from 'react'
import Hero from '../components/Hero'
import bgBlack from "../assets/bgBlack.jpg"
import MenuItem from '../components/MenuItem'

export default function SmallMenu() {

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
            image: "https://images.unsplash.com/photo-1608757726983-08be57d75f79",
            name: "Dark Chocolate Fondant",
            price: "14",
            description: "Rich molten chocolate cake with vanilla ice cream.",
            category: "Desserts",
          }
      ])

  return (
    <div className="flex flex-col">

        <Hero image={"https://images.pexels.com/photos/31125216/pexels-photo-31125216.jpeg"} title={"MENU"} subtitle={"Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully."}/>
        
        <section className='z-1 bg-center bg-cover py-30' style={{backgroundImage: `url(${bgBlack})`}}>

            <div className='max-w-3xl md:max-w-6xl mx-auto px-4 md:px-8'>

                <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 px-4">

                {
                    menu.map((dish) => (
                        <MenuItem image={dish.image} name={dish.name} price={dish.price} description={dish.description}/>
                    ))
                }
                </div>

            </div>

        </section>

    </div>
  )
}
