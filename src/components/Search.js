import React from "react";

const Search = ({ value, handleChange }) => {
  return (
    <div>
      Search: <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Search;
