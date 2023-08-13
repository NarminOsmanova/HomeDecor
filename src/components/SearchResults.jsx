/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { Link, useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { products, searchValue } = location.state || {}; // Use empty object as default

  if (!products || products.length === 0) {
    return (
     <div className="search-results">
         <div className="d-flex flex-column justify-content-center align-items-center">
        <i className="fa-solid fa-circle-exclamation"></i>
        <p className="mt-5 fs-1">No results found `{searchValue}`</p>
      </div>
     </div>
    );
  }

  return (
    <div className="search-results contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <span>|</span>
        <Link to={"/searchresult "}>Search results</Link>
      </div>
      <div className="container-fluid">
        <h2>SEARCH RESULTS</h2>
        <p className="results">Your search results for `{searchValue}`.</p>
        <Row>
          {products.map((product) => (
            <Col sm={6} md={4} lg={3} key={product.id}>
              <SingleCard
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SearchResults;
