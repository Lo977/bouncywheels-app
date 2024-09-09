import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1 style={{ color: "red" }}>Opps Something Went Wrong...</h1>
    </div>
  );
}

export default ErrorPage;
