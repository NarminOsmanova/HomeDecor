import { useContext, useState } from "react";
import products from "../data/products";
import { ProductContext } from "../context/ProductContext";

const ProductFilter = () => {
  const [setProduct] = useContext(ProductContext);

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
  return (
    <div className="col-12 col-lg-3">
      <div className="shop-aside__item mt-5 mt-md-0">
        <p
          onClick={showCategories}
          className="select d-flex justify-content-between"
        >
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
                  filterData("sofa");
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
                  filterData("bed");
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
                  filterData("rug");
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
                  filterData("cushion");
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
                  filterData("shelf");
                }}
              >
                <input type="checkbox" name="" id="SHELF" />
                SHELF
              </label>
            </li>
            <li>
              <label
                htmlFor="TABLE"
                onClick={() => {
                  filterData("table");
                }}
              >
                <input type="checkbox" name="" id="SHELF" />
                TABLE
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
                <input type="checkbox" name="" id="LAUNDRY" /> LAUNDRY ROOM
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
  );
};

export default ProductFilter;
