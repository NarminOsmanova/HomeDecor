import { Link, useNavigate } from "react-router-dom"
// import img from '../assets/img/bedroom.png'
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, removeFromCart, updateQuantity } from "../features/cartSlice";
import { useEffect } from "react";
const Cart = () => {
  const navigate =useNavigate();

  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity <= 0) {
      // If the quantity becomes zero or less, remove the product from the cart
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateQuantity({ id: productId, quantity }));
    }
  };
  const totalItems = cartProducts.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = cartProducts.reduce((total, product) => total + product.quantity * product.price, 0);

  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cartProducts");
    if (storedCartProducts) {
      dispatch({ type: "cart/loadCartProducts", payload: JSON.parse(storedCartProducts) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);
  
    
  
  return (
    <section className="cart contain">
       <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart "}>Cart </Link>
      </div>
      <div className="container-fluid">
        <h2>SHOPPING CART</h2>
        <div className="row">
          <div className="col-12 col-lg-9">
           {cartProducts.map((product)=>(
            (product.quantity>0) ? 
           
            <div className="cart-item d-flex align-items-center" key={product.id}>
              <span className="cart-item_icon" onClick={() => handleRemoveFromCart(product.id)}>
              <i className="fa-solid fa-xmark"></i>
              </span>
              <div className="cart-item_img">
                <img src={product.img[0]} className="img-fluid" alt="" />
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
           <button onClick={handleDeleteAll}>Delete All</button>
          </div>
          <div className="col-12 col-lg-3">
            <div className="cart-box">
              <p className="cart-box_title">SUMMARY</p>
              <div className="d-flex justify-content-between">
                <span>ITEM COUNT</span>
                <span>{totalItems}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>TOTAL PRICE</span>
                <span>{totalPrice}$</span>
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