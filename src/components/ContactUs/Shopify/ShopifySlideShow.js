import { useEffect, useState } from "react";
const ShopifySlideShow = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    console.log("working");
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 400);

    return () => clearInterval(interval);
  }, [props.images.length]);
  return (
    <div style={{ width: "350px", height: "350px", overflow: "hidden" }}>
      <img
        src={props.images[currentImageIndex]}
        alt="Slideshow"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};
export default ShopifySlideShow;
