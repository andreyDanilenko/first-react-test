import React from "react";
import './app.scss';
import BrandItem from "./brandItem/BrandItem";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <div className="title">
      <Navbar />
      <BrandItem />
    </div>
  )
}

export default App;