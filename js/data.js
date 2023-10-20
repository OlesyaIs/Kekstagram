import { getRandomInt, getNumbersArray, getRandomArrayElement, shuffleArray } from './util.js';

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

let currentCommentIdIndex = CommentsIdRange.min;


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

// Создание массива объектов комментариев
const createComments = (array) => {
  const comments = [];

  for (let i = 0; i < getRandomInt(CommentsQuantity.min, CommentsQuantity.max); i++) {
    if (currentCommentIdIndex > array.length) {
      throw new Error('Пул id комментариев исчерпан');
    }

    comments.push({
      id: array[currentCommentIdIndex],
      avatar: 'img/avatar-' + getRandomInt(AvatarsIdRange.min, AvatarsIdRange.max) + '.svg',
      message: getRandomArrayElement(commentTexts),
      name: getRandomArrayElement(names),
    });

    currentCommentIdIndex++;
  }

  return comments;
};

// Создание массива объектов с информацией о фотографиях
const createPhotosInformation = () => {
  const photosInformation = [];
  const commentsIDs = getNumbersArray(CommentsIdRange.min, CommentsIdRange.max);
  currentCommentIdIndex = CommentsIdRange.min;

  shuffleArray(commentsIDs);

  for (let i = 0; i < PHOTOS_QUANTITY; i++) {
    photosInformation.push({
      id: (i + 1),
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomArrayElement(descriptions),
      likes: getRandomInt(Likes.min, Likes.max),
      comments: createComments(commentsIDs),
    });
  }

  return photosInformation;
};

export { createPhotosInformation };
