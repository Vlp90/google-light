import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar } from "@material-ui/core";


function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="about">About</Link>
          <Link to="about">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="about">Gmail</Link>
          <Link to="about">Images</Link>
          <AppsIcon/>
          <Avatar/>
        </div>
      </div>
      <div className="home__body">
   
      </div>
    </div>
  );
}

export default Home;
