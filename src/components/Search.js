import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input type="text" name="" id="" />
        <MicIcon className="search__inputIcon" />
      </div>
    </div>
  );
}

export default Search;
