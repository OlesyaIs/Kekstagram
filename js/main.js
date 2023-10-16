//Получение псевдослучайного числа из заданного интервала (min >=0), включая границы
const getRandomInt = function (min = 0, max = 1) {

  if (min < 0 || max < 0) {
    return NaN;
  }

  if (min >= max) {
    let swip = min;
    min = max;
    max = swip;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Сравниваем длину строки с максимальной длиной строки
const checkStringLimit = (text, maxLenght) => {
  return text.length <= maxLenght ? true : false;
}
