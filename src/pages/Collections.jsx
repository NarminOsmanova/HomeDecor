import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CollectionContext } from "../context/CollectionContext";

const Collections = () => {
  const {collection, handleItemClick, setSelectedTitle} = useContext(CollectionContext)
  const navigate=useNavigate()
  return (
    <section className="collections contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <Link to={"/collections"}>Collections</Link>
      </div>
      <div className="container-fluid">
        <h2>COLLECTIONS</h2>
        <span>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime.
        </span>
        <div className="row">
          {collection.map((item) => (
            <div className="col-12 col-md-6 col-lg-4 position-relative" key={item.id}>
              <div className="collections-img">
                <img src={item.img} alt="" />
                <div className="overlay"></div>
              </div>
                <div    onClick={() => {
                  navigate("/products")
                  setSelectedTitle(item.title);
                  handleItemClick(item.title); // If you need to use the handleItemClick from the context
                }} className="collections-title position-absolute">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;