import React, { useState } from "react";
import './app.scss';
import BrandsList from "./brandsList/BrandsList";
import Navbar from "./navbar/Navbar";
import { cardData } from "../mock/data";

const App = () => {
  const [brands, setBrands] = useState(cardData)

  return (
    <div className="title">
      <Navbar />
      <BrandsList brands={brands} title='Партнеры и предложения' />
    </div>
  )
}

export default App;