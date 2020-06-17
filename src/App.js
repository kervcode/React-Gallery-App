import React from "react";
import SearchForm from "./components/SearchForm/searchForm.component";
import Nav from "./components/Nav/NavComponent";
import Photo from "./components/Photo/Photo.compnent";
import NotFound from "./components/NotFound/NotFound.component";
import "./App.css";
import "./config";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Photo />
      <NotFound />
    </div>
  );
}

export default App;
