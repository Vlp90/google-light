import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response.js";
import { Link } from "react-router-dom";
import Search from '../components/Search'

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  // const { data } = useGoogleSearch(term);

  const data = Response;
  console.log(data);

  // custom service google Api
  // https://developers.google.com/custom-search/v1/using_rest
  // https://cse.google.com/cse/create/new

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
        {/* <h2>{data}</h2> */}

        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>
      <div className="searchPage__headerBody">
        <Search hideButtons />
      </div>
      </div>
      {/* <div className="searPage__results"></div> */}
    </div>
  );
}

export default SearchPage;
