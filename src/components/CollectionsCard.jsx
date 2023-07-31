import { useContext } from "react";
import SingleCard from "./SingleCard";
import { CollectionContext } from "../context/CollectionContext";
import { Link, useParams } from "react-router-dom";
import slugify from "slugify";
// import ProductContent from "./ProductContent";
import ProductFilter from "./ProductFilter";
import { Row } from "react-bootstrap";

const CollectionsCard = () => {
  const { filteredProducts, collection } = useContext(CollectionContext);
  const { slug } = useParams();
  const collectionsdetails = collection.find((p) => slugify(p.title) === slug);

  return (
    <section className="products collectiondetails contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <Link to={"/collections "}>Collections</Link>
        <Link>{collectionsdetails.title}</Link>
      </div>
      <div className="container-fluid">
        <div className="shop-context d-block d-md-flex">
          <div>
            <h3>{collectionsdetails.title}</h3>
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
                  SORT BY
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
          <ProductFilter />
          <div className="col-12 col-lg-9">
            <Row>
              {filteredProducts.map((item) => (
                <div
                  className="col-12 col-md-6 col-lg-4 position-relative"
                  key={item.id}
                >
                  <SingleCard
                    img={item.img}
                    title={item.title}
                    price={item.price}
                  />
                </div>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsCard;
