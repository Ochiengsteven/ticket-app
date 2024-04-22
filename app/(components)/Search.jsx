import React from "react";

const Search = () => {
  return (
    <input
      type="search"
      name="search ticket"
      id=""
      placeholder="Search Ticket"
      className="bg-nav rounded-full p-2 h-8 w-48 text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-card-hover focus:ring-opacity-50"
    />
  );
};

export default Search;
