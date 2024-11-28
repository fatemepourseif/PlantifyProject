import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoryDetails from "./CategoryDetails";
import axios from "axios";
import ProductGallery from "../ProductGallery/ProductGallery";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { title, description } = categoryDetails[categoryId] || {
    title: "Unknown Category",
    description: "No description available.",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:9000/products");
        setProducts(
          data.filter((product) => product.category_id === parseInt(categoryId))
        );
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [categoryId]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:9000/products");
        const filteredProducts = data.filter((product) => product.id > 100);
        setAllProducts(filteredProducts);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return categoryId === "1" ? (
    <ProductGallery
      products={allProducts}
      title={title}
      description={description}
    />
  ) : (
    <ProductGallery
      products={products}
      title={title}
      description={description}
    />
  );
};
export default CategoryPage;
