import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  // custom service google Api
  // https://developers.google.com/custom-search/v1/using_rest
  // https://cse.google.com/cse/create/new

  console.log(data)
 
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
        {/* <h2>{data}</h2> */}
      </div>
      <div className="searPage__results"></div>
    </div>
  );
}

export default SearchPage;
