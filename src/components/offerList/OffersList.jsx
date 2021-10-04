import React, { useState } from 'react';
import { filterOptions } from '../../utils/flterOptions';
import { getPromoTitle } from '../../utils/utils';
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

  if (props.currentOffer === false && currentOffers !== 3) {
    setCurrentOffers(3)
  }

  const onMoreOffers = () => {
    setCurrentOffers(currentOffers + 6)
  }

  const offerTitle = getPromoTitle(offers.length)
  const offerTitleButton = getPromoTitle(offers.length - currentOffers)

  return (
    <div className='offers'>
      <h2>{props.filter === 'all' ?
        ` ${offerTitle} от партнеров` : offers.length ?
          ` ${offerTitle}  от партнеров в категории ` + `«${title}»` : ''
      }</h2>
      <div className="offers__items">
        {offers.slice(0, currentOffers).map(offer =>
          <OfferItem offer={offer} />
        )}
      </div>

      <div className="offers__button-more">
        {offers.length > currentOffers ?
          <MyButton
            typeStyle={'more'}
            onClick={() => onMoreOffers()}>
            Еще {offerTitleButton}
          </MyButton> : ''}
      </div>

    </div>
  )
}

export default OffersList
