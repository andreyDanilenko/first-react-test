import React, { useEffect, useState } from 'react';
import BrandItem from '../brandItem/BrandItem';
import './brandsList.scss';
import { filterOptions } from '../../utils/flterOptions';
import { getTitleButton } from '../../utils/utils';
import MyButton from '../UI/button/MyButton';
import MyFilter from '../UI/filter/MyFilter';
import MySwitchButton from '../UI/switchButton/MySwitchButton';

const BrandsList = ({ brandData, title }) => {
  const [brands, setBrands] = useState(brandData)
  const [currentOptions, setCurrentOptions] = useState(10)
  const [renderOptions, setRenderOptions] = useState(true)
  const [toggle, setToggle] = useState(true)
  const [currentBrands, setCurrentBrands] = useState(5)
  const [filter, setFilter] = useState('all')
  const [filtersBrand, setFilterBrand] = useState()

  const filterBrands = (filter) => {
    setFilterBrand([...brands])
    setFilter(filter)
    setCurrentBrands(5)

    if (filter === 'all') {
      if (!toggle) {
        return setBrands([...brandData].filter((brand) => !brand.bonusUse === false))
      }

      return setBrands([...brandData]);
    }

    if (filter === 'popular') {
      if (!toggle) {
        return setBrands([...brandData].filter((brand) => brand.popular && !brand.bonusUse === false))
      }

      return setBrands([...brandData].filter((brand) => brand.popular))
    }

    if (!toggle) {
      return setBrands([...brandData].filter((brand) => brand.isСategory === filter && !brand.bonusUse === false))
    }
    return setBrands([...brandData].filter((brand) => brand.isСategory === filter))
  }

  const onMoreOptions = () => {
    setCurrentOptions(filterOptions.length)
    setRenderOptions(false);
  }

  const onMoreBrands = () => {
    setCurrentBrands(currentBrands + 5)
  }

  const onSwitch = () => {
    setToggle(!toggle);

    if (toggle) {
      setFilterBrand([...brands])
      return setBrands([...brands].filter((brand) => !brand.bonusUse === false))

    }
    filterBrands(filter)
    setBrands([...filtersBrand])
  }

  const titleButton = getTitleButton(brands.length - currentBrands);

  return (
    <div className="brands container">
      <h1 className="brands__title">{title}</h1>

      <MyFilter
        onChange={filterBrands}
        onMore={{ onMoreOptions, renderOptions }}
        options={filterOptions.slice(0, currentOptions)} />

      <MySwitchButton onClick={() => onSwitch()} />

      <div className="brands__item">
        {brands.slice(0, currentBrands).map(brand =>
          <BrandItem brand={brand} toggle={toggle} key={brand.id} />
        )}

        {brands.length > currentBrands ?
          <MyButton onClick={() => onMoreBrands()}>
            Еще {titleButton}
          </MyButton> : ''}
      </div>

    </div>
  )
}

export default BrandsList;