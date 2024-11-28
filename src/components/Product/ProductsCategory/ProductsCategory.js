import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import classes from "./ProductsCategory.module.css";

const ProductsCategory = (props) => {
  return (
    <div className={classes.categoryContainer}>
      <h3 className={classes.title}>SHOP BY CATEGORY</h3>
      <ul>
        {props.categories.map((item) => (
          <Link to={`category/${item.id}`}>
          <CategoryItem
            key={item.id}
            image_url={item.image_url}
            name={item.name}
            id={item.id}
          /></Link>
        ))}
      </ul>
    </div>
  );
};
export default ProductsCategory;
