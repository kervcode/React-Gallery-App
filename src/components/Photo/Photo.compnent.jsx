import React from "react";
import "../../css/index.css";
import PhotoList from "../PhotoList/PhotoList.component";

const Photo = (props) => {
  const url = {//farm{props.farm}.staticflickr.com/{props.server}/{props.id}_{props.secret}.jpg}
  // console.log(props);
  return (
    <li key={props.id}>
      <img
        // src={
        //   https://farm{props.farm}.staticflickr.com/{props.server}/{props.id}_{props.secret}.jpg"
        // }
        src=htps{url}
        alt=""
      />
    </li>
  );
};

export default Photo;
