import { useContext, useState } from "react";
import { CollectionContext } from "../context/CollectionContext";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const ProductFilter = () => {
 
  const [categories, setCategories] = useState(true);

  const showCategories = () => {
    setCategories(!categories);
  };
  const [collections, setCollections] = useState(true);

  const showCollections = () => {
    setCollections(!collections);
  };

  const {handleCategoryChange,handleCollectionChange,
        checkedCategories,setCheckedCategories,
        checkedCollections,setCheckedCollections,
      selectedTitle}=
  useContext(CollectionContext)

  const { language } = useContext(LanguageContext);
  const t = translations[language];

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
             <input type="checkbox" name="" id="ALL"  checked={checkedCategories.length === 0}
            onChange={() => setCheckedCategories([])} /> {t.all}
           </label>
         </li>
         <li>
           <label
             htmlFor="SOFAS"
           >
             <input type="checkbox" name="" id="SOFAS" checked={checkedCategories.includes("sofa")}  value={"sofa"} onChange={handleCategoryChange}/>
             {t.sofas}
           </label>
         </li>
         <li>
           <label
             htmlFor="BEDS"
          
           >
             <input type="checkbox" name="" id="BEDS" value={"bed"} checked={checkedCategories.includes("bed")} onChange={handleCategoryChange}/>
             {t.beds}
           </label>
         </li>
         <li>
           <label
             htmlFor="RUGS"
         
           >
             <input type="checkbox" name="" id="RUGS" value={"rug"} onChange={handleCategoryChange} checked={checkedCategories.includes("rug")} />
             {t.rugs}
           </label>
         </li>
         <li>
           <label
             htmlFor="CUSHIONS"
            
           >
             <input type="checkbox" name="" checked={checkedCategories.includes("cushion")} value={"cushion"} id="CUSHIONS" onChange={handleCategoryChange}/>
             {t.cushions}
           </label>
         </li>
         <li>
           <label
             htmlFor="SHELF"
            
           >
             <input type="checkbox" name="" id="SHELF" value={"shelf"} onChange={handleCategoryChange} checked={checkedCategories.includes("shelf")} />
             {t.shelves}
           </label>
         </li>
         <li>
           <label
             htmlFor="CHAIRS"
           
           >
             <input type="checkbox" name="" id="CHAIRS" value={"chair"} onChange={handleCategoryChange} checked={checkedCategories.includes("chair")}/>
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
          COLLECTIONS
          <span className="d-block d-md-none">
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </p>
        {collections ? (
          <ul>
          <li>
            <label htmlFor="all">
              <input type="checkbox" name="" id="all" 
            onChange={() => setCheckedCollections([])}/> {t.all}
            </label>
          </li>
          <li>
            <label htmlFor="BEDROOM">
              <input type="checkbox" name="" id="BEDROOM" checked={checkedCollections.includes("BEDROOM") || (selectedTitle && selectedTitle==="BEDROOM")} onChange={handleCollectionChange} value={"BEDROOM"}/> {t.bedroom}
            </label>
          </li>
          <li>
            <label htmlFor="LIVING">
              <input type="checkbox" name="" id="LIVING" checked={checkedCollections.includes("LIVING ROOM") || (selectedTitle && selectedTitle === "LIVING ROOM") } onChange={handleCollectionChange} value={"LIVING ROOM"}/> {t.living}
            </label>
          </li>
          <li>
            <label htmlFor="KITCHEN">
              <input type="checkbox" name="" id="KITCHEN" checked={checkedCollections.includes("KITCHEN") || (selectedTitle && selectedTitle==="KITCHEN")} onChange={handleCollectionChange} value={"KITCHEN"}/> {t.kitchen}
            </label>
          </li>
          <li>
            <label htmlFor="LIBRARY">
              <input type="checkbox" name="" id="LIBRARY" checked={checkedCollections.includes("LIBRARY") || (selectedTitle && selectedTitle==="LIBRARY")}  onChange={handleCollectionChange} value={"LIBRARY"} /> {t.library}
            </label>
          </li>
          <li>
            <label htmlFor="OFFICE">
              <input type="checkbox" name="" id="OFFICE" checked={checkedCollections.includes("OFFICE") ||(selectedTitle && selectedTitle==="OFFICE")}  onChange={handleCollectionChange} value={"OFFICE"} /> {t.office}
            </label>
          </li>
          <li>
            <label htmlFor="LAUNDRY">
              <input type="checkbox" name="" id="LAUNDRY" checked={checkedCollections.includes("LAUNDRY ROOM") || (selectedTitle && selectedTitle ==="LAUNDRY ROOM")}   onChange={handleCollectionChange} value={"LAUNDRY ROOM"}/> {t.laundry}
            </label>
          </li>
          <li>
            <label htmlFor="GUEST">
              <input type="checkbox" name="" id="GUEST" checked={checkedCollections.includes("GUEST ROOM") || (selectedTitle && selectedTitle ==="GUEST ROOM")}  onChange={handleCollectionChange} value={"GUEST ROOM"}/> {t.guest}
            </label>
          </li>
          <li>
            <label htmlFor="FAMILY">
              <input type="checkbox" name="" id="FAMILY"  onChange={handleCollectionChange} checked={checkedCollections.includes("FAMILY ROOM") || (selectedTitle && selectedTitle==="FAMILY ROOM")}  value={"FAMILY ROOM"} /> {t.family}
            </label>
          </li>
          <li>
            <label htmlFor="BATHROOM">
              <input type="checkbox" name="" id="BATHROOM" onChange={handleCollectionChange} value={"BATHROOM"} checked={checkedCollections.includes("BATHROOM") || (selectedTitle && selectedTitle==="BATHROOM")} /> {t.bath}
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
