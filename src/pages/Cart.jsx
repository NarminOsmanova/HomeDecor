import { Link, useNavigate } from "react-router-dom"
import img from '../assets/img/bedroom.png'
const Cart = () => {
  const navigate =useNavigate();
  return (
    <section className="cart contain">
       <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart "}>Contact </Link>
      </div>
      <div className="container-fluid">
        <h2>SHOPPING CART</h2>
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className="cart-item d-flex align-items-center">
              <span className="cart-item_icon">
              <i className="fa-solid fa-xmark"></i>
              </span>
              <div className="cart-item_img">
                <img src={img} className="img-fluid" alt="" />
              </div>
              <span>Grayson Premium Grey Wash Nest of Tables</span>
              <div className="d-flex align-items-center">
              <div className="product-color"></div>
              <div className="product-quantity d-flex">
                <input
                  type="button"
                  defaultValue="-"
                  className="minus"
                  onClick={() =>{}}/>
                <input type="text" value={1} />
                <input
                type="button"
                defaultValue="+"
                className="plus"
                onClick={() =>{}} />
              </div>
              </div>
              <p className="product-price">140$</p>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="cart-box">
              <p className="cart-box_title">SUMMARY</p>
              <div className="d-flex justify-content-between">
                <span>ITEM COUNT</span>
                <span>4</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>TOTAL PRICE</span>
                <span>460$</span>
              </div>
              <button className="primary-button form-control" onClick={()=>{navigate("/cart/checkout")}}>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart