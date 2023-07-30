import { useContext } from "react";
import SingleCard from "./SingleCard";
import { CollectionContext } from "../context/CollectionContext";

const CollectionsCard = () => {
  const { filteredProducts } = useContext(CollectionContext);
  return (
    <>
      {filteredProducts.map((item) => (
        <div
          className="col-12 col-md-6 col-lg-4 position-relative"
          key={item.id}
        >
          <SingleCard img={item.img} title={item.title} price={item.price} />
        </div>
      ))}
    </>
  );
};

export default CollectionsCard;
