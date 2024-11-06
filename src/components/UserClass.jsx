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
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yaseen-kc");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div className="text-left">
        <h2 className="">Name: {this.state.userInfo.name}</h2>
        <span>Bio: {this.state.userInfo.bio}</span>
        <img
          className="rounded-md"
          src={this.state.userInfo.avatar_url}
          alt="Not Found"
        />
      </div>
    );
  }
}

export default UserClass;
