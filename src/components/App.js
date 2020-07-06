import React, { Component } from "react";
import "./NavComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../css/index.css";
import axios from "axios";
import apikey from "../config";
import Nav from "./NavComponent";
import SearchBox from "./searchForm.component";
import PhotoList from "./PhotoList.component";
import NotFound from "./NotFound.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      cats: [],
      dogs: [],
      computers: [],
    };
  }

  componentDidMount() {
    this.performSearch("love");
    this.performSearch("cats");
    this.performSearch("dogs");
    this.performSearch("computers");
  }

  performSearch = (query) => {
    // console.log(query);
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "cats") {
          this.setState({ cats: response.data.photos.photo });
        } else if (query === "dogs") {
          this.setState({ dogs: response.data.photos.photo });
        } else if (query === "computers") {
          this.setState({ computers: response.data.photos.photo });
        } else {
          this.setState({ searchResults: response.data.photos.photo });
        }

        // console.log(this.state);
      })
      .catch((error) => {
        console.log("Error fetching data!", error);
      });
  };
  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchBox onSubmit={this.performSearch} />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <PhotoList data={this.state.searchResults} />}
            />
            <Route
              path="/cats"
              render={() => <PhotoList data={this.state.cats} />}
            />
            <Route
              path="/dogs"
              render={() => <PhotoList data={this.state.dogs} />}
            />
            <Route
              path="/computers"
              render={() => <PhotoList data={this.state.computers} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
