import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      //   countOne: 2,
    };
  }
  render() {
    const { name } = this.props;
    const { count, countOne } = this.state;
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
        <h1>About Us Page(Class Based)</h1>
        <h2>Component {name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi
          sit vel laudantium inventore eaque natus facere quidem earum omnis.
        </p>
      </div>
    );
  }
}

export default UserClass;
