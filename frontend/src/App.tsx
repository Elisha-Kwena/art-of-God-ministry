import React from "react"
import { useEffect} from "react"

import './App.css'
import Loader from "./components/ui/Loader"
import AppRouter from "./config/AppRouter"
import { BrowserRouter } from "react-router-dom";
export default function App() {
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