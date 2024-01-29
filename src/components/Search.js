import { useRef, useState } from "react";
import Images from "./Images";
import useFetchData from "../hooks/useFetchData";

const Search = () => {
  const searchInput = useRef(null);
  const [searchValue, setSearchValue] = useState(null);

  const handleSearch = () => {
    setSearchValue(searchInput.current.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const images = useFetchData(searchValue);

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-green-500 mb-6">Image Search</h1>
        <div className="w-4/5 mx-auto flex">
          <input
            type="text"
            placeholder="Search for images"
            ref={searchInput}
            onKeyDown={handleKeyPress}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-l-full focus:outline-none focus:border-green-500"
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 text-white px-6 py-2 rounded-r-full hover:bg-green-600 transition duration-300 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>

      <Images images={images} />
    </>
  );
};

export default Search;
