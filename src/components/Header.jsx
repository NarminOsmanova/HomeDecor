import search from "../assets/img/search.svg";
import cart from "../assets/img/cart.svg";
import user from "../assets/img/user.svg";
import bar from "../assets/img/bar.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const handleProceed = () => {
    const isLoggedIn = localStorage.getItem("email");
    window.scrollTo(0, 0);
    if (isLoggedIn) {
      navigate("/account");
    } else {
      navigate("/auth/login");
    }
  };

  // Dil deyisdirme
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = translations[language];

  const handleLanguageChange = () => {
    const newLanguage = language === "EN" ? "AZ" : "EN";
    localStorage.setItem("language", newLanguage);
    changeLanguage(newLanguage);
  };

  const cartProducts = useSelector((state) => state.cart.products);
  const totalItems = cartProducts.reduce((total, product) => total + product.quantity, 0);

  return (
    <header className="contain header">
      <div className="nav-top d-flex justify-content-between">
        <div className="d-flex mobile-none">
          <div
            className="nav-lang align-items-center"
            onClick={handleLanguageChange}
          >
            {language === "EN" ? "AZ" : "EN"}
          </div>
          <div className="nav-search">
            <img src={search} alt="" />
          </div>
        </div>
        <div className="nav-logo">HomeDecor</div>
        <div className="d-flex mobile-none">
          <div
            className="nav-cart position-relative"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <img src={cart} alt="" />
           <Badge className="position-absolute start-100 translate-middle bg-black rounded-circle">
            {totalItems}
          </Badge>
          </div>
         
          <div className="nav-user" onClick={handleProceed}>
            <img src={user} alt="" />
          </div>
        </div>
        <div className="d-flex d-none">
          <div className="nav-search">
            <img src={search} alt="" />
          </div>
          <div className="nav-bar">
            <img src={bar} alt="" />
          </div>
        </div>
      </div>
      <div className="nav-bottom d-flex justify-content-center">
        <NavLink to={"/"}>{t.home}</NavLink>
        <NavLink to={"/about"}>{t.about}</NavLink>
        <NavLink to={"/products"}>{t.products}</NavLink>
        <NavLink to={"/collections"}>{t.collections}</NavLink>
        <NavLink to={"/contact"}>{t.contact}</NavLink>
      </div>
    </header>
  );
};

export default Header;
