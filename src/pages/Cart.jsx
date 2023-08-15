import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, removeFromCart, updateQuantity } from "../features/cartSlice";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2';

const Cart = () => {
  const navigate =useNavigate();

  const handleProceed = () => {
    const isLoggedIn = localStorage.getItem('email');
    window.scrollTo(0, 0)
    if (isLoggedIn) {
      navigate('/cart/checkout');
      window.scrollTo(0,0)
    } else {
      navigate('/auth/login');
      window.scrollTo(0,0)
    }
  };
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(productId));
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
      }
    })
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity <= 0) {
      // eger quantity 0 ve daha asagidirsa ,cartdan product-u sil
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateQuantity({ id: productId, quantity }));
    }
  };
  const totalItems = cartProducts.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = cartProducts.reduce((total, product) => total + product.quantity * product.price, 0);

  const { language } = useContext(LanguageContext);
  const t = translations[language];
  
  return (
    <section className="cart contain">
       <div className="section-fluid d-flex">
        <Link to={"/"}>{t.home}</Link>
        <span>|</span>
        <Link to={"/cart "}>{t.cart} </Link>
      </div>
      <div className="container-fluid">
        <h2 className="animate__animated animate__fadeInDown">{t.shopping}</h2>
        {totalItems ? <div className="row">
          <div className="col-12 col-lg-9">
           {cartProducts.map((product)=>(
            (product.quantity>0) ? 
           
            <div className="cart-item d-flex align-items-center" key={product.id}>
              <span className="cart-item_icon" onClick={() => handleRemoveFromCart(product.id)}>
              <i className="fa-solid fa-xmark"></i>
              </span>
              <div className="cart-item_img">
                {product.img && product.img.length > 0 ? ( 
                      <img src={product.img[0]} className="img-fluid" alt="" />
                    ) : (
                      <img src="default-placeholder-image.png" className="img-fluid" alt="" /> 
                    )}
              </div>
              <span>{product.title}</span>
              <div className="d-flex align-items-center">
              <div className="product-color"></div>
              <div className="product-quantity d-flex">
                <input
                  type="button"
                  defaultValue="-"
                  className="minus"
                  onClick={() =>{handleQuantityChange(product.id, product.quantity - 1)}}/>
                <input type="text" value={product.quantity} readOnly />
                <input
                type="button"
                defaultValue="+"
                className="plus"
                onClick={() =>{handleQuantityChange(product.id, product.quantity + 1)}} />
              </div>
              </div>
              <p className="product-price">{product.price}$</p>
            </div>   
             : null
           ))}
           <button onClick={handleDeleteAll} className="primary-button">{t.delete}</button>
          </div>
          <div className="col-12 col-lg-3">
            <div className="cart-box">
              <p className="cart-box_title">{t.summary}</p>
              <div className="d-flex justify-content-between">
                <span>{t.count}</span>
                <span>{totalItems}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>{t.price}</span>
                <span>{totalPrice}$</span>
              </div>
              <button className="primary-button form-control" onClick={handleProceed}>CHECKOUT</button>
            </div>
          </div>
        </div> : ((<div className="cart-container">
        <div className="container">
          <div className="d-flex noproduct flex-column justify-content-center align-items-center text-center">
            <div className="cart-img">
              <img
                src="https://cdn-icons-png.flaticon.com/512/372/372705.png"
                alt=""
              />
            </div>
            <p className="fw-semibold mt-4" style={{ fontSize: "14px" }}>
            YOUR CART IS CURRENTLY EMPTY.
            </p>
            <LinkContainer to="/products" onClick={() => { window.scrollTo(0, 0) }}>
              <button
                className="fw-semibold outline-button"
                size="sm"
              >
                RETURN TO SHOP
              </button>
            </LinkContainer>
          </div>
        </div></div>))}
      </div>
    </section>
  )
}

export default Cart