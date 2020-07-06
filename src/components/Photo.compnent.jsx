import React from "react";

const Photo = (props) => {
  return (
    <li>
      <img src={props.urlPath} alt={props.desc} />
    </li>
  );
};

export default Photo;
