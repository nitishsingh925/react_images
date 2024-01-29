import { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGES_IN_PAGE } from "../utils/constants";

const useFetchData = (searchValue) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      if (searchValue !== null) {
        const response = await fetch(
          `${API_URL}${searchValue}&page=1&per_page=${IMAGES_IN_PAGE}&client_id=${API_KEY}`
        );
        const data = await response.json();
        setImages(data.results);
        console.log(data);
      }
    };

    fetchImages();
  }, [searchValue]);

  return images;
};

export default useFetchData;
