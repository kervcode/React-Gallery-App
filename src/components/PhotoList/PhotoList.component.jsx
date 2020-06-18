import React from "react";
import Photo from "../Photo/Photo.compnent";

const PhotoList = (props) => {
  const results = props.data;
  let pictures = results.map(
    (picture) => <Photo urlPath={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} desc={picture.title} id={picture.id}/>);
console.log(results) 

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{pictures}</ul>
    </div>
  );
};

export default PhotoList;
