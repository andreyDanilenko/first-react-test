import React, { useState } from "react";
import '../components/app.scss'
import BrandsList from "../components/brandsList/BrandsList";
import { brandData } from "../mock/data";

const Partners = () => {
  return (
    <div>
      <BrandsList
        brandData={brandData}
        title='Партнеры и предложения'
      />
    </div>
  )
}

export default Partners;