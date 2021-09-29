import React from 'react';
import BrandItem from '../brandItem/BrandItem';
import './brandsList.scss'
import { filterOptions } from '../../utils/flterOptions';
import MyButton from '../UI/button/MyButton';
import MyFilter from '../UI/filter/MyFilter';

const BrandsList = ({ brands, title, filterBrands }) => {
  const toggle = false; 
  return (
    <div className="brands container">
      <h1 className="brands__title">{title}</h1>
      <MyFilter
        onChange={filterBrands}
        options={filterOptions} />
      <div className="brands__wrapper">
        {brands.map(brand =>
          <BrandItem brand={brand} toggle={toggle} key={brand.id} />
        )}
      </div>
      {brands.length ? <MyButton>Еще {brands.length} партнеров</MyButton> : ''}
    </div>
  )
}

export default BrandsList;