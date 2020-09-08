import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const history = useHistory();
  // after the search push to /search page

  const search = (e) => {
    // console.log(e)

    // TO make the button enter working we change the tagg of the div by form
    e.preventDefault();

    history.push('/search')
    console.log(input);
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name=""
          id=""
        />
        <MicIcon className="search__inputIcon" />
      </div>

      <div className="search__buttons">
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
