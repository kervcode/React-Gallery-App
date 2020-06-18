import React from "react";
import "../../css/index.css";
import PhotoList from "../PhotoList/PhotoList.component";

const Photo = (props) => {
  console.log(props)
  
  return (
    <li key={props.id}>
      <img src={props.urlPath} alt={props.desc} key={props.id}/>
    </li>
  );
};

export default Photo;
