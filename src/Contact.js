import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to your online shopping area</h2>
       <ul>
         <li><a style = {{color:"green"}} href="http://www.ebay.com">ebay</a></li>
         <li><a style = {{color:"green"}} href="http://www.amazon.com">amazon</a></li>
         <li><a style = {{color:"green"}} href="http://www.airbnb.com">airbnb</a></li>
       </ul>
         
      </div>
    );
  }
}
 
export default Contact;