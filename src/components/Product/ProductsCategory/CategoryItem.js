import classes from "./CategoryItem.module.css"

const CategoryItem = (props) => {
  return (
    <li className={classes.item}>
      <img src={props.image_url} alt={props.name} />
      <p>{props.name}</p>
    </li>
  );
};
export default CategoryItem;
