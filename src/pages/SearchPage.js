import React from "react";
import "./SearchPage.css";
import {useStateValue} from "../StateProvider"

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // custom service google Api
  // https://developers.google.com/custom-search/v1/using_rest
  return (
    <div className="searchPage">
       <div className="searchPage__header">
       <h1>{term}</h1>
       </div>
      <div className="searPage__results"></div>
    </div>
  );
}

export default SearchPage;
