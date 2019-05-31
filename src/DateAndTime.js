import React from "react";
import "./App.css";

var tempDate = new Date();
var date =
  tempDate.getFullYear() +
  "-" +
  (tempDate.getMonth() + 1) +
  "-" +
  tempDate.getDate() +
  " " +
  tempDate.getHours() +
  ":" +
  tempDate.getMinutes() +
  ":" +
  tempDate.getSeconds();
const currDate = "Current Date= " + date;

class DateAndTime extends React.Component {
  render() {
    return <p>{currDate}</p>;
  }
}

export default DateAndTime;
