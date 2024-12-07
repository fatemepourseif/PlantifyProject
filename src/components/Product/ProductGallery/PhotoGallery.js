import React, { useState } from "react";
import classes from "./PhotoGallery.module.css";

const PhotoGallery = (props) => {
  const [selectedPhoto, setSelectedPhoto] = useState(props.photos[0]);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className={classes.container}>
      <div className={classes.photos}>
        {props.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handlePhotoClick(photo)}
            style={{
              border:
                selectedPhoto === photo
                  ? "1px solid black"
                  : "1px solid transparent",
              transition: "transform 0.2s",
              transform: selectedPhoto === photo ? "scale(1.05)" : "scale(1)",
            }}
          />
        ))}
      </div>
      <div className={classes.selectedPhoto}>
        <img
          src={selectedPhoto}
          alt="Selected"
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
