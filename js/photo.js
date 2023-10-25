import { isEscEvent, isEnterEvent } from './util.js';

const photo = document.querySelector('.big-picture');
const photoImg = photo.querySelector('.big-picture__img').children[0];
const likesCount = photo.querySelector('.likes-count');
const commentsCount = photo.querySelector('.comments-count');
const description = photo.querySelector('.social__caption');

const closeButton = photo.querySelector('.big-picture__cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePhoto();
  }
};

const openPhoto = (dataElement) => {
  document.querySelector('body').classList.add('modal-open');
  photo.querySelector('.social__comment-count').classList.add('hidden');
  photo.querySelector('.comments-loader').classList.add('hidden');

  photoImg.src = dataElement.url;
  photoImg.alt = dataElement.description;
  likesCount.textContent = dataElement.likes;
  commentsCount.textContent = dataElement.comments.length;
  description.textContent = dataElement.description;

  photo.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscKeydown);
};

closeButton.addEventListener('click', () => {
  closePhoto();
});

closeButton.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    evt.preventDefault();
    closePhoto();
  }
});

const closePhoto = () => {
  document.querySelector('body').classList.remove('modal-open');
  photo.querySelector('.social__comment-count').classList.remove('hidden');
  photo.querySelector('.comments-loader').classList.remove('hidden');
  photo.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};


export { openPhoto };
/*
- Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments.
Разметка каждого комментария должна выглядеть так:

<li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li>
Описание фотографии description вставьте строкой в блок .social__caption.

*/
