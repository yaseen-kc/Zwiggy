import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        userName: "dummyName",
        userLocation: "dummyLocation",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yaseen-kc");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child render");
    return (
      <div>
        <h2>Profile Class Component</h2>
        <img src={this.state.userInfo.avatar_url} alt="Not Found" />
        <h2>{this.state.userInfo.name}</h2>
      </div>
    );
  }
}

export default UserClass;
