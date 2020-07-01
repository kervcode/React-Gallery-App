import React from "react";
import "../../css/index.css";

const Photo = (props) => {
  return (
    <li>
      <img src={props.urlPath} alt={props.desc} />
    </li>
  );
};

export default Photo;
