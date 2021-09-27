import React from 'react';
import BrandItem from '../brandItem/BrandItem';
import './brandsList.scss'
import MyButton from '../UI/button/MyButton';
import MyFilter from '../UI/filter/MyFilter';

const BrandsList = ({ brands, title, filterBrands }) => {
  return (
    <div className="brands container">
      <h1 className="brands__title">{title}</h1>
      <MyFilter
        onChange={filterBrands}
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
          { value: 'lottery', name: 'Лотереи' }]} />
      <div className="brands__wrapper">
        {brands.map(brand =>
          <BrandItem brand={brand} key={brand.id} />
        )}
      </div>
      <MyButton>Еще партнеров</MyButton>
    </div>
  )
}

export default BrandsList;