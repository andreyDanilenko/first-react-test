import React from 'react';
import './brandItem.scss'

const BrandItem = (props) => {
  return (
    <div className="brand">
      <div className="brand__percent">{props.brand.bonusSave}</div>
      <div className="brand__description">от суммы покупки</div>
      <img className="brand__poster" src={props.brand.poster} />
      <div className="brand__title">{props.brand.name}</div>
    </div>
  )
}

export default BrandItem;