import ShopifySlideShow from "./ShopifySlideShow";
import classes from "./Shopify.module.css";
import ImageSection from "./ImageSection";

const images = [
  "https://plantify.co.za/cdn/shop/files/75.png?v=1708345763&width=1800",
  "https://plantify.co.za/cdn/shop/files/Babylonstoren-Oliveoil500ml.jpg?v=1709193649&width=1800",
  "https://plantify.co.za/cdn/shop/files/BabylontorenKalamataOlives300g.png?v=1709110828&width=1800",
  "https://plantify.co.za/cdn/shop/files/BabylontorenKalamataandcaperlifestyle.png?v=1709110602&width=1800",
  "https://plantify.co.za/cdn/shop/files/HonestChocolate-54_SaltedAlmondSlab-lifestyle_df827dd9-47cd-4376-a7e7-ecdbac43699c.jpg?v=1686212697&width=1800",
  "https://plantify.co.za/cdn/shop/files/Chocolateandpistachionougatwebimage3.jpg?v=1700651218&width=1800",
];
const Shopify = () => {
  return (
    <div className={classes.container}>
      <ImageSection
        title="GET THE GOODS"
        subtitle="PLANTIFY PANTRY"
        ctaText="SHOP HERE"
        buttonText="FILL UP ON PANTRY TREATS"
        buttonAction={() => console.log("Learn More clicked!")}
        text="EDIBLE TREATS"
        className={classes.first}
      >
        <ShopifySlideShow images={images} />
      </ImageSection>

      <ImageSection
        title="BIG BOY PLANTS"
        subtitle="EXTRA LARGE & LARGE PLANTS"
        ctaText="SHOP HERE"
        imageUrl="https://plantify.co.za/cdn/shop/products/ParlorPalm_Areca_-35cminSinanBasket40cm.jpg?v=1620832098&width=1800"
        buttonText="MAKE A STATEMENT"
        buttonAction={() => console.log("View Details clicked!")}
        text="SHOP BIG PLANTS"
        className={classes.second}
      />
    </div>
  );
};
export default Shopify;
