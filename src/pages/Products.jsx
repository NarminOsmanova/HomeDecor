import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import products from "../data/products";
import SingleCard from "../components/SingleCard";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const Products = () => {
  const [product] = useContext(ProductContext);

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

const filteredProducts = products.filter((item) => {
  const categoryFilter =
  checkedCategories.length === 0 || checkedCategories.includes(item.category);

  const collectionFilter =
  checkedCollections.length === 0 ||item.collection.some((coll) => checkedCollections.includes(coll));

  return categoryFilter && collectionFilter;
});

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

   // A_dan Z_ye ve ya tersine, bahadan ucuza ve ya tersine siralama

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
   const sortedProducts = sortProducts(filteredProducts);
   const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };
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
                  <li onClick={() => handleSortChange('nameAsc')}>
                    <a className="dropdown-item">
                     {t.popularf}
                    </a>
                  </li>
                  <li onClick={() => handleSortChange('priceAsc')}>
                    <a className="dropdown-item">
                     {t.cheap}
                    </a>
                  </li>
                  <li onClick={() => handleSortChange('priceDesc')}>
                    <a className="dropdown-item">
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
                      <input type="checkbox" name="" id="ALL" value={"ALL"} onChange={handleCategoryChange}/> {t.all}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="SOFAS"
                    >
                      <input type="checkbox" name="" id="SOFAS" value={"sofa"} onChange={handleCategoryChange}/>
                      {t.sofas}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="BEDS"
                   
                    >
                      <input type="checkbox" name="" id="BEDS" value={"bed"} onChange={handleCategoryChange}/>
                      {t.beds}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="RUGS"
                  
                    >
                      <input type="checkbox" name="" id="RUGS" value={"rug"} onChange={handleCategoryChange} />
                      {t.rugs}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="CUSHIONS"
                     
                    >
                      <input type="checkbox" name="" value={"cushion"} id="CUSHIONS" onChange={handleCategoryChange}/>
                      {t.cushions}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="SHELF"
                     
                    >
                      <input type="checkbox" name="" id="SHELF" value={"shelf"} onChange={handleCategoryChange} />
                      {t.shelves}
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="CHAIRS"
                    
                    >
                      <input type="checkbox" name="" id="CHAIRS" value={"chair"} onChange={handleCategoryChange} />
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
                      <input type="checkbox" name="" id="BEDROOM" onChange={handleCollectionChange} value={"BEDROOM"}/> {t.bedroom}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="LIVING">
                      <input type="checkbox" name="" id="LIVING" onChange={handleCollectionChange} value={"LIVING ROOM"}/> {t.living}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="KITCHEN">
                      <input type="checkbox" name="" id="KITCHEN" onChange={handleCollectionChange} value={"KITCHEN"}/> {t.kitchen}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="LIBRARY">
                      <input type="checkbox" name="" id="LIBRARY" onChange={handleCollectionChange} value={"LIBRARY"} /> {t.library}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="OFFICE">
                      <input type="checkbox" name="" id="OFFICE" onChange={handleCollectionChange} value={"OFFICE"} /> {t.office}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="LAUNDRY">
                      <input type="checkbox" name="" id="LAUNDRY"  onChange={handleCollectionChange} value={"LAUNDRY ROOM"}/> {t.laundry}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="GUEST">
                      <input type="checkbox" name="" id="GUEST"  onChange={handleCollectionChange} value={"GUEST ROOM"}/> {t.guest}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FAMILY">
                      <input type="checkbox" name="" id="FAMILY"  onChange={handleCollectionChange} value={"FAMILY ROOM"} /> {t.family}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="BATHROOM">
                      <input type="checkbox" name="" id="BATHROOM" onChange={handleCollectionChange} value={"BATHROOM"} /> {t.bath}
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
              {sortBy ? (
                sortedProducts.map((item) => (
                  <Col md={6} lg={4} sm={6} key={item.id}>
                    <SingleCard id={item.id} img={item.img} title={item.title} price={item.price} />
                  </Col>
                ))
              ) : (
                filteredProducts.map((item) => (
                  <Col md={6} lg={4} sm={6} key={item.id}>
                    <SingleCard id={item.id} img={item.img} title={item.title} price={item.price} />
                  </Col>
                ))
              )}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
