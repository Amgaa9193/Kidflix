// render all the search result
import React, { useState, useEffect } from "react";

import NavBar from "../nav/nav";

const SearchResult = ({ searchresults, history }) => {
  console.log(searchresults);
  // useEffect(() => {});
  const videos = searchresults.map((result, i) => {
    return (
      <div key={i}>
        <video
          onClick={() => {
            history.push(`/watch/${result.id}`);
          }}
          src={result.movieUrl}
          type="video/mp4"
        ></video>
        ;
      </div>
    );
  });
  return (
    <div>
      <NavBar />
      {videos}
    </div>
  );
};

export default SearchResult;
