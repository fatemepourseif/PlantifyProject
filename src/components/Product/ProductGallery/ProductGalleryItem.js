import Button from "../../../helpers/Button/Button";
import classes from "./ProductGalleryItem.module.css"

const ProductGalleryItem = (props) => {
  return (
    <li className={classes.item}>
      <img src={props.src} alt={props.name} />
      <img src={props.hover} alt={props.name} className={classes.hoverImage} />
      <Button className={classes.btn} text="Quick View"/>
      <p>{props.name}</p>
      <p>from R {props.price}</p>
    </li>
  );
};
export default ProductGalleryItem;
