export const getTitleButton = (num) => {
  const numStr = String(num)
  let str = '';
  const isOne = numStr[numStr.length - 1] === '2'
    || numStr[numStr.length - 1] === '3'
    || numStr[numStr.length - 1] === '4'
  const isTwo = numStr[numStr.length - 1] === '1';
  const isThree = !isOne && !isTwo
    || numStr === '11'
    || numStr === '12'
    || numStr === '13'
    || numStr === '14';
  if (isOne) {
    str = numStr + ' партнера'
  }
  if (isTwo) {
    str = numStr + ' партнер'
  }
  if (isThree) {
    str = numStr + ' партнеров'
  }
  return str;
}