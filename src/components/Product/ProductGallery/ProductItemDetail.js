import { useLocation, useNavigate } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";
import classes from "./ProductItemDetail.module.css";
import ProductItemHeader from "./ProductItemHeader";
import ProductOptionsPanel from "./ProductOptionsPanel";

const ProductItemDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    navigate("/");
    return null;
  }
  const images = [product.mainImg, product.hoveredImg];
  return (
    <div className={classes.detailContainer}>
      <div className={classes.imgContainer}>
        <PhotoGallery photos={images} />
      </div>
      <div className={classes.infoContainer}>
        <ProductItemHeader
          title={product.name}
          price={product.price}
          categoryId={product.category_id}
        />
        <p>{product.description}</p>
        <ProductOptionsPanel />
      </div>
    </div>
  );
};

export default ProductItemDetail;
