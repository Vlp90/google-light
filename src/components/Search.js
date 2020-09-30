import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{term}, dispatch] = useStateValue("");
  const [input, setInput] = useState("");
  const history = useHistory();
  // after the search push to /search page

  const search = (e) => {
    // console.log(e)

    // TO make the button enter working we change the tagg of the div by form
    e.preventDefault();

    history.push("/search");
    console.log(input);

    // put the search termn input in the data layer
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon onClick={search} onSubmit={search} className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name=""
          id=""
          // placeholder={term}
        />

        
        <MicIcon className="search__inputIcon" />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onSubmit={search} onClick={search} variant="outlined">

          {/* // TEST AVEC OnSubmit */}
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button type="submit" onSubmit={search} onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
