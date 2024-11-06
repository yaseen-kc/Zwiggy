import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Page</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="pb-4">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
          <UserClass name={"Name 1"} />
        </div>
      </div>
    );
  }
}

export default About;
