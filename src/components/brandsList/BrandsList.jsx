import React, { useState } from 'react';
import BrandItem from '../brandItem/BrandItem';
import './brandsList.scss';
import { filterOptions } from '../../utils/flterOptions';
import { getTitleButton } from '../../utils/utils';
import MyButton from '../UI/button/MyButton';
import MyFilter from '../UI/filter/MyFilter';

const BrandsList = ({ brandData, title }) => {
  const [currentOptions, setCurrentOptions] = useState(10)
  const [renderOptions, setRenderOptions] = useState(true)
  const [currentBrands, setCurrentBrands] = useState(5)
  const [brands, setBrands] = useState(brandData)

  const filterBrands = (filter) => {
    setCurrentBrands(5)

    if (filter === 'all') {
      return setBrands([...brandData]);
    }

    if (filter === 'popular') {
      return setBrands([...brandData].filter((brand) => brand.popular))
    }

    setBrands([...brandData].filter((brand) => brand.isСategory === filter))
  }

  const onMoreOptions = () => {
    setCurrentOptions(filterOptions.length)
    setRenderOptions(false);
  }

  const onMoreBrands = () => {
    setCurrentBrands(currentBrands + 5)
  }

  const titleButton = getTitleButton(brands.length - currentBrands);

  const toggle = false;
  return (
    <div className="brands container">
      <h1 className="brands__title">{title}</h1>

      <MyFilter
        onChange={filterBrands}
        onMore={{ onMoreOptions, renderOptions }}
        options={filterOptions.slice(0, currentOptions)} />

      <div className="brands__item">
        {brands.slice(0, currentBrands).map(brand =>
          <BrandItem brand={brand} toggle={toggle} key={brand.id} />)}

        {brands.length > currentBrands ?
          <MyButton onClick={() => onMoreBrands()}>
            Еще {brands.length - currentBrands} {titleButton}
          </MyButton> : ''}
      </div>

    </div>
  )
}

export default BrandsList;