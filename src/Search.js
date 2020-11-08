import React, { useState } from "react";
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();
  const [startdate, setstartdate] = useState(new Date());
  const [enddate, setenddate] = useState(new Date());

  const selectionrange = {
    startdate: startdate,
    enddate: enddate,
    key: "selection",
  };

  function handleselect(ranges) {
    setstartdate(ranges.selection.startdate);
    setenddate(ranges.selection.enddate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionrange]} onChange={handleselect} />
      <h3>
        Number of Guests <PeopleIcon />
      </h3>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
