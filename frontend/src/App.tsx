import React from "react"
import { useEffect} from "react"
import './App.css'
import Loader from "./components/ui/Loader"
import AppRouter from "./config/AppRouter"
import { BrowserRouter } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,       // Animation duration (ms)
      once: false,   
      // mirror:false,       // Only animate once
      easing: 'ease-in-out' // Animation curve
    });

    return () => {
      AOS.refresh(); // Refresh AOS on unmount
    }
  }, []);
  const [isLoading, setIsLoading] = React.useState(true)

  useEffect(() =>{
    const timer = setTimeout(()=>{
      setIsLoading(false)
    },3000);
    return () => clearTimeout(timer)
  },[])

  if (isLoading){
    return <Loader/>
  }



  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}