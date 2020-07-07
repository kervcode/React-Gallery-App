import React from "react";
import "./NavComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../css/index.css";

import Nav from "./NavComponent";
import SearchBox from "./searchForm.component";
import PhotoList from "./PhotoList.component";
import NotFound from "./NotFound.component";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <SearchBox on />
        <Nav />
        <Switch>
          <Route exact path="/" component={PhotoList} />
          <Route path="/boats" component={PhotoList} />
          <Route path="/rivers" component={PhotoList} />
          <Route path="/beaches" component={PhotoList} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
