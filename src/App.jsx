import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Reservation from './pages/Reservation.jsx';
import Header from './components/Header.jsx';
import Menu from './pages/Menu.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function App() {
      
    const [transformMini, setTransformMini] = useState("500px");
    const [isSmall, setIsSmall] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [rotate, setRotate] = useState("0deg");
    const [hideArrow, sethideArrow] = useState(false);

    const toggleMiniAbout = () => {
      if (!isSmall) {
          setClicked((prev) => !prev);
          setRotate((prev) => (prev === "0deg" ? "180deg" : "0deg"));
          setTransformMini((prev) => (prev === "0px" ? "500px" : "0px"));
      }
  };

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 770);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // useEffect(() => {
    //     const handleClickOutside = () => {
    //         if (!clicked){
    //           setTransformMini("500px");
    //           setRotate("0deg");
    //         }
    //         setClicked(false);
    //     }
    //     window.addEventListener("click", handleClickOutside);
    //     return () => {
    //         window.removeEventListener("click", handleClickOutside);
    //     }

    // }, [clicked]);

    useEffect(() => {
      const hide = () => {
        if (window.scrollY > 600) {
          sethideArrow(true); // Cache l'élément si scroll > 500px
        } else {
          sethideArrow(false); // Ré-affiche l'élément si on remonte
        }
      };
    
      window.addEventListener("scroll", hide);
    
      return () => {
        window.removeEventListener("scroll", hide);
      };
    }, []);
    

    // useEffect(() => {



    //   if(window.scrollY > 500){
    //     sethideArrow(true);
    //   }      
    //   else{
    //     sethideArrow(false);
    //   }

    // },[])

  return (
    <BrowserRouter>

      {!isSmall && !hideArrow &&

      <button
      onClick={toggleMiniAbout}
       className='text-5xl fixed z-10 -right-4 top-1/2'>
        <div className='transition-transform'
        style={{transform: `rotate(${rotate})`}}>
          <FaChevronLeft/>
        </div>
      </button>
      }
    
      <Header isSmall={isSmall} setIsSmall={setIsSmall} transformMini={transformMini} />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='/reservation' element={<Reservation/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App
