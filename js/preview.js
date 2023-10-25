import { createPhotosInformation } from './data.js';

const picturesData = createPhotosInformation();
const template = document.querySelector('#picture').content;
const pictureTemplate = template.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const renderPreviews = (data) => {
  const picturesFragment = document.createDocumentFragment();

  for (let i = 0; i < data.length; i++) {

    const {url, likes, comments} = data[i];
    const picture = pictureTemplate.cloneNode(true);

    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;

    picturesFragment.appendChild(picture);
  }

  pictures.appendChild(picturesFragment);
};

const renderTestPreviews = renderPreviews(picturesData);

export { renderTestPreviews };
