import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { HiSearch } from "react-icons/hi";

const SearchForm = ({ movies, history }) => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredResult = Object.values(movies).filter((movie) =>
      movie.title.toLowerCase().includes(keyword.toLowerCase())
    );

    // debugger;
    dispatch({ type: "RECIEVE_SEARCH_RESULT", results: filteredResult });
    history.push("/search");
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titles"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button>
          <HiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
