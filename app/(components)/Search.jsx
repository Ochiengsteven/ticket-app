import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Ticket"
        className="bg-nav rounded-full pl-8 pr-4 py-2 h-8 w-48 text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-card-hover focus:ring-opacity-50"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default Search;
