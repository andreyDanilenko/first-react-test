import React from 'react'
import './brandStats.scss'

function BrandStats(props) {



  return (
    <div className="stats">

      <div className="stats__sale">
        <div className='stats__sale-items'>
          {props.brands.slice(0, 5).map(brand =>
            <div key={brand.id} className="stats__sale-item">
              <img className="stats__sale-img" src={brand.poster} />
            </div>
          )}
        </div>
      </div>

      <div className="stats__sale">
        <div className='stats__sale-items'>
          {props.brands.slice(0, 3).map(brand =>
            <div key={brand.id} className="stats__sale-item">
              <img className="stats__sale-img" src={brand.poster} />
            </div>
          )}
        </div>
        <div className='stats__sale-items'>
          {props.brands.slice(0, 3).map(brand =>
            <div key={brand.id} className="stats__sale-item">
              <img className="stats__sale-img" src={brand.poster} />
            </div>
          )}
        </div>
      </div>

      <div className="stats__sale">
        <div className='stats__sale-items'>
          {props.brands.slice(0, 5).map(brand =>
            <div key={brand.id} className="stats__sale-item">
              <img className="stats__sale-img" src={brand.poster} />
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default BrandStats
