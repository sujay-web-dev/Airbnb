import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";
import Search from "./Search";

function Banner() {
  const history = useHistory();
  const [showsearch, setshowsearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setshowsearch(!showsearch)}
          variant="outlined"
          className="banner__searchbutton"
        >
          {showsearch ? "Hide" : "Search Dates"}
        </Button>
        {showsearch && <Search />}
      </div>
      <div className="banner__info">
        <h2>Get out and stretch your imagination</h2>
        <h6>
          Plan a different kind of getaway to uncover the hidden gems near you.{" "}
        </h6>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
