import HeroSection from "../components/Hero/HeroSection";
import CollectionSection from "../components/Product/Collection/CollectionSection";
import ProductsCategory from "../components/Product/ProductsCategory/ProductsCategory";

const MainPage = (props) => {
  return (
    <div>
      <HeroSection />
      <ProductsCategory categories={props.categories} />
      <CollectionSection/>
    </div>
  );
};
export default MainPage;
