import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("Child Constructor " + this.props.name);
  }

  componentDidMount() {
    console.log("Child componentDidMount " + this.props.name);
  }

  render() {
    const { name } = this.props;
    const { count, countOne } = this.state;
    console.log("Child render" + this.props.name);
    return (
      <div>
        <h1>Count:{count}</h1>
        {/* <h1>Count:{countOne}</h1> */}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              //   countOne: this.state.countOne + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>About Us Page</h1>
        <h2>{name}</h2>
        <p>This is an about us page</p>
      </div>
    );
  }
}

export default UserClass;
