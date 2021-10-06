import React from "react";
import '../components/app.scss'
import BrandsList from "../components/brandsList/BrandsList";
import { brandData } from "../mock/data";

const Partners = () => {
  return (
    <div className="main">
      <BrandsList
        brandData={brandData}
      />
    </div>
  )
}

export default Partners;