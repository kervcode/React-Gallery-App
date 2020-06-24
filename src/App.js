import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm/searchForm.component";
import Nav from "./components/Nav/NavComponent";
import NotFound from "./components/NotFound/NotFound.component";
import "./App.css";
import apikey from "./config";
import PhotoList from "./components/PhotoList/PhotoList.component";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    photo: [],
    parkPhotos: [],
    bridgePhotos: [],
    flowerPhotos: [],
  };

  componentDidMount() {
    this.performSearch();
    this.performSearch("parks");
    this.performSearch("flowers");
    this.performSearch("bridges");
  }

  performSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((responseData) => {
        if (query === "parks") {
          this.setState({ parkPhotos: responseData.data.photos.photo });
        } else if (query === "bridges") {
          this.setState({ bridgePhotos: responseData.data.photos.photo });
        } else if (query === "flowers") {
          this.setState({ flowerPhotos: responseData.data.photos.photo });
        } else {
          this.setState({ photo: responseData.data.photos.photo });
        }
        // console.log(query);
      })
      .catch((error) => {
        console.log("an error occured", error);
      });
  };

  render() {
    // console.log(this.state);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav data={this.state} />
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => <PhotoList data={this.state.photo} />}
            />
            <Route
              path="/parks"
              render={() => <PhotoList data={this.state.parkPhotos} />}
            />
            <Route
              path="/bridges"
              render={() => <PhotoList data={this.state.bridgePhotos} />}
            />
            <Route
              path="/"
              render={() => <PhotoList data={this.state.flowerPhotos} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
