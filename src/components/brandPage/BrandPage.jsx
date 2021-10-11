import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Map from '../map/Map';
import './brandPage.scss'

const BrandPage = () => {
  return (
    <div className="main">
      <div className="brand-page container">
        <Link to="/partners" className="brand-page__link" >Скидочные купоны · Развлечения</Link>
        <h1 className="brand-page__title">Apple Music за СПАСИБО</h1>
        <div className="card">
          <img src="../assets/img/apple-promo.jpg" className="card__poster" />
          <div className="card__period">C 17 Декабря 2018 г. по 17 Декабря 2019 г.</div>
          <h3 className="card__title card__title--present">Обменивайте 169 СПАСИБО на месяц подписки в Apple Music и наслаждайтесь любимой музыкой без перерыва.</h3>
          <ul className="card__list card__list--present">
            <li className="card__item card__item--present">Получите доступ к миллионам альбомов, исполнителей и песен</li>
            <li className="card__item card__item--present">Эксклюзивный и оригинальный контент</li>
            <li className="card__item card__item--present">Вы можете отказаться от подписки в любой момент</li>
            <li className="card__item card__item--present">Скачивайте любимую музыку и слушайте офлайн</li>
          </ul>
          <h3 className="card__title card__title--way">Как использовать промо-код:</h3>
          <ul className="card__list card__list--way">
            <li className="card__item">1. Откройте приложение «Музыка» и введите существующий Apple ID и пароль для входа в учетную запись. (Если у   вас нет Apple ID, вам будет предложено его создать).</li>
            <li className="card__item">2. Нажмите на «3 месяца бесплатно» (специальное предложение для новых пользователей).</li>
            <li className="card__item">3. Выберите индивидуальную подписку и нажмите «3 месяца бесплатно».</li>
            <li className="card__item">4. Перейдите в учетную запись.</li>
            <li className="card__item">5. Нажмите «Использовать код».</li>
            <li className="card__item">6. Введите 12-значный код.</li>
            <li className="card__item">7. Получите сообщение с подтверждением использования кода.</li>
          </ul>
          <p className="card__info">Под персональными данными в целях настоящих Правил понимаются персональные данные Участников Акции и иных лиц - субъектов персональных данных как они определены в Законе «О персональных данных». Под обработкой персональных данных в настоящих Правилах понимается любое действие (операция), совершаемое в целях проведения Акции, или совокупность действий(операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных
            данных, предоставленных Участником Акции Банку/ Уполномоченной Компании.</p>
          <a href="#" className="card__info-link">Подробнее об Apple Music для Android</a>
          <a href="#" className="card__info-link card__info-link--last">Правила акции</a>
          <div className="card__info-result">
            <p>Только при оформлении индивидуальной подписки. По окончании пробного периода подписка будет продлена автоматически. 4 месяца бесплатно только для новых подписчиков. Срок действия кода истекает 31 января 2020 года. Это промокод, который не подлежит перепродаже, обмену на денежный эквивалент и замене в случае кражи или потери. Предложение действительно при оформлении индивидуальной подписки на Apple Music на территории Российской Федерации. Требуется учетная запись iTunes.</p>
            <p>Применяются соответствующие условия <a href='#' className="card__info-link card__info-link--result">(подробнее).</a></p>
            <p> Промокодом может воспользоваться лицо старше 13 лет, чье местоположение совпадает со страной/регионом магазина, в котором активируется код.
              Требуются совместимые продукты и сервисы. Apple Music — зарегистрированная торговая марка Apple. Apple не является участником или спонсором этой промоакции.</p>
          </div>
          <div>

            <Map />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandPage;