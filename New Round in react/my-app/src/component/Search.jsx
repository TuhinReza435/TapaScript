import React from "react";

const Search = ({ serachTerm, onSearchTerm }) => {
  return (
    <div>
      <form action="">
        <input
          type="search"
          value={serachTerm}
          placeholder="Search Book..."
          onChange={(event) => onSearchTerm(event.target.value)}
          className="w-[95%] ml-3 mr-3 py-3 my-3 border 
            rounded placeholder:text-dark-500 placeholder:pl-3  placeholder:text-bold
          "
        />
      </form>
    </div>
  );
};

export default Search;
