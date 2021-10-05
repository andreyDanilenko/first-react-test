import React from "react";
import { useLocation } from "react-router-dom";

const Error = () => {
  let location = useLocation();

  return (
    <div className="main">
      <h1>Страница не найдена <code>{location.pathname}</code></h1>
    </div>
  )
}

export default Error;