import React from "react";
import Photo from "./Photo.compnent";

const PhotoList = (props) => {
  let results = props;
  console.log(results);
 {/*
  let pictures = results.map((picture) => (
    <Photo
      urlPath={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
      desc={picture.title}
      key={picture.id}
    />
  ));
*/}
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul></ul>
    </div>
  );
  
};

export default PhotoList;