import { useEffect, useState } from "react";
import classes from "./CollectionSection.module.css";
import ProductGalleryList from "../ProductGallery/ProductGalleryList";
import axios from "axios";

const CollectionSection = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: collectionsData } = await axios.get(
          "http://localhost:9000/collections"
        );
        setCollections(collectionsData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={classes.section}>
      <div className={classes.sectionHeader}>
        <h1>Austen Gordon Fine Prints</h1>
        <button>VIEW ALL</button>
      </div>
      <div className={classes.sectionBody}>
        <ProductGalleryList products={collections} />
      </div>
    </div>
  );
};
export default CollectionSection;
