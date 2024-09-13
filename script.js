import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("h1", { id: "heading" }, "Namaste React");
const Parent = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// ! Functional Component - Function that return JSX or ReactElement
const HeadingComponent = () => (
  <div id="container">
    <Parent />
    <h1>Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
