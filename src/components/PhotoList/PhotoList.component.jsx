import React from "react";
import Photo from "../Photo/Photo.compnent";

const PhotoList = (props) => {
  const results = props.data;
  let pictures = results.map(
    (picture) => (
      <Photo
        id={picture.id}
        secret={picture.secret}
        server={picture.server}
        farm={picture.farm}
      />
    )
    // console.log(picture.secret);
  );
  // console.log(pictures);

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{pictures}</ul>
    </div>
  );
};

export default PhotoList;
