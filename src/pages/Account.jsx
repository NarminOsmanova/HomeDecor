import { Link} from "react-router-dom";
import user1 from "../assets/img/user.svg";
import user2 from "../assets/img/user2.svg";
import wish from "../assets/img/heart.svg";
import wish2 from "../assets/img/heart2.svg";
import out from "../assets/img/logout.svg";
import eye1 from "../assets/img/eye.svg";
import eye2 from "../assets/img/eye2.svg";
// import img from '../assets/img/bedroom.png'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWish } from "../features/wishSlice";

const Account = () => {
  const [icon, setIcon] = useState(eye1);
  const [type, setType] = useState("password");
  const [showAccount, setShowAccount] = useState(true);

  const handleShowAccount = () => {
    setShowAccount(true);
  };
  const handleShowWishlist = () => {
    setShowAccount(false);
  };
  const accountClassName = showAccount ? "active" : "";
  const wishlistClassName = showAccount ? "" : "active";
  const eye = () => {
    console.log("jk");
    if (icon === eye1) {
      setIcon(eye2);
      setType("text");
    } else {
      setIcon(eye1);
      setType("password");
    }
  };
  {console.log(JSON.parse(localStorage.getItem("user")))}

  const user = JSON.parse(localStorage.getItem("user")) || [];
  const [firstName, lastName] = user.length > 0 ? user[0].split(" ") : ["", ""];

  const { wishlistsItems } = useSelector((state) => state?.wish);
  const dispatch = useDispatch();
  const handleRemoveFromWish = (productId) => {
    dispatch(removeFromWish(productId));
  };
  return (
    <section className="account contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <Link to={"/account "}>My account</Link>
      </div>
      {showAccount ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="account-box">
                <p>MY ACCOUNT</p>
                <div
                  onClick={handleShowAccount}
                  className={`d-flex ${accountClassName}`}
                >
                  <div className="account-box_image">
                    {accountClassName === "active" ? (
                      <img src={user2} alt="" />
                    ) : (
                      <img src={user1} alt="" />
                    )}
                  </div>
                  <span> PERSONAL INFORMATION</span>
                </div>
                <div
                  className={`d-flex border-bottom ${wishlistClassName}`}
                  onClick={handleShowWishlist}
                >
                  <div className="account-box_image">
                    <img src={wish} alt="" />
                  </div>
                  <span>WISHLIST</span>
                </div>
                <div
                  className="d-flex"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload()
                  }}
                >
                  <div className="account-box_image">
                    <img src={out} alt="" />
                  </div>
                  <span> LOG OUT</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <form>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control input"
                  placeholder="Name"
                  defaultValue={firstName}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control input"
                  placeholder="Surname"
                  defaultValue={lastName}
                />
                <input
                  type="email"
                  name=""
                  id=""
                  className="form-control input"
                  placeholder="Email"
                  defaultValue={localStorage.getItem("email")}
                />
                <div className="position-relative">
                  <input
                    type={type}
                    placeholder="PASSWORD"
                    className="form-control input"
                    defaultValue={localStorage.getItem("password")}
                  />
                  <span className="position-absolute" onClick={eye}>
                    <img src={icon} alt="" />
                  </span>
                </div>
                <button type="button" className="primary-button form-control">
                  SAVE CHANGES
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="account-box">
                <p>MY ACCOUNT</p>
                <div
                  onClick={handleShowAccount}
                  className={`d-flex ${accountClassName}`}
                >
                  <div className="account-box_image">
                    {accountClassName === "active" ? (
                      <img src={user2} alt="" />
                    ) : (
                      <img src={user1} alt="" />
                    )}
                  </div>
                  <span> PERSONAL INFORMATION</span>
                </div>
                <div
                  onClick={handleShowWishlist}
                  className={`d-flex ${wishlistClassName}`}
                >
                  <div className="account-box_image">
                    {wishlistClassName === "active" ? (
                      <img src={wish2} alt="" />
                    ) : (
                      <img src={wish} alt="" />
                    )}
                  </div>
                  <span>WISHLIST</span>
                </div>
                <div className="d-flex" onClick={() => {
                    localStorage.clear();
                    window.location.reload()
                  }}>
                  <div className="account-box_image">
                    <img src={out} alt="" />
                  </div>
                  <span> LOG OUT</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 wishlist">
           { wishlistsItems?.map((wishitem)=>(
             <div className="wishlist-item d-flex align-items-start justify-content-between" key={wishitem.id}>
              <div className="d-flex">
              <div className="wishlist-item_img">
               <img src={wishitem.img[0]} className="img-fluid" />
             </div>
             <div className="d-flex flex-column justify-content-start">
             <span>{wishitem.title}</span>
             <p className="product-price">{wishitem.price}$</p>
             </div>
              </div>
             <span className="wishlist-heart" onClick={()=>{handleRemoveFromWish(wishitem.id)}}>
             <i className="fa-solid fa-heart"></i>
             </span>
           </div>
           ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Account;
