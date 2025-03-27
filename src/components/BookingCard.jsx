import React, { useState } from 'react'
import ShinyButton from '../components/ShinyButton'
import { useNavigate } from 'react-router-dom'
import bgBlack from "../assets/bgBlack.jpg"

export default function BookingCard() {

    const [formData, setFormData] = useState({
        bigFirstName: "",
        bigLastName: "",
        bigTime: "12:00am",
        bigDay: "",
        bigEmail: "",
        bigMessage: ""
    });

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/api/reservation/newReservation`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            }
        )

        const data = await res.json();
        if (data.success === false){
            setError(data.message);
            setLoading(false);

            setTimeout(() => {
              setError("");
          }, 2000);

            return;
        }

        if (data.success === true){
            setSuccessful(data.message);
            setLoading(false);

            setTimeout(() => {
              setSuccessful("");
          }, 2000);
        }

        setTimeout(() => {
            navigate("/");
        }, 2000);
    }

  return (
    <div className='flex flex-col'>
      <div className='z-1 bg-center bg-cover bg-fixed' style={{backgroundImage: `url(${bgBlack})`}}>

        <div className='flex flex-col-reverse md:flex-row items-stretch'>

          <div className='relative bg-cover bg-center flex-1 min-h-100' style={{backgroundImage: `url(${"/reservation.jpeg"})`}}>
            <div className='absolute bg-black/30 w-full h-full'/>
          </div>
          
          <div className='min-h-100 flex-1 flex flex-col gap-6 md:right-0 md:bottom-0 bg-black/50 w-full px-8 py-6'>
            <h3 className='text-xl font-bold'>BOOK A TABLE</h3>

            <form onSubmit={handleSubmit}>

              <div className='flex flex-col h-full gap-6 md:gap-8 text-sm'>

                <div className='flex gap-4 justify-between reservation-form-div'>

                  <div className='border-[1px] border-b-white p-3 w-full'> <input required type="text" id='firstName' onChange={handleChange} value={formData.firstName} placeholder='First Name' className='outline-none w-full'/> </div>
                  <div className='border-[1px] border-b-white p-3 w-full'> <input required type="text" id='lastName' onChange={handleChange} value={formData.lastName} placeholder='Last Name' className='outline-none w-full'/> </div>
                  
                </div>

                <div className='flex gap-4 justify-between reservation-form-div'>

                  <div className='border-[1px] border-b-white p-3 w-full'> 
                    <input required type="date" placeholder='Date' id='day' onChange={handleChange} value={formData.day} className='outline-none w-full'/>  
                  </div>

                  <div className='border-[1px] border-b-white p-3 w-full'> 
                    <select required className='w-full outline-none' id='time' onChange={handleChange} value={formData.time}>
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

                  <div className='border-[1px] border-b-white p-3 w-full'> 
                    <input type="email" placeholder='Email' id='email' onChange={handleChange} value={formData.email} className='outline-none w-full'/>  
                  </div>

                </div>

                <div className='flex gap-4 justify-between z-3 items-center reservation-form-div'>

                  <div className='border-1 border-b-white w-full h-30 p-3'>
                    <textarea className='h-full w-full outline-none' id='message' onChange={handleChange} value={formData.message} placeholder='Message'></textarea>
                  </div>

                </div>

                {
                  error 
                      &&
                  <h4 className='text-sm text-red-400'> {error} </h4>
                }

                {
                  successful 
                      &&
                  <h4 className='text-sm text-green-400'> {successful} </h4>
                }

                <button className={`text-xl ${loading ? "opacity-40" : ""}`} style={{transition: "opacity 0.1s"}}>
                  <ShinyButton>
                    CONFIRM
                  </ShinyButton>
                </button>
                    
              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}
