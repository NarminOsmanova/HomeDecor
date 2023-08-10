import { useState } from "react";
import products from "../data/products";

const ProductFilter = () => {
 
  const [categories, setCategories] = useState(true);

  const showCategories = () => {
    setCategories(!categories);
  };
  const [collections, setCollections] = useState(true);

  const showCollections = () => {
    setCollections(!collections);
  };

  const [checkedCategories, setCheckedCategories] = useState([]);
const [checkedCollections, setCheckedCollections] = useState([]);

function handleCategoryChange (event){
  const {value,checked}=event.target;
  if(checked){
    setCheckedCategories(prev=>[...prev,value])
  }else{
    setCheckedCategories((prev) => prev.filter((category) => category !== value))
  }
}
const handleCollectionChange = (event) => {
  const { value, checked } = event.target;
  if (checked) {
    setCheckedCollections((prev) => [...prev, value]);
  } else {
    setCheckedCollections((prev) => prev.filter((collection) => collection !== value));
  }
};

const getfilteredProducts = products.filter((item) => {
  const categoryFilter =
  checkedCategories.length === 0 || checkedCategories.includes(item.category);

const collectionFilter =
  checkedCollections.length === 0 ||item.collection.some((coll) => checkedCollections.includes(coll));

return categoryFilter && collectionFilter;
});



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
                <input type="checkbox" name="" id="ALL" value={"ALL"} onChange={handleCategoryChange} /> ALL
              </label>
            </li>
            <li>
              <label
                htmlFor="SOFAS"
              >
                <input type="checkbox" name="" id="SOFAS"  value={"sofa"} onChange={handleCategoryChange} />
                SOFAS
              </label>
            </li>
            <li>
              <label
                htmlFor="BEDS"
              >
                <input type="checkbox" name="" id="BEDS" value={"bed"} onChange={handleCategoryChange} />
                BEDS
              </label>
            </li>
            <li>
              <label
                htmlFor="RUGS"
              >
                <input type="checkbox" name="" id="RUGS" value={"rug"} onChange={handleCategoryChange} />
                RUGS
              </label>
            </li>
            <li>
              <label
                htmlFor="CUSHIONS"
              >
                <input type="checkbox" name="" id="CUSHIONS" value={"cushion"} onChange={handleCategoryChange} />
                CUSHIONS
              </label>
            </li>
            <li>
              <label
                htmlFor="SHELF"
              >
                <input type="checkbox" name="" id="SHELF"  value={"shelf"} onChange={handleCategoryChange} />
                SHELF
              </label>
            </li>
            <li>
              <label
                htmlFor="CHAIRS"
              >
                <input type="checkbox" name="" id="CHAIRS"  value={"chair"} onChange={handleCategoryChange} />
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
                <input type="checkbox" name="" id="BEDROOM"  onChange={handleCollectionChange} value={"BEDROOM"}/> BEDROOM
              </label>
            </li>
            <li>
              <label htmlFor="LIVING">
                <input type="checkbox" name="" id="LIVING" onChange={handleCollectionChange} value={"LIVING ROOM"} /> LIVING ROOM
              </label>
            </li>
            <li>
              <label htmlFor="KITCHEN">
                <input type="checkbox" name="" id="KITCHEN" onChange={handleCollectionChange} value={"KITCHEN"}/> KITCHEN
              </label>
            </li>
            <li>
              <label htmlFor="LIBRARY">
                <input type="checkbox" name="" id="LIBRARY" onChange={handleCollectionChange} value={"LIBRARY"} /> LIBRARY
              </label>
            </li>
            <li>
              <label htmlFor="OFFICE">
                <input type="checkbox" name="" id="OFFICE" onChange={handleCollectionChange} value={"OFFICE"}/> OFFICE
              </label>
            </li>
            <li>
              <label htmlFor="LAUNDRY">
                <input type="checkbox" name="" id="LAUNDRY"  onChange={handleCollectionChange} value={"LAUNDRY ROOM"} /> LAUNDRY ROOM
              </label>
            </li>
            <li>
              <label htmlFor="GUEST">
                <input type="checkbox" name="" id="GUEST"  onChange={handleCollectionChange} value={"GUEST ROOM"} /> GUEST ROOM
              </label>
            </li>
            <li>
              <label htmlFor="FAMILY">
                <input type="checkbox" name="" id="FAMILY"  onChange={handleCollectionChange} value={"FAMILY ROOM"} /> FAMILY ROOM
              </label>
            </li>
            <li>
              <label htmlFor="BATHROOM">
                <input type="checkbox" name="" id="BATHROOM"  onChange={handleCollectionChange} value={"BATHROOM"} /> BATHROOM
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
