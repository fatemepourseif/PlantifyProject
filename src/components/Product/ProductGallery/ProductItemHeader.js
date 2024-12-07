import classes from "./ProductItemHeader.module.css";
import { Link } from "react-router-dom";

const ProductItemHeader = (props) => {
  const categoryIdToName = {
    1: "ALL PLANTS",
    2: "POTS AND BASKETS",
    3: "PET FRIENDLY",
    4: "EASY CARE PLANTS",
    5: "HANGING PLANTS",
    6: "XL FLOOR STANDING PLANTS",
    7: "MOSSBALLS",
    8: "HOMEWARE",
  };
  const categoryName = categoryIdToName[props.categoryId] || "Unknown Category";
  return (
    <div className={classes.header}>
      <p>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>{" "}
        /{" "}
        <Link
          to={`/category/${props.categoryId}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {categoryName}
        </Link>{" "}
        /
      </p>
      <h1>{props.title}</h1>
      <h3>R {props.price}</h3>
      <p>Tax included. Shipping calculated at checkout.</p>
    </div>
  );
};
export default ProductItemHeader;
