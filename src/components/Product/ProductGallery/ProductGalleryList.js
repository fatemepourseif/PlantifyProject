import { useState } from "react";
import ProductGalleryItem from "./ProductGalleryItem";
import classes from "./ProductGalleryList.module.css";
import ProductItemDetail from "./ProductItemDetail";

const ProductGalleryList = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToGallery = () => {
    setSelectedProduct(null);
  };
  return (
    <div>
      {!selectedProduct ? (
        <ul className={classes.list}>
          {props.products.map((product) => (
            <ProductGalleryItem
              key={product.id}
              onProductSelect={handleProductSelect}
              product={product}
            />
          ))}
        </ul>
      ) : (
        <ProductItemDetail
          product={selectedProduct}
          onBack={handleBackToGallery}
        />
      )}
    </div>
  );
};
export default ProductGalleryList;
