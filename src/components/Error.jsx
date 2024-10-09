import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Page Not Found</h2>
      <h4>{err.status}</h4>
    </div>
  );
};

export default Error;
