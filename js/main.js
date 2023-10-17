const PHOTOS_QUANTITY = 25;

const Likes = {
  min: 15,
  max: 200,
};

const CommentsIdRange = {
  min: 1,
  max: 1000,
};

const CommentsQuantity = {
  min: 1,
  max: 5,
};

const AvatarsIdRange = {
  min: 1,
  max: 6,
};

const photosInformation = [];

const commentTexts = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Валерия',
  'Виктор',
  'Мирослава',
  'Андрей',
  'Ева',
  'Давид',
  'Григорий',
  'Родион',
  'Василиса',
  'Константин',
  'Матвей',
  'София',
  'Екатерина',
  'Полина',
];

const descriptions = [
  'Старинные часы на стене здания',
  'Мужчина серфит на волне',
  'Чёрно-белый кот лежит в кресле',
  'Закат на пляже с видом на древний город',
  'Рассвет в лесу после дождя',
];

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

// Получение случайного элемента массива
const getRandomArrayElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

// Проверка числа на уникальность и запись в массив
const getUniqueId = (array, from = 1, to = 100) => {
  const createId = () => { return getRandomInt(from, to) };
  let id = createId();

  if (!array[0]) {
    array[0] = id;
    return id;
  }

  while (array.some((value) => {return value === id})) {
    id = createId();
  }

  array[array.length] = id;
  return id;
};

// Создание массива объектов комментариев
const createComments = () => {
  const comments = [];
  const commentIds = [];

  for (let i = 0; i < getRandomInt(CommentsQuantity.min, CommentsQuantity.max); i++) {
    comments.push({
      id: getUniqueId(commentIds, CommentsIdRange.min, CommentsIdRange.max),
      avatar: 'img/avatar-' + getRandomInt(AvatarsIdRange.min, AvatarsIdRange.max) + '.svg',
      message: getRandomArrayElement(commentTexts),
      name: getRandomArrayElement(names),
    });
  }

  return comments;
};

// Создание массива объектов с информацией о фотографиях
const createPhotosInformation = () => {
  for (let i = 0; i < PHOTOS_QUANTITY; i++) {
    photosInformation.push({
      id: (i + 1),
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomArrayElement(descriptions),
      likes: getRandomInt(Likes.min, Likes.max),
      comments: createComments(),
    });
  }

  return photosInformation;
};
