import { isEscEvent, createElement } from './util.js';

const COMMENTS_QUANTITY_STEP = 5;

const photo = document.querySelector('.big-picture');
const photoImg = photo.querySelector('.big-picture__img').children[0];
const likesCount = photo.querySelector('.likes-count');
const commentsCount = photo.querySelector('.social__comment-count');
const photoDescription = photo.querySelector('.social__caption');
const closeButton = photo.querySelector('.big-picture__cancel');
const commentsLoadingButton = photo.querySelector('.comments-loader');
const commentsList = photo.querySelector('.social__comments');
commentsList.innerHTML = '';


const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePhoto();
  }
};

const onCloseButtonClick = () => {
  closePhoto();
};

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
};

const addComments = (commentsData, start) => {
  const newCommentsFragment = document.createDocumentFragment();
  let index = start;
  let count = 0;

  const onCommentsLoadingButtonClick = () => {
    addComments(commentsData, index);
  };

  while (count < COMMENTS_QUANTITY_STEP && index < commentsData.length) {
    const comment = getComment(commentsData[index]);
    newCommentsFragment.appendChild(comment);
    index++;
    count++;
  }

  if (index < commentsData.length) {
    commentsLoadingButton.addEventListener('click', onCommentsLoadingButtonClick, { once: true });
  } else if (index === commentsData.length) {
    commentsLoadingButton.classList.add('hidden');
  }

  commentsCount.innerHTML = index + ' из <span class="comments-count">' + commentsData.length + '</span> комментариев';
  commentsList.appendChild(newCommentsFragment);
}

const openPhoto = ({url, description, likes, comments}) => {
  commentsList.innerHTML = '';
  photoImg.src = url;
  photoImg.alt = description;
  likesCount.textContent = likes;
  photoDescription.textContent = description;
  addComments(comments, 0);
  document.querySelector('body').classList.add('modal-open');
  photo.classList.remove('hidden');

  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closePhoto = () => {
  document.querySelector('body').classList.remove('modal-open');
  photo.classList.add('hidden');

  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

export { openPhoto };
