import ProductGalleryItem from "./ProductGalleryItem";
import classes from "./ProductGalleryList.module.css";

const ProductGalleryList = (props) => {
  return (
    <ul className={classes.list}>
      {props.products.map((product) => (
        <ProductGalleryItem
          src={product.mainImg}
          hover={product.hoveredImg}
          name={product.name}
          price={product.price}
          key={product.id}
        />
      ))}
    </ul>
  );
};
export default ProductGalleryList;
