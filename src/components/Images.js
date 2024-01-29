import React from "react";

const Images = ({ images }) => {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {images.map((image) => (
        <a href={image.urls.full} target="_blank" key={image.id}>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            loading="lazy"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="flex justify-between">
            <p>📌{image.user.location}</p>
            <p>👤{image.user.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Images;
