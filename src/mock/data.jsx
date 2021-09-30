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
  0: '1%',
  1: '2%',
  2: '3,5%',
  3: '4,5%',
}[getRandomInt(0, 3)]);

const generateSaleUse = () => ({
  0: '25%',
  1: '30%',
  2: 'до 40%',
  3: 'до 90%',
}[getRandomInt(0, 3)]);

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
}[getRandomInt(0, 10)]);

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
    'popular': getRandomInt(0, 10) < 2 ? true : false,
    'promo': {
      'title': 'Apple Music за СПАСИБО',
      'poster': '../../assets/img/apple-promo.jpg',
      'time': 'C 17 Декабря 2018 г. по 17 Декабря 2019 г.',
    }
  }
);

const CARD_COUNT = 26;
export const brandData = new Array(CARD_COUNT).fill().map(() => generateObject());