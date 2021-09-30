import React, { useState } from 'react';
import BrandItem from '../brandItem/BrandItem';
import './brandsList.scss'
import { filterOptions } from '../../utils/flterOptions';
import MyButton from '../UI/button/MyButton';
import MyFilter from '../UI/filter/MyFilter';

const BrandsList = ({ brands, title, filterBrands }) => {
  const [currentOptions, setCurrentOptions] = useState(10)
  const [renderOptions, setRenderOptions] = useState(true)
  const [currentBrands, setCurrentBrands] = useState(5)
  const [renderBrands, setRenderBrands] = useState(true)


  const onMoreOptions = () => {
    setCurrentOptions(filterOptions.length)
    setRenderOptions(false);
  }



  const toggle = false;
  return (
    <div className="brands container">
      <h1 className="brands__title">{title}</h1>

      <MyFilter
        onChange={filterBrands}
        onMore={{ onMoreOptions, renderOptions }}
        options={filterOptions.slice(0, currentOptions)} />

      <div className="brands__wrapper">
        {brands.map(brand =>
          <BrandItem brand={brand} toggle={toggle} key={brand.id} />
        )}
      </div>

      {brands.length > currentBrands ? <MyButton>Еще {brands.length} партнеров</MyButton> : ''}
    </div>
  )
}

export default BrandsList;