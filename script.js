import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("h1", { id: "heading" }, "Namaste React");
const parent = <h1 id="heading">Namaste React using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
