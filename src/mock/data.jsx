export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generateBrand = () => ({
  0: 'М.Видео',
  1: 'Бургер Кинг',
  2: 'Холодильник.ру',
  3: 'BORK',
  4: 'Евросеть',
  5: 'IvI',
  6: 'Lamoda',
}[getRandomInt(0, 6)]);

const generateSaleSave = () => ({
  0: '1',
  1: '2',
  2: '3,5',
  3: '4,5',
  4: '5,5',
  5: '7,5',
}[getRandomInt(0, 5)]);

const generateSaleUse = () => ({
  0: '25',
  1: '30',
  2: '40',
  3: '50',
  4: '75',
  5: '90',
}[getRandomInt(0, 5)]);

const generatePoster = () => ({
  0: '../../assets/img/bork.png',
  1: '../../assets/img/burger.png',
  2: '../../assets/img/evroset.png',
  3: '../../assets/img/lamoda.png',
  4: '../../assets/img/mvideo.png',
  5: '../../assets/img/technopark.png',
  6: '../../assets/img/booking.png',
  7: '../../assets/img/ozon.png',
  8: '../../assets/img/sberbank.png',
  9: '../../assets/img/tez.png',
  10: '../../assets/img/tripster.png',
}[getRandomInt(0, 10)]);


const generatePromoPoster = () => ({
  0: '../../assets/img/offer-electrolux.png',
  1: '../../assets/img/offer-evroset.png',
  2: '../../assets/img/offer-mvideo.png',
}[getRandomInt(0, 2)]);

const generatePromoDescription = () => ({
  0: '20% спасибо за технику Electrolux',
  1: '10% спасибо за покупки в черную пятницу',
  2: '15% спасибо для студентов',
}[getRandomInt(0, 2)]);

const generateCategory = () => ({
  0: 'all',
  1: 'popular',
  2: 'markets',
  3: 'cafe',
  4: 'taxi',
  5: 'beauty',
  6: 'electronics',
  7: 'zoo',
  8: 'cinema',
  9: 'connect',
  10: 'lottery',
  11: 'sport',
  12: 'trip',
  13: 'health',
  14: 'insurance',
  15: 'immovables',
  16: 'entertainment',
  17: 'education',
}[getRandomInt(0, 17)]);

function createId() {
  const random = Math.random();
  return random.toString(10).substr(10);
}

const generateObject = () => (
  {
    'id': createId(),
    'poster': generatePoster(),
    'bonusSave': generateSaleSave(),
    'bonusUse': getRandomInt(0, 10) < 7 ? false : generateSaleUse(),
    'name': generateBrand(),
    'isUse': Boolean(getRandomInt(0, 1)),
    'isСategory': generateCategory(),
    'popular': getRandomInt(0, 100) < 2 ? true : false,
    'promo': getRandomInt(0, 13) < 3 ? {
      'title': 'Apple Music за СПАСИБО',
      'poster': generatePromoPoster(),
      'time': 'C 17 Декабря 2018 г. по 17 Декабря 2019 г.',
      "description": generatePromoDescription(),
    } : '',
  }
);

const CARD_COUNT = 197;
export const brandData = new Array(CARD_COUNT).fill().map(() => generateObject());