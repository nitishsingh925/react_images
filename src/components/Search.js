import { useRef, useState } from "react";
import Images from "./Images";
import useFetchData from "../hooks/useFetchData";
import Shimmer from "./Shimmer";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useTheme from "../hooks/useTheme";

const Search = () => {
  const searchInput = useRef(null);
  const [searchValue, setSearchValue] = useState(null);
  const [pageNo, setPageNo] = useState(1);

  const handleSearch = () => {
    setSearchValue(searchInput.current.value);
    setPageNo(1);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const { mode, toggleThemeHandler } = useTheme();

  const handleLoadMore = () => {
    if (!loading) {
      setPageNo((prevPage) => prevPage + 1);
    }
  };

  useInfiniteScroll(handleLoadMore);

  const { images, loading } = useFetchData(searchValue, pageNo);

  return (
    <>
      <div className="dark:bg-black h-screen">
        <div className="text-right py-2 px-4">
          <button onClick={toggleThemeHandler} className="text-5xl">
            {mode === "light" ? "🌛" : "🌞"}
          </button>
        </div>
        <div className="text-center py-14">
          <h1 className="text-4xl font-bold text-green-500 mb-6">
            Image Search
          </h1>
          <div className="w-4/5 mx-auto flex">
            <input
              type="text"
              placeholder="Search for images"
              ref={searchInput}
              onKeyDown={handleKeyPress}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-l-full focus:outline-none focus:border-green-500 dark:text-white dark:bg-black"
            />
            <button
              onClick={handleSearch}
              className="bg-green-500 text-white px-6 py-2 rounded-r-full hover:bg-green-600 transition duration-300 focus:outline-none font-bold text-xl"
            >
              Search
            </button>
          </div>
        </div>
        <div className="dark:bg-black">
          {loading ? <Shimmer /> : <Images images={images} />}
        </div>
      </div>
    </>
  );
};

export default Search;
