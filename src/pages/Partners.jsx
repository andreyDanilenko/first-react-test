import React, { useState } from "react";
import '../components/app.scss'
import BrandsList from "../components/brandsList/BrandsList";
import { cardData } from "../mock/data";

const Partners = () => {

  const [brands, setBrands] = useState(cardData)
  const filterBrands = (filter) => {
    if (filter === 'all') {
      return setBrands([...cardData]);
    }
    if (filter === 'popular') {
      return setBrands([...cardData].filter((brand) => brand.popular))
    }

    setBrands([...cardData].filter((brand) => brand.isСategory === filter))
  }

  return (
    <div>
      <BrandsList
        brands={brands}
        title='Партнеры и предложения'
        filterBrands={filterBrands}
      />
    </div>
  )
}

export default Partners;