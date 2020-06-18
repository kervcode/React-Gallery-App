import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm/searchForm.component";
import Nav from "./components/Nav/NavComponent";
import Photo from "./components/Photo/Photo.compnent";
import NotFound from "./components/NotFound/NotFound.component";
import "./App.css";
import apikey from "./config";
import PhotoList from "./components/PhotoList/PhotoList.component";

class App extends Component {
  state = {
    photo: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=papaya&per_page=24&format=json&nojsoncallback=1`
      )
      .then((responseData) => {
        this.setState({ photo: responseData.data.photos.photo });
        // console.log(this.state.photo);
      })
      .catch((error) => {
        console.log("an error occured", error);
      });
  }
  render() {
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <PhotoList data={this.state.photo} />
        <NotFound />
      </div>
    );
  }
}

export default App;
