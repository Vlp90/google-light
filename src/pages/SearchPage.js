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
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import AppsIcon from "@material-ui/icons/Apps";

import { Avatar } from "@material-ui/core";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  // MOCK API CALL
  // const data = Response;
  console.log(data);

  // custom service google Api
  // https://developers.google.com/custom-search/v1/using_rest
  // https://cse.google.com/cse/create/new

  return (
    <div className="searchPage">
      {/* DESKTOP */}
      <div className="searchPage__header">
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
        </div>{" "}
        <div className="searchPage__headerRight">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="searchPage__mobile">
        <div className="searchPage__headerMobile">
          <AppsIcon />

          <Link to="/">
            <img
              className="searchPage__logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt="Google Logo"
            />
          </Link>
          <Avatar />
        </div>

        <form className="searchPage__searchBarMobile">
          <Search hideButtons />
        </form>

        <div className="searchPage__optionsMobile">
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

              <div className="searchPage__option">
                <Link to="setting">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="tools">Tools</Link>
              </div>
            </div>
          
      </div>

      {/* {true && ( */}
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>
          {data?.items.map((item) => (
            <div className="search__result">
              <a className="search__resultSubTitle" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink} <ArrowDropDownIcon />
              </a>

              <a href={item.link} className="search__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="search__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
