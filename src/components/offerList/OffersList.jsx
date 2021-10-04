import React, { useState } from 'react';
import { filterOptions } from '../../utils/flterOptions';
import OfferItem from '../offerItem/offerItem';
import MyButton from '../UI/button/MyButton';
import './offersList.scss'

function OffersList(props) {
  const offers = [...props.brands].filter((brand) => brand.promo !== '')
  const [currentOffers, setCurrentOffers] = useState(3)

  let title = ''
  filterOptions.forEach((filter) => {
    if (filter.value === props.filter) {
      title = filter.name;
    }
  });

  return (
    <div className='offers'>
      <h2>{props.filter === 'all' ?
        offers.length + ' предложений от партнеров' : offers.length ?
          offers.length + ' предложений от партнеров в категории ' + `«${title}»` : ''
      }</h2>
      <div className="offers__items">
        {offers.slice(0, currentOffers).map(offer =>
          <OfferItem offer={offer} />
        )}
      </div>

      <div className="offers__button-more">
        {offers.length > currentOffers ?
          <MyButton typeStyle={'more'}>
            Еще {offers.length - currentOffers}
          </MyButton> : ''}
      </div>

    </div>
  )
}

export default OffersList
