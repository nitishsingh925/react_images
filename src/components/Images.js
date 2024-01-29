import React from "react";

const Images = ({ images }) => {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.regular}
          alt={image.alt_description}
          loading="lazy"
          className="w-full h-64 object-cover"
        />
      ))}
    </div>
  );
};

export default Images;
