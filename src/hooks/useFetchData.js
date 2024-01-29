import { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGES_IN_PAGE } from "../utils/constants";

const useFetchData = (searchValue) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (searchValue !== null) {
          setLoading(true);
          const response = await fetch(
            `${API_URL}${searchValue}&page=1&per_page=${IMAGES_IN_PAGE}&client_id=${API_KEY}`
          );
          const data = await response.json();
          setImages(data.results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchValue]);

  return { images, loading };
};

export default useFetchData;
