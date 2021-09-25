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
  0: 'bork.png',
  1: 'burger.png',
  2: 'evroset.png',
  3: 'lamoda.png',
  4: 'mvideo.png',
  5: 'technopark.png',
}[getRandomInt(0, 4)]);


const generateObject = () => (
  {
    'poster': generatePoster(),
    'bonusSave': generateSaleSave(),
    'bonusUse': generateSaleUse(),
    'brand': generateBrand(),
  }
);

const CARD_COUNT = 23;
export const cardData = new Array(CARD_COUNT).fill().map(() => generateObject());