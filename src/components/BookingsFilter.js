import React from "react";

import "./BookingsFilter.css";

export default function BookingsFilter(props) {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="bookings-filter">
      <div className="bookings-filter__control">
        <label>Filter by month</label>
        <select value={props.defaultMonth} onChange={filterChangeHandler}>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
      </div>
    </div>
  );
}
