import { openPhoto } from './photo.js';

const template = document.querySelector('#picture').content;
const pictureTemplate = template.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const renderPreviews = ((data) => {
  const picturesFragment = document.createDocumentFragment();

  data.forEach((element) => {
    const picture = pictureTemplate.cloneNode(true);

    picture.querySelector('.picture__img').src = element.url;
    picture.querySelector('.picture__likes').textContent = element.likes;
    picture.querySelector('.picture__comments').textContent = element.comments.length;

    picture.addEventListener('click', (evt) => {
      evt.preventDefault();
      openPhoto(element);
    })

    picturesFragment.appendChild(picture);
  });

  pictures.appendChild(picturesFragment);
});

export { renderPreviews };
