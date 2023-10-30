// Text field
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
let hashtagUnfocused = true;
let commentUnfocused = true;


hashtag.addEventListener('blur', () => {
  hashtagUnfocused = true;
});

hashtag.addEventListener('focus', () => {
  hashtagUnfocused = false;
});

comment.addEventListener('invalid', () => {
  if (comment.validity.tooLong) {
    comment.setCustomValidity('Комментарий не должен превышать 140 символов');
  } else {
    comment.setCustomValidity('');
  }
});

comment.addEventListener('blur', () => {
  commentUnfocused = true;
});

comment.addEventListener('focus', () => {
  commentUnfocused = false;
});

const isDescriprionUnfocused = () => {
  return hashtagUnfocused && commentUnfocused;
};

export { isDescriprionUnfocused };
