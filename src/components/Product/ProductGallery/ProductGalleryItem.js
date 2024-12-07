import { Link } from "react-router-dom";
import classes from "./ProductGalleryItem.module.css";
import Button from "../../../helpers/Button/Button";

const ProductGalleryItem = ({ product }) => {
  return (
    <li className={classes.item}>
      <Link
        to={`/product/${product.id}`}
        state={{ product }}
        className={classes.linkWrapper}
        style={{
          display: "block",
          textDecoration: "none",
          color: "inherit",
          width: "100%",
          height: "100%",
        }}
      >
        <img src={product.mainImg} alt={product.name} />
        <img
          src={product.hoveredImg}
          alt={product.name}
          className={classes.hoverImage}
        />
        <Button className={classes.btn} text="Quick View" />
        <p>{product.name}</p>
        <p>from R {product.price}</p>
      </Link>{" "}
    </li>
  );
};

export default ProductGalleryItem;
