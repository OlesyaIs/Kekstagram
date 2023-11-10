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

//Сравнение длины строки с максимальной длиной строки
const checkStringLimit = (text, maxLenght) => {
  return text.length <= maxLenght ? true : false;
};

// Получение массива чисел от min до max
const getNumbersArray = (min, max) => {
  const numbersArray = [];

  for (let i = 0; i <= (max - min); i++) {
    numbersArray[i] = i + min;
  }

  return numbersArray;
}

// Получение случайного элемента массива
const getRandomArrayElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

// Перемешивание элементов массива в случайном порядке
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

// Проверка на нажатие Esc
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

// Создание DOM-элемента с присвоением класса
const createElement = (elementTag, elementClass) => {
  const element = document.createElement(elementTag);
  element.classList.add(elementClass);

  return element;
};

export { getRandomInt,  checkStringLimit, getRandomArrayElement, shuffleArray, getNumbersArray, isEscEvent, createElement };
