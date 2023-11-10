import { isEscEvent } from '../util.js';
import { setScale, resetScale } from './scale.js';
import { runEffects, resetEffects } from './effect.js';
import { isInputsFocused, setDescription, resetDescription } from './description.js';

const body = document.querySelector('body');
const imgUpload = body.querySelector('.img-upload');
const imgUploadInput = imgUpload.querySelector('#upload-file');
const imgEditForm = imgUpload.querySelector('.img-upload__overlay');
const uploadCancelButton = imgUpload.querySelector('#upload-cancel');
const previewImg = document.querySelector('.img-upload__preview').children[0];
const defaultUrl = previewImg.getAttribute('src');
const previews = document.querySelectorAll('.effects__preview');

const setSettings = () => {
  setScale();
  runEffects();
  setDescription();
};

const resetSettings = () => {
  previewImg.src = defaultUrl;
  previews.forEach((filter) => {
    filter.style.backgroundImage = `url(${defaultUrl})`;
  })
  resetScale();
  resetEffects();
  resetDescription();
};

const onEscDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();

    if (isInputsFocused()) {
      return;
    }

    closeImgEditForm();
  }
};

const openImgEditForm = () => {
  setSettings();
  body.classList.add('modal-open');
  imgEditForm.classList.remove('hidden');
  document.addEventListener('keydown', onEscDown);
  uploadCancelButton.addEventListener('click', onCancelButtonClick);
};

const closeImgEditForm = () => {
  body.classList.remove('modal-open');
  imgEditForm.classList.add('hidden');
  imgUploadInput.value = '';
  document.removeEventListener('keydown', onEscDown);
  uploadCancelButton.removeEventListener('click', onCancelButtonClick);
  resetSettings();
};

const onCancelButtonClick = () => {
  closeImgEditForm();
};

export { openImgEditForm, closeImgEditForm };
