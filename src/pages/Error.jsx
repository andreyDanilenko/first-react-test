import React from "react";
import { useLocation } from "react-router-dom";



const Error = () => {
  let location = useLocation();

  return (
    <h1>Страница не найдена <code>{location.pathname}</code></h1>
  )
}

export default Error;