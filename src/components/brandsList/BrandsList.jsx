import React, { useState } from 'react';
import BrandItem from '../brandItem/BrandItem';
import './brandsList.scss'
import MyButton from '../UI/button/MyButton';
import MySort from '../UI/sort/MySort';

const BrandsList = ({ brands, title }) => {
  const [sort, setSort] = useState('')

  const sortBrands = (sort) => {
    setSort(sort)
    console.log(sort);
  }

  return (
    <div className="brands container">
      <h1 className="brands__title">{title}</h1>
      <MySort
        value={sort}
        onChange={sortBrands}
        options={


          [{ value: 'all', name: 'Все партнеры' },
          { value: 'popular', name: 'Популярные' },
          { value: 'markets', name: 'Супермаркеты' },
          { value: 'cafe', name: 'Кафе и рестораны' },
          { value: 'taxi', name: 'Такси' },
          { value: 'beauty', name: 'Красота' },
          { value: 'electronics', name: 'Электроника и бытовая техника' },
          { value: 'zoo', name: 'Зоотовары' },
          { value: 'cinema', name: 'Кино и театр' },
          { value: 'connect', name: 'Связь и интерент' },
          { value: 'lottery', name: 'Лотереи' },]
        } />
      <div className="brands__wrapper">
        {brands.map(brand =>
          <BrandItem brand={brand} key={brand.id} />
        )}
      </div>
      <MyButton>Еще 20 партнеров</MyButton>
    </div>
  )
}

export default BrandsList;