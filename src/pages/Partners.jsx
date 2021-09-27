import React, { useState } from "react";
import '../components/app.scss'
import BrandsList from "../components/brandsList/BrandsList";
import Navbar from "../components/navbar/Navbar";
import { cardData } from "../mock/data";

const Partners = () => {
  const [brands, setBrands] = useState(cardData)

  const filterBrands = (filter) => {
    if (filter === 'all') {
      return setBrands([...cardData]);
    }
    setBrands([...cardData].filter((film) => film.isСategory === filter))
  }

  return (
    <div>
      <BrandsList brands={brands} title='Партнеры и предложения' filterBrands={filterBrands} />
    </div>
  )
}

export default Partners;