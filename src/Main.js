import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";
  import FavoriteBooks from "./FavoriteBooks";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Web Organnizer</h1>
          <ul className="header">
            <li><NavLink exact to="/">search engines</NavLink></li>
            <li><NavLink to="/stuff">entertainment</NavLink></li>
            <li><NavLink to="/contact">online shopping</NavLink></li>
            <li><NavLink to="/favoritebooks">social media</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/favoritebooks" component={FavoriteBooks}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;