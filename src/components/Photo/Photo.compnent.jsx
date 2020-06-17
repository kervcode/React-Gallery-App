import React from "react";
import "../../css/index.css";

class Photo extends React.Component {
  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <li>
            <img
              src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
    );
  }
}
export default Photo;
