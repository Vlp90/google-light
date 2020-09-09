import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response.js";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
        {/* <h1>{term}</h1> */}
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

            <div className="searchPage__options">

          <div className="searchPage__optionsLeft">

          <div className="searchPage__option">
              <SearchIcon />
              <Link to="all">All</Link>
            </div>

            <div className="searchPage__option">
              <DescriptionIcon />
              <Link to="all">News</Link>
            </div>

            <div className="searchPage__option">
              <ImageIcon />
              <Link to="all">Images</Link>
            </div>

            <div className="searchPage__option">
              <LocalOfferIcon />
              <Link to="all">Shopping</Link>
            </div>

            <div className="searchPage__option">
              <RoomIcon />
              <Link to="all">Maps</Link>
            </div>

            <div className="searchPage__option">
              <MoreVertIcon />
              <Link to="all">More</Link>
            </div>

          </div>
            <div className="searchPage__optionsRight">

              <div className="searchPage__option">
                <Link to="setting">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="tools">Tools</Link>
              </div>
            </div>
      </div>
      {/* <div className="searPage__results"></div> */}
        </div>
    </div>
    </div>
  );
}

export default SearchPage;
