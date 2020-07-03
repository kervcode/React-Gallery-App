import React, { Component } from "react";
import './NavComponent'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import '../css/index.css'
import axios from 'axios';
import apikey from '../config';
import Nav from "./NavComponent";
import SearchBox from './searchForm.component'
import PhotoList from './PhotoList.component'

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],

    }
  }


  componentDidMount() {
    this.performSearch('love')
  }

  handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target.value)
      .currentTarget.reset();
  }

  performSearch = (query) => {
      axios.get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        ).then(response => {
          this.setState({data: response.data.photos.photo})
          console.log(this.state)
        }).catch((error) => {
          console.log('Error fetching data!', error)
        })
  }
  render(){
  return (
    <div className="container">
      <SearchBox onSubmit={this.performSearch}/>
      <BrowserRouter>
        <Switch>
          <Nav data={this.state.data}/>
          <Route path='/' render={(props)=> <PhotoList data={this.state.data}/>}/>
          <Route path='/cats' render={()=> <PhotoList data={this.state.data}/>} />
          <Route path='/dogs' render={()=>{}}/>
          <Route path='/computers' render={()=>{}}/>
        </Switch>
      </BrowserRouter>
   </div>
  );
}}

export default App;
