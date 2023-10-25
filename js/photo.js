import { isEscEvent, isEnterEvent, createElement } from './util.js';

const photo = document.querySelector('.big-picture');
const photoImg = photo.querySelector('.big-picture__img').children[0];
const likesCount = photo.querySelector('.likes-count');
const commentsCount = photo.querySelector('.comments-count');
const photoDescription = photo.querySelector('.social__caption');
const closeButton = photo.querySelector('.big-picture__cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePhoto();
  }
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

const getComment = (commentData) => {
  const comment = createElement('li', 'social__comment');
  const commentAvatar = createElement('img', 'social__picture');
  const commentText = createElement('p', 'social__text');

  commentAvatar.src = commentData.avatar;
  commentAvatar.alt = commentData.name;
  commentAvatar.width = '35';
  commentAvatar.height = '35';

  commentText.textContent = commentData.message;

  comment.appendChild(commentAvatar);
  comment.appendChild(commentText);

  return comment;
}

const openPhoto = ({url, description, likes, comments}) => {

  const commentsList = photo.querySelector('.social__comments');
  commentsList.innerHTML = '';

  document.querySelector('body').classList.add('modal-open');
  photo.querySelector('.social__comment-count').classList.add('hidden');
  photo.querySelector('.comments-loader').classList.add('hidden');

  photoImg.src = url;
  photoImg.alt = description;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  photoDescription.textContent = description;

  for (let i = 0; i < comments.length; i++) {
    let comment = getComment(comments[i]);
    commentsList.appendChild(comment);
  }

  photo.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscKeydown);
};

const closePhoto = () => {
  document.querySelector('body').classList.remove('modal-open');
  photo.querySelector('.social__comment-count').classList.remove('hidden');
  photo.querySelector('.comments-loader').classList.remove('hidden');
  photo.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

export { openPhoto }
