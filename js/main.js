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
}

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
]

const photoPostQuantity = 25;
const minLikes = 15;
const maxLikes = 200;
let commentIds = [];

// Получения случайного количества комментариев в диапазоне от 1 до 5
const commentsQuantity = () => { return getRandomInt(1, 5)};

// Получение случайного элемента массива
const getRandomArrayElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}


// Проверка числа на уникальность и запись в массив
const createCommentId = (array) => {
  const createId = () => { return getRandomInt(1, 1000) };
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
}


// Создание комментария
const createComment = () => {
  return {
    id: createCommentId(commentIds),
    avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
    message: getRandomArrayElement(commentTexts),
    name: getRandomArrayElement(names),
  };
}

// Создание массива со случайным количеством комментариев в диапазоне от 1 до 5
const createSeveralComments = () => {
  return new Array(commentsQuantity()).fill(null).map(() => createComment());
}

// Создание объекта с описанием фотографии
const createPhotoInformation = (idNumber = 1) => {
  return {
    id: idNumber,
    url: 'photos/' + idNumber + '.jpg',
    description: getRandomArrayElement(descriptions),
    likes: getRandomInt(minLikes, maxLikes),
    comments: createSeveralComments(),
  };
};

// Получение массива с объектами с опиманием фотографий
const photos = new Array(photoPostQuantity).fill(null).map((value, index) => createPhotoInformation(index + 1));
