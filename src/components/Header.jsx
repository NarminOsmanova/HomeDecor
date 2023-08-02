import search from '../assets/img/search.svg'
import cart from '../assets/img/cart.svg'
import user from '../assets/img/user.svg'
import bar from '../assets/img/bar.svg'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate()
    const handleProceed = () => {
      const isLoggedIn = localStorage.getItem('email');
      window.scrollTo(0, 0)
      if (isLoggedIn) {
        navigate('/account');
      } else {
        navigate('/auth/login');
      }
    };
  return (
    <header className="contain header">
       <div className="nav-top d-flex justify-content-between">
       <div className="d-flex mobile-none">
            <div className="nav-lang align-items-center">
                Az
            </div>
            <div className="nav-search">
                <img src={search} alt="" />
            </div>
        </div>
        <div className="nav-logo">
        HomeDecor
        </div>
        <div className="d-flex mobile-none">
            <div className="nav-cart" onClick={()=>{navigate("/cart")}}>
                <img src={cart} alt="" />
            </div>
            <div className="nav-user" onClick={handleProceed}>
                <img src={user} alt="" />
            </div>
        </div>
        <div className='d-flex d-none'>
            <div className="nav-search">
                <img src={search} alt="" />
            </div>
            <div className="nav-bar">
                <img src={bar} alt="" />
            </div>
        </div>
       </div>
       <div className="nav-bottom d-flex justify-content-center">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/collections"}>Collections</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
       </div>
    </header>
  )
}

export default Header