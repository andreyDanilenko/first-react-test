import React, { useState } from "react";
import './app.scss';
import BrandsList from "./brandsList/BrandsList";
import Navbar from "./navbar/Navbar";
import { cardData } from "../mock/data";

const App = () => {
  const [brands, setBrands] = useState(cardData)

  const filterBrands = (filter) => {
    if (filter === 'all') {
      return setBrands([...cardData]);
    }
    setBrands([...cardData].filter((film) => film.isСategory === filter))
  }

  return (
    <div className="title">
      <Navbar />
      <BrandsList brands={brands} title='Партнеры и предложения' filterBrands={filterBrands} />
    </div>
  )
}

export default App;