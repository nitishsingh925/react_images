import { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGES_IN_PAGE } from "../utils/constants";

const useFetchData = (searchValue, pageNo) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(pageNo);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (searchValue !== null) {
          setLoading(true);
          const response = await fetch(
            `${API_URL}${searchValue}&page=${pageNo}&per_page=${IMAGES_IN_PAGE}&client_id=${API_KEY}`
          );
          const data = await response.json();
          setImages((prevImages) => [...prevImages, ...data.results]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchValue, pageNo]);

  return { images, loading };
};

export default useFetchData;
