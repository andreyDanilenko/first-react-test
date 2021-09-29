import React from 'react';
import { Link } from 'react-router-dom';
import './brandPage.scss'

const BrandPage = () => {
  return (
    <div className="brand-page container">
      <Link to="/partners" className="brand-page__link" >Скидочные купоны · Развлечения</Link>
    </div>
  )
}

export default BrandPage;