import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import products from "../data/products";
import SingleCard from "../components/SingleCard";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const Products = () => {
  const [product,setProduct] = useContext(ProductContext);

  const filterData = (comingItem) => {
    const result = products.filter((item) => {
      return item.category === comingItem;
    });
    setProduct(result);
    console.log(result);
  };

  const [categories, setCategories] = useState(true);

  const showCategories = () => {
    setCategories(!categories);
  };
  const [collections, setCollections] = useState(true);

  const showCollections = () => {
    setCollections(!collections);
  };

  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <section className="products contain">
      <div className="section-fluid">
        <Link to={"/"}>{t.home}</Link>
        <Link to={"/product"}>{t.products}</Link>
      </div>
      <div className="container-fluid">
        <div className="shop-context d-block d-md-flex">
          <div>
            <h2>{t.products}</h2>
            <span>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime.
            </span>
          </div>
          <div className="shop-filter d-flex align-items-center justify-content-end w-100">
            <div className="shop-filter__select">
              <div className="dropdown">
                <button
                  className="dropdown-toggle d-flex"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="d-none d-md-block">
                    <i className="fa-solid fa-arrow-down-wide-short"></i>
                  </span>
                  {t.sort}
                  <span className="d-block d-md-none">
                    <i className="fa-solid fa-arrow-down-wide-short"></i>
                  </span>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                     {t.popularf}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                     {t.cheap}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {t.expensive}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="shop-aside__item mt-5 mt-md-0">
              <p
                onClick={showCategories}
                className="select d-flex justify-content-between"
              >
                {t.categories}
                <span className="d-block d-md-none">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </p>
              {categories ? (
                <ul>
                  <li>
                    <label htmlFor="ALL">
                      <input type="checkbox" name="" id="ALL" /> {t.all}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="SOFAS"
                      onClick={() => {
                        filterData("sofa");
                      }}
                    >
                      <input type="checkbox" name="" id="SOFAS" />
                      {t.sofas}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="BEDS"
                      onClick={() => {
                        filterData("bed");
                      }}
                    >
                      <input type="checkbox" name="" id="BEDS" />
                      {t.beds}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="RUGS"
                      onClick={() => {
                        filterData("rug");
                      }}
                    >
                      <input type="checkbox" name="" id="RUGS" />
                      {t.rugs}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="CUSHIONS"
                      onClick={() => {
                        filterData("cushion");
                      }}
                    >
                      <input type="checkbox" name="" id="CUSHIONS" />
                      {t.cushions}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="SHELF"
                      onClick={() => {
                        filterData("shelf");
                      }}
                    >
                      <input type="checkbox" name="" id="SHELF" />
                      {t.shelves}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="CHAIRS"
                      onClick={() => {
                        filterData("chair");
                      }}
                    >
                      <input type="checkbox" name="" id="CHAIRS" />
                      {t.chairs}
                    </label>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="shop-aside__item">
              <p
                onClick={showCollections}
                className="select d-flex justify-content-between"
              >
                {t.collections}
                <span className="d-block d-md-none">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </p>
              {collections ? (
                <ul>
                  <li>
                    <label htmlFor="all">
                      <input type="checkbox" name="" id="all" /> {t.all}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="BEDROOM">
                      <input type="checkbox" name="" id="BEDROOM" /> {t.bedroom}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="LIVING">
                      <input type="checkbox" name="" id="LIVING" /> {t.living}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="KITCHEN">
                      <input type="checkbox" name="" id="KITCHEN" /> {t.kitchen}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="LIBRARY">
                      <input type="checkbox" name="" id="LIBRARY" /> {t.library}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="OFFICE">
                      <input type="checkbox" name="" id="OFFICE" /> {t.office}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="LAUNDRY">
                      <input type="checkbox" name="" id="LAUNDRY" /> {t.laundry}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="GUEST">
                      <input type="checkbox" name="" id="GUEST" /> {t.guest}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FAMILY">
                      <input type="checkbox" name="" id="FAMILY" /> {t.family}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="BATHROOM">
                      <input type="checkbox" name="" id="BATHROOM" /> {t.bath}
                    </label>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <Row>
              {product.map((item) => (
                <Col md={6} lg={4} sm={6} key={item.id}>
                  <SingleCard
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
