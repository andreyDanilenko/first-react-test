import React from 'react'
import './offerItem.scss'

function OfferItem(props) {
  return (
    <div className='offer'>
      <img className='offer__img' src={props.offer.promo.poster} alt='promo' />
      <div className="offer__info">
        <img className='offer__brand-img' src={props.offer.poster} alt='promo' />
        <div className="offer__text">
          <p className="offer__brand-name">{props.offer.name}</p>
          <p className="offer__description">{props.offer.promo.description}</p>
        </div>
      </div>
    </div>
  )
}

export default OfferItem
