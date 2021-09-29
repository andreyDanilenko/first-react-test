import React from 'react';
import { useHistory } from 'react-router-dom';
import './brandItem.scss'

const BrandItem = ({ brand, toggle }) => {
  const history = useHistory()

  return (
    <div className="brand" onClick={() => history.push('/partners' + '/' + brand.name)}>
      <div className="brand__percent">{toggle ? brand.bonusSave : brand.bonusUse}</div>
      <div className="brand__description">{toggle ? 'от суммы покупки' : 'скидка за бонусы'}</div>
      <img className="brand__poster" src={brand.poster} />
      <div className="brand__title">{brand.name}</div>
    </div>
  )
}

export default BrandItem;