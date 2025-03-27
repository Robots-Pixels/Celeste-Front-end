import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero'
import { FaPhone, FaMapPin, FaClock } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'
import CoreFeatures from '../components/CoreFeatures'
import Story from '../components/Story'
import Signature from '../components/Signature'
import MiniMenu from '../components/MiniMenu'
import Testimonials from '../components/Testimonials'
import Numbers from '../components/Numbers'
import BookingCard from '../components/BookingCard'
import { useNavigate } from 'react-router-dom'


export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); // Remonte tout en haut
  }, []);


  const [bigFormData, setBigFormData] = useState({
    bigFirstName: "",
    bigLastName: "",
    bigTime: "12:00am",
    bigDay: "",
    bigEmail: "",
    bigMessage: ""
  });

      const navigate = useNavigate();

      const [bigError, setBigError] = useState(null);
      const [bigLoading, setBigLoading] = useState(false);
      const [bidSuccessful, setBigSuccessful] = useState(false);

    const handleBigChange = (e) => {
        setBigFormData({
            ...bigFormData,
            [e.target.id]: e.target.value
        });
    }

    const handleBigSubmit = async(e) => {
        e.preventDefault();
        setBigLoading(true);

        const res = await fetch(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/api/reservation/newReservation`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bigFormData)
            }
        )

        console.log(2);

        const data = await res.json();
        if (data.success === false){
            setBigError(data.message);
            setBigLoading(false);

            setTimeout(() => {
              setBigError("");
            }, 2000);
            
            return;
        }

        if (data.success === true){
            setBigSuccessful(data.message);
            setBigLoading(false);

            setTimeout(() => {
              setBigSuccessful("");
            }, 2000);
        }

        setTimeout(() => {
            navigate("/");
        }, 2000);
    }

  return (
    
    <div className=''>
      <HomeHero/>

      <section className='flex flex-col bg-[#161616] relative py-12 z-3'>

        <div>

          <div className='max-w-3xl md:max-w-6xl mx-auto px-4 md:px-8 text-white z-4 restaurant-info'>

            <div className='flex justify-between'>

              <div className='w-full md:w-[65%] restaurant-info-div'>
                
                <div className='flex flex-col md:items-center md:flex-row justify-between gap-4 w-full'>

                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'> <span className='text-[#cd9d4b]'><FaMapPin/></span> <b className='text-sm'>5th Avenue, 8CX8+X7, Cotonou</b> </div>
                    <div>
                      <p className='text-sm opacity-70'>5th Avenue, 8CX8+X7, Cotonou</p>
                    </div>
                  </div>

                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'> <span className='rotate-90 text-[#cd9d4b]'><FaPhone/></span> <b className='text-sm'>+229 40 82 04 93</b> </div>
                    <div>
                      <p className='text-sm opacity-70'>A sanctuary of culinary artistry</p>
                    </div>
                  </div>

                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'> <span className='text-[#cd9d4b]'><FaClock/></span> <b className='text-sm'>Open Monday - Friday</b> </div>
                    <div>
                      <p className='text-sm opacity-70'>9:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
          
        <div className='reservation-mini md:absolute flex flex-col justify-center gap-2 md:right-0 md:bottom-0 bg-[#cd9d4b] w-full md:w-[35%] h-[300px] p-6'>
          <h3>BOOK A TABLE</h3>

          <form onSubmit={handleBigSubmit}>

            <div className='flex flex-col gap-8 text-sm'>

              <div className='flex gap-4 justify-between reservation-form-div'>

                <div className='border-b-1 border-b-white py-3 w-full'> <input required id='bigFirstName' onChange={handleBigChange} value={bigFormData.bigFirstNamefirstName} type="text" placeholder='First Name' className='outline-none w-full'/> </div>
                <div className='border-b-1 border-b-white py-3 w-full'> <input required id='bigLastName' onChange={handleBigChange} value={bigFormData.bigLastName} type="text" placeholder='Last Name' className='outline-none w-full'/> </div>
                
              </div>

              <div className='flex gap-4 justify-between reservation-form-div'>

                <div className='border-b-1 border-b-white py-3 w-full'> 
                  <input required type="date" id='bigDay' onChange={handleBigChange} value={bigFormData.bigDay} placeholder='Date' className='outline-none w-full'/>  
                </div>

                <div className='border-b-1 border-b-white py-3 w-full'> 
                  <select required className='w-full outline-none' id='bigTime' onChange={handleBigChange} value={bigFormData.bigTime}>
                    <option value="12:00am">12:00am</option>
                    <option value="12:30pm">12:30pm</option>
                    <option value="1:00pm">1:00pm</option>
                    <option value="1:30am">1:30pm</option>
                    <option value="2:00pm">2:00pm</option>
                    <option value="2:30pm">2:30pm</option>
                    <option value="3:00pm">3:00pm</option>
                    <option value="3:30pm">3:30pm</option>
                    <option value="4:00pm">4:00pm</option>
                    <option value="4:30pm">4:30pm</option>
                    <option value="5:00pm">5:00pm</option>
                    <option value="5:30pm">5:30pm</option>
                    <option value="6:00pm">6:00pm</option>
                    <option value="6:30pm">6:30pm</option>
                    <option value="7:00pm">7:00pm</option>
                    <option value="7:30pm">7:30pm</option>
                    <option value="8:00pm">8:00pm</option>
                    <option value="8:30pm">8:30pm</option>
                    <option value="9:00pm">9:00pm</option>
                    <option value="10:00pm">10:00pm</option>
                    <option value="10:30pm">10:30pm</option>
                    <option value="11:00pm">11:00pm</option>
                    <option value="11:30pm">11:30pm</option>
                  </select>
                </div>

                <div className='border-b-1 border-b-white py-3 w-full'> 
                  <input required id='bigEmail' onChange={handleBigChange} value={bigFormData.bigEmail} type="text" placeholder='Email' className='outline-none w-full'/>  
                </div>

              </div>

              <div className='relative flex gap-4 justify-between z-3 items-center reservation-form-div'>

                <div className='border-b-1 border-b-white w-full h-[50px]'>
                  <textarea id='bigMessage' onChange={handleBigChange} value={bigFormData.bigMessage} className='h-full w-full outline-none' placeholder='Message'></textarea>
                </div>

                  {
                    bigError 
                        &&
                    <h4 className='absolute right-0 -bottom-6 text-xs text-[#000]'> {bigError} </h4>
                  }

                  {
                    bidSuccessful 
                        &&
                    <h4 className='absolute right-0 -bottom-6 text-xs text-blue-900'> {bidSuccessful} </h4>
                  }

                <div className='flex items-center justify-center w-full h-[50px] cursor-pointer'>
                  <div className='flex justify-center items-center bg-white text-black w-full h-full'>
                    <button className={`${bigLoading ? "opacity-90" : ""}`}>
                      CONFIRM
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </form>

        </div>

      </section>

      <SectionTitle bg={"/back1.jpeg"} title={"WHO ARE WE ?"}/>

      <Story/>

      <CoreFeatures/>

      <SectionTitle bg={"/back2.jpeg"} />

      <Signature/>

      <SectionTitle bg={"/back2.jpeg"} />

      <MiniMenu/>

      <SectionTitle bg={"/back3.jpeg"} title={"TESTIMONIALS"}/>

      <div className='flex flex-col relative'>

          <Testimonials/>
            
          <Numbers/>

      </div>

      <SectionTitle bg={"/back4.jpeg"} title={"RESERVATION"}/>

      <BookingCard/>

      <div className='mb-20'/>

    </div>
  )
}
