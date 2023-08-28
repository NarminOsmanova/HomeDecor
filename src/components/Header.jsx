/* eslint-disable react/prop-types */
import search from "../assets/img/search.svg";
import cart from "../assets/img/cart.svg";
import user from "../assets/img/user.svg";
import bar from "../assets/img/bar.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductContext } from "../context/ProductContext";


const Header = () => {

  // account ve ya logine yonlendirme
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
  const [languageButtonClicked, setLanguageButtonClicked] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = translations[language];

  const handleLanguageChange = () => {
    const newLanguage = language === "EN" ? "AZ" : "EN";
    localStorage.setItem("language", newLanguage);
    changeLanguage(newLanguage);
    setLanguageButtonClicked(false);
  };

  // cartdaki mehsullarin sayi ucun
  const cartProducts = useSelector((state) => state.cart.products);
  const totalItems = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  // mobile gorunus ucun
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // search inputu ucun
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearchBox = () => {
    setSearchOpen(!searchOpen);
  };

  const [searchResults, setSearchResults] = useState([]);
  const [product] = useContext(ProductContext);

const handleSearch = (searchValue) => {
  console.log("Axtarış dəyəri:", searchValue); // Axtarış dəyərini görüntülə
  const filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log("Axtarış nəticələri:", filteredProducts); // Axtarış nəticələrini görüntülə
  setSearchResults(filteredProducts);
  navigate("/searchresults", { state: { products: filteredProducts, searchValue:searchValue } });
};


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
            <img src={search} alt=""  onClick={()=>{toggleSearchBox(); console.log("1");}} />
          </div>
          {searchOpen && (
            <div className="search-box">
              <input type="text" placeholder="SEARCH OUR STORE" onChange={(e)=>handleSearch(e.target.value)} />
              <div className="search-close-icon" onClick={toggleSearchBox}>
              <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          )}
        </div>
        <div
          className={`nav-logo  ${
            mobileMenuOpen ? "mobile-menu-closed" : "mobile-menu-open"
          } `}
        >
          HomeDecor
        </div>
        <div className="d-flex">
          <div
            className={`nav-cart position-relative ${
              mobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
            }`}
            onClick={() => {
              navigate("/cart");
            }}
          >
            <img src={cart} alt="" />
            <Badge className="position-absolute start-100 translate-middle bg-black rounded-circle">
              {totalItems}
            </Badge>
          </div>

          <div
            className={`nav-user ${
              mobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
            }`}
            onClick={handleProceed}
          >
            <img src={user} alt="" />
          </div>
        </div>
        <div className="d-flex d-none">
          <div
            className={`nav-search ${
              mobileMenuOpen ? "mobile-menu-closed" : "menu-menu-open"
            }`}
          >
            <img src={search} alt="" onClick={()=>{toggleSearchBox()}} />
          </div>
          {searchOpen && (
            <div className="search-box">
              <input type="text" placeholder="SEARCH OUR STORE" onChange={(e)=>{handleSearch(e.target.value)}}/>
              <div className="search-close-icon" onClick={toggleSearchBox}>
              <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          )}
          <div
            className={`nav-bar ${
              mobileMenuOpen ? "mobile-menu-closed" : "mobile-menu-open"
            }`}
            onClick={toggleMobileMenu}
          >
            <img src={bar} alt="" />
          </div>
          <div
            className={`nav-delete ${
              mobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
            }`}
            onClick={toggleMobileMenu}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
      <div
        className={`nav-bottom d-flex justify-content-center ${
          mobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
      >
        <NavLink className="nav-link" to={"/"}>{t.home}</NavLink>
        <NavLink className="nav-link" to={"/about"}>{t.about}</NavLink>
        <NavLink className="nav-link" to={"/products"}>{t.products}</NavLink>
        <NavLink className="nav-link" to={"/collections"}>{t.collections}</NavLink>
        <NavLink className="nav-link" to={"/contact"}>{t.contact}</NavLink>
      </div>
      <div
        className={`d-block d-sm-none nav-language d-flex ${
          mobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
        onClick={() => setLanguageButtonClicked(true)}
      >
        <p
          className={`${
            mobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
          } lang ${language === "AZ" ? "active" : ""}`}
          onClick={() => {
            handleLanguageChange("AZ");
          }}
        >
          Az
        </p>
        <p
          className={`${
            mobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
          } lang ${language === "EN" ? "active" : ""}`}
          onClick={() => {
            handleLanguageChange("EN");
          }}
        >
          En
        </p>
      </div>
    </header>
  );
};

export default Header;
