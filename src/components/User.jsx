import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Button
      </button>
      <h1>About Us Page(Function Based)</h1>
      <h2>Functional {name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi sit
        vel laudantium inventore eaque natus facere quidem earum omnis.
      </p>
    </div>
  );
};

export default User;
