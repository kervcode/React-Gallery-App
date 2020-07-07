import React, { Component } from "react";
import Photo from "./Photo.compnent";
import axios from "axios";
import apikey from "../config";

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      boats: [],
      rivers: [],
      beaches: [],
    };
  }

  componentDidMount() {
    this.performSearch("sunset");
    this.performSearch("boats");
    this.performSearch("rivers");
    this.performSearch("beaches");
  }

  performSearch = (query) => {
    // console.log(query);
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "boats") {
          this.setState({ boats: response.data.photos.photo });
        } else if (query === "rivers") {
          this.setState({ rivers: response.data.photos.photo });
        } else if (query === "beaches") {
          this.setState({ beaches: response.data.photos.photo });
        } else {
          this.setState({ searchResults: response.data.photos.photo });
        }

        console.log(this.state);
      })
      .catch((error) => {
        console.log("Error fetching data!", error);
      });
  };

  render() {
    let results;
    let path = this.props.match.path;
    let m = this.props;
    console.log(m);
    if (path === "/") {
      results = this.state.searchResults;
    } else if (path === "/boats") {
      results = this.state.boats;
    } else if (path === "/rivers") {
      results = this.state.rivers;
    } else if (path === "/beaches") {
      results = this.state.beaches;
    }

    let pictures = results.map((picture) => (
      <Photo
        urlPath={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
        desc={picture.title}
        key={picture.id}
      />
    ));

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>{pictures}</ul>
      </div>
    );
  }
}

export default PhotoList;
