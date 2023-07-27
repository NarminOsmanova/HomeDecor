import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Master = () => {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Master