import React from "react";
import UserClass from "./UserClass";
// import { Component } from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Page</h1>
        <p>This is a part of the Namaste React Day 08 </p>
        <UserClass name={"Name 1"} />
      </div>
    );
  }
}
export default About;
