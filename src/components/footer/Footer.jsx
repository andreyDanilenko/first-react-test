import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/footer-logo.png'

function Footer() {
  return (
    <div className="footer">
      <div className=" footer__wrapper container">
        <div className="footer__primary">
          <h2 className="footer__primary-title">900</h2>
          <p className="footer__primary-description">По России бесплатно</p>
          <img className='footer__primary-img' src={Logo} />
          <p className="footer__primary-description">© 1997—2019 ПАО Сбербанк.</p>
        </div>

        <div className="footer__main">
          <div className="footer__nav">
            <ul className="footer__links">
              {/* Link позволяет испльзовать навигацию без перезагрузки страницы */}
              <li><NavLink activeClassName="active" to="/coupons">Купоны</NavLink></li>
              <li><NavLink to="/impressions">Впечатления</NavLink></li>
              <li><NavLink to="/air-tickets">Авиабилеты</NavLink></li>
              <li><NavLink to="/railway-tickets">Ж/д билеты</NavLink></li>
              <li><NavLink to="/hotels">Отели</NavLink></li>
              <li><NavLink to="/partners">Партнеры и предложения</NavLink></li>
              <li><NavLink to="/mobile-app">Мобильное приложение</NavLink></li>
              <li><NavLink to="/lottery">Лотерея</NavLink></li>
              <li><NavLink to="/about">О программе</NavLink></li>
              <li><NavLink to="/charity">Благотворительность</NavLink></li>
            </ul>
          </div>

          <div className="footer__contacts">
            <ul className="footer__store-list">
              <li className="footer__store-item"></li>
              <li className="footer__store-item"></li>
            </ul>
            <ul className="footer__social-list">
              <li className="footer__social-item"></li>
              <li className="footer__social-item"></li>
              <li className="footer__social-item"></li>
              <li className="footer__social-item"></li>
            </ul>
          </div>
          <p className="footer__description">Политика АО «ЦПЛ» в отношении обработки персональных данных и Согласие на обработку данных участника Программы «Спасибо от Сбербанка»</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;
