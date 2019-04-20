import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <ul>
        <li><a style = {{color:"blue"}} href = "https://www.google.com">Google</a></li>
        <li><a style = {{color:"blue"}} href = "https://www.bing.com">Bing</a></li>
        <li><a style = {{color:"blue"}} href = "https://www.yahoo.com">Yahoo</a></li>
        </ul>
      </div>
    );
  }
}
 
export default Home;