import { Link } from "react-router-dom";
import DropDown from "../../../helpers/dropdown/DropDown";
import classes from "./ProductGallery.module.css";
import ProductGalleryList from "./ProductGalleryList";

const ProductGallery = (props) => {
  return (
    <div className={classes.galley}>
      <Link to="/" className={classes.linkStyle}>
        <p>Home /</p>
      </Link>
      <h3>{props.title}</h3>
      <div className={classes.galleryInfo}>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.featured}>
          <p>{props.products.length} Products</p>
          <DropDown />
        </div>
        <ProductGalleryList products={props.products} />
      </div>
    </div>
  );
};
export default ProductGallery;
