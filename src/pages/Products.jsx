// import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
// import { ProductContext } from "../context/ProductContext";
// import img from "../assets/img/sort.svg";
// import img from "../assets/img/select.svg";
// import products from "../data/products";
// import SingleCard from "../components/SingleCard";

const Products = () => {
  // const [product, setProduct] = useContext(ProductContext);
  // const filterData = (comingItem) => {
  //   const result = products.filter((item) => {
  //     return item.category === comingItem;
  //   });
  //   setProduct(result);
  //   console.log(result);
  // };

  const [categories, setCategories] = useState(true);

  const showCategories = () => {
    setCategories(!categories);
  };
  const [collections, setCollections] = useState(true);

  const showCollections = () => {
    setCollections(!collections);
  };
  return (
    <section className="products contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <Link to={"/product"}>Products</Link>
      </div>
      <div className="container-fluid">
        <div className="d-block d-md-flex">
          <div>
            <h2>Products</h2>
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
                  className="select dropdown-toggle d-flex"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="select-img">
                    {/* <img src={img} alt="" /> */}
                  </div>
                  SORT BY
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      POPULAR FIRST
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CHEAPEST FIRST
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      EXPENSIVE FIRST
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="shop-aside__item mt-5 mt-md-0">
              <p onClick={showCategories} className="select">
                CATEGORIES
                <span className="d-block d-md-none">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </p>
              {categories ? (
                <ul>
                  <li>
                    <label htmlFor="ALL">
                      <input type="checkbox" name="" id="ALL" /> ALL
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="SOFAS"
                      onClick={() => {
                        // filterData("sofa");
                      }}
                    >
                      <input type="checkbox" name="" id="SOFAS" />
                      SOFAS
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="BEDS"
                      onClick={() => {
                        // filterData("bed");
                      }}
                    >
                      <input type="checkbox" name="" id="BEDS" />
                      BEDS
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="RUGS"
                      onClick={() => {
                        // filterData("rug");
                      }}
                    >
                      <input type="checkbox" name="" id="RUGS" />
                      RUGS
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="CUSHIONS"
                      onClick={() => {
                        // filterData("cushion");
                      }}
                    >
                      <input type="checkbox" name="" id="CUSHIONS" />
                      CUSHIONS
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="SHELF"
                      onClick={() => {
                        // filterData("shelf");
                      }}
                    >
                      <input type="checkbox" name="" id="SHELF" />
                      SHELF
                    </label>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="shop-aside__item">
              <p onClick={showCollections} className="select">
                COLLECTIONS
                <span className="d-block d-md-none">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </p>
              {collections ? (
                <ul>
                  <li>
                    <label htmlFor="all">
                      <input type="checkbox" name="" id="all" /> ALL
                    </label>
                  </li>
                  <li>
                    <label htmlFor="BEDROOM">
                      <input type="checkbox" name="" id="BEDROOM" /> BEDROOM
                    </label>
                  </li>
                  <li>
                    <label htmlFor="LIVING">
                      <input type="checkbox" name="" id="LIVING" /> LIVING ROOM
                    </label>
                  </li>
                  <li>
                    <label htmlFor="KITCHEN">
                      <input type="checkbox" name="" id="KITCHEN" /> KITCHEN
                    </label>
                  </li>
                  <li>
                    <label htmlFor="LIBRARY">
                      <input type="checkbox" name="" id="LIBRARY" /> LIBRARY
                    </label>
                  </li>
                  <li>
                    <label htmlFor="OFFICE">
                      <input type="checkbox" name="" id="OFFICE" /> OFFICE
                    </label>
                  </li>
                  <li>
                    <label htmlFor="LAUNDRY">
                      <input type="checkbox" name="" id="LAUNDRY" /> LAUNDRY
                      ROOM
                    </label>
                  </li>
                  <li>
                    <label htmlFor="GUEST">
                      <input type="checkbox" name="" id="GUEST" /> GUEST ROOM
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FAMILY">
                      <input type="checkbox" name="" id="FAMILY" /> FAMILY ROOM
                    </label>
                  </li>
                  <li>
                    <label htmlFor="BATHROOM">
                      <input type="checkbox" name="" id="BATHROOM" /> BATHROOM
                    </label>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-12 col-md-9">
            {/* <Row>
              {product.map((item) => (
                <SingleCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </Row> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;