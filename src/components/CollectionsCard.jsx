import { useContext, useState } from "react";
import SingleCard from "./SingleCard";
import { CollectionContext } from "../context/CollectionContext";
import { Link, useParams } from "react-router-dom";
import slugify from "slugify";
// import ProductContent from "./ProductContent";
import ProductFilter from "./ProductFilter";
import { Col, Row } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";

const CollectionsCard = () => {
  const { getFilteredProducts, collection } = useContext(CollectionContext);
  const { slug } = useParams();
  const collectionsdetails = collection.find((p) => slugify(p.title) === slug);

  const [product] = useContext(ProductContext);
  
  const [sortBy, setSortBy] = useState('');
  const Products = [...product]; //productun kopyasini goturmek ucun
  const sortProducts = (product) => {
    switch (sortBy) {
      case 'priceAsc':
        return product.sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return product.sort((a, b) => b.price - a.price);
      case 'nameAsc':
        return product.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
      default:
        return Products;
    }
  };
  // SortProduct funksiyasini cagiraraq siralanmis mehsullari sortedProducts-a menimsedir
  const sortedProducts = sortProducts(getFilteredProducts);
  const handleSortChange = (sortOption) => {
   setSortBy(sortOption);
 };
  return (
    <section className="products collectiondetails contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <span>|</span>
        <Link to={"/collections"} className="mx-4">Collections</Link>
        <span>|</span>
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
                  <li onClick={() => handleSortChange('nameAsc')}>
                    <a className="dropdown-item" href="#">
                      FIRST A TO Z
                    </a>
                  </li>
                  <li onClick={() => handleSortChange('priceAsc')}>
                    <a className="dropdown-item" href="#">
                      CHEAPEST FIRST
                    </a>
                  </li>
                  <li onClick={() => handleSortChange('priceDesc')}>
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
              {sortBy ? (
                sortedProducts.map((item) => (
                  <Col md={6} lg={4} sm={6} key={item.id}>
                    <SingleCard id={item.id} img={item.img} title={item.title} price={item.price} />
                  </Col>
                ))
              ) : getFilteredProducts.map((item) => (
                <div
                  className="col-12 col-md-6 col-lg-4 position-relative"
                  key={item.id}
                >
                  <SingleCard
                    id={item.id}
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
