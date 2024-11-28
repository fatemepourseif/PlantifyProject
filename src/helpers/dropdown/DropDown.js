import classes from "./DropDown.module.css";
const DropDown = () => {
  return (
    <div class={classes.dropdownContainer}>
      <select id="options" class="styled-select">
        <option value="option1">Sort</option>
        <option value="option2" selected>Featured</option>
        <option value="option3">Best Selling</option>
        <option value="option4">Alphabetically, A-Z</option>
        <option value="option4">Alphabetically, Z-A</option>
        <option value="option4">Price, Low to High</option>
        <option value="option4">Price, High to Low</option>
        <option value="option4">Date, Old to New</option>
        <option value="option4">Date, New to Old</option>
      </select>
    </div>
  );
};
export default DropDown;
