import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to your entertainment sites</h2>
        <ul>
        <li><a style = {{color:"red"}} href="http://www.youtube.com">youtube</a></li>
        <li><a style = {{color:"green"}} href="http://www.netflix.com">Netflix</a></li>
        </ul>
      </div>
    );
  }
}
 
export default Stuff;