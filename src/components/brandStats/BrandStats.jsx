import React from 'react'
import './brandStats.scss'

function BrandStats(props) {
  const filterTopSavePercent = props.brands.slice().sort((a, b) => (b.bonusSave > a.bonusSave) ? 1 : -1);
  const filterTopUsePercent = props.brands.slice().sort((a, b) => (b.bonusUse > a.bonusUse) ? 1 : -1);

  return (
    <div className="stats">

      <div className="stats__sale">
        <div className='stats__sale-items'>
          {filterTopUsePercent.slice(0, 5).map(brand =>
            <div key={brand.id} className="stats__sale-item">
              <img className="stats__sale-img" src={brand.poster} />
            </div>
          )}
          <div className='stats__sale-items-title'>Скидки за бонусы</div>
        </div>

      </div>

      <div className="stats__sale">
        <div className='stats__sale-items'>
          {filterTopSavePercent.slice(0, 3).map(brand =>
            <div key={brand.id} className="stats__sale-item">
              <img className="stats__sale-img" src={brand.poster} />
              <div className="stats__sale-percent">{brand.bonusSave}%</div>
            </div>
          )}
          <div className='stats__sale-items-title stats__sale-items-title--special'>Большой % начисления</div>
        </div>
        <div className='stats__sale-items'>
          {props.brands.slice(0, 3).map(brand =>
            <div key={brand.id} className="stats__sale-item">
              <img className="stats__sale-img" src={brand.poster} />
            </div>
          )}
          <div className='stats__sale-items-title'>Выгодные купоны</div>
        </div>
      </div>

      <div className="stats__sale">
        <div className='stats__sale-items'>
          {props.brands.slice(0, 5).map(brand =>
            <div key={brand.id} className="stats__sale-item">
              <img className="stats__sale-img" src={brand.poster} />
            </div>
          )}
          <div className='stats__sale-items-title'>Персональное исходя из трат</div>
        </div>
      </div>

    </div>
  )
}

export default BrandStats
