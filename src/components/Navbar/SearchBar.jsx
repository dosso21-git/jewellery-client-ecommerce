// import React, { useState } from "react";
// import { IoMdSearch, IoMdClose } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     // if (searchTerm.trim()) {
//       navigate(`/?search=${encodeURIComponent(searchTerm)}`);
//     // }
//     if(!e){
//         navigate('/')
//     }
//   };

//   const clearInput = () => {
//     setSearchTerm("");
//     navigate("/"); // Optionally redirect to home or stay on the same page
//   };

//   return (
//     <div className="fixed top-14 left-0 right-0 z-10 flex justify-center mt-4">
//       <div className="relative w-full max-w-md mx-auto"> {/* Adjusting width for responsiveness */}
//         <input
//           value={searchTerm}
//           onChange={(e) =>{
//              handleSearch(e.target.value);
//              setSearchTerm(e.target.value)
//             }}
//         //   onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//           type="text"
//           placeholder="Search"
//           className="w-full transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//         />
//         <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
//         {searchTerm && (
//           <button
//             onClick={clearInput}
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//             aria-label="Clear search"
//           >
//             <IoMdClose size={20} />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;



























import React, { useState } from "react";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (searchTerm.trim()) {
      query.append("search", encodeURIComponent(searchTerm));
    }
    if (category !== "all") {
      query.append("category", category);
    }
    if (sortOrder !== "default") {
      query.append("sort", sortOrder);
    }
    navigate(`/?${query.toString()}`);
  };

  const clearInput = () => {
    setSearchTerm("");
    setCategory("all");
    setSortOrder("default");
    navigate("/"); // Optionally redirect to home
  };

  const handleKeyPress = (e) => {
      handleSearch();
  };

  return (
    <div className="fixed top-14 left-0 right-0 z-10 flex justify-center mt-4 px-4">
      <div className="relative w-full max-w-lg flex items-center">

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          type="text"
          placeholder="Search"
          className="transition-all duration-300 rounded-full border border-gray-300 bg-white px-4 py-2 pl-10 w-full focus:outline-none focus:border-primary shadow-md dark:border-gray-500 dark:bg-gray-800"
        />
        <IoMdSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />

        {searchTerm && (
          <button
            onClick={clearInput}
            // className="absolute  top-1/2 transform  text-gray-500"
            aria-label="Clear search"
          >
            <IoMdClose size={20} />
          </button>
        )}

        {/* Sort Order Filter */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          onClick={handleKeyPress}
          className="rounded-r-full border border-gray-300 bg-white px-3 py-2 ml-2 focus:outline-none focus:border-primary transition-all duration-300 dark:border-gray-500 dark:bg-gray-800"
        >
          <option value="default">Sort by</option>
          <option value="price_low_high">Price: Low to High</option>
          <option value="price_high_low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
