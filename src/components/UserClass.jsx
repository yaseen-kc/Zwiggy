import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div>
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
