// Text field
const MIN_HASHTAGS_TEXT_LENGTH = 1;
const MAX_HASHTAGS_TEXT_LENGTH = 19;
const MAX_HASHTAGS_QUANTITY = 5;

const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
let hashtagInputUnfocused = true;
let commentInputUnfocused = true;

const isFirstSymbolSharp = (value) => {
  return (value.charAt(0) === '#')
};

const isLengthInvalid = (value) => {
  if (value.length < MIN_HASHTAGS_TEXT_LENGTH) {
    return '<';
  }

  if (value.length > MAX_HASHTAGS_TEXT_LENGTH) {
    return '>';
  }
};

const isIncludesSpecialCharacter = (value) => {
  const regex = /[^\w]/g;

  if (value.search(regex) >= 0) {
    return value.match(regex).join(' ');
  } else { return false }
};

const isUnique = (element, array) => {
  return !array.includes(element);
};

const isHashtagsQuantityValid = (array) => {
  if (array.length > MAX_HASHTAGS_QUANTITY) {
    return `Количество хэш-тегов должно быть не больше ${MAX_HASHTAGS_QUANTITY}`;
  }
}

const isDescriprionUnfocused = () => {
  return hashtagInputUnfocused && commentInputUnfocused;
};

hashtagInput.addEventListener('blur', () => {
  hashtagInputUnfocused = true;
});

hashtagInput.addEventListener('focus', () => {
  hashtagInputUnfocused = false;
});

commentInput.addEventListener('blur', () => {
  commentInputUnfocused = true;
});

commentInput.addEventListener('focus', () => {
  commentInputUnfocused = false;
});

hashtagInput.addEventListener('input', () => {
  const uniqueHashtags = [];
  const hastageString = hashtagInput.value.toLowerCase();
  const hashtags = hastageString.split(' ').filter((hashtag) => {
    return hashtag !== '';
  });

  if (isHashtagsQuantityValid(hashtags)) {
    hashtagInput.setCustomValidity(isHashtagsQuantityValid(hashtags));
  }

  else {
    hashtags.forEach((hashtag) => {
      const hashtagText = hashtag.substring(1);

      if (!isFirstSymbolSharp(hashtag)) {
        hashtagInput.setCustomValidity('Хэш-тег должен начинаться с символа #');
      }

      else if (isLengthInvalid(hashtagText)) {
        if (isLengthInvalid(hashtagText) === '<') {
          hashtagInput.setCustomValidity('Хэш-тег должен включать как минимум один символ кроме #');
        }

        else if (isLengthInvalid(hashtagText) === '>') {
          hashtagInput.setCustomValidity(`Максимальная длина одного хэш-тега ${MAX_HASHTAGS_TEXT_LENGTH + 1} символов, включая решётку`);
        }
      }

      else if (isIncludesSpecialCharacter(hashtagText)) {
        hashtagInput.setCustomValidity(`Хэш-тег не может содержать: ${isIncludesSpecialCharacter(hashtagText)}`);
      }

      else if (!isUnique(hashtag, uniqueHashtags)) {
        hashtagInput.setCustomValidity('Хэш-теги не могут повторяться');
      }

      else {
        uniqueHashtags.push(hashtag);
        hashtagInput.setCustomValidity('');
      }
    });
  }

  hashtagInput.reportValidity();

  if (!hashtagInput.reportValidity() && hashtags.length) {
    hashtagInput.style.boxShadow = '3px 3px red';
  } else {
    hashtagInput.style.boxShadow = '';
  }
});

const resetDescription = () => {
  hashtagInput.textContent = '';
  commentInput.textContent = '';
}

export { isDescriprionUnfocused, resetDescription };
