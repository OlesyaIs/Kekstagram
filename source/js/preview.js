import { openPhoto } from './photo.js';

const template = document.querySelector('#picture').content;
const pictureTemplate = template.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const renderPreviews = ((data) => {
  const previousPictures = picturesContainer.querySelectorAll('.picture');
  for (let picture of previousPictures) {
    picture.remove();
  }

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

  picturesContainer.appendChild(picturesFragment);
});

export { renderPreviews };
